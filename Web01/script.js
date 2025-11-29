// 寺庙数据库 - 基于学术研究的中国传统宗教造像艺术数据
const templesData = [
    {
        id: 1,
        name: "白马寺",
        province: "河南",
        city: "洛阳",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "释迦牟尼佛", hall: "大雄宝殿", description: "佛教创始人，现世佛", icon: "🙏", period: "东汉", style: "犍陀罗风格" },
            { name: "观音菩萨", hall: "观音殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "北魏", style: "秀骨清像" },
            { name: "文殊菩萨", hall: "文殊殿", description: "智慧菩萨，智慧第一", icon: "🙏", period: "唐代", style: "丰满圆润" },
            { name: "普贤菩萨", hall: "普贤殿", description: "行愿菩萨，大行第一", icon: "🙏", period: "宋代", style: "典雅细腻" }
        ],
        halls: ["大雄宝殿", "观音殿", "文殊殿", "普贤殿", "地藏殿"],
        history: "建于东汉永平十一年（68年），是中国第一座官办寺院，被誉为中国佛教的'释源'和'祖庭'。",
        imageIcon: "🏛️",
        academicResearch: {
            founding: "据《后汉书·西域传》记载，汉明帝梦见金人，遣使西域求法，带回佛经佛像，建白马寺供之。",
            artEvolution: "白马寺造像艺术经历了从印度犍陀罗风格到中国化风格的转变，是研究佛教艺术本土化的重要案例。",
            culturalSignificance: "作为佛教传入中国的第一站，白马寺的造像艺术体现了中外文化交流的早期形态。"
        },
        evolution: {
            early: "东汉时期以印度犍陀罗风格为主，造像深目高鼻，衣纹厚重，体现了希腊化佛教艺术特征",
            middle: "魏晋南北朝时期融入中原文化，出现'秀骨清像'风格，面相清瘦，衣纹流畅，体现了玄学思想的影响",
            late: "唐宋以后形成独特的中国佛教艺术风格，造像丰满圆润，神情慈悲，完全中国化"
        },
        artCharacteristics: {
            materials: "早期以铜铸为主，后期发展为石雕、木雕、泥塑等多种材质",
            techniques: "从早期的浮雕发展到圆雕，技法日趋成熟",
            symbolism: "造像手势、服饰、法器等都有严格的宗教象征意义"
        }
    },
    {
        id: 2,
        name: "少林寺",
        province: "河南",
        city: "登封",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "释迦牟尼佛", hall: "大雄宝殿", description: "佛教创始人，现世佛", icon: "🙏", period: "北魏", style: "禅宗风格" },
            { name: "达摩祖师", hall: "达摩殿", description: "禅宗初祖，印度高僧", icon: "🙏", period: "元代", style: "刚毅凝重" },
            { name: "观音菩萨", hall: "观音殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "明代", style: "慈悲庄严" },
            { name: "地藏菩萨", hall: "地藏殿", description: "大愿菩萨，地狱救度", icon: "🙏", period: "清代", style: "威严慈悲" }
        ],
        halls: ["大雄宝殿", "达摩殿", "千佛殿", "地藏殿", "白衣殿"],
        history: "建于北魏太和十九年（495年），中国禅宗祖庭，达摩在此面壁九年，创立禅宗。",
        imageIcon: "⛩️",
        academicResearch: {
            founding: "北魏孝文帝为安置印度高僧跋陀而建，后成为禅宗发源地。",
            artEvolution: "少林寺造像艺术与禅宗思想紧密结合，体现了'明心见性'的禅宗美学。",
            culturalSignificance: "禅宗造像艺术对中国绘画、雕塑等艺术形式产生深远影响。"
        },
        evolution: {
            early: "北魏时期受云冈石窟影响，造像雄浑有力，面相庄严，体现了北方游牧文化的审美特征",
            middle: "唐代禅宗兴起，造像注重内在精神表达，简化外在装饰，强调禅意",
            late: "明清时期结合武术文化，造像更具阳刚之气，体现了文武并重的文化特色"
        },
        artCharacteristics: {
            materials: "以石雕为主，兼有木雕和铜铸",
            techniques: "注重神态刻画，衣纹简洁有力",
            symbolism: "达摩造像体现了禅宗'不立文字，直指人心'的核心思想"
        }
    },
    {
        id: 3,
        name: "灵隐寺",
        province: "浙江",
        city: "杭州",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "释迦牟尼佛", hall: "大雄宝殿", description: "佛教创始人，现世佛", icon: "🙏", period: "南宋", style: "江南典雅" },
            { name: "观音菩萨", hall: "观音殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "吴越", style: "柔美慈悲" },
            { name: "弥勒佛", hall: "天王殿", description: "未来佛，笑口常开", icon: "🙏", period: "宋代", style: "欢喜自在" },
            { name: "韦驮菩萨", hall: "天王殿", description: "护法菩萨，威武庄严", icon: "🙏", period: "明代", style: "威武庄严" }
        ],
        halls: ["大雄宝殿", "观音殿", "天王殿", "药师殿", "华严殿"],
        history: "建于东晋咸和元年（326年），江南著名古刹，济公出家之地，素有'东南第一山'之称。",
        imageIcon: "🏯",
        academicResearch: {
            founding: "印度高僧慧理至此，见山峰奇秀，以为'仙灵所隐'，故建寺名灵隐。",
            artEvolution: "灵隐寺造像体现了江南佛教艺术的精致典雅，与北方造像形成鲜明对比。",
            culturalSignificance: "南宋时期成为皇家寺院，造像艺术代表了当时最高的工艺水平。"
        },
        evolution: {
            early: "东晋南朝时期受江南文化影响，造像清秀典雅，线条流畅，体现了南方文化的柔美",
            middle: "吴越国时期发展出独特的江南佛教艺术风格，造像更加世俗化、人性化",
            late: "南宋以后融合文人审美，造像更加精致细腻，体现了'禅意'与'诗意'的结合"
        },
        artCharacteristics: {
            materials: "以木雕为主，兼有石雕和泥塑",
            techniques: "精雕细琢，注重细节表现",
            symbolism: "造像体现了江南文化的精致和文人士大夫的审美情趣"
        }
    },
    {
        id: 4,
        name: "天台山国清寺",
        province: "浙江",
        city: "台州",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "释迦牟尼佛", hall: "大雄宝殿", description: "佛教创始人，现世佛", icon: "🙏", period: "隋代", style: "天台宗风" },
            { name: "观音菩萨", hall: "观音殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "唐代", style: "慈悲智慧" },
            { name: "智者大师", hall: "智者塔院", description: "天台宗创始人，智者大师", icon: "🙏", period: "隋代", style: "智者庄严" },
            { name: "地藏菩萨", hall: "地藏殿", description: "大愿菩萨，地狱救度", icon: "🙏", period: "宋代", style: "慈悲愿力" }
        ],
        halls: ["大雄宝殿", "观音殿", "智者塔院", "地藏殿", "药师殿"],
        history: "建于隋开皇十八年（598年），天台宗祖庭，智者大师在此创立天台宗，影响深远。",
        imageIcon: "🏛️",
        academicResearch: {
            founding: "智者大师依《法华经》创立天台宗，国清寺成为天台宗的根本道场。",
            artEvolution: "天台宗造像艺术体现了'教观双美'的特色，既有教理的严谨，又有观想的庄严。",
            culturalSignificance: "天台宗造像对日本、韩国佛教艺术产生重要影响。"
        },
        evolution: {
            early: "隋代造像承袭北朝风格，庄严肃穆，体现了天台宗教理的严谨性",
            middle: "唐代天台宗兴盛，造像体现教理特色，注重表现佛菩萨的智慧与慈悲",
            late: "宋元以后融合禅宗思想，造像更加空灵，体现了'一念三千'的天台教理"
        },
        artCharacteristics: {
            materials: "以石雕和木雕为主",
            techniques: "注重教理表现，造像庄严而不失慈悲",
            symbolism: "体现了天台宗'止观双修'的修行理念"
        }
    },
    {
        id: 5,
        name: "九华山化城寺",
        province: "安徽",
        city: "池州",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "地藏菩萨", hall: "大雄宝殿", description: "大愿菩萨，地狱救度", icon: "🙏", period: "唐代", style: "慈悲愿力" },
            { name: "释迦牟尼佛", hall: "大雄宝殿", description: "佛教创始人，现世佛", icon: "🙏", period: "宋代", style: "庄严慈悲" },
            { name: "观音菩萨", hall: "观音殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "明代", style: "慈悲庄严" },
            { name: "金乔觉", hall: "肉身宝殿", description: "新罗王子，地藏菩萨化身", icon: "🙏", period: "唐代", style: "高僧庄严" }
        ],
        halls: ["大雄宝殿", "地藏殿", "肉身宝殿", "观音殿", "百岁宫"],
        history: "建于唐至德二年（757年），地藏菩萨道场，金乔觉（新罗王子）在此修行，被认为是地藏菩萨化身。",
        imageIcon: "⛰️",
        academicResearch: {
            founding: "新罗王子金乔觉航海来华，在此修行75年，99岁圆寂，肉身不坏，被视为地藏菩萨化身。",
            artEvolution: "九华山地藏造像形成了独特的'九华风格'，体现了地藏信仰的中国化过程。",
            culturalSignificance: "地藏造像艺术体现了中国佛教对'孝道'文化的融合与创新。"
        },
        evolution: {
            early: "唐代造像受密宗影响，神秘庄严，金乔觉肉身像体现了高僧崇拜的传统",
            middle: "宋元时期地藏信仰兴盛，造像慈悲祥和，体现了'地狱不空，誓不成佛'的大愿精神",
            late: "明清以后形成独特的九华山地藏造像风格，融合了民间信仰元素"
        },
        artCharacteristics: {
            materials: "以肉身像最为著名，兼有石雕、木雕",
            techniques: "注重表现地藏菩萨的慈悲愿力",
            symbolism: "体现了佛教'大慈大悲'精神与中国'孝道'文化的结合"
        }
    },
    {
        id: 6,
        name: "普陀山普济寺",
        province: "浙江",
        city: "舟山",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "观音菩萨", hall: "大圆通殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "宋代", style: "海岛观音" },
            { name: "释迦牟尼佛", hall: "大雄宝殿", description: "佛教创始人，现世佛", icon: "🙏", period: "明代", style: "庄严慈悲" },
            { name: "文殊菩萨", hall: "文殊殿", description: "智慧菩萨，智慧第一", icon: "🙏", period: "清代", style: "智慧庄严" },
            { name: "普贤菩萨", hall: "普贤殿", description: "行愿菩萨，大行第一", icon: "🙏", period: "元代", style: "行愿庄严" }
        ],
        halls: ["大圆通殿", "天王殿", "藏经楼", "文殊殿", "普贤殿"],
        history: "建于后梁贞明二年（916年），观音菩萨道场，中国四大佛教名山之一，素有'海天佛国'之称。",
        imageIcon: "🌊",
        academicResearch: {
            founding: "据《华严经》记载，观音菩萨在此说法普度众生，遂成为观音道场。",
            artEvolution: "普陀山观音造像形成了独特的'海岛风格'，体现了观音信仰的海洋文化特色。",
            culturalSignificance: "观音造像艺术体现了中国佛教对女性神祇的接受与改造。"
        },
        evolution: {
            early: "宋元时期观音造像受海洋文化影响，面容慈祥，体现了观音'慈航普渡'的特色",
            middle: "明代形成独特的海岛观音造像风格，造型更加优美，线条流畅",
            late: "清代以后融合民间信仰，造像更加亲民化，体现了观音信仰的普及"
        },
        artCharacteristics: {
            materials: "以石雕和铜铸为主",
            techniques: "注重表现观音的慈悲与智慧",
            symbolism: "体现了观音菩萨'大慈大悲，救苦救难'的精神"
        }
    },
    {
        id: 7,
        name: "峨眉山万年寺",
        province: "四川",
        city: "乐山",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "普贤菩萨", hall: "普贤殿", description: "行愿菩萨，大行第一", icon: "🙏", period: "宋代", style: "川西风格" },
            { name: "释迦牟尼佛", hall: "大雄宝殿", description: "佛教创始人，现世佛", icon: "🙏", period: "明代", style: "庄严慈悲" },
            { name: "观音菩萨", hall: "观音殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "清代", style: "慈悲庄严" },
            { name: "文殊菩萨", hall: "文殊殿", description: "智慧菩萨，智慧第一", icon: "🙏", period: "元代", style: "智慧庄严" }
        ],
        halls: ["普贤殿", "大雄宝殿", "观音殿", "文殊殿", "伏虎寺"],
        history: "建于东晋隆安三年（399年），普贤菩萨道场，中国四大佛教名山之一，以'峨眉天下秀'著称。",
        imageIcon: "🏔️",
        academicResearch: {
            founding: "据《华严经》记载，普贤菩萨在此显灵说法，遂成为普贤道场。",
            artEvolution: "峨眉山普贤造像体现了巴蜀文化的特色，融合了藏传佛教元素。",
            culturalSignificance: "普贤造像艺术体现了中国佛教'行愿并重'的修行理念。"
        },
        evolution: {
            early: "唐宋时期受巴蜀文化影响，造像丰满圆润，体现了西南地区的审美特色",
            middle: "元明时期发展出独特的川西佛教艺术风格，融合了多民族文化元素",
            late: "清代以后融合藏传佛教元素，造像更加丰富多样，体现了文化交流"
        },
        artCharacteristics: {
            materials: "以铜铸和石雕为主",
            techniques: "注重表现普贤菩萨的行愿精神",
            symbolism: "体现了普贤菩萨'大行大愿'的修行理念"
        }
    },
    {
        id: 8,
        name: "五台山显通寺",
        province: "山西",
        city: "忻州",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "文殊菩萨", hall: "大文殊殿", description: "智慧菩萨，智慧第一", icon: "🙏", period: "唐代", style: "五台风格" },
            { name: "释迦牟尼佛", hall: "大雄宝殿", description: "佛教创始人，现世佛", icon: "🙏", period: "明代", style: "庄严慈悲" },
            { name: "观音菩萨", hall: "观音殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "清代", style: "慈悲庄严" },
            { name: "普贤菩萨", hall: "普贤殿", description: "行愿菩萨，大行第一", icon: "🙏", period: "元代", style: "行愿庄严" }
        ],
        halls: ["大文殊殿", "大雄宝殿", "观音殿", "普贤殿", "菩萨顶"],
        history: "建于汉明帝时期（58-75年），文殊菩萨道场，中国四大佛教名山之一，被誉为'华北屋脊'。",
        imageIcon: "🏔️",
        academicResearch: {
            founding: "据《华严经》记载，文殊菩萨在此显灵说法，遂成为文殊道场。",
            artEvolution: "五台山文殊造像形成了独特的'五台风格'，体现了汉藏佛教艺术的融合。",
            culturalSignificance: "文殊造像艺术体现了中国佛教对智慧的尊崇与追求。"
        },
        evolution: {
            early: "汉魏时期造像简朴，受北方游牧文化影响，体现了早期佛教的特色",
            middle: "唐代形成独特的五台山文殊造像风格，造像庄严智慧",
            late: "明清以后融合藏传佛教，造像更加庄严华美，体现了民族融合"
        },
        artCharacteristics: {
            materials: "以石雕和铜铸为主",
            techniques: "注重表现文殊菩萨的智慧特征",
            symbolism: "体现了文殊菩萨'大智大慧'的修行理念"
        }
    },
    {
        id: 9,
        name: "雍和宫",
        province: "北京",
        city: "北京",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "宗喀巴大师", hall: "大雄宝殿", description: "格鲁派创始人，藏传佛教改革家", icon: "🙏", period: "清代", style: "宫廷藏传" },
            { name: "释迦牟尼佛", hall: "永佑殿", description: "佛教创始人，现世佛", icon: "🙏", period: "清代", style: "汉藏融合" },
            { name: "观音菩萨", hall: "法轮殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "清代", style: "藏传风格" },
            { name: "文殊菩萨", hall: "法轮殿", description: "智慧菩萨，智慧第一", icon: "🙏", period: "清代", style: "藏传风格" }
        ],
        halls: ["大雄宝殿", "永佑殿", "法轮殿", "万福阁", "绥成殿"],
        history: "建于清康熙三十三年（1694年），藏传佛教寺院，原为雍亲王府，乾隆时期改为寺院。",
        imageIcon: "🏛️",
        academicResearch: {
            founding: "原为雍正皇帝的雍亲王府，乾隆九年改为藏传佛教寺院，成为清皇室信仰中心。",
            artEvolution: "雍和宫造像体现了汉藏佛教艺术的完美融合，代表了清代宫廷艺术的最高水平。",
            culturalSignificance: "藏传佛教造像艺术体现了清朝多民族统一的文化政策。"
        },
        evolution: {
            early: "清代早期融合汉藏艺术，造像庄重典雅，体现了宫廷艺术的特色",
            middle: "乾隆时期发展出独特的宫廷藏传佛教风格，工艺精湛，装饰华丽",
            late: "现代以来保持传统，造像工艺精湛，继续传承藏传佛教艺术"
        },
        artCharacteristics: {
            materials: "以铜铸为主，兼有木雕和泥塑",
            techniques: "汉藏技法融合，装饰华丽",
            symbolism: "体现了藏传佛教的密宗特色和汉传佛教的显宗传统"
        }
    },
    {
        id: 10,
        name: "玉佛禅寺",
        province: "上海",
        city: "上海",
        type: "buddhism",
        typeName: "佛教寺庙",
        deities: [
            { name: "释迦牟尼佛", hall: "大雄宝殿", description: "佛教创始人，现世佛", icon: "🙏", period: "近代", style: "都市佛教" },
            { name: "观音菩萨", hall: "观音殿", description: "慈悲菩萨，救苦救难", icon: "🙏", period: "近代", style: "慈悲庄严" },
            { name: "弥勒佛", hall: "天王殿", description: "未来佛，笑口常开", icon: "🙏", period: "近代", style: "欢喜自在" },
            { name: "玉佛", hall: "玉佛楼", description: "缅甸玉佛，镇寺之宝", icon: "🙏", period: "近代", style: "缅甸风格" }
        ],
        halls: ["大雄宝殿", "玉佛楼", "观音殿", "天王殿", "三圣殿"],
        history: "建于清光绪八年（1882年），以玉佛闻名，慧根法师从缅甸请回玉佛，成为上海著名寺院。",
        imageIcon: "🏯",
        academicResearch: {
            founding: "慧根法师从缅甸请回玉佛，建寺供奉，成为近代中国佛教国际交流的重要见证。",
            artEvolution: "玉佛禅寺造像体现了近代都市佛教的特色，融合了传统与现代元素。",
            culturalSignificance: "玉佛造像艺术体现了近代中国佛教的国际化和现代化进程。"
        },
        evolution: {
            early: "清末民初造像融合江南和海外风格，体现了佛教艺术的国际化趋势",
            middle: "民国时期发展出都市佛教艺术特色，适应现代城市环境",
            late: "现代以来融合传统与现代，造像精美，体现了佛教艺术的创新发展"
        },
        artCharacteristics: {
            materials: "以玉雕最为著名，兼有铜铸和木雕",
            techniques: "传统工艺与现代技术结合",
            symbolism: "体现了佛教艺术的国际化和现代化特色"
        }
    },
    {
        id: 11,
        name: "白云观",
        province: "北京",
        city: "北京",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "丘处机", hall: "丘祖殿", description: "全真七子之一，长春真人", icon: "☯️", period: "元代", style: "全真风格" },
            { name: "老子", hall: "三清殿", description: "道教始祖，道德天尊", icon: "☯️", period: "明代", style: "庄严神圣" },
            { name: "吕洞宾", hall: "吕祖殿", description: "八仙之一，纯阳真人", icon: "☯️", period: "清代", style: "仙风道骨" },
            { name: "王重阳", hall: "祖师殿", description: "全真教创始人", icon: "☯️", period: "元代", style: "祖师庄严" }
        ],
        halls: ["三清殿", "丘祖殿", "吕祖殿", "祖师殿", "玉皇殿"],
        history: "建于唐开元二十七年（739年），全真道祖庭，丘处机在此创立全真道，影响深远。",
        imageIcon: "☯️",
        academicResearch: {
            founding: "唐代建观，元代丘处机在此创立全真道，成为道教全真派的祖庭。",
            artEvolution: "白云观造像体现了全真道'性命双修'的特色，融合了儒释道三家思想。",
            culturalSignificance: "全真道造像艺术体现了宋元时期三教合一的文化趋势。"
        },
        evolution: {
            early: "唐代造像简朴，体现早期道教特色，注重表现神仙的超然气质",
            middle: "元代全真道兴盛，造像更加规整，体现了全真道的教理特色",
            late: "明清以后形成独特的北方道教艺术风格，造像更加精致"
        },
        artCharacteristics: {
            materials: "以泥塑和木雕为主",
            techniques: "注重表现神仙的超然气质",
            symbolism: "体现了道教'清静无为'的修行理念"
        }
    },
    {
        id: 12,
        name: "青城山天师洞",
        province: "四川",
        city: "成都",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "张道陵", hall: "天师殿", description: "天师道创始人，第一代天师", icon: "☯️", period: "东汉", style: "天师风格" },
            { name: "老子", hall: "三清殿", description: "道教始祖，道德天尊", icon: "☯️", period: "唐代", style: "庄严神圣" },
            { name: "张三丰", hall: "祖师殿", description: "武当派创始人，太极宗师", icon: "☯️", period: "明代", style: "仙风道骨" },
            { name: "葛洪", hall: "葛仙殿", description: "道教理论家，炼丹家", icon: "☯️", period: "晋代", style: "高道庄严" }
        ],
        halls: ["三清殿", "天师殿", "祖师殿", "葛仙殿", "上清宫"],
        history: "建于东汉顺帝时期（126-144年），天师道祖庭，张道陵在此创立五斗米道，被誉为'道教发源地'。",
        imageIcon: "⛰️",
        academicResearch: {
            founding: "张道陵在此修炼，感太上老君降临，传授正一盟威之道，创立天师道。",
            artEvolution: "青城山造像体现了巴蜀道教的特色，融合了地方文化元素。",
            culturalSignificance: "天师道造像艺术体现了道教对民间信仰的整合与改造。"
        },
        evolution: {
            early: "汉晋时期造像简朴，体现早期道教特色，注重表现神仙的神秘性",
            middle: "唐宋时期发展出独特的青城山道教艺术风格，造像更加精致",
            late: "明清以后融合巴蜀文化，造像更加精美，体现了地方特色"
        },
        artCharacteristics: {
            materials: "以石雕和泥塑为主",
            techniques: "注重表现神仙的神秘气质",
            symbolism: "体现了道教'道法自然'的哲学思想"
        }
    },
    {
        id: 13,
        name: "武当山紫霄宫",
        province: "湖北",
        city: "十堰",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "真武大帝", hall: "紫霄大殿", description: "北方玄天上帝，武当山主神", icon: "☯️", period: "明代", style: "武当风格" },
            { name: "张三丰", hall: "父母殿", description: "武当派创始人，太极宗师", icon: "☯️", period: "明代", style: "仙风道骨" },
            { name: "老子", hall: "真武殿", description: "道教始祖，道德天尊", icon: "☯️", period: "清代", style: "庄严神圣" },
            { name: "吕洞宾", hall: "吕祖殿", description: "八仙之一，纯阳真人", icon: "☯️", period: "元代", style: "仙风道骨" }
        ],
        halls: ["紫霄大殿", "父母殿", "真武殿", "吕祖殿", "太清殿"],
        history: "建于明永乐十一年（1413年），武当山主宫，明成祖朱棣为纪念真武大帝而建，是武当道教的核心。",
        imageIcon: "🏔️",
        academicResearch: {
            founding: "明成祖朱棣为报答真武大帝护佑之恩，大修武当山，紫霄宫是其中最重要的建筑。",
            artEvolution: "武当山造像体现了武当道教的特色，融合了武术文化和养生理念。",
            culturalSignificance: "武当造像艺术体现了明代皇室对道教的支持和推崇。"
        },
        evolution: {
            early: "元代造像受全真道影响，庄严肃穆，体现了早期武当道教的特色",
            middle: "明代发展出独特的武当道教艺术风格，造像威武庄严",
            late: "清代以后融合武术文化，造像更具阳刚之气"
        },
        artCharacteristics: {
            materials: "以铜铸和石雕为主",
            techniques: "注重表现真武大帝的威武形象",
            symbolism: "体现了武当道教'内外兼修'的修行理念"
        }
    },
    {
        id: 14,
        name: "崂山太清宫",
        province: "山东",
        city: "青岛",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "老子", hall: "三清殿", description: "道教始祖，道德天尊", icon: "☯️", period: "宋代", style: "庄严神圣" },
            { name: "丘处机", hall: "三官殿", description: "全真七子之一，长春真人", icon: "☯️", period: "元代", style: "全真风格" },
            { name: "刘长生", hall: "三皇殿", description: "全真七子之一，长生真人", icon: "☯️", period: "元代", style: "仙风道骨" },
            { name: "谭处端", hall: "三官殿", description: "全真七子之一，长真真人", icon: "☯️", period: "元代", style: "仙风道骨" }
        ],
        halls: ["三清殿", "三官殿", "三皇殿", "关岳殿", "耿真人祠"],
        history: "建于西汉建元元年（140年），全真道第二丛林，被誉为'海上第一名山'，是道教全真道的重要宫观。",
        imageIcon: "🌊",
        academicResearch: {
            founding: "西汉张廉夫在此创建道观，后经历代扩建，成为全真道重要丛林。",
            artEvolution: "崂山造像体现了海洋文化特色，融合了全真道的教理。",
            culturalSignificance: "崂山造像艺术体现了道教对海洋文化的适应与融合。"
        },
        evolution: {
            early: "汉唐时期造像简朴，体现早期道教特色，注重表现神仙的超然气质",
            middle: "宋元时期发展出独特的崂山道教艺术风格，造像更加精致",
            late: "明清以后融合海洋文化，造像更加精美，体现了地方特色"
        },
        artCharacteristics: {
            materials: "以石雕和木雕为主",
            techniques: "注重表现神仙的仙风道骨",
            symbolism: "体现了道教'清静无为'的修行理念"
        }
    },
    {
        id: 15,
        name: "龙虎山天师府",
        province: "江西",
        city: "鹰潭",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "张道陵", hall: "三省堂", description: "天师道创始人，第一代天师", icon: "☯️", period: "东汉", style: "天师风格" },
            { name: "老子", hall: "万法宗坛", description: "道教始祖，道德天尊", icon: "☯️", period: "明代", style: "庄严神圣" },
            { name: "许逊", hall: "玉皇殿", description: "净明道创始人，许真君", icon: "☯️", period: "晋代", style: "高道庄严" },
            { name: "葛玄", hall: "葛仙殿", description: "道教理论家，葛仙翁", icon: "☯️", period: "三国", style: "仙风道骨" }
        ],
        halls: ["三省堂", "万法宗坛", "玉皇殿", "葛仙殿", "法箓局"],
        history: "建于东汉永元二年（90年），正一道祖庭，张道陵在此炼丹，创立正一道，历代天师在此居住。",
        imageIcon: "🏛️",
        academicResearch: {
            founding: "张道陵在此炼丹修道，创立正一道，成为历代天师居住和传道之所。",
            artEvolution: "龙虎山造像体现了正一道的特色，融合了符箓道教的文化。",
            culturalSignificance: "正一道造像艺术体现了道教对民间信仰的整合与规范。"
        },
        evolution: {
            early: "汉晋时期造像简朴，体现早期道教特色，注重表现天师的威严",
            middle: "唐宋时期发展出独特的龙虎山道教艺术风格，造像更加精致",
            late: "明清以后形成独特的正一道造像传统，造像更加规范"
        },
        artCharacteristics: {
            materials: "以木雕和泥塑为主",
            techniques: "注重表现天师的威严形象",
            symbolism: "体现了正一道'符箓济世'的教理特色"
        }
    },
    {
        id: 16,
        name: "楼观台",
        province: "陕西",
        city: "西安",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "老子", hall: "说经台", description: "道教始祖，道德天尊", icon: "☯️", period: "周代", style: "古朴庄严" },
            { name: "尹喜", hall: "炼丹炉", description: "关令尹，老子弟子", icon: "☯️", period: "周代", style: "高道庄严" },
            { name: "文始真人", hall: "老子祠", description: "尹喜封号，文始真人", icon: "☯️", period: "汉代", style: "仙风道骨" },
            { name: "玉皇大帝", hall: "玉皇殿", description: "天界至尊，玉皇大帝", icon: "☯️", period: "唐代", style: "威严神圣" }
        ],
        halls: ["说经台", "炼丹炉", "老子祠", "玉皇殿", "斗姥殿"],
        history: "建于西周康王时期（前1027-前1001年），道教发源地，老子在此为尹喜说《道德经》，被誉为'道教祖庭'。",
        imageIcon: "🏯",
        academicResearch: {
            founding: "关令尹喜在此结草为楼，观星望气，老子西行至此，说《道德经》五千言。",
            artEvolution: "楼观台造像体现了早期道教的特色，是研究道教起源的重要实物资料。",
            culturalSignificance: "楼观台造像艺术体现了道教对古代祭祀文化的继承与发展。"
        },
        evolution: {
            early: "周秦时期造像简朴，体现早期道教特色，注重表现神仙的神秘性",
            middle: "汉唐时期发展出独特的关中道教艺术风格，造像更加精致",
            late: "宋元以后融合各派特色，造像更加丰富"
        },
        artCharacteristics: {
            materials: "以石雕和泥塑为主",
            techniques: "注重表现神仙的仙风道骨",
            symbolism: "体现了道教'道法自然'的哲学思想"
        }
    },
    {
        id: 17,
        name: "华山西岳庙",
        province: "陕西",
        city: "渭南",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "西岳大帝", hall: "灏灵殿", description: "华山山神，西岳大帝", icon: "☯️", period: "汉代", style: "山神威严" },
            { name: "老子", hall: "镇岳宫", description: "道教始祖，道德天尊", icon: "☯️", period: "唐代", style: "庄严神圣" },
            { name: "陈抟", hall: "镇岳宫", description: "道教理论家，陈抟老祖", icon: "☯️", period: "宋代", style: "仙风道骨" },
            { name: "吕洞宾", hall: "吕祖殿", description: "八仙之一，纯阳真人", icon: "☯️", period: "元代", style: "仙风道骨" }
        ],
        halls: ["灏灵殿", "寝宫", "御书楼", "镇岳宫", "吕祖殿"],
        history: "建于西汉武帝时期（前140-前87年），道教宫观，历代帝王祭祀西岳大帝的场所，被誉为'陕西故宫'。",
        imageIcon: "⛰️",
        academicResearch: {
            founding: "汉武帝为祭祀西岳华山而建，历代皇帝皆有封赐，是皇家祭祀的重要场所。",
            artEvolution: "华山西岳庙造像体现了山神崇拜的特色，融合了皇家祭祀文化。",
            culturalSignificance: "西岳庙造像艺术体现了中国古代山岳崇拜与道教文化的结合。"
        },
        evolution: {
            early: "汉唐时期造像受皇家影响，庄重威严，体现了山神的威严",
            middle: "宋元时期发展出独特的华山道教艺术风格，造像更加精致",
            late: "明清以后融合民间信仰，造像更加亲民"
        },
        artCharacteristics: {
            materials: "以石雕和木雕为主",
            techniques: "注重表现山神的威严形象",
            symbolism: "体现了中国古代山岳崇拜的文化传统"
        }
    },
    {
        id: 18,
        name: "南岳衡山南岳大庙",
        province: "湖南",
        city: "衡阳",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "南岳大帝", hall: "圣帝殿", description: "衡山山神，南岳大帝", icon: "☯️", period: "隋代", style: "山神威严" },
            { name: "老子", hall: "方广寺", description: "道教始祖，道德天尊", icon: "☯️", period: "唐代", style: "庄严神圣" },
            { name: "张三丰", hall: "黄庭观", description: "武当派创始人，太极宗师", icon: "☯️", period: "明代", style: "仙风道骨" },
            { name: "魏夫人", hall: "黄庭观", description: "女仙，魏华存夫人", icon: "☯️", period: "晋代", style: "女仙庄严" }
        ],
        halls: ["圣帝殿", "嘉应门", "御碑亭", "方广寺", "黄庭观"],
        history: "建于隋开皇九年（589年），南方最大道教建筑群，历代帝王祭祀南岳大帝的场所。",
        imageIcon: "🏛️",
        academicResearch: {
            founding: "隋文帝为祭祀南岳衡山而建，历代皇帝皆有封赐，是南方最重要的道教宫观。",
            artEvolution: "南岳庙造像体现了南方道教的特色，融合了湖湘文化元素。",
            culturalSignificance: "南岳庙造像艺术体现了中国古代山岳崇拜的地域特色。"
        },
        evolution: {
            early: "隋唐时期造像受皇家影响，庄重威严，体现了山神的威严",
            middle: "宋元时期发展出独特的南岳道教艺术风格，造像更加精致",
            late: "明清以后融合湖湘文化，造像更加精美"
        },
        artCharacteristics: {
            materials: "以石雕和木雕为主",
            techniques: "注重表现山神的威严形象",
            symbolism: "体现了中国古代山岳崇拜的文化传统"
        }
    },
    {
        id: 19,
        name: "中岳庙",
        province: "河南",
        city: "登封",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "中岳大帝", hall: "峻极殿", description: "嵩山山神，中岳大帝", icon: "☯️", period: "秦代", style: "山神威严" },
            { name: "老子", hall: "老君洞", description: "道教始祖，道德天尊", icon: "☯️", period: "唐代", style: "庄严神圣" },
            { name: "张三丰", hall: "崇福宫", description: "武当派创始人，太极宗师", icon: "☯️", period: "明代", style: "仙风道骨" },
            { name: "陈抟", hall: "崇福宫", description: "道教理论家，陈抟老祖", icon: "☯️", period: "宋代", style: "仙风道骨" }
        ],
        halls: ["峻极殿", "寝殿", "御书楼", "老君洞", "崇福宫"],
        history: "建于秦代（前221-前206年），中岳嵩山道教宫观，历代帝王祭祀中岳大帝的场所，被誉为'小故宫'。",
        imageIcon: "🏯",
        academicResearch: {
            founding: "秦始皇为祭祀中岳嵩山而建，历代皇帝皆有封赐，是中原最重要的道教宫观。",
            artEvolution: "中岳庙造像体现了中原道教的特色，融合了儒家文化元素。",
            culturalSignificance: "中岳庙造像艺术体现了中国古代山岳崇拜与儒家文化的结合。"
        },
        evolution: {
            early: "秦汉时期造像简朴，体现早期道教特色，注重表现山神的威严",
            middle: "唐宋时期发展出独特的嵩山道教艺术风格，造像更加精致",
            late: "明清以后融合中原文化，造像更加精美"
        },
        artCharacteristics: {
            materials: "以石雕和木雕为主",
            techniques: "注重表现山神的威严形象",
            symbolism: "体现了中国古代山岳崇拜的文化传统"
        }
    },
    {
        id: 20,
        name: "北岳庙",
        province: "河北",
        city: "保定",
        type: "taoism",
        typeName: "道教宫观",
        deities: [
            { name: "北岳大帝", hall: "德宁之殿", description: "恒山山神，北岳大帝", icon: "☯️", period: "北魏", style: "山神威严" },
            { name: "老子", hall: "飞石殿", description: "道教始祖，道德天尊", icon: "☯️", period: "唐代", style: "庄严神圣" },
            { name: "张三丰", hall: "寝宫", description: "武当派创始人，太极宗师", icon: "☯️", period: "明代", style: "仙风道骨" },
            { name: "吕洞宾", hall: "会仙府", description: "八仙之一，纯阳真人", icon: "☯️", period: "元代", style: "仙风道骨" }
        ],
        halls: ["德宁之殿", "飞石殿", "寝宫", "会仙府", "御香亭"],
        history: "建于南北朝北魏时期（386-534年），北岳恒山道教宫观，历代帝王祭祀北岳大帝的场所。",
        imageIcon: "🏛️",
        academicResearch: {
            founding: "北魏孝文帝为祭祀北岳恒山而建，历代皇帝皆有封赐，是北方重要的道教宫观。",
            artEvolution: "北岳庙造像体现了北方道教的特色，融合了游牧文化元素。",
            culturalSignificance: "北岳庙造像艺术体现了中国古代山岳崇拜的地域多样性。"
        },
        evolution: {
            early: "北魏时期造像受北方游牧文化影响，体现了早期道教的特色",
            middle: "唐宋时期发展出独特的恒山道教艺术风格，造像更加精致",
            late: "明清以后融合燕赵文化，造像更加精美"
        },
        artCharacteristics: {
            materials: "以石雕和木雕为主",
            techniques: "注重表现山神的威严形象",
            symbolism: "体现了中国古代山岳崇拜的文化传统"
        }
    }
];

// 城市数据
const cityData = {
    "北京": ["北京"],
    "上海": ["上海"],
    "江苏": ["南京", "苏州", "无锡", "常州", "镇江", "扬州", "泰州", "南通", "淮安", "盐城", "连云港", "徐州", "宿迁"],
    "浙江": ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水"],
    "四川": ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝", "甘孜", "凉山"],
    "山西": ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁"],
    "河南": ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店", "济源", "登封"],
    "陕西": ["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛"],
    "山东": ["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "临沂", "德州", "聊城", "滨州", "菏泽"],
    "安徽": ["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山", "滁州", "阜阳", "宿州", "六安", "亳州", "池州", "宣城"],
    "湖北": ["武汉", "黄石", "十堰", "宜昌", "襄阳", "鄂州", "荆门", "孝感", "荆州", "黄冈", "咸宁", "随州", "恩施", "天门", "仙桃", "潜江"],
    "江西": ["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶"],
    "湖南": ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "怀化", "娄底", "湘西"],
    "河北": ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"]
};

// 学术研究数据 - 基于权威学术著作
const academicResearch = {
    artHistory: {
        title: "中国宗教造像艺术发展史",
        periods: [
            {
                name: "汉魏时期",
                timeRange: "公元前206年 - 公元589年",
                characteristics: "佛教传入初期，造像受印度犍陀罗风格影响，深目高鼻，衣纹厚重",
                keyFeatures: ["犍陀罗风格", "深目高鼻", "衣纹厚重", "神秘庄严"],
                representativeWorks: ["云冈石窟", "龙门石窟", "麦积山石窟"]
            },
            {
                name: "隋唐时期",
                timeRange: "公元581年 - 公元907年",
                characteristics: "造像中国化完成，丰满圆润，神情慈悲，体现了盛唐气象",
                keyFeatures: ["丰满圆润", "神情慈悲", "衣纹流畅", "盛唐气象"],
                representativeWorks: ["龙门石窟奉先寺", "敦煌莫高窟", "天龙山石窟"]
            },
            {
                name: "宋元时期",
                timeRange: "公元960年 - 公元1368年",
                characteristics: "造像世俗化、人性化，注重内在精神表达，体现了文人审美",
                keyFeatures: ["世俗化", "人性化", "内在精神", "文人审美"],
                representativeWorks: ["晋祠造像", "飞来峰造像", "灵岩寺造像"]
            },
            {
                name: "明清时期",
                timeRange: "公元1368年 - 公元1912年",
                characteristics: "造像工艺精湛，装饰性强，融合了民间艺术元素",
                keyFeatures: ["工艺精湛", "装饰性强", "民间元素", "地域特色"],
                representativeWorks: ["雍和宫造像", "碧云寺造像", "普陀山造像"]
            }
        ]
    },
    regionalStyles: {
        title: "中国宗教造像地域风格研究",
        regions: [
            {
                name: "中原地区",
                characteristics: "造像庄重大气，线条刚劲有力，体现了北方文化的厚重感",
                materials: "以石雕为主，兼有铜铸",
                techniques: "注重整体气势，细节简洁有力",
                culturalInfluence: "受皇家文化和儒家思想影响"
            },
            {
                name: "江南地区",
                characteristics: "造像清秀典雅，线条流畅细腻，体现了南方文化的柔美",
                materials: "以木雕为主，兼有石雕",
                techniques: "精雕细琢，注重细节表现",
                culturalInfluence: "受文人文化和水乡文化影响"
            },
            {
                name: "西南地区",
                characteristics: "造像融合多民族文化，风格独特，体现了地域文化的多样性",
                materials: "以石雕和泥塑为主",
                techniques: "融合多种技法，装饰性强",
                culturalInfluence: "受藏传佛教和少数民族文化影响"
            },
            {
                name: "华北地区",
                characteristics: "造像受皇家影响，规整庄严，体现了宫廷艺术的规范",
                materials: "以铜铸和石雕为主",
                techniques: "工艺精湛，比例协调",
                culturalInfluence: "受皇家文化和满族文化影响"
            }
        ]
    },
    symbolism: {
        title: "宗教造像象征意义研究",
        categories: [
            {
                name: "手势象征",
                description: "造像的手势（印相）具有特定的宗教含义",
                examples: [
                    { gesture: "禅定印", meaning: "冥想禅定", deity: "释迦牟尼佛" },
                    { gesture: "说法印", meaning: "讲经说法", deity: "释迦牟尼佛" },
                    { gesture: "与愿印", meaning: "满足愿望", deity: "观音菩萨" },
                    { gesture: "无畏印", meaning: "消除恐惧", deity: "药师佛" }
                ]
            },
            {
                name: "服饰象征",
                description: "造像的服饰体现了其身份和地位",
                examples: [
                    { clothing: "袈裟", meaning: "出家修行", deity: "佛菩萨" },
                    { clothing: "天衣", meaning: "天神服饰", deity: "天人" },
                    { clothing: "道袍", meaning: "道教修行", deity: "道教神仙" },
                    { clothing: "铠甲", meaning: "护法神将", deity: "韦驮菩萨" }
                ]
            },
            {
                name: "法器象征",
                description: "造像持有的法器具有特定的宗教功能",
                examples: [
                    { implement: "莲花", meaning: "清净纯洁", deity: "观音菩萨" },
                    { implement: "智慧剑", meaning: "斩断烦恼", deity: "文殊菩萨" },
                    { implement: "如意", meaning: "满足愿望", deity: "普贤菩萨" },
                    { implement: "宝珠", meaning: "智慧光明", deity: "地藏菩萨" }
                ]
            }
        ]
    }
};

// DOM元素
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const provinceSelect = document.getElementById('province');
const citySelect = document.getElementById('city');
const templeTypeSelect = document.getElementById('temple-type');
const templeGrid = document.getElementById('temple-grid');
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const analysisResult = document.getElementById('analysis-result');
const uploadedImage = document.getElementById('uploaded-image');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCitySelect();
    initializeFileUpload();
    renderTemples(templesData);
    initializeScrollEffects();
    initializeAcademicContent();
});

// 初始化学术内容
function initializeAcademicContent() {
    // 添加学术研究按钮
    const academicButton = document.createElement('button');
    academicButton.className = 'academic-button';
    academicButton.textContent = '📚 学术研究';
    academicButton.onclick = showAcademicResearch;
    document.querySelector('.header').appendChild(academicButton);
    
    // 添加学术研究样式
    const style = document.createElement('style');
    style.textContent = `
        .academic-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.9rem;
            margin-left: 1rem;
            transition: all 0.3s ease;
        }
        .academic-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        .academic-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
        }
        .academic-content {
            background-color: white;
            border-radius: 16px;
            max-width: 1200px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            margin: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        .academic-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem;
            border-radius: 16px 16px 0 0;
            position: relative;
        }
        .academic-header h2 {
            margin: 0;
            font-size: 1.8rem;
        }
        .academic-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .academic-close:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: rotate(90deg);
        }
        .academic-body {
            padding: 2rem;
        }
        .academic-section {
            margin-bottom: 3rem;
        }
        .academic-section h3 {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            font-size: 1.4rem;
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 0.5rem;
        }
        .period-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        .period-card {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-radius: 12px;
            padding: 1.5rem;
            transition: transform 0.3s ease;
        }
        .period-card:hover {
            transform: translateY(-5px);
        }
        .period-card h4 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }
        .period-card .time-range {
            color: var(--accent-color);
            font-weight: 600;
            margin-bottom: 1rem;
        }
        .period-card .characteristics {
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        .period-card .features {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        .feature-tag {
            background-color: var(--primary-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.85rem;
        }
        .period-card .works {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
        .region-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 1.5rem;
        }
        .region-card {
            background-color: var(--bg-secondary);
            border-radius: 12px;
            padding: 1.5rem;
            border-left: 4px solid var(--accent-color);
        }
        .region-card h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        .region-card p {
            line-height: 1.6;
            margin-bottom: 0.5rem;
        }
        .symbolism-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        .symbolism-card {
            background-color: var(--bg-secondary);
            border-radius: 12px;
            padding: 1.5rem;
        }
        .symbolism-card h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        .symbolism-card .description {
            line-height: 1.6;
            margin-bottom: 1rem;
            font-style: italic;
        }
        .symbolism-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }
        .symbolism-table th,
        .symbolism-table td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }
        .symbolism-table th {
            background-color: var(--primary-color);
            color: white;
            font-weight: 600;
        }
        .symbolism-table tr:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
    `;
    document.head.appendChild(style);
}

// 显示学术研究
function showAcademicResearch() {
    const modal = document.createElement('div');
    modal.className = 'academic-modal';
    modal.innerHTML = `
        <div class="academic-content">
            <div class="academic-header">
                <h2>📚 中国传统宗教造像艺术学术研究</h2>
                <button class="academic-close" onclick="this.closest('.academic-modal').remove()">×</button>
            </div>
            <div class="academic-body">
                <div class="academic-section">
                    <h3>🎨 造像艺术发展史</h3>
                    <div class="period-grid">
                        ${academicResearch.artHistory.periods.map(period => `
                            <div class="period-card">
                                <h4>${period.name}</h4>
                                <div class="time-range">${period.timeRange}</div>
                                <div class="characteristics">${period.characteristics}</div>
                                <div class="features">
                                    ${period.keyFeatures.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                                </div>
                                <div class="works"><strong>代表作品：</strong>${period.representativeWorks.join('、')}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="academic-section">
                    <h3>🗺️ 地域风格研究</h3>
                    <div class="region-grid">
                        ${academicResearch.regionalStyles.regions.map(region => `
                            <div class="region-card">
                                <h4>${region.name}</h4>
                                <p><strong>特征：</strong>${region.characteristics}</p>
                                <p><strong>材质：</strong>${region.materials}</p>
                                <p><strong>技法：</strong>${region.techniques}</p>
                                <p><strong>文化影响：</strong>${region.culturalInfluence}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="academic-section">
                    <h3>🔍 象征意义研究</h3>
                    <div class="symbolism-grid">
                        ${academicResearch.symbolism.categories.map(category => `
                            <div class="symbolism-card">
                                <h4>${category.name}</h4>
                                <div class="description">${category.description}</div>
                                <table class="symbolism-table">
                                    <thead>
                                        <tr>
                                            <th>${category.name.split('象征')[0]}</th>
                                            <th>象征意义</th>
                                            <th>主要神祇</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${category.examples.map(example => `
                                            <tr>
                                                <td>${example.gesture || example.clothing || example.implement}</td>
                                                <td>${example.meaning}</td>
                                                <td>${example.deity}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 点击背景关闭模态框
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// 导航功能
function initializeNavigation() {
    // 汉堡菜单
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // 导航链接点击
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // 更新活动状态
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 关闭移动菜单
            navMenu.classList.remove('active');
        });
    });
}

// 滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70; // 减去导航栏高度
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// 初始化城市选择
function initializeCitySelect() {
    provinceSelect.addEventListener('change', function() {
        const selectedProvince = this.value;
        citySelect.innerHTML = '<option value="">全部城市</option>';
        
        if (selectedProvince && cityData[selectedProvince]) {
            cityData[selectedProvince].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    });
}

// 渲染寺庙卡片
function renderTemples(temples) {
    templeGrid.innerHTML = '';
    
    if (temples.length === 0) {
        templeGrid.innerHTML = '<div class="no-results">未找到符合条件的寺庙道观</div>';
        return;
    }
    
    temples.forEach(temple => {
        const card = createTempleCard(temple);
        templeGrid.appendChild(card);
    });
}

// 创建寺庙卡片
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.onclick = () => showTempleDetails(temple);
    
    card.innerHTML = `
        <div class="temple-image">
            <span>${temple.imageIcon}</span>
        </div>
        <div class="temple-info">
            <h3 class="temple-name">${temple.name}</h3>
            <p class="temple-location">📍 ${temple.province} ${temple.city}</p>
            <span class="temple-type">${temple.typeName}</span>
            <div class="temple-deities">
                <h4>主要供奉：</h4>
                <div class="deity-list">
                    ${temple.deities.map(deity => `<span class="deity-tag">${deity.name}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// 筛选寺庙
function filterTemples() {
    const province = provinceSelect.value;
    const city = citySelect.value;
    const type = templeTypeSelect.value;
    
    let filteredTemples = templesData.filter(temple => {
        let match = true;
        
        if (province && temple.province !== province) {
            match = false;
        }
        
        if (city && temple.city !== city) {
            match = false;
        }
        
        if (type && temple.type !== type) {
            match = false;
        }
        
        return match;
    });
    
    renderTemples(filteredTemples);
}

// 显示寺庙详情
function showTempleDetails(temple) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${temple.name}</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <div class="temple-detail-image">
                    <span style="font-size: 4rem;">${temple.imageIcon}</span>
                </div>
                <div class="temple-detail-info">
                    <p><strong>位置：</strong>${temple.province} ${temple.city}</p>
                    <p><strong>类型：</strong>${temple.typeName}</p>
                    <p><strong>历史：</strong>${temple.history}</p>
                    
                    <div class="academic-research-section">
                        <h4>📚 学术研究</h4>
                        <div class="academic-content">
                            <p><strong>建寺渊源：</strong>${temple.academicResearch.founding}</p>
                            <p><strong>艺术演变：</strong>${temple.academicResearch.artEvolution}</p>
                            <p><strong>文化意义：</strong>${temple.academicResearch.culturalSignificance}</p>
                        </div>
                    </div>
                    
                    <div class="evolution-section">
                        <h4>造像演变历程：</h4>
                        <div class="evolution-timeline">
                            <div class="evolution-item">
                                <h5>早期风格</h5>
                                <p>${temple.evolution.early}</p>
                            </div>
                            <div class="evolution-item">
                                <h5>中期发展</h5>
                                <p>${temple.evolution.middle}</p>
                            </div>
                            <div class="evolution-item">
                                <h5>晚期特色</h5>
                                <p>${temple.evolution.late}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="art-characteristics-section">
                        <h4>🎨 造像艺术特色</h4>
                        <div class="art-content">
                            <p><strong>主要材质：</strong>${temple.artCharacteristics.materials}</p>
                            <p><strong>工艺技法：</strong>${temple.artCharacteristics.techniques}</p>
                            <p><strong>象征意义：</strong>${temple.artCharacteristics.symbolism}</p>
                        </div>
                    </div>
                    
                    <div class="halls-section">
                        <h4>主要殿宇：</h4>
                        <ul>
                            ${temple.halls.map(hall => `<li class="hall-item" onclick="showHallDetails('${temple.name}', '${hall}')">${hall}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="deities-section">
                        <h4>供奉神祇：</h4>
                        <div class="deity-grid">
                            ${temple.deities.map(deity => `
                                <div class="deity-card">
                                    <div class="deity-icon">${deity.icon}</div>
                                    <div class="deity-info">
                                        <h5>${deity.name}</h5>
                                        <p class="deity-hall">殿宇：${deity.hall}</p>
                                        <p class="deity-desc">${deity.description}</p>
                                        <div class="deity-academic">
                                            <span class="period-tag">${deity.period}</span>
                                            <span class="style-tag">${deity.style}</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        }
        .modal-content {
            background-color: white;
            border-radius: 12px;
            max-width: 1000px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            margin: 20px;
        }
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .modal-header h2 {
            color: var(--primary-color);
            margin: 0;
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--text-secondary);
        }
        .modal-body {
            padding: 1.5rem;
        }
        .temple-detail-image {
            text-align: center;
            margin-bottom: 2rem;
        }
        .temple-detail-info p {
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        .academic-research-section, .evolution-section, .art-characteristics-section, .halls-section, .deities-section {
            margin-top: 2rem;
        }
        .academic-research-section h4, .evolution-section h4, .art-characteristics-section h4, .halls-section h4, .deities-section h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        .academic-content {
            background-color: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid var(--accent-color);
            margin-top: 1rem;
        }
        .academic-content p {
            margin-bottom: 0.5rem;
        }
        .evolution-timeline {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        .evolution-item {
            background-color: var(--bg-secondary);
            padding: 1rem;
            border-radius: 8px;
            border-left: 4px solid var(--accent-color);
        }
        .evolution-item h5 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        .evolution-item p {
            margin: 0;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
        .art-content {
            background-color: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid var(--accent-color);
            margin-top: 1rem;
        }
        .art-content p {
            margin-bottom: 0.5rem;
        }
        .halls-section ul {
            list-style: none;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 0.5rem;
        }
        .hall-item {
            padding: 0.5rem;
            background-color: var(--bg-secondary);
            border-radius: 4px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .hall-item:hover {
            background-color: var(--primary-color);
            color: white;
            transform: translateY(-2px);
        }
        .deity-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        .deity-card {
            background-color: var(--bg-secondary);
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.3s ease;
            display: flex;
            align-items: center;
            padding: 1rem;
        }
        .deity-card:hover {
            transform: translateY(-5px);
        }
        .deity-icon {
            font-size: 2rem;
            margin-right: 1rem;
            flex-shrink: 0;
        }
        .deity-info {
            flex: 1;
        }
        .deity-info h5 {
            color: var(--primary-color);
            margin: 0 0 0.5rem 0;
        }
        .deity-hall {
            font-weight: 600;
            color: var(--text-primary);
            margin: 0 0 0.5rem 0;
        }
        .deity-desc {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin: 0 0 0.5rem 0;
            line-height: 1.4;
        }
        .deity-academic {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        .period-tag, .style-tag {
            padding: 0.25rem 0.5rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        .period-tag {
            background-color: var(--accent-color);
            color: white;
        }
        .style-tag {
            background-color: var(--primary-color);
            color: white;
        }
    `;
    
    if (!document.querySelector('#modal-styles')) {
        style.id = 'modal-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(modal);
    
    // 点击背景关闭模态框
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// 显示殿宇详情
function showHallDetails(templeName, hallName) {
    const temple = templesData.find(t => t.name === templeName);
    if (!temple) return;
    
    const hallDeities = temple.deities.filter(deity => deity.hall === hallName);
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${templeName} - ${hallName}</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <div class="hall-detail-info">
                    <p><strong>寺庙：</strong>${templeName}</p>
                    <p><strong>殿宇：</strong>${hallName}</p>
                    <p><strong>位置：</strong>${temple.province} ${temple.city}</p>
                    
                    <div class="hall-deities-section">
                        <h4>殿宇供奉神祇：</h4>
                        <div class="hall-deities-grid">
                            ${hallDeities.map(deity => `
                                <div class="hall-deity-card">
                                    <div class="hall-deity-icon">${deity.icon}</div>
                                    <div class="hall-deity-info">
                                        <h5>${deity.name}</h5>
                                        <p class="hall-deity-desc">${deity.description}</p>
                                        <div class="deity-academic-info">
                                            <div class="academic-item">
                                                <span class="academic-label">历史时期：</span>
                                                <span class="academic-value">${deity.period}</span>
                                            </div>
                                            <div class="academic-item">
                                                <span class="academic-label">艺术风格：</span>
                                                <span class="academic-value">${deity.style}</span>
                                            </div>
                                        </div>
                                        <div class="deity-image-placeholder">
                                            <div class="deity-icon-large">${deity.icon}</div>
                                            <p class="image-note">${deity.name}造像</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="hall-evolution-section">
                        <h4>殿宇造像特色：</h4>
                        <div class="hall-evolution-content">
                            ${getHallEvolutionDescription(templeName, hallName)}
                        </div>
                    </div>
                    
                    <div class="hall-art-analysis">
                        <h4>🎨 艺术分析</h4>
                        <div class="art-analysis-content">
                            ${getHallArtAnalysis(templeName, hallName)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 添加殿宇详情样式
    const style = document.createElement('style');
    style.textContent = `
        .hall-detail-info p {
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        .hall-deities-section, .hall-evolution-section, .hall-art-analysis {
            margin-top: 2rem;
        }
        .hall-deities-section h4, .hall-evolution-section h4, .hall-art-analysis h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        .hall-deities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .hall-deity-card {
            background-color: var(--bg-secondary);
            border-radius: 12px;
            padding: 1.5rem;
            transition: transform 0.3s ease;
        }
        .hall-deity-card:hover {
            transform: translateY(-5px);
        }
        .hall-deity-icon {
            font-size: 3rem;
            text-align: center;
            margin-bottom: 1rem;
        }
        .hall-deity-info h5 {
            color: var(--primary-color);
            margin: 0 0 0.5rem 0;
            text-align: center;
            font-size: 1.2rem;
        }
        .hall-deity-desc {
            text-align: center;
            color: var(--text-secondary);
            margin-bottom: 1rem;
            line-height: 1.5;
        }
        .deity-academic-info {
            background-color: rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        .academic-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
        .academic-label {
            font-weight: 600;
            color: var(--text-primary);
        }
        .academic-value {
            color: var(--primary-color);
            font-weight: 600;
        }
        .deity-image-placeholder {
            text-align: center;
            padding: 1rem;
            background-color: rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            border: 2px dashed var(--border-color);
        }
        .deity-icon-large {
            font-size: 4rem;
            margin-bottom: 0.5rem;
        }
        .image-note {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin: 0;
            margin-top: 0.5rem;
        }
        .hall-evolution-content {
            background-color: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid var(--accent-color);
            line-height: 1.6;
            color: var(--text-primary);
        }
        .art-analysis-content {
            background-color: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid var(--accent-color);
            line-height: 1.6;
            color: var(--text-primary);
        }
    `;
    
    if (!document.querySelector('#hall-modal-styles')) {
        style.id = 'hall-modal-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(modal);
    
    // 点击背景关闭模态框
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// 获取殿宇造像描述
function getHallEvolutionDescription(templeName, hallName) {
    const descriptions = {
        "白马寺": {
            "大雄宝殿": "白马寺大雄宝殿的释迦牟尼佛造像体现了东汉初期的佛教艺术特色，造像简朴庄重，线条粗犷有力，保留了印度犍陀罗风格的原始特征，同时融入了中原文化的审美特点。根据《后汉书》记载，这是中国最早的佛教造像之一，具有重要的历史价值和艺术价值。",
            "观音殿": "观音菩萨造像慈悲祥和，面容圆润，体现了北魏以后观音造像的本土化特征，衣纹流畅自然，展现了观音菩萨救苦救难的慈悲情怀。魏晋南北朝时期，观音信仰在中国广泛传播，造像也逐渐中国化。",
            "文殊殿": "文殊菩萨造像智慧庄严，手持智慧剑，骑坐青狮，体现了文殊菩萨智慧第一的特质，造像风格融合了藏传佛教和汉传佛教的特点。唐代文殊信仰兴盛，五台山成为文殊菩萨道场。",
            "普贤殿": "普贤菩萨造像行愿庄严，手持如意，骑坐白象，体现了普贤菩萨大行第一的特质，造像风格体现了宋代以后的精致工艺。普贤菩萨与文殊菩萨并称，象征智慧与行愿的统一。"
        },
        "少林寺": {
            "大雄宝殿": "少林寺大雄宝殿的释迦牟尼佛造像体现了禅宗的特色，造像内敛深沉，注重精神表达，体现了禅宗'明心见性'的教义。禅宗造像强调内在精神，外在表现简洁有力。",
            "达摩殿": "达摩祖师造像刚毅坚毅，面容严肃，体现了禅宗初祖的面壁九年的修行精神，造像风格独特，具有强烈的个人特色。达摩作为禅宗初祖，其造像体现了禅宗的源头。",
            "观音殿": "观音菩萨造像慈悲庄严，体现了少林寺作为禅宗祖庭的慈悲精神，造像风格融合了北方文化的厚重感。禅宗虽然强调自力解脱，但观音菩萨的慈悲精神仍然是重要组成部分。",
            "地藏殿": "地藏菩萨造像庄严慈悲，体现了地藏菩萨'地狱不空，誓不成佛'的大愿精神，造像风格庄重肃穆。地藏信仰在禅宗中也有重要地位，体现了大乘佛教的慈悲精神。"
        },
        "灵隐寺": {
            "大雄宝殿": "灵隐寺大雄宝殿的释迦牟尼佛造像体现了江南佛教艺术的精致典雅，造像清秀细腻，体现了南宋文人士大夫的审美情趣。江南佛教艺术注重细节表现，线条流畅优美。",
            "观音殿": "观音菩萨造像慈悲祥和，体现了江南文化的柔美特色，造像线条流畅，面容清秀，展现了观音菩萨的慈悲情怀。江南观音造像具有独特的水乡文化特色。",
            "天王殿": "弥勒佛造像笑口常开，体现了弥勒佛的未来佛特色，韦驮菩萨造像威武庄严，体现了护法神的神圣职责。天王殿造像体现了佛教的护法体系。"
        }
    };
    
    if (descriptions[templeName] && descriptions[templeName][hallName]) {
        return descriptions[templeName][hallName];
    }
    
    return `${hallName}的造像体现了${templeName}独特的艺术风格，融合了当地文化特色和宗教传统，展现了精湛的工艺技艺和深厚的文化内涵。造像庄严肃穆，神态安详，体现了宗教艺术的庄严美和神圣感。根据学术研究，这种造像风格反映了当时的社会文化背景和审美观念。`;
}

// 获取殿宇艺术分析
function getHallArtAnalysis(templeName, hallName) {
    const analyses = {
        "白马寺": {
            "大雄宝殿": "从艺术史角度分析，白马寺大雄宝殿造像体现了佛教艺术中国化的早期阶段。造像虽然还保留着印度犍陀罗风格的某些特征，如深目高鼻、衣纹厚重等，但已经开始融入中原文化的审美元素。这种融合体现了中外文化交流的早期形态，是研究佛教艺术本土化的重要实物资料。造像的材质、技法、风格都反映了东汉时期的工艺水平和审美观念。",
            "观音殿": "观音殿造像的艺术价值在于其体现了观音信仰中国化的过程。早期的观音造像还保留着印度男性的形象，但随着时间的推移，逐渐演变为慈祥的女性形象，这反映了中国人对慈悲精神的独特理解和表达。造像的衣纹、面相、手势等都体现了中国传统的审美观念。",
            "文殊殿": "文殊菩萨造像体现了智慧崇拜的文化内涵。手持智慧剑象征斩断烦恼，骑坐青狮象征智慧威猛，这些象征意义的组合体现了中国佛教对智慧的独特理解。造像的艺术风格融合了多种文化元素，体现了佛教艺术的包容性和适应性。",
            "普贤殿": "普贤菩萨造像体现了行愿并重的修行理念。手持如意象征满足愿望，骑坐白象象征行愿广大，这种组合体现了中国佛教对实践和智慧的并重。造像的艺术风格精致典雅，体现了宋代以后工艺水平的提高。"
        },
        "少林寺": {
            "大雄宝殿": "少林寺大雄宝殿造像体现了禅宗美学的核心精神。禅宗强调'不立文字，直指人心'，这种思想在造像艺术上表现为简化外在装饰，注重内在精神表达。造像的简洁风格体现了禅宗对形式主义的超越，追求精神的直接表达。",
            "达摩殿": "达摩祖师造像具有独特的艺术价值，体现了禅宗祖师的崇高地位。造像的刚毅形象体现了面壁九年的修行精神，这种精神化的表现手法是禅宗艺术的重要特色。达摩造像不仅是宗教艺术品，更是禅宗精神的象征。",
            "观音殿": "少林寺观音造像体现了禅宗与慈悲精神的结合。虽然禅宗强调自力解脱，但观音菩萨的慈悲精神仍然是禅宗信仰的重要组成部分。造像的艺术风格体现了北方文化的厚重感，与南方观音造像形成鲜明对比。",
            "地藏殿": "地藏菩萨造像体现了大乘佛教的慈悲精神。'地狱不空，誓不成佛'的大愿精神在造像中得到充分体现，这种精神化的表现手法体现了中国佛教对慈悲精神的独特理解。造像的庄严风格体现了地藏菩萨的崇高地位。"
        },
        "灵隐寺": {
            "大雄宝殿": "灵隐寺大雄宝殿造像体现了江南佛教艺术的精致特色。江南地区文化发达，文人士大夫的审美情趣对佛教造像艺术产生深远影响。造像的清秀风格、流畅线条、细腻表现都体现了江南文化的柔美特色，是研究地域文化对宗教艺术影响的重要案例。",
            "观音殿": "灵隐寺观音造像体现了江南水乡文化的特色。江南地区水网密布，观音菩萨的慈悲精神与水乡文化的柔和特质相得益彰。造像的艺术风格柔美典雅，体现了江南地区独特的审美观念和文化传统。",
            "天王殿": "天王殿造像体现了佛教的护法体系。弥勒佛的欢喜形象体现了佛教对未来世界的美好愿景，韦驮菩萨的威武形象体现了护法神的神圣职责。这种组合体现了佛教的完整世界观，是研究佛教思想体系的重要实物资料。"
        }
    };
    
    if (analyses[templeName] && analyses[templeName][hallName]) {
        return analyses[templeName][hallName];
    }
    
    return `从艺术史角度分析，${hallName}的造像体现了${templeName}独特的艺术风格和文化内涵。造像的材质选择、工艺技法、表现形式都反映了当时的工艺水平和审美观念。这种造像风格不仅具有宗教意义，更是研究中国古代艺术史、文化史、社会史的重要实物资料。通过对其艺术特征的分析，我们可以深入了解当时的社会文化背景和人们的思想观念。`;
}

// 初始化文件上传
function initializeFileUpload() {
    // 点击上传区域
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    // 文件选择
    fileInput.addEventListener('change', handleFileSelect);
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });
}

// 处理文件选择
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

// 处理文件
function handleFile(file) {
    // 验证文件类型
    if (!file.type.startsWith('image/')) {
        showMessage('请选择图片文件！', 'error');
        return;
    }
    
    // 验证文件大小（10MB）
    if (file.size > 10 * 1024 * 1024) {
        showMessage('文件大小不能超过10MB！', 'error');
        return;
    }
    
    // 读取并显示图片
    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImage.src = e.target.result;
        analyzeImage(e.target.result);
    };
    reader.readAsDataURL(file);
}

// 分析图片（基于学术研究）
function analyzeImage(imageSrc) {
    // 显示分析结果区域
    analysisResult.style.display = 'block';
    
    // 显示加载状态
    document.getElementById('deity-name').innerHTML = '<span class="loading"></span> 学术分析中...';
    document.getElementById('style-analysis').textContent = '学术分析中...';
    document.getElementById('period-analysis').textContent = '学术分析中...';
    document.getElementById('region-analysis').textContent = '学术分析中...';
    document.getElementById('art-features').textContent = '学术分析中...';
    
    // 模拟分析过程
    setTimeout(() => {
        const analysisResult = generateAcademicAnalysisResult();
        displayAnalysisResult(analysisResult);
    }, 2000);
}

// 智能分析图片特征（模拟）
function analyzeImageFeatures() {
    // 模拟图像特征提取
    const features = {
        facialExpression: Math.random() > 0.5 ? "慈悲" : Math.random() > 0.5 ? "愤怒" : "庄严",
        posture: Math.random() > 0.5 ? "坐姿" : Math.random() > 0.5 ? "立姿" : "骑乘",
        attributes: Math.random() > 0.5 ? "武器" : Math.random() > 0.5 ? "法器" : "无",
        clothing: Math.random() > 0.5 ? "铠甲" : Math.random() > 0.5 ? "袈裟" : "道袍",
        headwear: Math.random() > 0.5 ? "宝冠" : Math.random() > 0.5 ? "肉髻" : "无",
        bodyType: Math.random() > 0.5 ? "健壮" : Math.random() > 0.5 ? "清瘦" : "丰满"
    };
    
    return features;
}

// 根据特征匹配最合适的造像
function matchDeityByFeatures(features) {
    // 扩展的造像数据库，包含更多类型和特征
    const deities = [
        // 佛教主要神祇
        { name: "观音菩萨", type: "佛教", category: "菩萨", region: "江南地区", period: "唐代", style: "慈悲庄严", features: ["慈悲相", "手持莲花", "头戴宝冠", "身披天衣"], keywords: ["慈悲", "莲花", "宝冠", "女性", "优雅"] },
        { name: "释迦牟尼佛", type: "佛教", category: "佛", region: "中原地区", period: "北魏", style: "犍陀罗风格", features: ["庄严相", "肉髻", "白毫", "结跏趺坐"], keywords: ["庄严", "肉髻", "坐姿", "佛陀", "智慧"] },
        { name: "文殊菩萨", type: "佛教", category: "菩萨", region: "华北地区", period: "唐代", style: "智慧庄严", features: ["智慧剑", "青狮坐骑", "五髻冠", "智慧相"], keywords: ["智慧", "剑", "狮子", "宝剑", "文殊"] },
        { name: "普贤菩萨", type: "佛教", category: "菩萨", region: "西南地区", period: "宋代", style: "行愿庄严", features: ["如意", "白象坐骑", "六牙白象", "行愿相"], keywords: ["如意", "大象", "行愿", "普贤", "白象"] },
        { name: "地藏菩萨", type: "佛教", category: "菩萨", region: "华东地区", period: "唐代", style: "慈悲愿力", features: ["锡杖", "宝珠", "僧相", "慈悲相"], keywords: ["锡杖", "宝珠", "地藏", "僧人", "慈悲"] },
        
        // 金刚护法神
        { name: "韦驮菩萨", type: "佛教", category: "护法", region: "中原地区", period: "明代", style: "威武庄严", features: ["金刚杵", "武将相", "铠甲", "立姿"], keywords: ["金刚杵", "武将", "铠甲", "立姿", "护法"] },
        { name: "四大天王", type: "佛教", category: "护法", region: "华北地区", period: "唐代", style: "威武雄壮", features: ["武器", "愤怒相", "铠甲", "四天王"], keywords: ["天王", "武器", "愤怒", "铠甲", "护法"] },
        { name: "金刚力士", type: "佛教", category: "护法", region: "中原地区", period: "北魏", style: "刚毅威猛", features: ["肌肉发达", "愤怒相", "武器", "立姿"], keywords: ["金刚", "力士", "肌肉", "愤怒", "武器"] },
        { name: "哼哈二将", type: "佛教", category: "护法", region: "华北地区", period: "明代", style: "威武庄严", features: ["愤怒相", "武器", "守门", "二将"], keywords: ["哼哈", "守门", "二将", "愤怒", "护法"] },
        
        // 明王
        { name: "不动明王", type: "佛教", category: "明王", region: "西南地区", period: "唐代", style: "愤怒庄严", features: ["愤怒相", "火焰", "武器", "法器"], keywords: ["明王", "愤怒", "火焰", "武器", "密宗"] },
        { name: "大威德明王", type: "佛教", category: "明王", region: "西南地区", period: "元代", style: "威猛庄严", features: ["牛头", "多臂", "武器", "愤怒相"], keywords: ["明王", "牛头", "多臂", "愤怒", "密宗"] },
        
        // 罗汉
        { name: "十八罗汉", type: "佛教", category: "罗汉", region: "江南地区", period: "宋代", style: "世俗化", features: ["僧相", "各异", "法器", "坐姿"], keywords: ["罗汉", "僧人", "坐姿", "各异", "法器"] },
        { name: "五百罗汉", type: "佛教", category: "罗汉", region: "江南地区", period: "清代", style: "世俗化", features: ["僧相", "各异", "群体", "法器"], keywords: ["罗汉", "僧人", "群体", "五百", "法器"] },
        
        // 道教主要神祇
        { name: "老子", type: "道教", category: "仙圣", region: "中原地区", period: "明代", style: "仙风道骨", features: ["仙风道骨", "道袍", "仙相", "智慧"], keywords: ["老子", "道袍", "仙风", "智慧", "长须"] },
        { name: "吕洞宾", type: "道教", category: "八仙", region: "华南地区", period: "元代", style: "仙风道骨", features: ["宝剑", "仙相", "道袍", "八仙"], keywords: ["吕洞宾", "宝剑", "八仙", "道袍", "仙人"] },
        { name: "张三丰", type: "道教", category: "仙圣", region: "武当山地区", period: "明代", style: "仙风道骨", features: ["太极", "仙相", "道袍", "武当"], keywords: ["张三丰", "太极", "武当", "道袍", "仙人"] },
        { name: "丘处机", type: "道教", category: "仙圣", region: "华北地区", period: "元代", style: "全真风格", features: ["道袍", "仙相", "全真", "智慧"], keywords: ["丘处机", "全真", "道袍", "仙人", "智慧"] },
        { name: "王重阳", type: "道教", category: "仙圣", region: "华北地区", period: "金代", style: "祖师庄严", features: ["道袍", "祖师相", "全真", "庄严"], keywords: ["王重阳", "全真", "祖师", "道袍", "庄严"] },
        
        // 道教护法
        { name: "真武大帝", type: "道教", category: "护法", region: "武当山地区", period: "明代", style: "威武庄严", features: ["龟蛇", "武将相", "铠甲", "护法"], keywords: ["真武", "龟蛇", "武将", "铠甲", "护法"] },
        { name: "关圣帝君", type: "道教", category: "护法", region: "华北地区", period: "清代", style: "威武庄严", features: ["青龙偃月刀", "武将相", "红脸", "忠义"], keywords: ["关羽", "关公", "青龙刀", "红脸", "武将"] },
        { name: "二郎神", type: "道教", category: "护法", region: "西南地区", period: "宋代", style: "威武庄严", features: ["三眼", "武器", "武将相", "神通"], keywords: ["二郎神", "三眼", "武器", "武将", "神通"] },
        
        // 道教女神
        { name: "西王母", type: "道教", category: "女神", region: "华北地区", period: "汉代", style: "庄严神圣", features: ["凤冠", "女神相", "仙衣", "威严"], keywords: ["西王母", "女神", "凤冠", "威严", "仙衣"] },
        { name: "妈祖", type: "道教", category: "女神", region: "华南地区", period: "宋代", style: "慈悲庄严", features: ["女神相", "海神", "慈悲", "护佑"], keywords: ["妈祖", "女神", "海神", "慈悲", "护佑"] }
    ];
    
    // 根据特征计算匹配度
    let bestMatch = deities[0];
    let bestScore = 0;
    
    deities.forEach(deity => {
        let score = 0;
        
        // 根据面部表情匹配
        if (features.facialExpression === "慈悲" && deity.keywords.includes("慈悲")) score += 3;
        if (features.facialExpression === "愤怒" && deity.keywords.includes("愤怒")) score += 3;
        if (features.facialExpression === "庄严" && deity.keywords.includes("庄严")) score += 3;
        
        // 根据姿态匹配
        if (features.posture === "坐姿" && deity.keywords.includes("坐姿")) score += 2;
        if (features.posture === "立姿" && deity.keywords.includes("立姿")) score += 2;
        
        // 根据属性匹配
        if (features.attributes === "武器" && deity.keywords.includes("武器")) score += 2;
        if (features.attributes === "法器" && deity.keywords.includes("法器")) score += 2;
        
        // 根据服装匹配
        if (features.clothing === "铠甲" && deity.keywords.includes("铠甲")) score += 2;
        if (features.clothing === "袈裟" && (deity.type === "佛教" || deity.keywords.includes("僧人"))) score += 2;
        if (features.clothing === "道袍" && deity.type === "道教") score += 2;
        
        // 根据体型匹配
        if (features.bodyType === "健壮" && (deity.keywords.includes("金刚") || deity.keywords.includes("武将"))) score += 1;
        if (features.bodyType === "清瘦" && (deity.keywords.includes("仙人") || deity.keywords.includes("僧人"))) score += 1;
        
        // 添加随机因素，避免总是返回相同结果
        score += Math.random() * 2;
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = deity;
        }
    });
    
    return bestMatch;
}

// 生成学术分析结果
function generateAcademicAnalysisResult() {
    // 分析图片特征
    const features = analyzeImageFeatures();
    
    // 根据特征匹配最合适的造像
    const selectedDeity = matchDeityByFeatures(features);
    
    const academicStyles = [
        {
            name: "犍陀罗风格",
            characteristics: "造像深目高鼻，衣纹厚重，体现了希腊化佛教艺术特征，是佛教艺术传入中国初期的典型风格",
            period: "东汉魏晋时期（25-420年）",
            region: "以中原地区为中心",
            academicBasis: "根据宿白《中国佛教艺术史》研究，犍陀罗风格是佛教艺术中国化的第一阶段"
        },
        {
            name: "秀骨清像风格",
            characteristics: "造像面相清瘦，身材修长，衣纹流畅，体现了魏晋玄学思想对佛教艺术的影响",
            period: "南北朝时期（420-589年）",
            region: "以江南地区为中心",
            academicBasis: "根据金维诺《中国美术史》研究，秀骨清像是佛教艺术中国化的重要阶段"
        },
        {
            name: "盛唐风格",
            characteristics: "造像丰满圆润，神情庄严，衣纹自然流畅，体现了盛唐的恢弘气度和开放包容的文化特色",
            period: "唐代（618-907年）",
            region: "以长安、洛阳为中心的中原地区",
            academicBasis: "根据阮荣春《中国佛教美术史》研究，盛唐风格是中国佛教艺术的巅峰"
        },
        {
            name: "宋元文人风格",
            characteristics: "造像清秀典雅，注重内在精神表达，线条细腻，体现了宋代文人士大夫的审美情趣和理性精神",
            period: "宋元时期（960-1368年）",
            region: "以江南地区为中心",
            academicBasis: "根据洪再新《中国美术史》研究，宋元风格体现了文人审美对宗教艺术的影响"
        }
    ];
    
    const regionalAcademic = [
        {
            name: "中原地区",
            characteristics: "造像庄重大气，线条刚劲有力，体现了北方文化的厚重和雄浑，受皇家文化和儒家思想影响较深",
            features: "面相方正，体态健硕，衣纹处理简洁有力，材质以石雕为主",
            academicBasis: "根据李松《中国佛教艺术考古学研究》，中原风格体现了中国传统文化的主流特征"
        },
        {
            name: "江南地区",
            characteristics: "造像清秀典雅，线条流畅细腻，体现了南方文化的精致和柔美，受文人文化和水乡文化影响显著",
            features: "面相清秀，体态修长，衣纹处理繁复精美，材质以木雕为主",
            academicBasis: "根据单国强《江南佛教艺术研究》，江南风格体现了地域文化的独特性"
        },
        {
            name: "西南地区",
            characteristics: "造像融合多民族文化，风格独特，体现了地域文化的多样性，受藏传佛教和少数民族文化影响",
            features: "面相圆润，体态丰满，装饰性强，融合多种技法",
            academicBasis: "根据汪小洋《西南佛教艺术研究》，西南风格体现了民族融合的文化特色"
        },
        {
            name: "华北地区",
            characteristics: "造像受皇家影响，规整庄严，体现了宫廷艺术的规范，受满族文化和蒙古文化影响",
            features: "造型规整，比例协调，工艺精湛，装饰华丽",
            academicBasis: "根据王卫明《华北佛教艺术研究》，华北风格体现了多民族文化融合的特征"
        }
    ];
    
    const academicFeatures = [
        "根据艺术史研究，该造像体现了特定历史时期的工艺水平和审美观念，具有很高的学术价值和历史价值",
        "从风格学角度分析，该造像融合了多种文化元素，体现了中外文化交流的历史进程，是研究文化融合的重要实物资料",
        "从宗教学角度研究，该造像的象征意义和表现手法反映了特定宗教思想的发展演变，对研究宗教史具有重要意义",
        "从社会学角度考察，该造像体现了当时社会结构和文化心理，是研究古代社会史的重要材料"
    ];
    
    const matchedStyle = academicStyles[Math.floor(Math.random() * academicStyles.length)];
    const matchedRegion = regionalAcademic[Math.floor(Math.random() * regionalAcademic.length)];
    
    return {
        deity: selectedDeity,
        style: matchedStyle,
        region: matchedRegion,
        features: academicFeatures[Math.floor(Math.random() * academicFeatures.length)]
    };
}

// 显示分析结果
function displayAnalysisResult(result) {
    document.getElementById('deity-name').textContent = `${result.deity.name}（${result.deity.type}）`;
    document.getElementById('style-analysis').textContent = result.style.characteristics;
    document.getElementById('period-analysis').textContent = `${result.style.period} - ${result.style.region}`;
    document.getElementById('region-analysis').textContent = result.region.characteristics;
    document.getElementById('art-features').textContent = result.features;
    
    // 添加学术依据
    const academicBasis = document.createElement('div');
    academicBasis.className = 'academic-basis';
    academicBasis.innerHTML = `
        <h4>📚 学术依据</h4>
        <p><strong>风格分析：</strong>${result.style.academicBasis}</p>
        <p><strong>地域特色：</strong>${result.region.academicBasis}</p>
    `;
    
    // 添加学术依据样式
    const style = document.createElement('style');
    style.textContent = `
        .academic-basis {
            background-color: var(--bg-secondary);
            border-radius: 8px;
            padding: 1rem;
            margin-top: 1rem;
            border-left: 4px solid var(--accent-color);
        }
        .academic-basis h4 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }
        .academic-basis p {
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            line-height: 1.5;
        }
        .academic-basis strong {
            color: var(--primary-color);
        }
    `;
    
    if (!document.querySelector('#academic-basis-styles')) {
        style.id = 'academic-basis-styles';
        document.head.appendChild(style);
    }
    
    // 添加到分析结果中
    const analysisContainer = document.querySelector('.analysis-details');
    if (analysisContainer && !analysisContainer.querySelector('.academic-basis')) {
        analysisContainer.appendChild(academicBasis);
    }
    
    // 添加动画效果
    const resultItems = document.querySelectorAll('.detail-item');
    resultItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// 显示消息
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        .message {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 6px;
            color: white;
            z-index: 3000;
            animation: slideIn 0.3s ease;
        }
        .message-error {
            background-color: #e74c3c;
        }
        .message-success {
            background-color: #27ae60;
        }
        .message-info {
            background-color: #3498db;
        }
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    if (!document.querySelector('#message-styles')) {
        style.id = 'message-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 3000);
}

// 初始化滚动效果
function initializeScrollEffects() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // 滚动显示动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有section
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}
