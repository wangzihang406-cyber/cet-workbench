// 四六级备考工作台 · 语法知识点库（原创整理，面向四级/六级）
window.CET_GRAMMAR = [
  {
    id: "g01", level: "四级", topic: "时态：一般过去 vs 现在完成",
    points: [
      "一般过去时表示过去某个时间点发生的动作，与具体时间（yesterday, last year, in 2020）连用。",
      "现在完成时强调过去动作对现在的影响，或持续到现在，常与 already, yet, just, ever, never, since, for 连用。",
      "判断口诀：句中出现明确过去时间 → 用过去时；句中出现 since/for/already/yet → 优先考虑完成时。",
      "注意：since 后接时间点或一般过去时的从句，主句用现在完成时。"
    ],
    examples: [
      "I visited the museum last Sunday.（明确过去时间）",
      "I have visited the museum three times this year.（强调至今的经历）",
      "She has lived here since she graduated.（since + 过去从句）"
    ],
    quiz: [
      { q: "He ______ in this city for ten years before he moved to Beijing.", options: ["lives", "has lived", "had lived", "is living"], answer: 2, exp: "在 moved 之前已持续十年，是“过去的过去”，用过去完成时 had lived。" },
      { q: "— Have you finished your report? — Yes, I ______ it last night.", options: ["finish", "finished", "have finished", "had finished"], answer: 1, exp: "有明确过去时间 last night，用一般过去时。" },
      { q: "Great changes ______ in my hometown over the past decade.", options: ["took place", "take place", "have taken place", "had taken place"], answer: 2, exp: "over the past decade 表示持续到现在，用现在完成时。" }
    ]
  },
  {
    id: "g02", level: "四级", topic: "被动语态",
    points: [
      "被动语态 = be + 过去分词；重点是 be 的时态变化。",
      "只有及物动词才有被动语态：happen, occur, take place, appear, rise 等不及物动词没有被动式。",
      "常见被动结构：be considered as（被认为）、be based on（基于）、be made of/from（由…制成）、it is said/reported that…（据说/据报道）。",
      "含情态动词的被动：must be done, should have been done。"
    ],
    examples: [
      "The new library is being built now.（现在进行时被动）",
      "The problem must be solved at once.（情态动词被动）",
      "It is reported that the prices will rise.（it + 被动 + that 从句）"
    ],
    quiz: [
      { q: "The accident ______ on a rainy night last month.", options: ["was happened", "happened", "is happened", "has happened"], answer: 1, exp: "happen 是不及物动词，没有被动语态，用主动式过去时。" },
      { q: "The manager insisted that the plan ______ before Friday.", options: ["must carry out", "be carried out", "carried out", "will be carried out"], answer: 1, exp: "insist 后从句用虚拟语气 (should) be done；此处为被动形式 be carried out。" },
      { q: "This kind of paper ______ wood.", options: ["is made of", "is made from", "makes from", "is made in"], answer: 1, exp: "看不出原材料用 be made from（由木材制成）；be made of 用于看得出原材料。" }
    ]
  },
  {
    id: "g03", level: "四级", topic: "虚拟语气",
    points: [
      "与现在事实相反：if + 过去式(were)，主句 would/could/might + 动词原形。",
      "与过去事实相反：if + had done，主句 would/could/might have done。",
      "与将来事实相反：if + 过去式 / were to do / should do，主句 would + 动词原形。",
      "特殊结构：It is necessary/important that + (should) do；suggest/insist/demand/require 后从句用 (should) do。",
      "wish 后接虚拟：wish + 过去式（现在）/ had done（过去）/ would do（将来）。"
    ],
    examples: [
      "If I were you, I would apply for the scholarship.（与现在相反）",
      "If he had studied harder, he would have passed.（与过去相反）",
      "It is essential that everyone (should) follow the rules.（should 可省略）"
    ],
    quiz: [
      { q: "If I ______ more time yesterday, I would have finished the task.", options: ["have", "had", "had had", "would have"], answer: 2, exp: "与过去事实相反，从句用 had + 过去分词。" },
      { q: "The doctor suggested that she ______ more exercise.", options: ["takes", "took", "take", "will take"], answer: 2, exp: "suggest 表示“建议”时，从句用 (should) + 动词原形。" },
      { q: "I wish I ______ how to drive now.", options: ["know", "knew", "have known", "will know"], answer: 1, exp: "wish 后与现在事实相反，用一般过去式 knew。" }
    ]
  },
  {
    id: "g04", level: "四级", topic: "非谓语动词（不定式 / 动名词 / 分词）",
    points: [
      "一山不容二虎：一个简单句中只能有一个谓语动词，其他动词需变为非谓语形式。",
      "不定式 to do 常表示目的、将来、未做；动名词 doing 表示习惯、已做、客观事实。",
      "remember/forget/regret + to do（未做）与 + doing（已做）意思不同。",
      "分词作状语：现在分词 doing 与主语是主动关系；过去分词 done 与主语是被动关系。",
      "常见搭配：be used to doing（习惯于）、used to do（过去常做）、look forward to doing。"
    ],
    examples: [
      "Remember to lock the door.（记得去做，尚未做）",
      "I remember locking the door.（记得做过）",
      "Seen from the top of the hill, the city looks beautiful.（city 被看，用过去分词）"
    ],
    quiz: [
      { q: "He is used to ______ up early every morning.", options: ["get", "getting", "got", "be got"], answer: 1, exp: "be used to 中 to 是介词，后接动名词。" },
      { q: "______ from space, the earth looks like a blue ball.", options: ["Seeing", "To see", "Seen", "See"], answer: 2, exp: "earth 是被看的对象，用过去分词 Seen 作状语。" },
      { q: "I regret ______ you that your application was rejected.", options: ["tell", "telling", "to tell", "told"], answer: 2, exp: "regret to do 表示“遗憾地要做（告知）”，此处正是将要告知。" }
    ]
  },
  {
    id: "g05", level: "四级", topic: "定语从句",
    points: [
      "关系代词：who（人）、which（物）、that（人或物）、whose（所属）、whom（人，作宾语）。",
      "关系副词：where（地点）、when（时间）、why（原因），相当于“介词 + which”。",
      "只用 that 的情况：先行词被 all/every/only/序数词/最高级修饰，或先行词既有人又有物。",
      "非限制性定语从句用逗号隔开，不能用 that，也不能省略关系词。",
      "介词提前时只能用 which/whom：the room in which he lives。"
    ],
    examples: [
      "The book that I borrowed yesterday is very useful.（可换 which）",
      "This is the house where I was born.（= in which）",
      "He passed the exam, which surprised everyone.（非限制性）"
    ],
    quiz: [
      { q: "This is the best film ______ I have ever seen.", options: ["which", "that", "what", "who"], answer: 1, exp: "先行词被最高级 best 修饰，只能用 that。" },
      { q: "I still remember the day ______ we first met.", options: ["which", "that", "when", "where"], answer: 2, exp: "先行词是时间 the day，用关系副词 when。" },
      { q: "The teacher, ______ classes are lively, is popular among students.", options: ["who", "which", "whose", "that"], answer: 2, exp: "表示“老师的课”，所属关系用 whose。" }
    ]
  },
  {
    id: "g06", level: "四级", topic: "状语从句与连词",
    points: [
      "时间：when / while / as / since / until / as soon as / the moment。",
      "原因：because / since / as / now that；结果：so … that / such … that。",
      "让步：although / though / even if / no matter how / while（虽则）。",
      "条件：if / unless / as long as / provided that。",
      "主将从现：时间、条件状语从句中，主句用将来时，从句用一般现在时表将来。"
    ],
    examples: [
      "As soon as he arrives, we will start the meeting.（主将从现）",
      "Although it was raining, they continued walking.",
      "He was so tired that he fell asleep at once."
    ],
    quiz: [
      { q: "I will call you as soon as I ______ at the airport.", options: ["arrive", "will arrive", "arrived", "am arriving"], answer: 0, exp: "时间状语从句用一般现在时表将来。" },
      { q: "______ hard he tried, he could not solve the problem.", options: ["However", "No matter what", "Whatever", "Whenever"], answer: 0, exp: "However + 形容词/副词 = no matter how，表示“无论多么”。" },
      { q: "Take an umbrella ______ it rains.", options: ["in case", "so that", "even though", "as if"], answer: 0, exp: "in case 表示“以防（万一）”。" }
    ]
  },
  {
    id: "g07", level: "六级", topic: "名词性从句（主语/宾语/表语/同位语从句）",
    points: [
      "that 引导陈述性从句，只起连接作用，不作成分（宾语从句中可省略）。",
      "whether 表示“是否”，在主语从句、表语从句、介词后只能用 whether。",
      "what = the thing(s) that，在从句中作主语或宾语。",
      "同位语从句解释前面抽象名词的内容：fact, idea, news, belief, possibility, evidence。",
      "语序必须是陈述语序：I don't know what he wants.（不是 what does he want）"
    ],
    examples: [
      "Whether he will come is still unknown.（主语从句）",
      "The fact that she passed the exam surprised us.（同位语从句）",
      "What matters is not the result but the effort.（what 作主语）"
    ],
    quiz: [
      { q: "______ we need is more practice, not more advice.", options: ["That", "What", "Whether", "Which"], answer: 1, exp: "从句缺宾语，用 what（= the thing that）。" },
      { q: "It depends on ______ the weather will be fine.", options: ["that", "if", "whether", "what"], answer: 2, exp: "介词 on 后用 whether，不能用 if。" },
      { q: "The news ______ the team had won spread quickly.", options: ["which", "what", "that", "whether"], answer: 2, exp: "news 后接同位语从句，用 that 说明内容。" }
    ]
  },
  {
    id: "g08", level: "六级", topic: "情态动词与推测",
    points: [
      "表推测：must（肯定，用于肯定句）、can't（否定推测）、may/might（可能性较小）。",
      "对过去的推测：must have done（一定做过）、can't have done（不可能做过）、may have done（可能做过）。",
      "should have done 表示“本应做而未做”，含批评；needn't have done 表示“本不必做却做了”。",
      "must 引导的一般疑问句，否定回答用 needn't 或 don't have to。"
    ],
    examples: [
      "He must be in the library now.（现在的肯定推测）",
      "You should have handed in the paper yesterday.（本应做而没做）",
      "She can't have finished so quickly.（对过去的否定推测）"
    ],
    quiz: [
      { q: "The ground is wet. It ______ last night.", options: ["must rain", "must have rained", "should rain", "can rain"], answer: 1, exp: "对过去情况的肯定推测用 must have done。" },
      { q: "You ______ me your notes; I already had a copy.", options: ["mustn't give", "needn't have given", "should have given", "can't give"], answer: 1, exp: "本不必做却做了，用 needn't have done。" },
      { q: "— Must I hand in the form today? — No, you ______.", options: ["mustn't", "needn't", "can't", "shouldn't"], answer: 1, exp: "must 提问的否定回答用 needn't（不必）。" }
    ]
  },
  {
    id: "g09", level: "六级", topic: "主谓一致",
    points: [
      "就近原则：there be、either…or、neither…nor、not only…but also 后，谓语与最近的主语一致。",
      "就远原则：with / together with / as well as / along with 连接时，谓语与第一个主语一致。",
      "集体名词 family, team, class，视为整体用单数，强调成员用复数。",
      "the number of（…的数量）用单数；a number of（许多）用复数。",
      "分数/百分数 + of + 名词，谓语与后面的名词一致。"
    ],
    examples: [
      "Neither the students nor the teacher was aware of it.（就近）",
      "The teacher, together with his students, is visiting the museum.（就远）",
      "The number of applicants is increasing.（单数）"
    ],
    quiz: [
      { q: "The number of students in our school ______ over 3,000.", options: ["are", "is", "were", "have been"], answer: 1, exp: "the number of 表数量，谓语用单数。" },
      { q: "Not only the students but also the teacher ______ the plan.", options: ["agree with", "agrees with", "agree to", "agrees to"], answer: 1, exp: "not only…but also 就近原则，与 the teacher 一致，用单数；agree with 后接人或意见。" },
      { q: "Two thirds of the surface of the earth ______ covered with water.", options: ["is", "are", "have", "were"], answer: 0, exp: "分数 + of + 不可数名词（surface）作主语，谓语用单数。" }
    ]
  },
  {
    id: "g10", level: "六级", topic: "倒装与强调",
    points: [
      "否定词置句首引起部分倒装：Never / Hardly / Not only / No sooner / Little + 助动词 + 主语。",
      "only + 状语置句首，主句倒装：Only in this way can we succeed.",
      "so/such 置句首：So difficult was the task that nobody finished it.",
      "强调句型：It is / was + 被强调部分 + that / who + 其余部分。",
      "Not until … 引导时，倒装出现在主句：Not until he left did I realize…"
    ],
    examples: [
      "Never have I seen such a beautiful campus.（否定词置首）",
      "Only by working together can we solve it.",
      "It was John who broke the window.（强调主语）"
    ],
    quiz: [
      { q: "Not until midnight ______ the work.", options: ["he finished", "did he finish", "he did finish", "finished he"], answer: 1, exp: "Not until 置句首，主句部分倒装 did he finish。" },
      { q: "It was in the library ______ I met my old friend.", options: ["where", "that", "which", "when"], answer: 1, exp: "强调地点状语的强调句型用 that。" },
      { q: "So loudly ______ that everyone in the hall turned around.", options: ["he spoke", "did he speak", "he did speak", "spoke he"], answer: 1, exp: "So + 副词置句首，主句倒装 did he speak。" }
    ]
  },
  {
    id: "g11", level: "四级", topic: "比较结构与倍数表达",
    points: [
      "比较级前可加 much / far / a lot / slightly / even 表示程度，但不能加 very。",
      "the more … the more … 表示“越…越…”。",
      "倍数表达：A is three times as large as B / A is twice the size of B / A is three times larger than B。",
      "表示“不如”：not so/as + 原级 + as。",
      "最高级常与 in / of 短语连用；比较级中避免与自身比较，需加 other/else。"
    ],
    examples: [
      "This room is three times as big as that one.",
      "The more you practice, the more confident you become.",
      "He is taller than any other student in his class."
    ],
    quiz: [
      { q: "The new stadium is ______ larger than the old one.", options: ["very", "much", "more", "so"], answer: 1, exp: "修饰比较级用 much，不能用 very。" },
      { q: "The harder you work, ______ progress you will make.", options: ["the more", "more", "the most", "much more"], answer: 0, exp: "the + 比较级…, the + 比较级… 结构。" },
      { q: "This bridge is twice ______ of that one.", options: ["as long", "the length", "longer", "so long"], answer: 1, exp: "倍数 + the + 名词（size/length/weight）+ of 是常见表达。" }
    ]
  },
  {
    id: "g12", level: "四级", topic: "高频固定搭配与介词",
    points: [
      "动词 + 介词：depend on（依靠）、result in（导致）、result from（起因于）、consist of（由…组成）。",
      "形容词 + 介词：be good at、be interested in、be responsible for、be aware of、be similar to。",
      "名词 + 介词：an increase in、a solution to、the key to、an approach to。",
      "写作常用短语：play an important role in、make contributions to、attach importance to、be committed to doing。"
    ],
    examples: [
      "His success resulted from years of effort.（起因于）",
      "We should attach importance to environmental protection.",
      "She is responsible for organizing the meeting."
    ],
    quiz: [
      { q: "His failure ______ his carelessness.", options: ["resulted in", "resulted from", "resulted to", "resulted of"], answer: 1, exp: "result from 表示“起因于”。" },
      { q: "We must find a solution ______ this problem.", options: ["of", "for", "to", "with"], answer: 2, exp: "solution to + 问题，固定搭配。" },
      { q: "Reading widely contributes ______ improving your writing.", options: ["for", "to", "with", "in"], answer: 1, exp: "contribute to doing 表示“有助于”。" }
    ]
  },
  {
    id: "g13", level: "四级", topic: "冠词与名词单复数",
    points: [
      "泛指用 a/an（可数名词单数）或不加冠词（可数名词复数 / 不可数名词）；特指用 the。",
      "独一无二的事物、最高级、序数词、乐器前用 the：the sun, the best way, the first time, play the piano。",
      "常见不可数名词：information, advice, furniture, equipment, progress, knowledge, news —— 不能加 s，需用量词 a piece of。",
      "固定搭配：in the morning / at night / go to school（表目的）/ in charge of / make progress。"
    ],
    examples: [
      "He gave me a useful piece of advice.（advice 不可数）",
      "The moon moves around the earth.（独一无二）",
      "She plays the violin very well.（乐器前加 the）"
    ],
    quiz: [
      { q: "I have collected a lot of ______ about this topic.", options: ["informations", "information", "an information", "informations'"], answer: 1, exp: "information 是不可数名词，不能加 s，也不能用 a/an。" },
      { q: "He is ______ honest student and always helps others.", options: ["a", "an", "the", "不填"], answer: 1, exp: "honest 的 h 不发音，读音以元音开头，用 an。" },
      { q: "Of all the subjects, English is ______ I like best.", options: ["a one", "the one", "one", "ones"], answer: 1, exp: "在最高级语境中表示特指“那一个”，用 the one。" }
    ]
  },
  {
    id: "g14", level: "四级", topic: "形容词与副词的位置与程度",
    points: [
      "形容词修饰名词，副词修饰动词、形容词和整个句子。",
      "enough 修饰形容词/副词时要放在其后：good enough, fast enough；修饰名词时放前面：enough time。",
      "too...to（太…而不能）、so...that（如此…以至于）、such + 名词短语 + that。",
      "多个形容词排序：限定词 → 大小 → 形状 → 年龄 → 颜色 → 国籍 → 材料：a small old brown wooden table。"
    ],
    examples: [
      "The room is big enough for ten people.",
      "It was such a good lecture that nobody left early.",
      "She speaks English so fluently that everyone admires her."
    ],
    quiz: [
      { q: "The box is ______ for me to carry.", options: ["heavy enough", "enough heavy", "so heavy", "too much heavy"], answer: 0, exp: "enough 修饰形容词要后置。" },
      { q: "It was ______ interesting a book that I read it twice.", options: ["so", "such", "very", "too"], answer: 0, exp: "so + 形容词 + a/an + 名词 + that 是固定结构。" },
      { q: "He bought a ______ vase yesterday.", options: ["Chinese beautiful small", "beautiful small Chinese", "small beautiful Chinese", "small Chinese beautiful"], answer: 1, exp: "语序为：大小 → 形状 → 年龄 → 颜色 → 国籍 → 材料。" }
    ]
  },
  {
    id: "g15", level: "六级", topic: "将来完成时与过去将来",
    points: [
      "将来完成时 will have done：表示到将来某一时间前已完成的动作，常与 by + 将来时间连用。",
      "过去将来时 would do：常出现在宾语从句中，主句为过去时。",
      "过去将来完成时 would have done：表示从过去看，将来某时前会完成的动作（多见于虚拟语气）。",
      "by the time + 一般现在时，主句用将来完成时。"
    ],
    examples: [
      "By the end of next month, we will have finished the project.",
      "He said he would come back the following week.",
      "By the time you arrive, I will have prepared the report."
    ],
    quiz: [
      { q: "By next June, she ______ from university.", options: ["graduates", "will graduate", "will have graduated", "has graduated"], answer: 2, exp: "by + 将来时间，用将来完成时。" },
      { q: "He told me he ______ the task before Friday.", options: ["finishes", "will finish", "would have finished", "has finished"], answer: 2, exp: "从过去视角看将来某时前会完成，用 would have done。" },
      { q: "By the time the guests arrive, we ______ everything ready.", options: ["get", "will get", "will have got", "got"], answer: 2, exp: "by the time + 一般现在时，主句用将来完成时。" }
    ]
  },
  {
    id: "g16", level: "六级", topic: "独立主格与 with 复合结构",
    points: [
      "独立主格：名词/代词 + 分词/形容词/介词短语，逻辑主语与主句主语不同。",
      "with + 宾语 + 分词/形容词/不定式：表示伴随、原因或条件，是写作加分结构。",
      "现在分词表示主动、进行；过去分词表示被动、完成。",
      "独立结构前可加 there being / weather permitting 等固定形式。"
    ],
    examples: [
      "Weather permitting, we will go hiking tomorrow.（独立主格）",
      "He sat there, with his eyes fixed on the screen.（with + 过去分词）",
      "There being no bus, we had to walk home."
    ],
    quiz: [
      { q: "______ nothing to do, we went to the library.", options: ["There was", "There being", "Being", "It being"], answer: 1, exp: "there be 的独立主格形式为 there being。" },
      { q: "She left the room, with the door ______ open.", options: ["leaving", "left", "to leave", "leave"], answer: 1, exp: "door 与 leave 是被动关系，用过去分词 left。" },
      { q: "All things ______, the plan is quite practical.", options: ["considering", "considered", "to consider", "consider"], answer: 1, exp: "all things considered 是固定独立主格，表示“全面考虑之后”。" }
    ]
  },
  {
    id: "g17", level: "六级", topic: "让步与转折的多样表达",
    points: [
      "基础：although / though / even though / while（虽则）。",
      "倒装式让步：形容词/副词 + as/though + 主语 + 谓语 —— Difficult as it was, he finished it.",
      "no matter how/what/who = however/whatever/whoever 引导让步从句。",
      "转折连接：however、nevertheless、on the contrary、in spite of / despite + 名词。"
    ],
    examples: [
      "Impossible as it seemed, they achieved the goal.",
      "No matter how hard he tried, he could not convince her.",
      "Despite the heavy rain, the match went on."
    ],
    quiz: [
      { q: "______ as he is, he never looks down on others.", options: ["Rich", "Richer", "Richest", "Being rich"], answer: 0, exp: "as 引导让步从句时，表语形容词提前（Rich as he is）。" },
      { q: "______ happens, we will keep our promise.", options: ["No matter what", "No matter how", "No matter who", "No matter where"], answer: 0, exp: "what 在从句中作主语，表示“无论发生什么”。" },
      { q: "He failed the exam ______ his hard work.", options: ["although", "in spite of", "even though", "no matter"], answer: 1, exp: "in spite of 后接名词短语，不能接句子。" }
    ]
  },
  {
    id: "g18", level: "六级", topic: "平行结构与句子简化",
    points: [
      "平行结构：and/or/but 连接的部分词性、结构要一致 —— reading, writing and speaking。",
      "常见错误：不定式与动名词混用，如 to read and writing 应统一为 to read and write。",
      "避免冗长：用分词、同位语、名词短语简化从句，提高写作档次。",
      "写作中优先使用：because of / due to + 名词 替代 because 从句。"
    ],
    examples: [
      "The course aims to improve listening, speaking and writing skills.（三项并列一致）",
      "Faced with difficulties, he chose to continue.（分词简化从句）",
      "Due to the heavy traffic, we arrived late.（名词短语替代从句）"
    ],
    quiz: [
      { q: "The job requires patience, creativity and ______ well with others.", options: ["to work", "working", "work", "worked"], answer: 1, exp: "与 patience、creativity 并列，应使用动名词 working。" },
      { q: "______ by his teacher, he decided to try again.", options: ["Encouraging", "Encouraged", "To encourage", "Encourage"], answer: 1, exp: "he 是被鼓励的对象，用过去分词表示被动。" },
      { q: "______ the bad weather, the trip was cancelled.", options: ["Because", "Since", "Due to", "Although"], answer: 2, exp: "due to 后接名词短语，可替代 because of。" }
    ]
  }
];
