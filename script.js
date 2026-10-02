const copy = {
en: {
jd:'JD · Fortune Global 500',designIntern:'Design Intern',uxIntern:'UI/UX Design Intern',funding:'Funding',csc:'China Scholarship Council (CSC)',cscProgram:'CSC-funded doctoral scholarship',
viewPhoto:'View full-size photo',
corresponding:'Corresponding author',authorLegend:'* Corresponding author',bestPaper:'Best Paper Award',readPaper:'Read paper',
about:'About', publications:'Publications', news:'News', service:'Academic service', skip:'Skip to content', menu:'Menu',
affiliation:'Ph.D. Candidate in Visual Design · Yonsei University',
bioLead:'I am a Ph.D. candidate in Visual Design at Yonsei University, based in Seoul, South Korea.',
bioBody:'My research explores how interactive systems shape relationships between people, artificial intelligence, and the living world. I combine human-centered research, prototyping, and design to examine everyday experiences of trust, culture, and inclusion. My doctoral studies are funded by the China Scholarship Council (CSC).',
interestsTitle:'Research interests',interest1:'Human–AI interaction and relationships',interest2:'More-than-human and sustainable design',interest3:'Cultural experience and inclusive design for ageing',location:'Seoul, South Korea',viewPublications:'View publications →',
pubIntro:'Conference and journal publications in design and human–computer interaction.',all:'All',earlier:'Earlier',works:'publications',forthcoming:'Forthcoming',publisher:'Publication',search:'Title search',pendingLink:'Public publication link pending.',pubNote:'Official English titles are preserved for citation. Entries without a confirmed public publication link include a clearly labelled title search.',
newsIntro:'Recent research, writing, and academic activities.',serviceIntro:'Reviewing, teaching, design internships, and funding.',reviewing:'Reviewing',reviewer:'Reviewer',teaching:'Teaching',visualInteraction:'Visual Interaction Design · Yonsei University',interactionStudio:'Interaction Design Studio · Yonsei University',socialDesign:'Social Design · Yonsei University',taKim:'Teaching assistant · Prof. Kim Young-Joon',taCho:'Teaching assistant · Prof. Cho Hyung-Seuk',practice:'Design internships',pkudh:'Research Center for Digital Humanities · Peking University',ux:'UI/UX Designer',honors:'Honors & intellectual property',
honor1:'National Bronze Award · China International College Students’ Internet+ Competition · 2023',honor2:'National Bronze Award · Challenge Cup Business Plan Competition · 2023',honor3:'National Second Prize · China College Student Computer Design Competition · 2022',patent:'Smart Blind Stick · Design patent ZL 2022 3 0203004.5',footer:'Research & design · Yonsei University',description:'Yibo Zhang is a Ph.D. candidate in Visual Design at Yonsei University, researching human–AI interaction, more-than-human design, and inclusive experiences.'
},
zh: {
jd:'京东 · 世界 500 强',designIntern:'设计实习生',uxIntern:'UI/UX 设计实习生',funding:'资助',csc:'国家留学基金管理委员会（CSC）',cscProgram:'国家建设高水平公派博士研究生',
viewPhoto:'查看大图',
corresponding:'通讯作者',authorLegend:'* 通讯作者',bestPaper:'最佳论文奖',readPaper:'阅读论文',
about:'关于',publications:'论文',news:'动态',service:'学术服务',skip:'跳转到正文',menu:'菜单',affiliation:'视觉设计博士候选人 · 延世大学',
bioLead:'我目前是延世大学视觉设计的博士候选人，生活与研究于韩国首尔。',
bioBody:'我的研究关注交互系统如何塑造人与人工智能、人与生命世界之间的关系。我结合以人为本的研究、原型实践与设计，探索日常体验中的信任、文化与包容性。博士研究由 CSC 资助。',
interestsTitle:'研究兴趣',interest1:'人智交互与人与人工智能的关系',interest2:'超越人类中心的设计与可持续设计',interest3:'文化体验与面向老龄化的包容性设计',location:'韩国首尔',viewPublications:'查看论文 →',
pubIntro:'设计、人机交互领域的会议与期刊成果。',all:'全部',earlier:'更早',works:'项成果',forthcoming:'即将发表',publisher:'论文页面',search:'标题检索',pendingLink:'公开论文链接待补充。',pubNote:'论文保留正式英文标题，便于检索与引用。尚未确认公开链接的条目提供明确标注的标题检索入口。',
newsIntro:'近期研究、写作与学术活动。',serviceIntro:'学术评审、教学、设计实习与资助。',reviewing:'学术评审',reviewer:'审稿人',teaching:'教学',visualInteraction:'视觉交互设计 · 延世大学',interactionStudio:'交互设计工作室 · 延世大学',socialDesign:'社会设计 · 延世大学',taKim:'助教 · Kim Young-Joon 教授',taCho:'助教 · Cho Hyung-Seuk 教授',practice:'设计实习',pkudh:'数字人文研究中心 · 北京大学',ux:'UI/UX 设计师',honors:'荣誉与知识产权',
honor1:'中国国际大学生“互联网+”创新创业大赛 · 全国铜奖 · 2023',honor2:'“挑战杯”全国大学生创业计划竞赛 · 全国铜奖 · 2023',honor3:'中国大学生计算机设计大赛 · 全国二等奖 · 2022',patent:'智能导盲杖 · 外观设计专利 ZL 2022 3 0203004.5',footer:'研究与设计 · 延世大学',description:'Yibo Zhang 是延世大学视觉设计博士候选人，关注人智交互、超越人类中心的设计与包容性体验。'
}
};

const publications = [
  {year:2026,title:"From Daytime Diary to Nighttime Deactivation: Designing a Diary-Grounded LLM Sleep Companion for Young Adults",authors:"Yibo Zhang, Xiaoyu Ren",venue:"UbiComp / ISWC 2026",tag:"forthcoming"},
  {year:2026,title:"Developing a Framework for Mapping Plant Traits to Human Personality in Plant-Based Chatbots",authors:"Yibo Zhang, Young-ae Hahn",venue:"KSDS Spring International Conference",href:"https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12879217"},
  {year:2026,title:"Two Bots, One Couple: How Surrogate LLM Agents Shape Alliance, Fairness, and Relational Boundaries",authors:"Yibo Zhang, Zhiqiang Hou, Jianghuai Shao",venue:"CHI 2026 Extended Abstracts",href:"https://doi.org/10.1145/3772363.3798594"},
  {year:2026,title:"Co-Designing AI-thenticity in Cross-Cultural Design: Authenticity Judgments and Trust in AI-Generated Cultural Symbols",authors:"Yibo Zhang, Yingjie Li, Xiaoyu Ren",venue:"HCI International 2026",href:"https://doi.org/10.1007/978-3-032-29900-0_11",bestPaper:true},
  {year:2026,title:"Reflect-AI: Using Generative AI as a Reflective Partner in Design Studio Learning",authors:"Yingjie Li, Yibo Zhang, Jinyun Li",venue:"HCI International 2026",href:"https://doi.org/10.1007/978-3-032-30542-8_9",corresponding:true},
  {year:2025,title:"Tracking Cognition through Emotion: Designing a Device-Light Emotion Selection Routine for Daily Cognitive Engagement in Older Adults",authors:"Xiaoyu Ren, Yibo Zhang",venue:"UbiComp / ISWC 2025",href:"https://doi.org/10.1145/3714394.3754360",corresponding:true},
  {year:2025,title:"Interactive Game Design for Elderly Hand Rehabilitation Using Real-Time Hand Gesture Recognition",authors:"Yibo Zhang, Sung-bae Jo",venue:"JIPER",href:"https://doi.org/10.12972/kosiper.2025.13.6"},
  {year:2025,title:"Social Linker: Enhancing Elderly Social Connections Through Personality-Aligned Virtual Assistants and Guided Interaction Design",authors:"Yibo Zhang, Xiaoyu Ren",venue:"HCI International 2025",href:"https://doi.org/10.1007/978-3-031-92707-2_26"},
  {year:2025,title:"Cognitive Simplification in Scenic Design: Examining Background Complexity and Perceptual Load Adjustment in Tibetan Mani Stone Landscapes",authors:"Xiaoyu Ren, Zhijun Peng, Han Sun, Yibo Zhang, Deng Pan, Hong Zhao, Yirun Wang",venue:"HCI International 2025",href:"https://doi.org/10.1007/978-3-031-94153-5_7"},
  {year:2025,title:"Optimizing Material Utilization in 3D Food Printing Through Generative Design for Sustainable Culinary Solutions",authors:"Yibo Zhang, Qinghao Yang",venue:"HCI International 2025",href:"https://doi.org/10.1007/978-3-031-94165-8_47"},
  {year:2024,title:"A Proposal for AR Experience Games to Improve the Dining Experience of Elderly People with Dysphagia",authors:"Yibo Zhang, Sung-bae Jo",venue:"KOSIPER"},
  {year:2022,title:"Analysis of Future Food Design Based on 3D Printing and Aesthetic Design Technology",authors:"Qinghao Yang, Yibo Zhang, Haibo Luo",venue:"Agricultural Sciences",href:"https://doi.org/10.12677/hjas.2022.129110"}
];
const updates = [
  {date:"07.2026",title:{en:"HCI International 2026 · Best Paper Award",zh:"参加 HCI International 2026，并获最佳论文奖"},body:{en:'I attended HCI International 2026 in Montreal, Canada. Our paper “Co-Designing AI-thenticity in Cross-Cultural Design: Authenticity Judgments and Trust in AI-Generated Cultural Symbols” received the Best Paper Award of the 18th International Conference on Cross-Cultural Design, held as part of HCII 2026.',zh:'参加在加拿大蒙特利尔举办的 HCI International 2026。我们的论文《Co-Designing AI-thenticity in Cross-Cultural Design: Authenticity Judgments and Trust in AI-Generated Cultural Symbols》获得大会旗下第 18 届跨文化设计国际会议最佳论文奖。'},href:"https://doi.org/10.1007/978-3-032-29900-0_11",gallery:'featured',photos:[
    {src:'assets/hcii-2026-award.webp',width:1705,height:957,caption:{en:'Best Paper Award announcement',zh:'最佳论文奖颁奖画面'}},
    {src:'assets/hcii-2026-keynote.webp',width:1000,height:750,caption:{en:'HCII 2026 keynote session',zh:'HCII 2026 主题演讲'}},
    {src:'assets/hcii-2026-conference.webp',width:2048,height:1536,caption:{en:'HCI International 2026 in Montreal',zh:'蒙特利尔 HCI International 2026 会议现场'}}
  ]},
  {date:"06.2026",title:{en:"Plantality framework at KSDS",zh:"在 KSDS 展示 Plantality 框架"},body:{en:"Presented a framework for translating documented plant traits into conversational character design at the 2026 KSDS Spring International Conference.",zh:"在 2026 韩国设计学会春季国际会议展示了将植物事实转译为对话角色设计的框架。"},photos:[
    {src:'assets/ksds-2026-presentation.webp',width:2048,height:1536,caption:{en:'Plantality framework presentation',zh:'Plantality 框架现场报告'}},
    {src:'assets/ksds-2026-opening.webp',width:2048,height:1536,caption:{en:'KSDS 2026 opening ceremony',zh:'KSDS 2026 开幕式'}},
    {src:'assets/ksds-2026-program.webp',width:1536,height:2048,caption:{en:'Conference badge and program',zh:'参会证与会议手册'}}
  ]},
  {date:"04.2026",title:{en:"CHI 2026 · Barcelona",zh:"参加 CHI 2026 · 巴塞罗那"},body:{en:"I attended CHI 2026 in Barcelona, Spain.",zh:"参加在西班牙巴塞罗那举办的 CHI 2026。"},gallery:'pair',photos:[
    {src:'assets/chi-2026-attendance.webp',width:1536,height:2048,caption:{en:'At the CHI 2026 conference',zh:'CHI 2026 参会现场'}},
    {src:'assets/chi-2026-barcelona.webp',width:1536,height:2048,caption:{en:'Welcome to CHI 2026 · Barcelona',zh:'CHI 2026 欢迎标识 · 巴塞罗那'}}
  ]},
  {date:"2025",title:{en:"UbiComp / ISWC 2025 · Aalto University, Finland",zh:"参加 UbiComp / ISWC 2025 · 芬兰阿尔托大学"},body:{en:"I attended UbiComp / ISWC 2025 at Aalto University in Finland.",zh:"参加在芬兰阿尔托大学举办的 UbiComp / ISWC 2025。"},photos:[
    {src:'assets/ubicomp-2025-reception.webp',width:2048,height:1536,caption:{en:'UbiComp / ISWC 2025 opening reception',zh:'UbiComp / ISWC 2025 开幕招待会'}},
    {src:'assets/ubicomp-2025-ccf.webp',width:2048,height:1536,caption:{en:'CCF Technical Committee on Ubiquitous Computing',zh:'CCF 普适计算专委会旗帜'}},
    {src:'assets/ubicomp-2025-poster.webp',width:1536,height:2048,caption:{en:'Poster session at Aalto University',zh:'阿尔托大学海报展示现场'}}
  ]}
];

let savedLanguage;
try { savedLanguage = localStorage.getItem('yibo-lang'); } catch (_) {}
const state = {lang: savedLanguage === 'zh' ? 'zh' : 'en', filter: 'all'};
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const authorLine = pub => escapeHtml(pub.authors).replace(/Yibo Zhang/g, `<strong>Yibo Zhang${pub.corresponding ? `<sup class="corresponding-mark" aria-label="${copy[state.lang].corresponding}" title="${copy[state.lang].corresponding}">*</sup>` : ''}</strong>`);
function renderPublications() {
 const list = document.getElementById('publication-list');
 if (!list) return;
 const dictionary = copy[state.lang];
 const shown = publications.filter(pub => state.filter === 'all' || (state.filter === 'earlier' ? pub.year < 2025 : String(pub.year) === state.filter));
 document.getElementById('pub-count').textContent = `${shown.length} ${dictionary.works}`;
 const years = [...new Set(shown.map(pub => pub.year))];
 list.innerHTML = years.map(year => `<section class="publication-year" aria-labelledby="year-${year}"><h2 id="year-${year}">${year}</h2><div>${shown.filter(pub => pub.year === year).map(pub => {
 const href = pub.href || 'https://scholar.google.com/scholar?q=' + encodeURIComponent('"' + pub.title + '"');
 const linkLabel = pub.href ? (pub.href.includes('doi.org') ? 'DOI' : dictionary.publisher) : dictionary.search;
 return `<article class="publication"><h3><a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(pub.title)}</a></h3><p class="authors">${authorLine(pub)}</p><p class="venue">${escapeHtml(pub.venue)}${pub.tag ? `<span class="status">${dictionary.forthcoming}</span>` : ''}${pub.bestPaper ? `<span class="award-badge">${dictionary.bestPaper}</span>` : ''}</p><div class="paper-links"><a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${linkLabel} ↗</a>${!pub.href ? `<span class="pending-link">${dictionary.pendingLink}</span>` : ''}</div></article>`;
 }).join('')}</div></section>`).join('');
 document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.filter === state.filter)));
}
function renderUpdates() {
 const list = document.getElementById('updates-list');
 if (!list) return;
 list.innerHTML = updates.map(update => `<article class="news-item"><time>${update.date}</time><div class="news-content"><h2>${escapeHtml(update.title[state.lang])}</h2><p>${escapeHtml(update.body[state.lang])}</p>${update.href ? `<a class="news-paper-link" href="${escapeHtml(update.href)}" target="_blank" rel="noopener noreferrer">${copy[state.lang].readPaper} ↗</a>` : ''}${update.photos ? `<div class="news-gallery${update.gallery === 'featured' ? ' news-gallery-featured' : update.gallery === 'pair' ? ' news-gallery-pair' : ''}">${update.photos.map(photo => `<figure class="news-photo"><a href="${escapeHtml(photo.src)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(photo.caption[state.lang])} · ${copy[state.lang].viewPhoto}"><img src="${escapeHtml(photo.src)}" width="${photo.width}" height="${photo.height}" alt="${escapeHtml(photo.caption[state.lang])}" loading="lazy" decoding="async"></a><figcaption>${escapeHtml(photo.caption[state.lang])}</figcaption></figure>`).join('')}</div>` : ''}</div></article>`).join('');
}
function render() {
 const dictionary = copy[state.lang];
 document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
 const pageLabel = dictionary[document.body.dataset.page];
 document.title = `Yibo Zhang · ${pageLabel}`;
 document.querySelector('meta[name="description"]').content = dictionary.description;
 document.querySelectorAll('[data-i18n]').forEach(element => {const value = dictionary[element.dataset.i18n]; if (value !== undefined) element.textContent = value;});
 document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === state.lang)));
 renderPublications(); renderUpdates();
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => {state.lang = button.dataset.lang; try { localStorage.setItem('yibo-lang',state.lang); } catch (_) {} render();}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',() => {state.filter = button.dataset.filter;renderPublications();}));
const menuButton = document.querySelector('.menu-toggle'), nav = document.getElementById('primary-nav');
menuButton.addEventListener('click',() => {const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',event => {if (event.key === 'Escape') {nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}});
render();
