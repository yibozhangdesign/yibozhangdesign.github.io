const copy = {
  en: {
    skip:"Skip to content",topline:"Researching the relationships between people, AI, and the living world",location:"Seoul, South Korea",navAbout:"About",navResearch:"Research",navPublications:"Publications",navUpdates:"Updates",navExperience:"Experience",
    heroEyebrow:"Researcher · Designer · Yonsei University",heroLine1:"Designing for",heroLine2:"more meaningful",heroLine3:"connections.",heroSummary:"I study how interactive systems can help people relate more thoughtfully to AI, to one another, and to the natural world.",exploreResearch:"Explore research",contactMe:"Get in touch",heroCaption:"Human–AI interaction · ecological design · inclusive experiences",visualFoot:"RESEARCH & DESIGN · 2026",
    aboutIndex:"ABOUT",aboutOverline:"A little about me",aboutTitle:"Research at the intersection of <em>people, technology, and nature.</em>",aboutLead:"I am a researcher and designer in Visual Communication Design at Yonsei University. My work brings human-centered research together with speculative and practical design.",aboutBody:"Across conversational AI, cultural experience, and technology for ageing, I ask how interactive systems can make complex relationships easier to understand and more responsible to shape. I build prototypes, develop design frameworks, and study how people experience them in everyday contexts.",lensesTitle:"Current lenses",lens1:"Human–AI relationships",lens2:"More-than-human interaction",lens3:"Culture, authenticity & trust",lens4:"Inclusive experiences for ageing",
    researchIndex:"RESEARCH",researchOverline:"Selected work",researchTitle:"Questions made <em>tangible.</em>",researchIntro:"Projects move between evidence, experimentation, and public experience.",readProject:"Explore project",readPaper:"Read publication",ongoing:"Research in progress",
    publicationsIndex:"PUBLICATIONS",publicationsOverline:"Writing & scholarship",publicationsTitle:"Ideas in <em>print.</em>",publicationsIntro:"Selected conference and journal work across design, HCI, and human–AI interaction.",filterAll:"All",filterEarlier:"Earlier",pubCount:"works",publicationsNote:"Official English titles are preserved in both language versions.",forthcoming:"Forthcoming",
    updatesIndex:"UPDATES",updatesOverline:"In progress",updatesTitle:"What I'm <em>working on.</em>",updatesIntro:"A window into current questions, prototypes, and experiments.",
    experienceIndex:"EXPERIENCE",experienceOverline:"A path through design",experienceTitle:"Places & <em>practice.</em>",education:"Education",practice:"Practice & service",
    contactOverline:"Let's connect",contactTitle:"Have a question or<br><em>an idea to explore?</em>",footerText:"Research & design for more thoughtful connections.",backTop:"Back to top ↑",honors:"Honors & intellectual property",honor1:"National Bronze Award · China International College Students’ Internet+ Competition · 2023",honor2:"National Bronze Award · Challenge Cup Business Plan Competition · 2023",honor3:"National Second Prize · China College Student Computer Design Competition · 2022",patent:"Smart Blind Stick · Design patent ZL 2022 3 0203004.5",pageTitle:"Yibo Zhang · Research & Design",pageDescription:"Yibo Zhang is a researcher and designer at Yonsei University working across human–AI interaction, more-than-human design, cultural experience, and inclusive technology."
  },
  zh: {
    skip:"跳转到正文",topline:"探索人与人工智能及生命世界之间的关系",location:"韩国首尔",navAbout:"关于",navResearch:"研究",navPublications:"论文",navUpdates:"动态",navExperience:"经历",
    heroEyebrow:"研究者 · 设计师 · 延世大学",heroLine1:"为更有意义的",heroLine2:"连接",heroLine3:"而设计。",heroSummary:"我研究交互系统如何帮助人们以更审慎的方式理解人工智能、彼此与自然世界。",exploreResearch:"探索研究",contactMe:"与我联系",heroCaption:"人机交互 · 生态设计 · 包容性体验",visualFoot:"研究与设计 · 2026",
    aboutIndex:"关于",aboutOverline:"关于我",aboutTitle:"在<em>人、技术与自然</em>的交汇处开展研究。",aboutLead:"我在延世大学视觉传达设计领域从事研究与设计，将以人为本的研究方法与前瞻性、实践性的设计结合。",aboutBody:"从对话式人工智能、跨文化体验到老龄化相关技术，我关注交互系统如何让复杂关系更容易理解，也更值得信任。我通过原型、设计框架和用户研究，将这些问题带入具体情境。",lensesTitle:"当前关注",lens1:"人与人工智能的关系",lens2:"超越人类中心的交互",lens3:"文化、真实性与信任",lens4:"面向老龄化的包容性体验",
    researchIndex:"研究",researchOverline:"精选项目",researchTitle:"让问题变得<em>可感知。</em>",researchIntro:"我的项目在实证研究、交互实验与公共体验之间展开。",readProject:"查看项目",readPaper:"阅读论文",ongoing:"研究进行中",
    publicationsIndex:"论文",publicationsOverline:"研究与写作",publicationsTitle:"写下的<em>思考。</em>",publicationsIntro:"设计、人机交互与人智交互领域的部分会议及期刊成果。",filterAll:"全部",filterEarlier:"更早",pubCount:"项成果",publicationsNote:"为便于检索与引用，两种语言版本均保留论文的正式英文标题。",forthcoming:"即将发表",
    updatesIndex:"动态",updatesOverline:"进行中",updatesTitle:"最近在<em>做什么。</em>",updatesIntro:"近期研究问题、交互原型与实验的进展。",
    experienceIndex:"经历",experienceOverline:"设计之路",experienceTitle:"学习与<em>实践。</em>",education:"教育经历",practice:"研究实践与学术服务",
    contactOverline:"保持联系",contactTitle:"有问题或想法，<br><em>欢迎交流。</em>",footerText:"以研究与设计，建立更有思考的连接。",backTop:"返回顶部 ↑",honors:"荣誉与知识产权",honor1:"中国国际大学生“互联网+”创新创业大赛 · 全国铜奖 · 2023",honor2:"“挑战杯”全国大学生创业计划竞赛 · 全国铜奖 · 2023",honor3:"中国大学生计算机设计大赛 · 全国二等奖 · 2022",patent:"智能导盲杖 · 外观设计专利 ZL 2022 3 0203004.5",pageTitle:"Yibo Zhang · 研究与设计",pageDescription:"Yibo Zhang 是延世大学研究者与设计师，关注人智交互、超越人类中心的设计、文化体验和包容性技术。"
  }
};

const projects = [
  {type:"studio",year:"2026 —",status:{en:"Active research",zh:"持续研究"},title:{en:"Plantality Studio",zh:"Plantality Studio 植物人格工作室"},description:{en:"An interactive studio for examining botanical evidence, mapping plant traits to character, and reflecting on how we describe living things.",zh:"一座互动工作室：从植物学证据出发，将植物特征转译为角色，并反思我们描述生命的语言。"},href:"https://idef.yonsei.ac.kr/projects/botanical-chatbot",linkType:"project"},
  {type:"botanical",year:"2026 —",status:{en:"Active research",zh:"持续研究"},title:{en:"Botanical Chatbot",zh:"植物聊天机器人"},description:{en:"Evidence-grounded conversational characters that invite people to encounter plants as distinct living beings rather than background scenery.",zh:"以可追溯的植物事实塑造对话角色，邀请人们把植物视为独特的生命，而非环境背景。"},href:"https://idef.yonsei.ac.kr/projects/botanical-chatbot",linkType:"project"},
  {type:"culture",year:"2026",status:{en:"Published",zh:"已发表"},title:{en:"AI-thenticity in Cross-Cultural Design",zh:"跨文化设计中的 AI 真实性"},description:{en:"How do people judge cultural authenticity and trust when generative AI helps create cultural symbols?",zh:"当生成式 AI 参与文化符号创作，人们如何判断其真实性并建立信任？"},href:"https://doi.org/10.1007/978-3-032-29900-0_11",linkType:"paper"},
  {type:"ageing",year:"2025",status:{en:"Published",zh:"已发表"},title:{en:"Social Linker",zh:"Social Linker 社交连接"},description:{en:"Exploring personality-aligned virtual assistants and guided interaction to support older adults’ social connection.",zh:"探索个性匹配的虚拟助手与引导式交互，支持老年人的社会连接。"},href:"https://doi.org/10.1007/978-3-031-92707-2_26",linkType:"paper"}
];

const publications = [
  {year:2026,title:"From Daytime Diary to Nighttime Deactivation: Designing a Diary-Grounded LLM Sleep Companion for Young Adults",authors:"Yibo Zhang, Xiaoyu Ren",venue:"UbiComp / ISWC 2026",tag:"forthcoming"},
  {year:2026,title:"Developing a Framework for Mapping Plant Traits to Human Personality in Plant-Based Chatbots",authors:"Yibo Zhang, Young-ae Hahn",venue:"KSDS Spring International Conference",href:"https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12879217"},
  {year:2026,title:"Two Bots, One Couple: How Surrogate LLM Agents Shape Alliance, Fairness, and Relational Boundaries",authors:"Yibo Zhang, Zhiqiang Hou, Jianghuai Shao",venue:"CHI 2026 Extended Abstracts",href:"https://doi.org/10.1145/3772363.3798594"},
  {year:2026,title:"Co-Designing AI-thenticity in Cross-Cultural Design: Authenticity Judgments and Trust in AI-Generated Cultural Symbols",authors:"Yibo Zhang, Yingjie Li, Xiaoyu Ren",venue:"HCI International 2026",href:"https://doi.org/10.1007/978-3-032-29900-0_11"},
  {year:2026,title:"Reflect-AI: Using Generative AI as a Reflective Partner in Design Studio Learning",authors:"Yingjie Li, Yibo Zhang, Jinyun Li",venue:"HCI International 2026",href:"https://doi.org/10.1007/978-3-032-30542-8_9"},
  {year:2025,title:"Tracking Cognition through Emotion: Designing a Device-Light Emotion Selection Routine for Daily Cognitive Engagement in Older Adults",authors:"Xiaoyu Ren, Yibo Zhang",venue:"UbiComp / ISWC 2025"},
  {year:2025,title:"Interactive Game Design for Elderly Hand Rehabilitation Using Real-Time Hand Gesture Recognition",authors:"Yibo Zhang, Sung-bae Jo",venue:"JIPER"},
  {year:2025,title:"Social Linker: Enhancing Elderly Social Connections Through Personality-Aligned Virtual Assistants and Guided Interaction Design",authors:"Yibo Zhang, Xiaoyu Ren",venue:"HCI International 2025",href:"https://doi.org/10.1007/978-3-031-92707-2_26"},
  {year:2025,title:"Cognitive Simplification in Scenic Design: Examining Background Complexity and Perceptual Load Adjustment in Tibetan Mani Stone Landscapes",authors:"Xiaoyu Ren, Zhijun Peng, Han Sun, Yibo Zhang, Deng Pan, Hong Zhao, Yirun Wang",venue:"HCI International 2025"},
  {year:2025,title:"Optimizing Material Utilization in 3D Food Printing Through Generative Design for Sustainable Culinary Solutions",authors:"Yibo Zhang, Qinghao Yang",venue:"HCI International 2025"},
  {year:2024,title:"Research on Interactive Design of Intangible Heritage APP Based on CA/QFD/TRIZ Integration Method",authors:"Yibo Zhang, Xiaoyu Ren, Rongrong Qiao",venue:"Advances in Social Science and Culture"},
  {year:2024,title:"A Proposal for AR Experience Games to Improve the Dining Experience of Elderly People with Dysphagia",authors:"Yibo Zhang, Sung-bae Jo",venue:"KOSIPER"},
  {year:2022,title:"Analysis of Future Food Design Based on 3D Printing and Aesthetic Design Technology",authors:"Qinghao Yang, Yibo Zhang, Haibo Luo",venue:"Agricultural Sciences"}
];

const updates = [
  {date:"09.2026",title:{en:"Developing Plantality Studio",zh:"推进 Plantality Studio"},body:{en:"A new interactive prototype lets visitors inspect plant evidence and make their own choices about personality language. Prototype and research are ongoing.",zh:"新的交互原型让访客检视植物证据，自主选择描述植物人格的语言。原型和研究仍在推进。"}},
  {date:"09.2026",title:{en:"Studying AI, cultural authenticity, and trust",zh:"研究 AI、文化真实性与信任"},body:{en:"Current manuscript work examines how AI-generated cultural symbols are interpreted across design and communication contexts. Manuscript in preparation.",zh:"近期手稿探讨 AI 生成的文化符号如何在设计与传播语境中被理解。手稿仍在准备中。"}},
  {date:"09.2026",title:{en:"Casting voices for plant chatbots",zh:"为植物聊天机器人寻找声音与角色"},body:{en:"An ongoing study explores how plant traits, conversational style, and audience associations can inform character design. Research in progress.",zh:"一项进行中的研究探索植物特征、对话风格与受众联想如何共同指导角色设计。"}},
  {date:"06.2026",title:{en:"Plantality framework at KSDS",zh:"在 KSDS 展示 Plantality 框架"},body:{en:"Presented a framework for translating documented plant traits into conversational character design at the 2026 KSDS Spring International Conference.",zh:"在 2026 韩国设计学会春季国际会议展示了将植物事实转译为对话角色设计的框架。"}}
];

const education = [
  {date:"2025 —",title:{en:"Yonsei University",zh:"延世大学"},detail:{en:"Visual Communication Design · Seoul, Korea",zh:"视觉传达设计 · 韩国首尔"}},
  {date:"2023–2025",title:{en:"Cheongju University",zh:"清州大学"},detail:{en:"Industrial Design · Cheongju, Korea",zh:"工业设计 · 韩国清州"}},
  {date:"2019–2023",title:{en:"Shanxi University",zh:"山西大学"},detail:{en:"Environmental Design · Shanxi, China",zh:"环境设计 · 中国山西"}}
];
const practice = [
  {date:"2024 —",title:{en:"Peking University",zh:"北京大学"},detail:{en:"UI/UX Designer · Research Center for Digital Humanities",zh:"数字人文研究中心 · UI/UX 设计师"}},
  {date:"2025–2026",title:{en:"Yonsei University",zh:"延世大学"},detail:{en:"Teaching assistant · social, visual interaction, and studio design",zh:"助教 · 社会设计、视觉交互与交互设计工作室"}},
  {date:"2026",title:{en:"Academic reviewing",zh:"学术评审"},detail:{en:"CSCW 2026; Social Sciences & Humanities Open",zh:"CSCW 2026；Social Sciences & Humanities Open"}}
];

const state = { lang: localStorage.getItem("yibo-lang") === "zh" ? "zh" : "en", filter:"all" };
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
const text = (en,zh) => state.lang === "zh" ? zh : en;

function renderProjects(){
  document.querySelector("#project-grid").innerHTML = projects.map((project,index)=>{
    const art = project.type === "studio" ? '<img src="assets/plantality-studio.webp" alt="Plantality Studio interface" loading="lazy" width="1600" height="877">' : project.type === "botanical" ? '<img src="assets/botanical-chatbot.webp" alt="Botanical chatbot project illustration" loading="lazy" width="1400" height="765">' : project.type === "culture" ? '<span class="culture-ring"></span><span class="culture-ring"></span><span class="culture-art-text">AI <em>×</em><br>culture</span>' : '<div class="ageing-graphic" aria-hidden="true"><span></span><span></span><span></span></div>';
    const link = project.href ? `<a class="project-link" href="${project.href}" target="_blank" rel="noopener noreferrer">${project.linkType === "paper" ? copy[state.lang].readPaper : copy[state.lang].readProject} ↗</a>` : `<span class="project-status">${copy[state.lang].ongoing}</span>`;
    return `<article class="project-card"><div class="project-art project-art--${project.type}">${art}</div><div class="project-content"><div class="project-meta"><span>${String(index+1).padStart(2,"0")} / ${project.year}</span><span>${escapeHtml(project.status[state.lang])}</span></div><h3>${escapeHtml(project.title[state.lang])}</h3><p>${escapeHtml(project.description[state.lang])}</p>${link}</div></article>`;
  }).join("");
}
function renderPublications(){
  const shown = publications.filter(pub => state.filter === "all" || (state.filter === "earlier" ? pub.year < 2025 : String(pub.year) === state.filter));
  document.querySelector("#pub-count").textContent = `${shown.length} ${copy[state.lang].pubCount}`;
  document.querySelector("#publication-list").innerHTML = shown.map(pub=>{
    const title = escapeHtml(pub.title), titleHtml = pub.href ? `<a href="${pub.href}" target="_blank" rel="noopener noreferrer">${title} ↗</a>` : title;
    return `<article class="publication"><div class="pub-year">${pub.year}</div><div class="pub-details"><h3>${titleHtml}</h3><p>${escapeHtml(pub.authors)}</p></div><div class="pub-venue">${escapeHtml(pub.venue)}${pub.tag ? `<span class="pub-tag">· ${copy[state.lang].forthcoming}</span>` : ""}</div></article>`;
  }).join("");
  document.querySelectorAll("[data-filter]").forEach(button=>button.classList.toggle("active",button.dataset.filter===state.filter));
}
function renderUpdates(){document.querySelector("#updates-list").innerHTML=updates.map((update,index)=>`<article class="update-item"><div class="update-date">${update.date}</div><div class="update-content"><h3>${escapeHtml(update.title[state.lang])}</h3><p>${escapeHtml(update.body[state.lang])}</p></div><div class="update-arrow" aria-hidden="true">${String(index+1).padStart(2,"0")}</div></article>`).join("");}
function renderExperience(){for(const [id,data] of [["education-list",education],["practice-list",practice]]){document.getElementById(id).innerHTML=data.map(item=>`<div class="experience-item"><div class="experience-date">${item.date}</div><div><h4>${escapeHtml(item.title[state.lang])}</h4><p>${escapeHtml(item.detail[state.lang])}</p></div></div>`).join("");}}
function render(){
  const dictionary=copy[state.lang];document.documentElement.lang=state.lang === "zh" ? "zh-CN" : "en";document.title=dictionary.pageTitle;document.querySelector('meta[name="description"]').content=dictionary.pageDescription;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const value=dictionary[el.dataset.i18n];if(value!==undefined)el.innerHTML=value;});
  document.querySelectorAll("[data-lang]").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.lang===state.lang)));
  renderProjects();renderPublications();renderUpdates();renderExperience();
}
document.querySelectorAll("[data-lang]").forEach(button=>button.addEventListener("click",()=>{state.lang=button.dataset.lang;localStorage.setItem("yibo-lang",state.lang);render();}));
document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{state.filter=button.dataset.filter;renderPublications();}));
const menuButton=document.querySelector(".menu-toggle"),nav=document.querySelector("#primary-nav");menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.setAttribute("aria-label",open ? "Close menu" : "Open menu");document.body.classList.toggle("menu-open",open);});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");document.body.classList.remove("menu-open");}));
render();
