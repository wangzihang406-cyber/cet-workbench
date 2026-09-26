/* 四六级题型听力套题库
 * 说明：题型、篇幅、提问方式按四六级真题标准编写（短篇新闻 / 长对话 / 听力篇章 / 讲座），
 *      音频由 tools/gen_audio.py 用真人语音合成（audio/<id>.mp3），不是原版真题录音。
 * id 规则：n=短篇新闻 c=长对话 p=听力篇章 l=讲座 + YYMMDD + 序号，永不复用。
 * 每套：{ id, lv, type, date, title, text | lines, trans, qs:[{n,q,options[4],answer,why}] }
 * answer 用字母 A/B/C/D。
 */
window.CET_LISTEN = {
  "updated": "2026-09-26",
  "sets": [
    {
      "id": "n260926a",
      "lv": "四级",
      "type": "短篇新闻",
      "date": "2026-09-26",
      "title": "Campus Charging Cabinets for E-Bikes",
      "text": "Several universities in eastern China have begun installing charging cabinets for electric bicycles in dormitory areas. The move follows a series of fires caused by batteries charged illegally inside student rooms. Under the new system, riders pay a small fee and plug their batteries into a locked cabinet that cuts off power once a battery is full. University officials say the cabinets are fitted with heat sensors and automatic alarms, and a staff member checks them three times a day. The first month showed a forty per cent drop in the number of batteries brought into dormitories. Students welcomed the change but complained that the cabinets are often full at night, when most riders return. The university says another two hundred sockets will be added before the winter term. Safety experts say the real test will come in the coldest weeks, when battery performance drops and riders may be tempted to charge indoors again.",
      "trans": "中国东部的几所大学开始在宿舍区安装电动自行车充电柜。此举的起因是一系列由在学生房间内违规充电的电池引发的火灾。在新系统下，骑车人付少量费用，把电池插入带锁的柜子，电池充满后会自动断电。校方表示，充电柜配有温度传感器和自动报警器，并由一名工作人员每天检查三次。第一个月的数据显示，被带进宿舍的电池数量下降了百分之四十。学生们欢迎这一改变，但抱怨充电柜在晚上常常满位——那是大多数骑车人回宿舍的时间。校方表示，冬季学期前还会再加两百个插位。安全专家表示，真正的考验将在最冷的那几周到来：那时电池性能下降，骑车人可能又忍不住在室内充电。",
      "qs": [
        {"n": 1, "q": "Why did the universities install the charging cabinets?", "options": ["To cut electricity costs for students.", "To prevent fires caused by indoor battery charging.", "To reduce the number of e-bikes on campus.", "To collect fees from e-bike riders."], "answer": "B", "why": "原文：The move follows a series of fires caused by batteries charged illegally inside student rooms."},
        {"n": 2, "q": "What was reported after the first month of use?", "options": ["Battery fires stopped completely.", "E-bike sales fell sharply.", "Fewer batteries were taken into dormitories.", "Students refused to pay the fee."], "answer": "C", "why": "原文：The first month showed a forty per cent drop in the number of batteries brought into dormitories."},
        {"n": 3, "q": "What do safety experts think about the new system?", "options": ["It has solved the problem for good.", "The coldest weeks will be the real test.", "Charging should be free of charge.", "Students should leave e-bikes at home in winter."], "answer": "B", "why": "原文：the real test will come in the coldest weeks, when battery performance drops."}
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
        {"n": 1, "q": "What is the purpose of the museum's evening programme?", "options": ["To attract visitors who are busy in the daytime.", "To raise more money from tickets.", "To display newly bought paintings.", "To train young curators."], "answer": "A", "why": "原文：The programme was designed for office workers and students who cannot visit during the day."},
        {"n": 2, "q": "What change in behaviour did the curators notice?", "options": ["Visitors stayed longer in front of paintings.", "Visitors spent more time in the shop and the cafe.", "Visitors asked far more questions.", "Visitors came in much larger groups."], "answer": "B", "why": "原文：evening guests spend less time in front of famous paintings and more time in the shop and the cafe."},
        {"n": 3, "q": "How have other museums in the city responded?", "options": ["They have criticised the plan.", "They have raised their ticket prices.", "Two of them have announced similar trials.", "They have decided to close earlier."], "answer": "C", "why": "原文：two have already announced similar trials."}
      ]
    },
    {
      "id": "c260926a",
      "lv": "四级",
      "type": "长对话",
      "date": "2026-09-26",
      "title": "Choosing Courses before an Internship",
      "lines": [
        ["Amy", "Professor Li, can I ask you about my course plan for next term?", "李教授，我能问一下下学期的选课计划吗？"],
        ["Li", "Of course. You are taking four courses now, is that right?", "当然。你现在在上四门课，对吗？"],
        ["Amy", "Actually five. I added a statistics course in the second week, and now I am worried it is too much.", "其实是五门。我第二周加了一门统计课，现在担心太多了。"],
        ["Li", "That depends on your goal. Are you still applying for the exchange programme in Germany?", "那取决于你的目标。你还在申请德国的交换项目吗？"],
        ["Amy", "I am, and they ask for a statistics grade, so I do not want to drop it. But the internship at the newspaper starts in March.", "是的，他们要求统计课成绩，所以我不想退掉它。但报社的实习三月就开始了。"],
        ["Li", "Then my advice is to move statistics to the summer term. It is offered twice a year, and the grade will still arrive before the exchange application closes.", "那我建议把统计课挪到暑期学期。这门课一年开两次，成绩仍然会在交换申请截止之前出来。"],
        ["Amy", "I did not know that. That would leave me four courses plus the internship.", "我不知道这个。那我就剩四门课加实习了。"],
        ["Li", "Exactly. Send me an email before Friday and I will sign the change form for you.", "正是。周五之前给我发一封邮件，我帮你签改课表。"]
      ],
      "trans": "艾米：李教授，我能问一下我下学期的选课计划吗？／李教授：当然。你现在在上四门课，对吧？／艾米：其实是五门。我第二周加了一门统计课，现在担心太多了。／李教授：那取决于你的目标。你还在申请德国的交换项目吗？／艾米：是的，他们要求统计课成绩，所以我不想退掉。但报社的实习三月就开始了。／李教授：那我建议把统计课挪到暑期学期。这门课一年开两次，成绩仍会在交换申请截止前出来。／艾米：我不知道这个。那我就剩四门课加实习了。／李教授：正是。周五前给我发封邮件，我帮你签改课表。",
      "qs": [
        {"n": 1, "q": "How many courses is Amy taking this term?", "options": ["Three.", "Four.", "Five.", "Six."], "answer": "C", "why": "原文：Actually five. I added a statistics course in the second week."},
        {"n": 2, "q": "Why does Amy want to keep the statistics course?", "options": ["She enjoys the teacher's style.", "The exchange programme requires the grade.", "It is required for graduation.", "Her best friend is in the same class."], "answer": "B", "why": "原文：they ask for a statistics grade, so I do not want to drop it."},
        {"n": 3, "q": "What does Professor Li suggest?", "options": ["Giving up the internship.", "Taking statistics in the summer term.", "Applying for another exchange programme.", "Asking a different teacher for help."], "answer": "B", "why": "原文：my advice is to move statistics to the summer term."},
        {"n": 4, "q": "What should Amy do before Friday?", "options": ["Send the professor an email.", "Pay a course change fee.", "Visit the newspaper office.", "Take the statistics exam."], "answer": "A", "why": "原文：Send me an email before Friday and I will sign the change form for you."}
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
        {"n": 1, "q": "What is one advantage of walking meetings mentioned in the passage?", "options": ["They last longer than normal meetings.", "They usually reduce interruptions.", "They allow more people to take part.", "They save the company travel costs."], "answer": "B", "why": "原文：taking a person away from their screen and their email usually means fewer interruptions."},
        {"n": 2, "q": "What does the short length of a walking meeting force people to do?", "options": ["To take more breaks during the day.", "To decide what really matters.", "To invite more colleagues.", "To write longer records afterwards."], "answer": "B", "why": "原文：short by design, which forces both sides to decide what really matters."},
        {"n": 3, "q": "For what kind of talk are walking meetings said to be unsuitable?", "options": ["Planning a new project.", "Creative work.", "Delivering bad news.", "Exchanging early ideas."], "answer": "C", "why": "原文：It works badly for ... conversations about money or bad news."}
      ]
    },
    {
      "id": "c260926b",
      "lv": "六级",
      "type": "长对话",
      "date": "2026-09-26",
      "title": "An Interview about a Two-Year Gap",
      "lines": [
        ["Interviewer", "Thanks for coming in. Your CV mentions a two-year gap after graduation. Can you tell me about it?", "谢谢你来面试。你的简历提到毕业后有两年的空档期，能说说吗？"],
        ["Candidate", "I spent the first year working in a small family business, and the second year looking after my grandmother. Neither was planned, but both taught me a lot.", "第一年我在一家小家族企业工作，第二年照顾我奶奶。两件事都不是计划好的，但都让我学到很多。"],
        ["Interviewer", "What did you learn in the family business that you could use here?", "你在那家企业学到的东西，有哪些能在这里用上？"],
        ["Candidate", "I was the only person handling orders, so I built a simple system to track them. Before that, orders were written on paper and often got lost. It cut our delivery mistakes by half.", "当时只有我一个人处理订单，所以我搭了一个简单的追踪系统。在那之前，订单都写在纸上，经常丢失。它把发货错误减少了一半。"],
        ["Interviewer", "Interesting. This role is mostly about process, not creativity. Would that bore you?", "有意思。这个岗位主要是流程性的，不太需要创意。你会觉得无聊吗？"],
        ["Candidate", "The opposite, actually. I like making things run smoothly. I would rather fix a system that everyone uses than design something nobody needs.", "恰恰相反。我喜欢让事情顺畅运转。与其设计没人需要的东西，我更愿意去修一个大家都在用的系统。"],
        ["Interviewer", "Good answer. The next step is a written test on data tools. It takes about ninety minutes.", "回答得不错。下一步是数据工具的笔试，大约九十分钟。"],
        ["Candidate", "That is fine. Could I ask how soon you expect to make a decision?", "没问题。我能问一下你们大概多久做决定吗？"],
        ["Interviewer", "Within two weeks. We contact everyone, whether the answer is yes or no.", "两周之内。无论结果如何，我们都会联系每一位应聘者。"]
      ],
      "trans": "面试官：谢谢你来面试。你的简历提到毕业后有两年的空档期，能说说吗？／应聘者：第一年我在一家小家族企业工作，第二年照顾我奶奶。都不是计划好的，但都让我学到很多。／面试官：你在那家企业学到的东西，有哪些能在这里用上？／应聘者：当时只有我一个人处理订单，所以我搭了一个简单的追踪系统。在那之前订单都写在纸上，经常丢失。它把发货错误减少了一半。／面试官：有意思。这个岗位主要是流程性的，不太需要创意。你会觉得无聊吗？／应聘者：恰恰相反。我喜欢让事情顺畅运转。与其设计没人需要的东西，我更愿意去修一个大家都在用的系统。／面试官：回答得不错。下一步是数据工具的笔试，大约九十分钟。／应聘者：没问题。我能问一下你们大概多久做决定吗？／面试官：两周之内。无论结果如何，我们都会联系每一位应聘者。",
      "qs": [
        {"n": 1, "q": "How did the candidate spend the two years after graduation?", "options": ["Travelling and studying languages abroad.", "Studying for a higher degree.", "Working in a family business and caring for a relative.", "Working for two large companies."], "answer": "C", "why": "原文：the first year working in a small family business, and the second year looking after my grandmother."},
        {"n": 2, "q": "What did the candidate do in the family business?", "options": ["He built a system to track orders.", "He managed the company's finances.", "He trained new employees.", "He designed a new product."], "answer": "A", "why": "原文：I was the only person handling orders, so I built a simple system to track them."},
        {"n": 3, "q": "How does the candidate answer the question about being bored?", "options": ["He admits that he prefers creative work.", "He says he prefers improving systems that are already in use.", "He asks to be considered for another role.", "He says he has no strong preference."], "answer": "B", "why": "原文：I would rather fix a system that everyone uses than design something nobody needs."},
        {"n": 4, "q": "What will happen next in the process?", "options": ["A second interview with the manager.", "A written test on data tools.", "A trial working day.", "A phone call about salary."], "answer": "B", "why": "原文：The next step is a written test on data tools."}
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
        {"n": 1, "q": "What happened to repair shops in the nineteen nineties?", "options": ["They became more common on high streets.", "They declined because new goods became very cheap.", "They were strongly supported by new laws.", "They began importing spare parts."], "answer": "B", "why": "原文：prices fell so far that a new kettle often cost less than an hour of a repairer's time."},
        {"n": 2, "q": "According to repairers, what is the biggest remaining obstacle?", "options": ["The shortage of spare parts.", "A lack of skilled workers.", "High taxes on repairs.", "Customers' distrust of repaired goods."], "answer": "B", "why": "原文：the biggest remaining obstacle is not parts but skill."},
        {"n": 3, "q": "Who makes up the largest group at community repair workshops?", "options": ["Retired technicians.", "People under thirty-five.", "Factory managers.", "Primary school children."], "answer": "B", "why": "原文：Attendance is highest among people under thirty-five."}
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
        {"n": 1, "q": "What did Herbert Simon point out in nineteen seventy-one?", "options": ["Information would become too expensive to produce.", "Abundant information leads to scarce attention.", "Economists should study new technology.", "Paper mail would be replaced by email."], "answer": "B", "why": "原文：a wealth of information creates a poverty of attention."},
        {"n": 2, "q": "What did the email study find?", "options": ["Email itself damaged workers' health.", "Workers who checked email at fixed times finished the same work faster.", "Workers preferred free access to email.", "Email had no measurable effect on work."], "answer": "B", "why": "原文：The scheduled group finished the same work in less time and reported lower stress."},
        {"n": 3, "q": "Why is attention unusual as an economic good?", "options": ["It cannot be stored for later use.", "It is controlled by large companies.", "Its price keeps rising.", "It can be shared among workers."], "answer": "A", "why": "原文：Attention is unusual as an economic good because it cannot be stored."}
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
        {"n": 1, "q": "What is one cause of the urban heat island effect?", "options": ["Trees release heat at night.", "Dark surfaces absorb solar radiation and release it slowly.", "Rainfall is blocked by tall buildings.", "Wind speeds increase in city centres."], "answer": "B", "why": "原文：Dark surfaces such as asphalt and concrete absorb solar radiation during the day and release it slowly at night."},
        {"n": 2, "q": "What does the speaker say about planting trees to cool streets?", "options": ["It works faster than other measures.", "It is the cheapest option available.", "It works much more slowly than the city heats up.", "It has little measurable effect."], "answer": "C", "why": "原文：But planting is slower than heating."},
        {"n": 3, "q": "What is the speaker's conclusion?", "options": ["Fountains are the best single solution.", "Cities should choose the cheapest measure.", "Cooling cities requires combining several long-term measures.", "Only wealthy cities can afford to act."], "answer": "C", "why": "原文：no single measure will work alone ... combining trees, materials and design."}
      ]
    }
  ]
};
