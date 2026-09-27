#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
四六级备考工作台 · 每日新闻更新脚本（纯标准库，供 GitHub Actions 定时调用）

功能：
1. 从 CGTN 多个频道 RSS 抓取最新英文新闻；
2. 逐条验证链接可访问（HTTP 200），只保留真实有效的；
3. 过滤暴力/灾难/战争类标题；
4. 把结果写回 content.js 的 news 数组，并更新 updated 日期。

设计原则：抓取失败或有效条目过少时，保持原有新闻不动（不做破坏性写入）。
"""

import re
import ssl
import sys
import urllib.request
import urllib.error
from datetime import datetime, timezone, timedelta

FEEDS = [
    ("CGTN·China",    "https://www.cgtn.com/subscribe/rss/section/china.xml"),
    ("CGTN·World",    "https://www.cgtn.com/subscribe/rss/section/world.xml"),
    ("CGTN·Business", "https://www.cgtn.com/subscribe/rss/section/business.xml"),
    ("CGTN·Sports",   "https://www.cgtn.com/subscribe/rss/section/sports.xml"),
    ("CGTN·Culture",  "https://www.cgtn.com/subscribe/rss/section/culture.xml"),
    ("CGTN·Travel",   "https://www.cgtn.com/subscribe/rss/section/travel.xml"),
]

CET = timezone(timedelta(hours=8))
CONTENT = "content.js"
UA = {"User-Agent": "Mozilla/5.0 (compatible; CET-Workbench-Updater/1.0)"}


def find_content_file():
    """
    自动定位 content.js：
    1) 仓库根目录；
    2) 根目录下的任意一层子文件夹（例如把整个文件夹误传成子目录的情况）。
    找不到就返回 None。
    """
    import os
    if os.path.isfile("content.js"):
        return "content.js"
    for entry in sorted(os.listdir(".")):
        if os.path.isdir(entry) and not entry.startswith("."):
            cand = os.path.join(entry, "content.js")
            if os.path.isfile(cand):
                print(f"[提示] 在子文件夹里找到内容包：{cand}")
                return cand
    return None


# 需要剔除的标题关键词（暴力、灾难、战争、冲突类）
BLOCK_WORDS = [
    "killed", "shooting", "gunman", "dead", "death toll", "war", "attack",
    "bomb", "crash", "earthquake", "flood", "murder", "arrested", "protest",
    "missile", "strike kills", "victims",
]


def fetch(url, timeout=20):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
        return r.read().decode("utf-8", "ignore")


def head_ok(url, timeout=15):
    """验证链接可访问（返回 200/301/302 视为有效）"""
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    try:
        req = urllib.request.Request(url, headers=UA, method="GET")
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
            return 200 <= r.status < 400
    except urllib.error.HTTPError as e:
        return 200 <= e.code < 400
    except Exception:
        return False


def parse_items(xml, limit=3):
    out = []
    for block in re.findall(r"<item>(.*?)</item>", xml, re.S):
        t = re.search(r"<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?</title>", block, re.S)
        l = re.search(r"<link>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?</link>", block, re.S)
        d = re.search(r"<pubDate>(.*?)</pubDate>", block, re.S)
        if not (t and l):
            continue
        title = re.sub(r"\s+", " ", t.group(1)).strip()
        link = l.group(1).strip().split("?")[0]
        if len(title) < 20 or not link.startswith("http"):
            continue
        if any(w in title.lower() for w in BLOCK_WORDS):
            continue
        out.append({"title": title, "link": link, "pub": (d.group(1) if d else "")})
        if len(out) >= limit:
            break
    return out


def date_of(item):
    m = re.search(r"/(\d{4}-\d{2}-\d{2})/", item["link"])
    if m:
        return m.group(1)
    try:
        from email.utils import parsedate_to_datetime
        return parsedate_to_datetime(item["pub"]).astimezone(CET).strftime("%Y-%m-%d")
    except Exception:
        return datetime.now(CET).strftime("%Y-%m-%d")


def main():
    today = datetime.now(CET).strftime("%Y-%m-%d")
    picked = []
    for src, url in FEEDS:
        try:
            xml = fetch(url)
        except Exception as e:
            print(f"[跳过] {src} 抓取失败: {e}")
            continue
        items = parse_items(xml, limit=3)
        print(f"[OK] {src} 解析到 {len(items)} 条")
        picked.extend({"src": src, **it} for it in items)

    # 逐条验证链接
    verified = []
    for it in picked:
        if head_ok(it["link"]):
            verified.append(it)
        else:
            print(f"[失效] {it['link']}")
    if len(verified) < 8:
        print(f"有效链接仅 {len(verified)} 条（< 8），保持原有新闻不变，退出。")
        return 0

    # 选材偏好：轻松题材（体育/文化/旅游/商业）优先，政治类（中国/国际）最多 3 条
    priority = {"CGTN·Sports": 0, "CGTN·Culture": 1, "CGTN·Travel": 2, "CGTN·Business": 3,
                "CGTN·World": 4, "CGTN·China": 5}
    light = [x for x in verified if priority.get(x["src"], 9) <= 3]
    heavy = [x for x in verified if priority.get(x["src"], 9) > 3][:3]
    light.sort(key=lambda x: priority[x["src"]])
    verified = (light + heavy)[:15]

    lines = []
    for i, it in enumerate(verified, 1):
        title = it["title"].replace("\\", "\\\\").replace('"', '\\"')
        lines.append(
            '    { id: "n%02d", date: "%s", src: "%s", title: "%s", link: "%s" }'
            % (i, date_of(it), it["src"], title, it["link"])
        )
    block = "  news: [\n" + ",\n".join(lines) + "\n  ],"

    target = find_content_file()
    if not target:
        print("没有找到 content.js（仓库根目录或子文件夹里都没有），放弃。请检查文件是否已上传。")
        return 1

    with open(target, encoding="utf-8") as f:
        src = f.read()
    new, n = re.subn(r"  news: \[.*?\n  \],", block, src, count=1, flags=re.S)
    if n == 0:
        print(f"在 {target} 里没找到 news 数组，放弃写入。")
        return 1
    new = re.sub(r'updated: "\d{4}-\d{2}-\d{2}"', 'updated: "%s"' % today, new, count=1)
    with open(target, "w", encoding="utf-8") as f:
        f.write(new)
    print(f"已写入 {len(verified)} 条新闻到 {target}，updated = {today}")

    # 另外输出一份 news.json：网页打开时会直接读取它（GitHub Pages 带跨域头，能读到当天新闻）
    try:
        import json
        items = [{"date": date_of(it), "src": it["src"], "title": it["title"], "link": it["link"]}
                 for it in verified]
        with open("news.json", "w", encoding="utf-8") as f:
            json.dump({"updated": today,
                       "generated": datetime.now(CET).strftime("%Y-%m-%d %H:%M:%S"),
                       "items": items}, f, ensure_ascii=False, indent=1)
        print(f"已写出 news.json（{len(items)} 条）")
    except Exception as e:
        print("写 news.json 失败（不影响 content.js）：", e)
    return 0


if __name__ == "__main__":
    sys.exit(main())
