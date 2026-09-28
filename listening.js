/* 四六级题型听力套题库
 * 说明：题型、篇幅、提问方式按四六级真题标准编写（短篇新闻 / 长对话 / 听力篇章 / 讲座），
 *      音频由 tools/gen_audio.py 用真人语音合成（audio/<id>.mp3），不是原版真题录音。
 * id 规则：n=短篇新闻 c=长对话 p=听力篇章 l=讲座 + YYMMDD + 序号，永不复用。
 * 每套：{ id, lv, type, date, title, text | lines, trans, qs:[{n,q,options[4],answer,why}] }
 * answer 用字母 A/B/C/D。
 */
window.CET_LISTEN = {
  "updated": "2026-09-28",
  "sets": [
    {
      "id": "sb4p1",
      "lv": "四级",
      "type": "模拟卷",
      "kind": "paper",
      "date": "2026-09-28",
      "title": "四级听力模拟卷（一）· 完整 25 题",
      "note": "短篇新闻 3 篇 + 长对话 2 段 + 听力篇章 3 篇，题型与题量按四级真题编排。",
      "sections": [
        {
          "no": "Section A",
          "type": "短篇新闻",
          "dir": "Directions: In this section, you will hear three news reports. At the end of each news report, you will hear two or three questions. Both the news report and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.",
          "items": [
            {
              "id": "sb4p1a",
              "text": "A new study finds that college students who take a short nap in the afternoon may do better in their exams. Researchers at a university in California followed more than 600 students for one term. They found that those who slept for about twenty minutes after lunch scored higher in memory tests than those who did not rest at all. However, the study also warns that long naps, especially those over one hour, can make people feel slow and tired for the rest of the day. The lead researcher says the key is to keep the nap short and to take it before three in the afternoon. She also suggests students avoid coffee after four o'clock, because it can make it hard to fall asleep at night. The team plans to study younger students next year.",
              "trans": "一项新研究发现，下午小睡片刻的大学生考试可能发挥得更好。加利福尼亚一所大学的研究人员对整个学期的600多名学生进行了跟踪调查。他们发现，午饭后睡约二十分钟的学生在记忆测试中的得分高于完全不休息的学生。不过，该研究也提醒，长时间午睡，尤其是超过一小时的午睡，会让人在当天余下的时间里感到迟钝和疲惫。首席研究员表示，关键在于午睡要短，并且要在下午三点之前进行。她还建议学生在下午四点以后不要喝咖啡，因为咖啡会让人夜里难以入睡。研究团队计划明年对年龄更小的学生展开研究。",
              "qs": [
                {
                  "n": 1,
                  "q": "What do we learn about the students who took a short afternoon nap?",
                  "options": [
                    "They performed better in memory tests.",
                    "They spent more time on their homework.",
                    "They had fewer classes during the term.",
                    "They gave up coffee in the afternoon."
                  ],
                  "answer": "B",
                  "why": "原文：They found that those who slept for about twenty minutes after lunch scored higher in memory tests than those who did not rest at all."
                },
                {
                  "n": 2,
                  "q": "According to the lead researcher, how should students take a nap?",
                  "options": [
                    "They should nap for more than one hour.",
                    "They should nap right after dinner.",
                    "They should drink coffee before resting.",
                    "They should keep it short and take it early."
                  ],
                  "answer": "D",
                  "why": "原文：The lead researcher says the key is to keep the nap short and to take it before three in the afternoon."
                }
              ],
              "title": "午后小睡与记忆测试"
            },
            {
              "id": "sb4p1b",
              "text": "Public libraries in many cities are now lending out far more than books. In one town in the Netherlands, a library began offering kitchen tools, camping equipment and even musical instruments to local people three years ago. Members borrow an item for one week, free of charge, and only pay a small fee if it is returned late or damaged. The librarian says the idea was born after a survey showed that most families rarely used the things they bought. The programme has been popular with young people, who often live in small flats with little storage space. Its success has since inspired more than forty libraries across the country to start similar collections. Organisers say the next step is to add power tools, which are expensive and seldom needed at home.",
              "trans": "许多城市的公共图书馆如今外借的不只是书。荷兰一个小镇的图书馆三年前开始向当地居民提供厨房用具、露营装备甚至乐器。会员可以免费借用一周，只有在逾期归还或损坏时才需支付少量费用。该馆馆长表示，这一想法源于一项调查，调查显示大多数家庭很少使用自己购买的东西。该项目深受年轻人欢迎，因为他们往往住在储物空间很小的小公寓里。它的成功已促使全国四十多家图书馆开设类似的藏品。组织者说，下一步是加入电动工具，这类工具价格不菲，家里却很少用到。",
              "qs": [
                {
                  "n": 3,
                  "q": "What is the news report mainly about?",
                  "options": [
                    "A library that lends everyday items to the public.",
                    "A survey on family spending in the Netherlands.",
                    "A campaign to collect books for young readers.",
                    "A company that sells camping equipment cheaply."
                  ],
                  "answer": "A",
                  "why": "原文：Public libraries in many cities are now lending out far more than books."
                },
                {
                  "n": 4,
                  "q": "Why has the programme become popular with young people?",
                  "options": [
                    "They want to earn money by renting out items.",
                    "They usually live in small flats with little storage.",
                    "They cannot afford to buy kitchen tools at all.",
                    "They prefer to study quietly in the library."
                  ],
                  "answer": "B",
                  "why": "原文：The programme has been popular with young people, who often live in small flats with little storage space."
                }
              ],
              "title": "图书馆可以外借日常物品"
            },
            {
              "id": "sb4p1c",
              "text": "A food-sharing app is helping thousands of restaurants cut down on waste. The app, developed by a small team in Denmark, lets cafes and bakeries sell their unsold food at the end of the day for about one third of the normal price. Customers use their phones to find nearby shops and reserve a surprise bag, which they collect within an hour. Since it started two years ago, the app has saved more than 800,000 meals from being thrown away and has attracted over half a million users in Europe. Restaurant owners say it brings in extra income and attracts new customers, while users enjoy the low prices. One baker admits that she was sceptical at first, but now she sells every loaf she bakes. The company hopes to launch the app in Asia later this year.",
              "trans": "一款分享食物的应用正在帮助数千家餐馆减少浪费。这款由丹麦一个小团队开发的应用，让咖啡馆和面包店在一天结束时以约为正常价格三分之一的价格出售未卖完的食物。顾客用手机查找附近的商店并预订一个惊喜盲袋，然后在一小时内取走。自两年前上线以来，该应用已使八十多万份餐食免于被丢弃，并在欧洲吸引了超过五十万用户。餐馆老板说，它带来了额外收入，也吸引了新顾客，而用户则享受低廉的价格。一位面包师承认，她起初对此持怀疑态度，但现在她烤的每条面包都能卖出去。该公司希望今年晚些时候在亚洲推出这款应用。",
              "qs": [
                {
                  "n": 5,
                  "q": "What is the news report mainly about?",
                  "options": [
                    "A Danish bakery that has recently become famous.",
                    "A new way for shops to sell their unsold food.",
                    "A study on rising food prices in Europe.",
                    "A campaign to teach people how to cook."
                  ],
                  "answer": "B",
                  "why": "原文：A food-sharing app is helping thousands of restaurants cut down on waste."
                },
                {
                  "n": 6,
                  "q": "How do customers get the food from the app?",
                  "options": [
                    "They order it online and wait for a delivery.",
                    "They buy it at the normal price in shops.",
                    "They collect a surprise bag within an hour.",
                    "They pay a yearly membership fee first."
                  ],
                  "answer": "C",
                  "why": "原文：Customers use their phones to find nearby shops and reserve a surprise bag, which they collect within an hour."
                },
                {
                  "n": 7,
                  "q": "What do we learn about the baker mentioned in the report?",
                  "options": [
                    "She was doubtful about the app at first.",
                    "She plans to open a new bakery in Asia.",
                    "She stopped baking because of the app.",
                    "She uses the app to buy cheap meals."
                  ],
                  "answer": "A",
                  "why": "原文：One baker admits that she was sceptical at first, but now she sells every loaf she bakes."
                }
              ],
              "title": "分享食物应用帮餐馆减少浪费"
            }
          ]
        },
        {
          "no": "Section B",
          "type": "长对话",
          "dir": "Directions: In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.",
          "items": [
            {
              "id": "sb4p1d1",
              "spk": {
                "Amy": "F",
                "Li": "M"
              },
              "lines": [
                [
                  "Li",
                  "Hi Amy, you look a bit worried. Is everything all right?",
                  "嗨，艾米，你看起来有点发愁。一切都还好吗？"
                ],
                [
                  "Amy",
                  "Not really. I have to choose my courses for next term, and I still cannot decide.",
                  "不太好。我得选下学期的课，可我还是定不下来。"
                ],
                [
                  "Li",
                  "I thought you had already made up your mind about business.",
                  "我以为你早就决定读商科了。"
                ],
                [
                  "Amy",
                  "I did, but after taking that environmental science course, I find it much more interesting.",
                  "本来是，但上完那门环境科学的课之后，我觉得它有趣多了。"
                ],
                [
                  "Li",
                  "That course was really popular. Our professor made the topic come alive, didn't he?",
                  "那门课真的很受欢迎。教授把内容讲得特别生动，对吧？"
                ],
                [
                  "Amy",
                  "Exactly. We even visited a local wetland to collect water samples.",
                  "没错。我们甚至还去当地一片湿地采集了水样。"
                ],
                [
                  "Li",
                  "That sounds amazing. Have you talked to your parents about changing your major?",
                  "听起来太棒了。你跟父母谈过转专业的事了吗？"
                ],
                [
                  "Amy",
                  "Yes, and luckily they said they would support me as long as I plan carefully.",
                  "谈过了，幸运的是他们说只要我认真规划，就会支持我。"
                ],
                [
                  "Li",
                  "Then you should meet the department adviser. She can tell you which credits count.",
                  "那你就该去见见系里的指导老师。她能告诉你哪些学分可以算。"
                ],
                [
                  "Amy",
                  "Good idea. Could you come with me this Friday afternoon?",
                  "好主意。这周五下午你能陪我一起去吗？"
                ]
              ],
              "trans": "李：嗨，艾米，你看起来有点发愁。一切都还好吗？艾米：不太好。我得选下学期的课，可我还是定不下来。李：我以为你早就决定读商科了。艾米：本来是，但上完那门环境科学的课之后，我觉得它有趣多了。李：那门课真的很受欢迎。教授把内容讲得特别生动，对吧？艾米：没错。我们甚至还去当地一片湿地采集了水样。李：听起来太棒了。你跟父母谈过转专业的事了吗？艾米：谈过了，幸运的是他们说只要我认真规划，就会支持我。李：那你就该去见见系里的指导老师。她能告诉你哪些学分可以算。艾米：好主意。这周五下午你能陪我一起去吗？",
              "qs": [
                {
                  "n": 8,
                  "q": "What do we learn about Amy from the conversation?",
                  "options": [
                    "She has already changed her major.",
                    "She is unsure which courses to take next term.",
                    "She did poorly in her environmental science course.",
                    "She has just moved to another university."
                  ],
                  "answer": "B",
                  "why": "原文：Not really. I have to choose my courses for next term, and I still cannot decide."
                },
                {
                  "n": 9,
                  "q": "What made the environmental science course special for Amy?",
                  "options": [
                    "Its very small class size.",
                    "The guest lectures given by experts.",
                    "The chance to design her own project.",
                    "A field visit to a local wetland."
                  ],
                  "answer": "D",
                  "why": "原文：We even visited a local wetland to collect water samples."
                },
                {
                  "n": 10,
                  "q": "How did Amy's parents respond to her plan?",
                  "options": [
                    "They promised to support her if she plans carefully.",
                    "They asked her to finish her business degree first.",
                    "They advised her to talk to her professor.",
                    "They were strongly against the idea."
                  ],
                  "answer": "A",
                  "why": "原文：Yes, and luckily they said they would support me as long as I plan carefully."
                },
                {
                  "n": 11,
                  "q": "What will the speakers probably do next?",
                  "options": [
                    "Collect water samples at the wetland.",
                    "Attend a lecture on business.",
                    "Visit the department adviser together.",
                    "Sign up for a new course."
                  ],
                  "answer": "C",
                  "why": "原文：Then you should meet the department adviser. She can tell you which credits count."
                }
              ],
              "title": "选课与转专业"
            },
            {
              "id": "sb4p1d2",
              "spk": {
                "Mark": "M",
                "Chen": "F"
              },
              "lines": [
                [
                  "Mark",
                  "Hi Chen, how did your interview at the travel company go yesterday?",
                  "嗨，陈，你昨天那家旅行公司的面试怎么样？"
                ],
                [
                  "Chen",
                  "It went much better than I expected, thanks for asking.",
                  "比我预想的顺利多了，谢谢你还惦记着。"
                ],
                [
                  "Mark",
                  "Really? I heard they only take two interns this summer.",
                  "真的吗？我听说他们今年夏天只招两个实习生。"
                ],
                [
                  "Chen",
                  "That is true, so I was quite nervous when I walked in.",
                  "确实是这样，所以我走进去的时候相当紧张。"
                ],
                [
                  "Mark",
                  "What did they ask you about?",
                  "他们都问你什么了？"
                ],
                [
                  "Chen",
                  "Mostly about my part-time job at the campus cafe and my group project.",
                  "主要是问我在校园咖啡馆的兼职，还有我的小组项目。"
                ],
                [
                  "Mark",
                  "So they wanted to see how you work with people.",
                  "所以他们是想看看你跟人打交道的能力。"
                ],
                [
                  "Chen",
                  "Yes, and I also told them about the weekend charity run I helped organize.",
                  "对，我还跟他们讲了我帮忙组织的那次周末公益跑。"
                ],
                [
                  "Mark",
                  "That was a smart move. Did they say when you would hear back?",
                  "这一步走得很聪明。他们说什么时候给你消息了吗？"
                ],
                [
                  "Chen",
                  "They said they would email me by Friday, so I am checking my inbox all day.",
                  "他们说周五之前会给我发邮件，所以我整天都在刷邮箱。"
                ]
              ],
              "trans": "马克：嗨，陈，你昨天那家旅行公司的面试怎么样？陈：比我预想的顺利多了，谢谢你还惦记着。马克：真的吗？我听说他们今年夏天只招两个实习生。陈：确实是这样，所以我走进去的时候相当紧张。马克：他们都问你什么了？陈：主要是问我在校园咖啡馆的兼职，还有我的小组项目。马克：所以他们是想看看你跟人打交道的能力。陈：对，我还跟他们讲了我帮忙组织的那次周末公益跑。马克：这一步走得很聪明。他们说什么时候给你消息了吗？陈：他们说周五之前会给我发邮件，所以我整天都在刷邮箱。",
              "qs": [
                {
                  "n": 12,
                  "q": "How did Chen feel about her interview?",
                  "options": [
                    "She thought it was too short.",
                    "She was confused by the questions.",
                    "She felt it went better than expected.",
                    "She was disappointed with her own answers."
                  ],
                  "answer": "C",
                  "why": "原文：It went much better than I expected, thanks for asking."
                },
                {
                  "n": 13,
                  "q": "What did the interviewers ask Chen about?",
                  "options": [
                    "Her part-time job and a group project.",
                    "Her plans for further study abroad.",
                    "Her grades in the past two years.",
                    "Her knowledge of foreign languages."
                  ],
                  "answer": "A",
                  "why": "原文：Mostly about my part-time job at the campus cafe and my group project."
                },
                {
                  "n": 14,
                  "q": "Why did Chen mention the weekend charity run?",
                  "options": [
                    "To explain why she was late for the interview.",
                    "To prove that she enjoys outdoor sports.",
                    "To show that she has raised money for charity.",
                    "To show that she can work well with others."
                  ],
                  "answer": "D",
                  "why": "原文：So they wanted to see how you work with people."
                },
                {
                  "n": 15,
                  "q": "What is Chen going to do next?",
                  "options": [
                    "Call the company for the result.",
                    "Wait for an email from the company.",
                    "Ask her teacher for advice.",
                    "Look for another internship."
                  ],
                  "answer": "B",
                  "why": "原文：They said they would email me by Friday, so I am checking my inbox all day."
                }
              ],
              "title": "暑期实习面试"
            }
          ]
        },
        {
          "no": "Section C",
          "type": "听力篇章",
          "dir": "Directions: In this section, you will hear three passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.",
          "items": [
            {
              "id": "sb4p1p1",
              "text": "Have you ever thrown away a chair just because one leg was loose? Many of us have. In recent years, however, a quiet movement has been growing in cities around the world. It is called the repair cafe. At a repair cafe, people bring broken items such as lamps, toasters, bicycles and clothes. Volunteers with tools and skills then help them fix these things for free. The idea started in the Netherlands in 2009. Today there are more than two thousand repair cafes worldwide. Supporters say the movement saves money and reduces waste. Every repaired item means one less object in a landfill. It also teaches people that many everyday products are not really broken beyond repair. Perhaps the most valuable part is the conversation. Visitors sit beside volunteers and learn how a machine works. Some of them say they feel proud when they carry home something they fixed with their own hands. For a society that buys and discards so quickly, that feeling may matter more than the money saved.",
              "trans": "你有没有因为一条椅子腿松了就把它扔掉？我们很多人都有过。不过近年来，世界各地的城市里正悄悄兴起一场运动，叫做修理咖啡馆。在修理咖啡馆里，人们带来坏掉的东西，比如台灯、烤面包机、自行车和衣服。有工具和技能的志愿者免费帮他们修好。这个想法2009年起源于荷兰，如今全球已有两千多家修理咖啡馆。支持者说，这场运动既省钱又减少浪费。每修好一件东西，填埋场里就少一件垃圾。它还让人们明白，很多日常用品并非真的无法修复。也许最宝贵的部分是交谈。来访者坐在志愿者旁边，了解一台机器是如何运作的。有人说，当亲手修好的东西被带回家时，他们感到自豪。对于一个买得快、扔得也快的社会来说，这种感受也许比省下的钱更重要。",
              "qs": [
                {
                  "n": 16,
                  "q": "What is the passage mainly about?",
                  "options": [
                    "How to buy household products at lower prices.",
                    "A growing movement that helps people repair broken items.",
                    "Why modern products are designed to break easily.",
                    "The history of a famous bicycle company."
                  ],
                  "answer": "B",
                  "why": "原文：In recent years, however, a quiet movement has been growing in cities around the world. It is called the repair cafe."
                },
                {
                  "n": 17,
                  "q": "Where did the repair cafe idea start?",
                  "options": [
                    "In the United States.",
                    "In Japan.",
                    "In Germany.",
                    "In the Netherlands."
                  ],
                  "answer": "D",
                  "why": "原文：The idea started in the Netherlands in 2009."
                },
                {
                  "n": 18,
                  "q": "What do some visitors say about fixing things with their own hands?",
                  "options": [
                    "They feel proud of what they have done.",
                    "They find it too difficult to continue.",
                    "It costs them a great deal of money.",
                    "It takes too much of their free time."
                  ],
                  "answer": "A",
                  "why": "原文：Some of them say they feel proud when they carry home something they fixed with their own hands."
                }
              ],
              "title": "修理咖啡馆：把旧物修好再用"
            },
            {
              "id": "sb4p1p2",
              "text": "Many students believe that the best way to prepare for an exam is to sit at a desk for hours without stopping. Research on learning, however, suggests a different picture. Scientists have found that our attention naturally rises and falls in cycles of about ninety minutes. After a long period of focus, the brain becomes tired, and the information we read starts to slip away. A simple solution is to take short breaks. In one experiment, students who studied for fifty minutes and then rested for ten remembered far more than those who studied straight through. The break does not need to be long or special. Standing up, walking around the room, or looking out of a window is enough. What matters is what you do during the break. Checking messages or watching short videos keeps the mind busy, so it does not really rest. Quiet activities, on the other hand, let the brain organize what has just been learned. So next time you study, set a timer and give your mind a real pause.",
              "trans": "很多学生认为，备考最好的办法就是在书桌前连续坐上好几个小时。但关于学习的研究却呈现出另一幅画面。科学家发现，我们的注意力会以大约九十分钟为周期自然起落。长时间专注之后，大脑会疲倦，我们读到的信息也开始溜走。一个简单的办法就是短暂休息。在一项实验中，学习五十分钟然后休息十分钟的学生，记住的内容远多于一直不间断学习的学生。休息不必很长，也不必特别。站起来、在房间里走走，或者看看窗外，就足够了。关键在于休息时做什么。查看消息或看短视频会让大脑保持忙碌，因此并没有真正休息。而安静的活动能让大脑整理刚刚学到的内容。所以下次学习时，设个计时器，给你的大脑一次真正的停顿。",
              "qs": [
                {
                  "n": 19,
                  "q": "What have scientists found about our attention?",
                  "options": [
                    "It stays the same throughout the day.",
                    "It improves only when students take exams.",
                    "It rises and falls in cycles of about ninety minutes.",
                    "It cannot be affected by study habits."
                  ],
                  "answer": "C",
                  "why": "原文：Scientists have found that our attention naturally rises and falls in cycles of about ninety minutes."
                },
                {
                  "n": 20,
                  "q": "What did the experiment mentioned in the passage show?",
                  "options": [
                    "Students who took short breaks remembered more.",
                    "Students who studied longer got higher scores.",
                    "Breaks made students forget what they had read.",
                    "Only very long breaks helped students remember."
                  ],
                  "answer": "A",
                  "why": "原文：In one experiment, students who studied for fifty minutes and then rested for ten remembered far more than those who studied straight through."
                },
                {
                  "n": 21,
                  "q": "What does the speaker say about activities during a break?",
                  "options": [
                    "Watching short videos is the best choice.",
                    "Quiet activities allow the brain to organize information.",
                    "Checking messages helps the mind rest quickly.",
                    "Students should avoid breaks before an exam."
                  ],
                  "answer": "B",
                  "why": "原文：Quiet activities, on the other hand, let the brain organize what has just been learned."
                }
              ],
              "title": "为什么短暂休息能帮我们集中注意力"
            },
            {
              "id": "sb4p1p3",
              "text": "Not long ago, using a smartphone was a mystery to many older people. Today, that is changing fast. In community centers across the country, free classes teach grandparents how to send messages, take photos and pay bills with a phone. The teachers are often teenagers who volunteer after school. The results are encouraging. A woman of seventy says she now video-calls her grandson every weekend and even orders vegetables online. For her, the phone is not a toy but a bridge to family life. Another man joined a walking group he found through a mobile app, and he says he has made more friends in one year than in the past ten. Of course, not every lesson goes smoothly. Some learners forget the steps and need to be shown again and again. Yet the young teachers say they enjoy the challenge. They also admit that they have learned something themselves: patience, and the value of explaining things clearly. As one volunteer put it, we are not just teaching skills. We are keeping people connected to the world around them.",
              "trans": "不久前，用智能手机对许多老年人来说还是个谜。如今，这种情况正在迅速改变。在全国各地的社区中心，免费课程教爷爷奶奶们如何用手机发消息、拍照和缴费。老师往往是放学后做志愿者的青少年。结果令人鼓舞。一位七十岁的女士说，她现在每周都和孙子视频通话，甚至在网上买蔬菜。对她来说，手机不是玩具，而是通往家庭生活的桥梁。另一位老人通过一个手机应用加入了一个健走小组，他说自己一年交到的朋友比过去十年还多。当然，并非每节课都顺利。有些学员会忘记步骤，需要一遍又一遍地演示。而年轻的老师们说，他们喜欢这个挑战，也承认自己学到了东西：耐心，以及把话说清楚的价值。正如一位志愿者所说，我们教的不只是技能，我们在让人们与周围的世界保持联系。",
              "qs": [
                {
                  "n": 22,
                  "q": "What is the passage mainly about?",
                  "options": [
                    "Why teenagers spend too much time on their phones.",
                    "How mobile apps are designed for young users.",
                    "The problems caused by online shopping.",
                    "Classes that help older people use smartphones."
                  ],
                  "answer": "D",
                  "why": "原文：In community centers across the country, free classes teach grandparents how to send messages, take photos and pay bills with a phone."
                },
                {
                  "n": 23,
                  "q": "What does the woman of seventy do with her phone?",
                  "options": [
                    "She plays games with her neighbours.",
                    "She video-calls her grandson every weekend.",
                    "She sells vegetables to local families.",
                    "She teaches a class at the community center."
                  ],
                  "answer": "B",
                  "why": "原文：A woman of seventy says she now video-calls her grandson every weekend and even orders vegetables online."
                },
                {
                  "n": 24,
                  "q": "What do the young teachers say they have learned?",
                  "options": [
                    "How to earn money from teaching.",
                    "Why older people dislike new technology.",
                    "Patience and the value of explaining things clearly.",
                    "The fastest way to fix a broken smartphone."
                  ],
                  "answer": "C",
                  "why": "原文：They also admit that they have learned something themselves: patience, and the value of explaining things clearly."
                },
                {
                  "n": 25,
                  "q": "What can be inferred from the volunteer's words at the end of the passage?",
                  "options": [
                    "The classes help keep older people connected to the world.",
                    "The classes will soon be stopped.",
                    "Older people prefer to live alone.",
                    "Teaching skills is easier than people expect."
                  ],
                  "answer": "A",
                  "why": "原文：we are not just teaching skills. We are keeping people connected to the world around them."
                }
              ],
              "title": "社区免费课教老年人用智能手机"
            }
          ]
        }
      ]
    },
    {
      "id": "sb6p1",
      "lv": "六级",
      "type": "模拟卷",
      "kind": "paper",
      "date": "2026-09-28",
      "title": "六级听力模拟卷（一）· 完整 25 题",
      "note": "长对话 2 段 + 听力篇章 2 篇 + 讲座讲话 3 篇，题型与题量按六级真题编排。",
      "sections": [
        {
          "no": "Section A",
          "type": "长对话",
          "dir": "Directions: In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.",
          "items": [
            {
              "id": "sb6p1d1",
              "spk": {
                "Emma": "F",
                "Daniel": "M"
              },
              "lines": [
                [
                  "Emma",
                  "Daniel, you look as if you have not slept for a week. Is the literature review still giving you trouble?",
                  "丹尼尔，你看起来好像一周没睡了。文献综述还在折磨你吗？"
                ],
                [
                  "Daniel",
                  "Worse than that. I have three candidate topics for my thesis, and the more papers I read, the less certain I become about which one deserves two years of my life.",
                  "比那更糟。我的论文有三个候选题目，可我读的论文越多，就越不确定哪一个值得我投入两年时间。"
                ],
                [
                  "Emma",
                  "That is a normal stage, not a crisis. Tell me the three, and then tell me which one you would still want to talk about at dinner.",
                  "这是正常的阶段，不是危机。把三个题目告诉我，然后告诉我哪一个你在吃晚饭时还愿意聊。"
                ],
                [
                  "Daniel",
                  "The first is how recommendation algorithms shape what teenagers read. The second is whether anonymous posting really protects privacy. The third is a comparison of two statistical models.",
                  "第一个是推荐算法如何影响青少年阅读的内容；第二个是匿名发帖是否真的保护隐私；第三个是两种统计模型的比较。"
                ],
                [
                  "Emma",
                  "The third sounds safe and dull. Safe topics get finished, but they rarely get cited. What attracts you to the first one?",
                  "第三个听起来稳妥却枯燥。稳妥的题目能写完，但很少被引用。第一个题目哪里吸引你？"
                ],
                [
                  "Daniel",
                  "Because the data is already there. A friend scraped two million public posts from an open forum, and he offered to share the whole set with me tomorrow.",
                  "因为数据是现成的。一个朋友从一个公开论坛抓取了两百万条公开帖子，他说愿意明天把整套数据分享给我。"
                ],
                [
                  "Emma",
                  "Hold on. Public posts are not automatically free data. Those were written by real people who never agreed to take part in your study.",
                  "等一下。公开帖子并不自动就是免费数据。那些帖子是真实的人写的，他们从未同意参与你的研究。"
                ],
                [
                  "Daniel",
                  "But the forum is open to anyone, and I would remove the usernames before I analyse anything.",
                  "但这个论坛对所有人开放，而且我会在分析之前删掉用户名。"
                ],
                [
                  "Emma",
                  "Removing names helps, yet it is not enough. A single quotation can identify a person; that is why the ethics board asks for consent or a much stronger anonymisation plan.",
                  "去掉名字有帮助，但还不够。一句引文就可能指认出一个人；这正是伦理委员会要求获得知情同意或者更严格的匿名化方案的原因。"
                ],
                [
                  "Daniel",
                  "So I should rewrite the design before I touch the data. Would a small survey with informed consent be too slow?",
                  "那就是说，我在碰这些数据之前应该重新设计方案。做一个带知情同意的小型问卷会不会太慢？"
                ],
                [
                  "Emma",
                  "It would be slower and far more defensible. Bring me a two-page proposal on Friday and we will take it to the committee together.",
                  "会慢一些，但更站得住脚。周五给我一份两页的方案，我们一起去提交给委员会。"
                ]
              ],
              "trans": "丹尼尔，你看起来好像一周没睡了。文献综述还在折磨你吗？比那更糟。我的论文有三个候选题目，可我读的论文越多，就越不确定哪一个值得我投入两年时间。这是正常的阶段，不是危机。把三个题目告诉我，然后告诉我哪一个你在吃晚饭时还愿意聊。第一个是推荐算法如何影响青少年阅读的内容；第二个是匿名发帖是否真的保护隐私；第三个是两种统计模型的比较。第三个听起来稳妥却枯燥。稳妥的题目能写完，但很少被引用。第一个题目哪里吸引你？因为数据是现成的。一个朋友从一个公开论坛抓取了两百万条公开帖子，他说愿意明天把整套数据分享给我。等一下。公开帖子并不自动就是免费数据。那些帖子是真实的人写的，他们从未同意参与你的研究。但这个论坛对所有人开放，而且我会在分析之前删掉用户名。去掉名字有帮助，但还不够。一句引文就可能指认出一个人；这正是伦理委员会要求获得知情同意或者更严格的匿名化方案的原因。那就是说，我在碰这些数据之前应该重新设计方案。做一个带知情同意的小型问卷会不会太慢？会慢一些，但更站得住脚。周五给我一份两页的方案，我们一起去提交给委员会。",
              "qs": [
                {
                  "n": 1,
                  "q": "What do we learn about Daniel at the beginning of the conversation?",
                  "options": [
                    "He has been asked to rewrite his literature review.",
                    "He is looking for a new supervisor.",
                    "He finds it hard to choose among several topics.",
                    "He has just completed his thesis defence."
                  ],
                  "answer": "C",
                  "why": "原文：I have three candidate topics for my thesis, and the more papers I read, the less certain I become about which one deserves two years of my life."
                },
                {
                  "n": 2,
                  "q": "What does Emma imply about the comparison of two statistical models?",
                  "options": [
                    "It is likely to be finished but seldom cited.",
                    "It requires data that Daniel cannot obtain.",
                    "It has already been covered by another student.",
                    "It is the most original of the three."
                  ],
                  "answer": "A",
                  "why": "原文：The third sounds safe and dull. Safe topics get finished, but they rarely get cited."
                },
                {
                  "n": 3,
                  "q": "What is Emma's attitude towards Daniel's plan to use the scraped posts?",
                  "options": [
                    "Enthusiastic.",
                    "Indifferent.",
                    "Sympathetic.",
                    "Disapproving."
                  ],
                  "answer": "D",
                  "why": "原文：Hold on. Public posts are not automatically free data."
                },
                {
                  "n": 4,
                  "q": "What does Emma ask Daniel to do?",
                  "options": [
                    "Ask his friend to delete the data set.",
                    "Draft a two-page proposal for the committee.",
                    "Abandon the topic and choose a safer one.",
                    "Collect data from a much larger forum."
                  ],
                  "answer": "B",
                  "why": "原文：Bring me a two-page proposal on Friday and we will take it to the committee together."
                }
              ],
              "title": "学术研讨与科研数据使用"
            },
            {
              "id": "sb6p1d2",
              "spk": {
                "Rachel": "F",
                "Kevin": "M"
              },
              "lines": [
                [
                  "Kevin",
                  "Rachel, I saw your name on the shortlist for the graduate programme in renewable energy. Congratulations!",
                  "瑞秋，我在可再生能源研究生项目的入围名单上看到你的名字了。恭喜！"
                ],
                [
                  "Rachel",
                  "Thank you, but I am not sure I should accept it. Everyone keeps telling me that the AI industry pays twice as much and hires faster.",
                  "谢谢，但我不确定该不该接受。所有人都一直跟我说，AI 行业薪水翻倍，招人也更快。"
                ],
                [
                  "Kevin",
                  "Salary is a real factor, yet it is a poor compass. What made you apply in the first place?",
                  "薪水是个真实因素，但它不是个好向导。你当初为什么申请这个项目？"
                ],
                [
                  "Rachel",
                  "I spent last summer on a campus project measuring how much electricity our labs waste overnight, and the numbers genuinely shocked me.",
                  "去年夏天我参加了一个校园项目，测量我们实验室整夜浪费多少电，那些数字真的让我震惊。"
                ],
                [
                  "Kevin",
                  "That sounds like evidence of interest rather than a passing fashion. Did the project lead anywhere?",
                  "这听起来是兴趣的证据，而不是一时的时髦。这个项目后来有结果吗？"
                ],
                [
                  "Rachel",
                  "We proposed an automatic shutdown system, and the university is now testing it in three buildings. Seeing a policy change because of our data was deeply satisfying.",
                  "我们提出了一个自动断电系统，学校现在在三栋楼里试点。看到因为我们的数据而改变了一项政策，特别有成就感。"
                ],
                [
                  "Kevin",
                  "Then the question is not which industry pays more, but where your particular skills compound over time.",
                  "那问题就不是哪个行业给的钱多，而是你独有的能力在哪里能随着时间不断积累。"
                ],
                [
                  "Rachel",
                  "My parents disagree. They argue that renewable energy is still a small market in our country and that I would be taking a gamble.",
                  "我父母不这么看。他们认为可再生能源在我们国家还是个小市场，我这是在冒险。"
                ],
                [
                  "Kevin",
                  "Markets grow. Ten years ago nobody believed that electric vehicles would outsell petrol cars in major cities, and look at the charging network now.",
                  "市场是会成长的。十年前没人相信电动车在大城市会卖得比燃油车好，可现在看看充电网络。"
                ],
                [
                  "Rachel",
                  "So you are saying I should weigh the trajectory rather than today's headline salary?",
                  "所以你是说，我该衡量的是发展趋势，而不是今天新闻里的高薪？"
                ],
                [
                  "Kevin",
                  "Exactly. And remember, programmers in any field can move; a specialist in energy systems can always learn to code, but not the other way round.",
                  "正是。而且要记住，任何领域的程序员都能转行；能源系统的专才可以去学编程，反过来却不行。"
                ]
              ],
              "trans": "瑞秋，我在可再生能源研究生项目的入围名单上看到你的名字了。恭喜！谢谢，但我不确定该不该接受。所有人都一直跟我说，AI 行业薪水翻倍，招人也更快。薪水是个真实因素，但它不是个好向导。你当初为什么申请这个项目？去年夏天我参加了一个校园项目，测量我们实验室整夜浪费多少电，那些数字真的让我震惊。这听起来是兴趣的证据，而不是一时的时髦。这个项目后来有结果吗？我们提出了一个自动断电系统，学校现在在三栋楼里试点。看到因为我们的数据而改变了一项政策，特别有成就感。那问题就不是哪个行业给的钱多，而是你独有的能力在哪里能随着时间不断积累。我父母不这么看。他们认为可再生能源在我们国家还是个小市场，我这是在冒险。市场是会成长的。十年前没人相信电动车在大城市会卖得比燃油车好，可现在看看充电网络。所以你是说，我该衡量的是发展趋势，而不是今天新闻里的高薪？正是。而且要记住，任何领域的程序员都能转行；能源系统的专才可以去学编程，反过来却不行。",
              "qs": [
                {
                  "n": 5,
                  "q": "What do people around Rachel keep telling her about the AI industry?",
                  "options": [
                    "It offers much higher pay and recruits faster.",
                    "It rarely hires fresh graduates.",
                    "It is less competitive than renewable energy.",
                    "It demands a degree from overseas."
                  ],
                  "answer": "A",
                  "why": "原文：Everyone keeps telling me that the AI industry pays twice as much and hires faster."
                },
                {
                  "n": 6,
                  "q": "What became of Rachel's summer project?",
                  "options": [
                    "It won her a scholarship for graduate study.",
                    "It was published in an energy journal.",
                    "It led to a trial of an automatic shutdown system on campus.",
                    "It turned into a paid internship at a power company."
                  ],
                  "answer": "C",
                  "why": "原文：We proposed an automatic shutdown system, and the university is now testing it in three buildings."
                },
                {
                  "n": 7,
                  "q": "What is Kevin's view of the concern raised by Rachel's parents?",
                  "options": [
                    "He shares their worry about the limited market.",
                    "He thinks it overlooks the way markets develop over time.",
                    "He believes they should make the decision for her.",
                    "He feels it has nothing to do with her choice."
                  ],
                  "answer": "B",
                  "why": "原文：Markets grow. Ten years ago nobody believed that electric vehicles would outsell petrol cars in major cities, and look at the charging network now."
                },
                {
                  "n": 8,
                  "q": "What can be inferred from Kevin's remarks at the end of the conversation?",
                  "options": [
                    "Specialists should avoid learning skills outside their field.",
                    "Energy graduates will earn more than programmers in the long run.",
                    "Changing jobs frequently is the surest way to a higher salary.",
                    "A strong specialism can be combined with other skills."
                  ],
                  "answer": "D",
                  "why": "原文：a specialist in energy systems can always learn to code, but not the other way round."
                }
              ],
              "title": "职业规划与行业趋势"
            }
          ]
        },
        {
          "no": "Section B",
          "type": "听力篇章",
          "dir": "Directions: In this section, you will hear two passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.",
          "items": [
            {
              "id": "sb6p1p1",
              "text": "For decades, students have been told that the best way to prepare for an exam is to read the material again and again. Recent research in learning science suggests that this advice is incomplete. Re-reading feels productive because the text becomes familiar, yet familiarity is not the same as memory. A more effective strategy is retrieval practice, which simply means closing the book and trying to recall what you have just learned. In one classic experiment, two groups of students studied a short article. The first group read it four times. The second read it once and then wrote down everything they could remember. Immediately afterwards, the re-readers felt more confident, and their scores were slightly higher. A week later the pattern had reversed: the students who had tested themselves remembered far more. Researchers explain the effect in terms of effort. Pulling information out of memory strengthens the path back to it, while reading it over merely confirms that the words are on the page. Spacing the practice out over days helps as well, because each attempt begins with a small struggle. The practical lesson is not that reading is useless, but that it should be the beginning of study rather than the whole of it.",
              "trans": "几十年来，学生们一直被告知，准备考试最好的方法就是反复阅读材料。学习科学领域近年来的研究表明，这条建议并不完整。重读之所以让人觉得有效，是因为文本变得熟悉，然而熟悉并不等于记住。更有效的策略是提取练习，说白了就是合上书本，努力回想刚刚学过的内容。在一项经典实验中，两组学生阅读了同一篇短文。第一组读了四遍，第二组只读一遍，然后写下所有能记住的内容。紧接着，重读的学生感觉更有信心，得分也略高一些。一周之后，情况反过来了：那些给自己做过测试的学生记住的内容多得多。研究者用努力程度来解释这一效应。把信息从记忆中提取出来，会强化回到它的路径，而重读只是确认这些字还印在纸上。把练习分散到几天里同样有帮助，因为每一次尝试开始时都要稍微费力。这一结论的实际启示并不是说阅读毫无用处，而是它应当成为学习的开头，而不是学习的全部。",
              "qs": [
                {
                  "n": 9,
                  "q": "What is the main point the speaker makes about studying?",
                  "options": [
                    "Re-reading is the most reliable way to prepare for an exam.",
                    "Testing yourself and spacing practice out lead to stronger long-term memory.",
                    "Familiarity with a text always produces higher scores.",
                    "Students should stop reading their notes before an examination."
                  ],
                  "answer": "B",
                  "why": "原文：A more effective strategy is retrieval practice, which simply means closing the book and trying to recall what you have just learned."
                },
                {
                  "n": 10,
                  "q": "What happened a week after the experiment?",
                  "options": [
                    "The re-readers scored much higher than the other group.",
                    "Both groups performed exactly the same.",
                    "The students who had tested themselves remembered far more.",
                    "The second group forgot almost everything they had learned."
                  ],
                  "answer": "C",
                  "why": "原文：A week later the pattern had reversed: the students who had tested themselves remembered far more."
                },
                {
                  "n": 11,
                  "q": "What does the speaker suggest about reading as a study method?",
                  "options": [
                    "It is a waste of time and should be abandoned.",
                    "It works only for short articles.",
                    "It helps mainly because it makes students feel confident.",
                    "It should be the beginning of study rather than the whole of it."
                  ],
                  "answer": "D",
                  "why": "原文：The practical lesson is not that reading is useless, but that it should be the beginning of study rather than the whole of it."
                }
              ],
              "title": "学习科学：提取练习与分散复习"
            },
            {
              "id": "sb6p1p2",
              "text": "City summers are getting harder to bear, and planners are increasingly looking at the surfaces beneath our feet. Asphalt and dark roofing absorb sunlight during the day and release it slowly after sunset, so a dense district can stay several degrees warmer than the countryside around it. The effect is not only uncomfortable; it also raises electricity demand and puts strain on the health of elderly residents. One response is to plant more trees, but trees take years to mature and need water and space. A faster option is to change the colour and texture of the surfaces themselves. Painting roofs white, for example, reflects much of the incoming sunlight instead of storing it. In a trial carried out in a Mediterranean city, buildings with reflective roofs were measurably cooler inside, and air-conditioning use fell by roughly a third during the hottest month. Streets can be treated in a similar way with light-coloured paving, though glare and maintenance costs must be considered. Researchers stress that no single measure is sufficient. Shade, ventilation, reflective surfaces and careful building design work best together. What makes these measures attractive is that they are largely reversible: if a solution disappoints, it can be changed without rebuilding the district.",
              "trans": "城市里的夏天越来越难熬，规划者也开始越来越多地关注我们脚下的各种地面。沥青和深色屋面白天吸收阳光，日落后慢慢释放出来，因此一个建筑密集的城区可能比周边乡村高出好几度。这种效应不仅让人不适，也会推高用电需求，并给年长居民的健康带来压力。一种应对办法是多种树，但树木需要多年才能长成，也需要水和空间。更快的选择是改变地面本身的颜色和质地。例如把屋顶刷成白色，就能把大量入射阳光反射出去，而不是把它储存起来。在一座地中海城市开展的试验中，采用反射屋顶的建筑室内明显更凉，最热月份的空调使用量下降了大约三分之一。街道也可以用浅色铺装做类似处理，不过要考虑反光和养护成本。研究人员强调，任何单一措施都不够。遮阴、通风、反射表面和精心的建筑设计配合起来效果最好。这些措施的吸引力在于，它们大体上是可以撤回的：如果某个方案效果不理想，可以在不重建整个城区的前提下把它改掉。",
              "qs": [
                {
                  "n": 12,
                  "q": "What makes a dense city district stay warmer than the countryside around it?",
                  "options": [
                    "Dark surfaces that absorb sunlight and release it after sunset.",
                    "Heat produced by crowded public transport.",
                    "The lack of wind between tall buildings.",
                    "Warm air rising from underground pipes."
                  ],
                  "answer": "A",
                  "why": "原文：Asphalt and dark roofing absorb sunlight during the day and release it slowly after sunset, so a dense district can stay several degrees warmer than the countryside around it."
                },
                {
                  "n": 13,
                  "q": "What did the trial in a Mediterranean city find?",
                  "options": [
                    "Trees grew much faster than expected in hot weather.",
                    "Residents complained about the glare from white roofs.",
                    "Air-conditioning use dropped by about a third in the hottest month.",
                    "Indoor temperatures rose slightly in the afternoon."
                  ],
                  "answer": "C",
                  "why": "原文：In a trial carried out in a Mediterranean city, buildings with reflective roofs were measurably cooler inside, and air-conditioning use fell by roughly a third during the hottest month."
                },
                {
                  "n": 14,
                  "q": "What does the speaker say about planting more trees?",
                  "options": [
                    "It is the cheapest way to cool a whole city.",
                    "It is useful but takes years and requires water and space.",
                    "It has been abandoned in favour of reflective paint.",
                    "It only works in Mediterranean climates."
                  ],
                  "answer": "B",
                  "why": "原文：One response is to plant more trees, but trees take years to mature and need water and space."
                },
                {
                  "n": 15,
                  "q": "What is the speaker's attitude towards reflective surfaces?",
                  "options": [
                    "Doubtful, because the evidence is still weak.",
                    "Indifferent, since the effect is rather small.",
                    "Critical, because maintenance costs are too high.",
                    "Favourable, as they work well and are largely reversible."
                  ],
                  "answer": "D",
                  "why": "原文：What makes these measures attractive is that they are largely reversible: if a solution disappoints, it can be changed without rebuilding the district."
                }
              ],
              "title": "城市降温：反射屋顶与浅色路面"
            }
          ]
        },
        {
          "no": "Section C",
          "type": "讲座讲话",
          "dir": "Directions: In this section, you will hear three recordings of lectures or talks followed by three or four questions. The recordings will be played only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.",
          "items": [
            {
              "id": "sb6p1l1",
              "text": "Good morning, everyone. Today I want to talk about one of the most misunderstood abilities of the human mind: memory. Many students believe that memory works like a recording device, that whatever enters our eyes and ears is stored permanently and can be replayed at will. The research, however, tells a very different story. Memory is not a recording; it is a reconstruction. Every time you recall an event, your brain rebuilds it from fragments, and each rebuilding can slightly change the original. Let me give you an example. In one classic study, volunteers watched a short film of a traffic accident. Later, they were asked how fast the cars were going when they smashed into each other. A second group was asked how fast the cars were going when they hit each other. The first group consistently reported much higher speeds, and a week later they were far more likely to remember broken glass that never actually appeared in the film. The key point here is that the words we use shape what people remember. For learners, this has a practical lesson. Instead of simply rereading your notes, which feels productive but changes very little, you should test yourself. Retrieval practice, in which you try to recall information without looking, strengthens memory far more effectively than passive review. Spacing those tests over days or weeks works even better. So the next step in your study routine is simple: close the book and try to remember.",
              "trans": "各位早上好。今天我想谈谈人类心智中最被误解的能力之一：记忆。很多学生以为记忆像一台录音设备，凡是进入我们眼睛和耳朵的东西都会被永久储存，并且可以随意回放。然而研究讲述的是完全不同的故事。记忆不是录音，而是一种重建。每当你回忆一件事，你的大脑都会用碎片把它重新拼起来，而每一次重建都可能稍稍改变原来的样子。让我举个例子。在一项经典研究中，志愿者观看了一段交通事故的短片。之后，他们被问到：当汽车彼此猛烈撞击时，车速有多快。另一组被问到：当汽车彼此碰撞时，车速有多快。第一组一致报告了高得多的速度，而且一周之后，他们更可能记得影片里从未真正出现过的碎玻璃。这里的关键点是：我们使用的词语会塑造人们记住的内容。对学习者来说，这有一个实用的教训。与其只是反复重读笔记——那感觉很有成效，但其实改变很小——你应该考自己。提取练习，也就是不看材料、努力回忆信息，比被动复习有效得多。把这些测试分散到几天或几周，效果还会更好。所以你学习流程中的下一步很简单：合上书，试着回忆。",
              "qs": [
                {
                  "n": 16,
                  "q": "What does the speaker say about the nature of human memory?",
                  "options": [
                    "It is a reconstruction rather than a faithful recording.",
                    "It works like a camera that stores images permanently.",
                    "It improves automatically as we grow older.",
                    "It depends mainly on how intelligent a person is."
                  ],
                  "answer": "A",
                  "why": "原文：Memory is not a recording; it is a reconstruction."
                },
                {
                  "n": 17,
                  "q": "What does the traffic accident study mainly illustrate?",
                  "options": [
                    "Eye witnesses are always reliable in a courtroom.",
                    "People remember broken glass more clearly than speed.",
                    "Memory fades quickly when people are under stress.",
                    "The way a question is worded can change what people remember."
                  ],
                  "answer": "D",
                  "why": "原文：The key point here is that the words we use shape what people remember."
                },
                {
                  "n": 18,
                  "q": "What does the speaker advise learners to do at the end of the talk?",
                  "options": [
                    "Reread their notes as many times as possible.",
                    "Test themselves instead of passively reviewing.",
                    "Study only in the morning when the mind is fresh.",
                    "Avoid discussing past events with other people."
                  ],
                  "answer": "B",
                  "why": "原文：Retrieval practice, in which you try to recall information without looking, strengthens memory far more effectively than passive review."
                }
              ],
              "title": "认知科学：记忆是怎么工作的"
            },
            {
              "id": "sb6p1l2",
              "text": "Today's topic is behavioral economics, a field that blends psychology with economics. For a long time, standard economics assumed that people are rational decision makers. We were said to weigh costs and benefits carefully and always choose the option that serves us best. Behavioral economists, however, noticed something odd. In real life, people often make choices that clearly work against their own interests. They save too little for retirement, eat too much junk food, and postpone exercise again and again. Why does this happen? One reason is that our minds take shortcuts. We rely on habits, emotions, and whatever option is easiest at the moment. This is not a flaw we can simply scold away. It is how human attention works. Understanding this has led to a powerful idea known as the nudge. A nudge changes the environment in which people choose, without forbidding any option or making anything much more expensive. Consider organ donation. In countries where citizens must actively sign up, donation rates are often low. Where the healthy choice is the default and people may opt out, rates rise dramatically. Nobody is forced to do anything, yet far more lives are saved. The same principle applies to saving money: when employees are automatically enrolled in a pension plan but may leave at any time, participation jumps. The lesson is not that people are foolish, but that good design helps good intentions become real behavior.",
              "trans": "今天的主题是行为经济学，一个把心理学与经济学结合起来的领域。长期以来，标准经济学假设人是理性的决策者。据说我们会仔细权衡成本与收益，并且总是选择对自己最有利的选项。然而，行为经济学家注意到一件奇怪的事。在现实生活中，人们常常做出明显违背自身利益的选择。他们为退休存的钱太少，吃太多垃圾食品，一次又一次地把锻炼往后推。为什么会这样？一个原因是我们的心智会走捷径。我们依赖习惯、情绪，以及此刻最省事的那个选项。这并不是靠责备就能消除的缺陷，而是人类注意力的运作方式。理解这一点，引出了一个被称为助推的有力想法。助推改变的是人们做选择时所处的环境，它不禁止任何选项，也不会让任何东西变得昂贵许多。以器官捐献为例。在公民必须主动报名的国家，捐献率往往很低。而在健康的选择成为默认、人们可以选择退出的地方，捐献率会大幅上升。没有人被强迫做任何事，但多得多的生命得以被挽救。同样的原理也适用于存钱：当员工被自动纳入养老金计划、但随时可以退出时，参与率会猛增。这个教训并不是说人很愚蠢，而是说好的设计能帮助良好的意愿变成真实的行为。",
              "qs": [
                {
                  "n": 19,
                  "q": "What did behavioral economists notice about people's choices in real life?",
                  "options": [
                    "People are usually careful and rational decision makers.",
                    "People change their habits easily once they are warned.",
                    "People often choose in ways that harm their own interests.",
                    "People prefer expensive options when they are unsure."
                  ],
                  "answer": "C",
                  "why": "原文：In real life, people often make choices that clearly work against their own interests."
                },
                {
                  "n": 20,
                  "q": "According to the speaker, what is a nudge?",
                  "options": [
                    "A change in the choice environment that forbids nothing.",
                    "A law that forces citizens to act in a healthy way.",
                    "A reward given to people who behave correctly.",
                    "A warning printed on the front of a product."
                  ],
                  "answer": "A",
                  "why": "原文：A nudge changes the environment in which people choose, without forbidding any option or making anything much more expensive."
                },
                {
                  "n": 21,
                  "q": "How does the speaker view people who make seemingly poor decisions?",
                  "options": [
                    "They should be blamed for their lack of self control.",
                    "They are simply unable to learn from experience.",
                    "They are only a small minority in modern society.",
                    "They deserve understanding, since good design matters more."
                  ],
                  "answer": "D",
                  "why": "原文：The lesson is not that people are foolish, but that good design helps good intentions become real behavior."
                }
              ],
              "title": "行为经济学：助推如何影响选择"
            },
            {
              "id": "sb6p1l3",
              "text": "Let me begin with a question: what makes a city feel alive? Most people picture famous landmarks, tall towers, or busy shopping streets. But urban planners have learned that the real life of a city happens in its public spaces: the squares, parks, sidewalks, and small corners where people simply meet. For decades, many cities were designed around cars. Wide roads were built, parking lots multiplied, and pedestrians were pushed to the edges. The result was often efficient traffic but empty streets. Planners now understand that this loss of casual contact has real social costs. The alternative is to design for people first. A well designed public space offers what planners call seating choice. Some benches sit in the sun, some in the shade; some face the crowd, others look away. Why does this matter? Because people stay longer when they can choose how to sit. And the longer they stay, the more likely they are to talk, to notice neighbors, and to feel that the place belongs to them. Let me give you an example. A city once turned a single parking lane into a small park with movable chairs and a few trees. Within months, the number of people lingering there rose sharply, local shops reported more customers, and residents said the street felt safer. The key point here is that a city is not made of concrete alone. It is made of encounters. When we plan public space, we are really planning the daily life of a community.",
              "trans": "让我先问一个问题：是什么让一座城市充满生机？大多数人想到的是著名的地标、高耸的楼宇或热闹的商业街。但城市规划者已经认识到，一座城市真正的生活发生在它的公共空间里：广场、公园、人行道，以及人们单纯相遇的那些小角落。几十年来，许多城市是围绕汽车来设计的。宽阔的道路被修建起来，停车场成倍增加，行人被挤到边缘。结果往往是交通高效，但街道空空荡荡。规划者如今明白，这种偶然接触的丧失带来了真实的社会代价。另一种做法是把人放在第一位来设计。一个设计良好的公共空间会提供规划者所称的座位选择。有些长椅在阳光下，有些在阴影里；有些面朝人群，有些背对人群。这为什么重要？因为当人们可以选择怎么坐时，他们会待得更久。而他们待得越久，就越可能交谈、注意到邻居，并觉得这个地方属于自己。让我举个例子。有一座城市曾把一条停车道改造成带可移动椅子和几棵树的小公园。几个月内，在那里逗留的人数急剧上升，当地店铺报告顾客更多了，居民也说这条街感觉更安全了。这里的关键点是：一座城市不仅仅由混凝土构成，它由相遇构成。当我们规划公共空间时，我们其实在规划一个社区的日常生活。",
              "qs": [
                {
                  "n": 22,
                  "q": "What does the speaker say makes a city feel truly alive?",
                  "options": [
                    "Its famous landmarks and its tallest towers.",
                    "Its public spaces where people meet one another.",
                    "Its wide roads and its efficient traffic system.",
                    "Its large shopping streets and busy markets."
                  ],
                  "answer": "B",
                  "why": "原文：But urban planners have learned that the real life of a city happens in its public spaces: the squares, parks, sidewalks, and small corners where people simply meet."
                },
                {
                  "n": 23,
                  "q": "According to the speaker, what was the result of designing cities around cars?",
                  "options": [
                    "Streets became safer for children and older people.",
                    "Residents began to walk much more than before.",
                    "Traffic flowed well but the streets felt empty.",
                    "Public transport became cheaper and more reliable."
                  ],
                  "answer": "C",
                  "why": "原文：The result was often efficient traffic but empty streets."
                },
                {
                  "n": 24,
                  "q": "Why is seating choice important in a public space?",
                  "options": [
                    "People tend to stay longer when they can choose how to sit.",
                    "It makes the space look more modern to visitors.",
                    "It keeps the area clean and free of rubbish.",
                    "It encourages people to move through the space faster."
                  ],
                  "answer": "A",
                  "why": "原文：Because people stay longer when they can choose how to sit."
                },
                {
                  "n": 25,
                  "q": "What is the speaker's main message at the end of the talk?",
                  "options": [
                    "Cities should replace all parking lanes with small parks.",
                    "Planning public space is really about planning community life.",
                    "Concrete and steel are the true measure of a city.",
                    "Public space matters far less than private housing."
                  ],
                  "answer": "B",
                  "why": "原文：When we plan public space, we are really planning the daily life of a community."
                }
              ],
              "title": "城市规划与公共空间"
            }
          ]
        }
      ]
    },
    {
      "id": "n260926a",
      "lv": "四级",
      "type": "短篇新闻",
      "date": "2026-09-26",
      "title": "Campus Charging Cabinets for E-Bikes",
      "text": "Several universities in eastern China have begun installing charging cabinets for electric bicycles in dormitory areas. The move follows a series of fires caused by batteries charged illegally inside student rooms. Under the new system, riders pay a small fee and plug their batteries into a locked cabinet that cuts off power once a battery is full. University officials say the cabinets are fitted with heat sensors and automatic alarms, and a staff member checks them three times a day. The first month showed a forty per cent drop in the number of batteries brought into dormitories. Students welcomed the change but complained that the cabinets are often full at night, when most riders return. The university says another two hundred sockets will be added before the winter term. Safety experts say the real test will come in the coldest weeks, when battery performance drops and riders may be tempted to charge indoors again.",
      "trans": "中国东部的几所大学开始在宿舍区安装电动自行车充电柜。此举的起因是一系列由在学生房间内违规充电的电池引发的火灾。在新系统下，骑车人付少量费用，把电池插入带锁的柜子，电池充满后会自动断电。校方表示，充电柜配有温度传感器和自动报警器，并由一名工作人员每天检查三次。第一个月的数据显示，被带进宿舍的电池数量下降了百分之四十。学生们欢迎这一改变，但抱怨充电柜在晚上常常满位——那是大多数骑车人回宿舍的时间。校方表示，冬季学期前还会再加两百个插位。安全专家表示，真正的考验将在最冷的那几周到来：那时电池性能下降，骑车人可能又忍不住在室内充电。",
      "qs": [
        {
          "n": 1,
          "q": "Why did the universities install the charging cabinets?",
          "options": [
            "To cut electricity costs for students.",
            "To prevent fires caused by indoor battery charging.",
            "To reduce the number of e-bikes on campus.",
            "To collect fees from e-bike riders."
          ],
          "answer": "B",
          "why": "原文：The move follows a series of fires caused by batteries charged illegally inside student rooms."
        },
        {
          "n": 2,
          "q": "What was reported after the first month of use?",
          "options": [
            "Battery fires stopped completely.",
            "E-bike sales fell sharply.",
            "Fewer batteries were taken into dormitories.",
            "Students refused to pay the fee."
          ],
          "answer": "C",
          "why": "原文：The first month showed a forty per cent drop in the number of batteries brought into dormitories."
        },
        {
          "n": 3,
          "q": "What do safety experts think about the new system?",
          "options": [
            "It has solved the problem for good.",
            "The coldest weeks will be the real test.",
            "Charging should be free of charge.",
            "Students should leave e-bikes at home in winter."
          ],
          "answer": "B",
          "why": "原文：the real test will come in the coldest weeks, when battery performance drops."
        }
      ]
    },
    {
      "id": "n260926b",
      "lv": "四级",
      "type": "短篇新闻",
      "date": "2026-09-26",
      "title": "Museum Opens Late and Free of Charge",
      "text": "A city museum has extended its opening hours to nine in the evening on the last Friday of every month and made entry free after six. The programme was designed for office workers and students who cannot visit during the day. Since it started, the museum has recorded about three thousand evening visitors each month, and more than half of them were under thirty. Curators have noticed a change in behaviour: evening guests spend less time in front of famous paintings and more time in the shop and the cafe. To hold their attention, the museum now runs twenty-minute talks on single objects, given by young researchers rather than senior curators. Ticket income has fallen slightly, but spending in the cafe and the shop has risen by almost a third. Other museums in the city are watching the results closely, and two have already announced similar trials.",
      "trans": "一座城市博物馆把每月最后一个周五的开放时间延长到晚上九点，并且六点以后免费入场。该项目是为白天无法参观的上班族和学生设计的。自启动以来，博物馆每月记录到约三千名夜场观众，其中一半以上年龄不满三十岁。策展人注意到观众行为的变化：夜场客人站在名画前的时间变少了，待在商店和咖啡厅的时间变多了。为了留住他们的注意力，博物馆现在安排年轻人而非资深策展人来主讲二十分钟的“单件展品”讲解。门票收入略有下降，但咖啡厅和商店的消费增长了近三分之一。市里其他博物馆正密切关注这一结果，已有两家宣布进行类似试点。",
      "qs": [
        {
          "n": 1,
          "q": "What is the purpose of the museum's evening programme?",
          "options": [
            "To attract visitors who are busy in the daytime.",
            "To raise more money from tickets.",
            "To display newly bought paintings.",
            "To train young curators."
          ],
          "answer": "A",
          "why": "原文：The programme was designed for office workers and students who cannot visit during the day."
        },
        {
          "n": 2,
          "q": "What change in behaviour did the curators notice?",
          "options": [
            "Visitors stayed longer in front of paintings.",
            "Visitors spent more time in the shop and the cafe.",
            "Visitors asked far more questions.",
            "Visitors came in much larger groups."
          ],
          "answer": "B",
          "why": "原文：evening guests spend less time in front of famous paintings and more time in the shop and the cafe."
        },
        {
          "n": 3,
          "q": "How have other museums in the city responded?",
          "options": [
            "They have criticised the plan.",
            "They have raised their ticket prices.",
            "Two of them have announced similar trials.",
            "They have decided to close earlier."
          ],
          "answer": "C",
          "why": "原文：two have already announced similar trials."
        }
      ]
    },
    {
      "id": "c260926a",
      "lv": "四级",
      "type": "长对话",
      "date": "2026-09-26",
      "title": "Choosing Courses before an Internship",
      "lines": [
        [
          "Amy",
          "Professor Li, can I ask you about my course plan for next term?",
          "李教授，我能问一下下学期的选课计划吗？"
        ],
        [
          "Li",
          "Of course. You are taking four courses now, is that right?",
          "当然。你现在在上四门课，对吗？"
        ],
        [
          "Amy",
          "Actually five. I added a statistics course in the second week, and now I am worried it is too much.",
          "其实是五门。我第二周加了一门统计课，现在担心太多了。"
        ],
        [
          "Li",
          "That depends on your goal. Are you still applying for the exchange programme in Germany?",
          "那取决于你的目标。你还在申请德国的交换项目吗？"
        ],
        [
          "Amy",
          "I am, and they ask for a statistics grade, so I do not want to drop it. But the internship at the newspaper starts in March.",
          "是的，他们要求统计课成绩，所以我不想退掉它。但报社的实习三月就开始了。"
        ],
        [
          "Li",
          "Then my advice is to move statistics to the summer term. It is offered twice a year, and the grade will still arrive before the exchange application closes.",
          "那我建议把统计课挪到暑期学期。这门课一年开两次，成绩仍然会在交换申请截止之前出来。"
        ],
        [
          "Amy",
          "I did not know that. That would leave me four courses plus the internship.",
          "我不知道这个。那我就剩四门课加实习了。"
        ],
        [
          "Li",
          "Exactly. Send me an email before Friday and I will sign the change form for you.",
          "正是。周五之前给我发一封邮件，我帮你签改课表。"
        ]
      ],
      "trans": "艾米：李教授，我能问一下我下学期的选课计划吗？／李教授：当然。你现在在上四门课，对吧？／艾米：其实是五门。我第二周加了一门统计课，现在担心太多了。／李教授：那取决于你的目标。你还在申请德国的交换项目吗？／艾米：是的，他们要求统计课成绩，所以我不想退掉。但报社的实习三月就开始了。／李教授：那我建议把统计课挪到暑期学期。这门课一年开两次，成绩仍会在交换申请截止前出来。／艾米：我不知道这个。那我就剩四门课加实习了。／李教授：正是。周五前给我发封邮件，我帮你签改课表。",
      "qs": [
        {
          "n": 1,
          "q": "How many courses is Amy taking this term?",
          "options": [
            "Three.",
            "Four.",
            "Five.",
            "Six."
          ],
          "answer": "C",
          "why": "原文：Actually five. I added a statistics course in the second week."
        },
        {
          "n": 2,
          "q": "Why does Amy want to keep the statistics course?",
          "options": [
            "She enjoys the teacher's style.",
            "The exchange programme requires the grade.",
            "It is required for graduation.",
            "Her best friend is in the same class."
          ],
          "answer": "B",
          "why": "原文：they ask for a statistics grade, so I do not want to drop it."
        },
        {
          "n": 3,
          "q": "What does Professor Li suggest?",
          "options": [
            "Giving up the internship.",
            "Taking statistics in the summer term.",
            "Applying for another exchange programme.",
            "Asking a different teacher for help."
          ],
          "answer": "B",
          "why": "原文：my advice is to move statistics to the summer term."
        },
        {
          "n": 4,
          "q": "What should Amy do before Friday?",
          "options": [
            "Send the professor an email.",
            "Pay a course change fee.",
            "Visit the newspaper office.",
            "Take the statistics exam."
          ],
          "answer": "A",
          "why": "原文：Send me an email before Friday and I will sign the change form for you."
        }
      ]
    },
    {
      "id": "p260926a",
      "lv": "四级",
      "type": "听力篇章",
      "date": "2026-09-26",
      "title": "Why Walking Meetings Work",
      "text": "More and more companies are replacing part of their sitting meetings with walking meetings. The idea is simple: two or three people talk while they walk, usually outdoors, for twenty to forty minutes. Supporters point to several benefits. First, walking increases blood flow to the brain, and studies suggest that people produce more new ideas when they are moving than when they are sitting at a desk. Second, taking a person away from their screen and their email usually means fewer interruptions, so the conversation stays on one topic. Third, a walking meeting is short by design, which forces both sides to decide what really matters. The format does have limits. It works badly for more than four people, for discussions that need documents, and for conversations about money or bad news, since the setting feels too casual. Managers also report that some employees worry about being seen outside the office during working hours. For these reasons, most companies keep walking meetings for planning and creative work, and return to the meeting room for formal decisions.",
      "trans": "越来越多的公司把一部分坐着开的会改成走动着开的会。做法很简单：两三个人边走边谈，通常在户外，走二十到四十分钟。支持者列出了几项好处。第一，走路会增加大脑的血流量，研究显示人在走动时比坐在办公桌前能产生更多新想法。第二，把一个人从屏幕和邮箱前拉走，通常意味着更少的打扰，于是谈话能围绕一个话题进行。第三，走动会议本身就短，这迫使双方决定什么才是真正重要的。这种形式也有局限：超过四个人时效果很差，需要查看文件的讨论不适合，谈钱或宣布坏消息也不适合，因为场景显得太随意。管理者还反映，有些员工担心在上班时间被人看到在办公室外面。因此，多数公司把走动会议用于规划和创意工作，正式决策则回到会议室。",
      "qs": [
        {
          "n": 1,
          "q": "What is one advantage of walking meetings mentioned in the passage?",
          "options": [
            "They last longer than normal meetings.",
            "They usually reduce interruptions.",
            "They allow more people to take part.",
            "They save the company travel costs."
          ],
          "answer": "B",
          "why": "原文：taking a person away from their screen and their email usually means fewer interruptions."
        },
        {
          "n": 2,
          "q": "What does the short length of a walking meeting force people to do?",
          "options": [
            "To take more breaks during the day.",
            "To decide what really matters.",
            "To invite more colleagues.",
            "To write longer records afterwards."
          ],
          "answer": "B",
          "why": "原文：short by design, which forces both sides to decide what really matters."
        },
        {
          "n": 3,
          "q": "For what kind of talk are walking meetings said to be unsuitable?",
          "options": [
            "Planning a new project.",
            "Creative work.",
            "Delivering bad news.",
            "Exchanging early ideas."
          ],
          "answer": "C",
          "why": "原文：It works badly for ... conversations about money or bad news."
        }
      ]
    },
    {
      "id": "c260926b",
      "lv": "六级",
      "type": "长对话",
      "date": "2026-09-26",
      "title": "An Interview about a Two-Year Gap",
      "lines": [
        [
          "Interviewer",
          "Thanks for coming in. Your CV mentions a two-year gap after graduation. Can you tell me about it?",
          "谢谢你来面试。你的简历提到毕业后有两年的空档期，能说说吗？"
        ],
        [
          "Candidate",
          "I spent the first year working in a small family business, and the second year looking after my grandmother. Neither was planned, but both taught me a lot.",
          "第一年我在一家小家族企业工作，第二年照顾我奶奶。两件事都不是计划好的，但都让我学到很多。"
        ],
        [
          "Interviewer",
          "What did you learn in the family business that you could use here?",
          "你在那家企业学到的东西，有哪些能在这里用上？"
        ],
        [
          "Candidate",
          "I was the only person handling orders, so I built a simple system to track them. Before that, orders were written on paper and often got lost. It cut our delivery mistakes by half.",
          "当时只有我一个人处理订单，所以我搭了一个简单的追踪系统。在那之前，订单都写在纸上，经常丢失。它把发货错误减少了一半。"
        ],
        [
          "Interviewer",
          "Interesting. This role is mostly about process, not creativity. Would that bore you?",
          "有意思。这个岗位主要是流程性的，不太需要创意。你会觉得无聊吗？"
        ],
        [
          "Candidate",
          "The opposite, actually. I like making things run smoothly. I would rather fix a system that everyone uses than design something nobody needs.",
          "恰恰相反。我喜欢让事情顺畅运转。与其设计没人需要的东西，我更愿意去修一个大家都在用的系统。"
        ],
        [
          "Interviewer",
          "Good answer. The next step is a written test on data tools. It takes about ninety minutes.",
          "回答得不错。下一步是数据工具的笔试，大约九十分钟。"
        ],
        [
          "Candidate",
          "That is fine. Could I ask how soon you expect to make a decision?",
          "没问题。我能问一下你们大概多久做决定吗？"
        ],
        [
          "Interviewer",
          "Within two weeks. We contact everyone, whether the answer is yes or no.",
          "两周之内。无论结果如何，我们都会联系每一位应聘者。"
        ]
      ],
      "trans": "面试官：谢谢你来面试。你的简历提到毕业后有两年的空档期，能说说吗？／应聘者：第一年我在一家小家族企业工作，第二年照顾我奶奶。都不是计划好的，但都让我学到很多。／面试官：你在那家企业学到的东西，有哪些能在这里用上？／应聘者：当时只有我一个人处理订单，所以我搭了一个简单的追踪系统。在那之前订单都写在纸上，经常丢失。它把发货错误减少了一半。／面试官：有意思。这个岗位主要是流程性的，不太需要创意。你会觉得无聊吗？／应聘者：恰恰相反。我喜欢让事情顺畅运转。与其设计没人需要的东西，我更愿意去修一个大家都在用的系统。／面试官：回答得不错。下一步是数据工具的笔试，大约九十分钟。／应聘者：没问题。我能问一下你们大概多久做决定吗？／面试官：两周之内。无论结果如何，我们都会联系每一位应聘者。",
      "qs": [
        {
          "n": 1,
          "q": "How did the candidate spend the two years after graduation?",
          "options": [
            "Travelling and studying languages abroad.",
            "Studying for a higher degree.",
            "Working in a family business and caring for a relative.",
            "Working for two large companies."
          ],
          "answer": "C",
          "why": "原文：the first year working in a small family business, and the second year looking after my grandmother."
        },
        {
          "n": 2,
          "q": "What did the candidate do in the family business?",
          "options": [
            "He built a system to track orders.",
            "He managed the company's finances.",
            "He trained new employees.",
            "He designed a new product."
          ],
          "answer": "A",
          "why": "原文：I was the only person handling orders, so I built a simple system to track them."
        },
        {
          "n": 3,
          "q": "How does the candidate answer the question about being bored?",
          "options": [
            "He admits that he prefers creative work.",
            "He says he prefers improving systems that are already in use.",
            "He asks to be considered for another role.",
            "He says he has no strong preference."
          ],
          "answer": "B",
          "why": "原文：I would rather fix a system that everyone uses than design something nobody needs."
        },
        {
          "n": 4,
          "q": "What will happen next in the process?",
          "options": [
            "A second interview with the manager.",
            "A written test on data tools.",
            "A trial working day.",
            "A phone call about salary."
          ],
          "answer": "B",
          "why": "原文：The next step is a written test on data tools."
        }
      ]
    },
    {
      "id": "p260926b",
      "lv": "六级",
      "type": "听力篇章",
      "date": "2026-09-26",
      "title": "The Return of Repair Culture",
      "text": "For most of the twentieth century, a broken appliance was repaired, not replaced. Repair shops could be found on almost every high street, and manufacturers printed wiring diagrams in the manuals they supplied. That changed in the nineteen nineties, when production moved to low-cost factories and prices fell so far that a new kettle often cost less than an hour of a repairer's time. In the past five years, however, repair has begun to return, and not mainly for environmental reasons. Three forces are at work. The first is cost: the price of new appliances has started to rise again, while wages in repair work have barely moved. The second is design: more products now use standard parts, so a single worn component can be replaced instead of the whole unit. The third is law. Several European countries now require manufacturers to supply spare parts for up to ten years and to publish repair manuals. Repairers say the biggest remaining obstacle is not parts but skill: the trade lost a generation of workers, and training a competent technician takes years. Some cities have responded with community workshops, where volunteers teach basic repairs and lend tools. Attendance is highest among people under thirty-five, a group that was said to prefer replacing things.",
      "trans": "在二十世纪的大部分时间里，坏掉的电器是被修的，而不是被换掉的。几乎每条主干道上都能找到修理铺，厂商也会在随附手册里印上线路图。这种情况在九十年代发生变化：生产转移到低成本工厂，价格降得太低，以致一只新水壶常常比修理师傅一小时的工钱还便宜。然而在过去五年里，维修开始回归，而且主要不是出于环保原因。有三股力量在起作用。第一是成本：新电器的价格重新上涨，而维修工的工资几乎没变。第二是设计：越来越多产品使用标准零件，因此磨损的单个部件可以替换，而不必换掉整台机器。第三是法律：若干欧洲国家现在要求厂商提供最长十年的备件并公布维修手册。修理师傅说，剩下的最大障碍不是零件，而是技能——这个行当损失了一代工人，而培养一名合格的技师需要数年。一些城市用社区工作坊来回应：志愿者在那里教基础维修并出借工具。参加者以三十五岁以下的人最多——而这群人过去被认为更喜欢直接换新。",
      "qs": [
        {
          "n": 1,
          "q": "What happened to repair shops in the nineteen nineties?",
          "options": [
            "They became more common on high streets.",
            "They declined because new goods became very cheap.",
            "They were strongly supported by new laws.",
            "They began importing spare parts."
          ],
          "answer": "B",
          "why": "原文：prices fell so far that a new kettle often cost less than an hour of a repairer's time."
        },
        {
          "n": 2,
          "q": "According to repairers, what is the biggest remaining obstacle?",
          "options": [
            "The shortage of spare parts.",
            "A lack of skilled workers.",
            "High taxes on repairs.",
            "Customers' distrust of repaired goods."
          ],
          "answer": "B",
          "why": "原文：the biggest remaining obstacle is not parts but skill."
        },
        {
          "n": 3,
          "q": "Who makes up the largest group at community repair workshops?",
          "options": [
            "Retired technicians.",
            "People under thirty-five.",
            "Factory managers.",
            "Primary school children."
          ],
          "answer": "B",
          "why": "原文：Attendance is highest among people under thirty-five."
        }
      ]
    },
    {
      "id": "p260926c",
      "lv": "六级",
      "type": "听力篇章",
      "date": "2026-09-26",
      "title": "Attention as a Scarce Resource",
      "text": "In nineteen seventy-one the economist Herbert Simon made a prediction that now reads like a description of daily life: a wealth of information creates a poverty of attention. The sentence is easy to quote and hard to act on. Economists have since tried to measure attention as a resource. In one study, researchers gave office workers a fixed amount of work and allowed them either free access to email or three scheduled checks a day. The scheduled group finished the same work in less time and reported lower stress. What the study did not show is that email is harmful in itself; the difference came from switching, not from the messages. Each time a worker returned to a task, they needed several minutes to reach their previous level of concentration. Attention is unusual as an economic good because it cannot be stored. An hour not spent thinking about a problem is not saved up for later, and no one can buy more of it. This is why the most valuable tools are not those that save time but those that protect it: a quiet room, a fixed schedule, and a colleague who agrees not to interrupt. Businesses are slowly learning the same lesson, and some now measure the cost of interruptions in the same way they measure the cost of materials.",
      "trans": "一九七一年，经济学家赫伯特·西蒙做出了一个如今读起来像在描述日常生活的预测：信息的丰裕造成注意力的匮乏。这句话容易引用，却难以落实。此后经济学家一直尝试把注意力当作一种资源来度量。在一项研究中，研究者给办公室职员固定的工作量，允许他们要么随时查看邮件，要么每天只在三个固定时间查看。按点查看的那组用更少的时间完成了同样的工作，并报告压力更低。这项研究没有证明邮件本身有害；差别来自切换，而不是来自邮件内容。每当一个工人回到原来的任务，都需要好几分钟才能恢复到之前的专注水平。注意力作为一种经济品很特殊，因为它无法储存：没有用来思考某个问题的那一小时，并不能存到以后再用，也没有人能买到更多。这就是为什么最有价值的工具不是节省时间的工具，而是保护时间的工具：一间安静的屋子、一张固定的时间表，以及一位同意不打扰你的同事。企业也在慢慢学到同一课，有些公司现在像核算材料成本那样核算打扰的代价。",
      "qs": [
        {
          "n": 1,
          "q": "What did Herbert Simon point out in nineteen seventy-one?",
          "options": [
            "Information would become too expensive to produce.",
            "Abundant information leads to scarce attention.",
            "Economists should study new technology.",
            "Paper mail would be replaced by email."
          ],
          "answer": "B",
          "why": "原文：a wealth of information creates a poverty of attention."
        },
        {
          "n": 2,
          "q": "What did the email study find?",
          "options": [
            "Email itself damaged workers' health.",
            "Workers who checked email at fixed times finished the same work faster.",
            "Workers preferred free access to email.",
            "Email had no measurable effect on work."
          ],
          "answer": "B",
          "why": "原文：The scheduled group finished the same work in less time and reported lower stress."
        },
        {
          "n": 3,
          "q": "Why is attention unusual as an economic good?",
          "options": [
            "It cannot be stored for later use.",
            "It is controlled by large companies.",
            "Its price keeps rising.",
            "It can be shared among workers."
          ],
          "answer": "A",
          "why": "原文：Attention is unusual as an economic good because it cannot be stored."
        }
      ]
    },
    {
      "id": "l260926a",
      "lv": "六级",
      "type": "讲座讲话",
      "date": "2026-09-26",
      "title": "Cooling Cities: Urban Heat Islands",
      "text": "In this talk I want to look at a problem that every large city now faces: the urban heat island. A city centre can be several degrees warmer than the countryside around it, and the reasons are well understood. Dark surfaces such as asphalt and concrete absorb solar radiation during the day and release it slowly at night. Tall buildings trap that heat, and vehicles and air conditioners add to it. The result is not merely uncomfortable. Heat stress reduces the amount of work people can do, raises the demand for electricity exactly when supply is under strain, and is most dangerous for the elderly. Traditionally, cities have planted trees to cool streets, and measurement supports the practice: a mature street tree can cut the surface temperature of the pavement beneath it by more than ten degrees. But planting is slower than heating. A newly planted tree may take twenty years to produce the shade of an old one, and in some districts the pavement is too narrow for roots. So engineers have turned to cheaper, faster measures: pale paint on roofs, which reflects sunlight; shade structures over bus stops and playgrounds; and, most controversially, fountains and misting devices, which cool the air only where people stand and use a great deal of water. The honest conclusion is that no single measure will work alone. Cities that have made progress treat cooling as a long-term programme, combining trees, materials and design rather than picking one solution.",
      "trans": "在本次讲座中，我想谈一个如今每座大城市都面临的问题：城市热岛。市中心可能比周边乡村高出好几度，其原因已被研究得很清楚。沥青和混凝土这类深色表面白天吸收太阳辐射，夜间缓慢释放；高楼把这些热量困住，车辆和空调又加剧了它。后果不只是不舒适：热应激会降低人能完成的工作量，恰好在电力供应紧张时推高用电需求，而且对老年人最危险。传统上，城市靠种树给街道降温，测量也支持这一做法：一棵成熟的街道树能把它下方路面的表面温度降低十度以上。但种树比升温慢得多。新栽的树可能要二十年才能长出老树的树荫，而在一些街区，人行道太窄，容不下根系。于是工程师转向更便宜、更快的办法：把屋顶刷成浅色以反射阳光；在公交站和运动场上加遮阳构筑物；以及最有争议的喷泉和喷雾装置——它们只能给有人站立的局部空气降温，而且耗水很多。老实说，结论是：没有哪一项措施能单独奏效。取得进展的城市都把降温当成一项长期工程，把树木、材料和设计结合起来，而不是只挑一个方案。",
      "qs": [
        {
          "n": 1,
          "q": "What is one cause of the urban heat island effect?",
          "options": [
            "Trees release heat at night.",
            "Dark surfaces absorb solar radiation and release it slowly.",
            "Rainfall is blocked by tall buildings.",
            "Wind speeds increase in city centres."
          ],
          "answer": "B",
          "why": "原文：Dark surfaces such as asphalt and concrete absorb solar radiation during the day and release it slowly at night."
        },
        {
          "n": 2,
          "q": "What does the speaker say about planting trees to cool streets?",
          "options": [
            "It works faster than other measures.",
            "It is the cheapest option available.",
            "It works much more slowly than the city heats up.",
            "It has little measurable effect."
          ],
          "answer": "C",
          "why": "原文：But planting is slower than heating."
        },
        {
          "n": 3,
          "q": "What is the speaker's conclusion?",
          "options": [
            "Fountains are the best single solution.",
            "Cities should choose the cheapest measure.",
            "Cooling cities requires combining several long-term measures.",
            "Only wealthy cities can afford to act."
          ],
          "answer": "C",
          "why": "原文：no single measure will work alone ... combining trees, materials and design."
        }
      ]
    }
  ]
};
