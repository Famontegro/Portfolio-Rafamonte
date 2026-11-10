/* Replace this endpoint if the Formspree form changes. */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqppvzno";

const translations = {
  "pt-BR": {
    skip: "Pular para o conteúdo", "nav.home": "Início", "nav.about": "Sobre", "nav.projects": "Projetos", "nav.skills": "Habilidades", "nav.tastes": "Gostos", "nav.contact": "Contato",
    "hero.eyebrow": "ENGENHARIA DA COMPUTAÇÃO · USF", "hero.title": "Olá, eu sou<br><span>Rafael Montenegro.</span>", "hero.lead": "Estudante de Engenharia da Computação, apaixonado por tecnologia, eletrônica e desenvolvimento de soluções.", "hero.manifesto": "Transformando curiosidade em projetos, ideias em circuitos e conhecimento em tecnologia.", "hero.ctaProjects": "Conheça meus projetos", "hero.ctaAbout": "Sobre mim", "hero.location": "BRAGANÇA PAULISTA, SP · BRASIL", "hero.artCaption": "APRENDER FAZENDO.", "hero.scroll": "ROLE PARA EXPLORAR",
    "about.kicker": "QUEM ESTÁ POR TRÁS DOS PROJETOS", "about.heading": "Curioso por natureza.<br><span>Engenheiro em construção.</span>", "about.p1": "Sou Rafael Montenegro Ribeiro, estudante de Engenharia da Computação na Universidade São Francisco (USF), em Bragança Paulista. Estou no segundo semestre e gosto de aprender colocando a mão na massa.", "about.p2": "Tenho interesse por tecnologia, eletrônica, programação e automação. Gosto de entender como as coisas funcionam — dos componentes de um circuito aos sistemas que conectam hardware e software.", "about.p3": "Na faculdade, venho desenvolvendo projetos com Arduino, circuitos eletrônicos, programação em C e desenvolvimento web. Quero transformar cada conceito novo em algo que possa ser testado, melhorado e compartilhado.", "about.p4": "Também quero explorar cibersegurança, sistemas embarcados, desenvolvimento de software e inteligência artificial. Por enquanto, sigo aprendendo e construindo um projeto de cada vez.", "about.fact1": "SEMESTRE", "about.fact2": "ENG. DA COMPUTAÇÃO", "about.fact3": "CURIOSIDADE",
    "projects.kicker": "FEITO, TESTADO, APRENDIDO", "projects.heading": "Projetos que saíram<br><span>da bancada.</span>", "projects.note": "Cada projeto é uma oportunidade de conectar teoria com prática — e de aprender algo que não estava no roteiro.", "projects.academic": "PROJETO ACADÊMICO", "projects.personal": "PROJETO PESSOAL", "projects.nfcTitle": "Sistema de Controle de Acesso", "projects.nfcDesc": "Um protótipo de acesso que lê cartões NFC/RFID com o módulo RC522. O Arduino verifica a autorização e aciona LEDs, buzzer e um servo motor que simula a abertura de uma porta.", "projects.embedded": "Servo-Motor", "projects.repo": "Ver repositório <span>↗</span>", "projects.more": "Ver apresentação <span>↗</span>", "projects.calcTitle": "Calculadora Científica em C", "projects.calcDesc": "Uma calculadora científica com fórmulas em C, utilizando apenas uma biblioteca: stdio.h. O código possui 44 menus, 107 operações diferentes e 3.069 linhas de código.", "projects.logic": "Lógica de programação", "projects.math": "Operações matemáticas", "projects.inProgress": "EM DESENVOLVIMENTO", "projects.fireTitle": "Prevenção de Incêndios", "projects.fireDesc": "Projeto acadêmico sobre o uso de tecnologia para identificar e prevenir situações de risco. Os detalhes de funcionamento serão adicionados conforme o desenvolvimento avançar.", "projects.sensors": "Sensores", "projects.automation": "Automação", "projects.safety": "Prevenção", "projects.detailsSoon": "Detalhes em breve", "projects.monitoring": "MONITORAMENTO ATIVO",
    "skills.kicker": "FERRAMENTAS NA BANCADA", "skills.heading": "O que estou<br><span>aprendendo a fazer.</span>", "skills.note": "Conhecimentos em evolução, construídos com estudo e prática. Os níveis mostram minha experiência atual, não uma nota final.", "skills.programming": "Programação", "skills.tools": "Ferramentas", "skills.electronics": "Eletrônica", "skills.basicInter": "Intermediário-avançado", "skills.basic": "Básico", "skills.advanced": "Avançado", "skills.intermediate": "Intermediário", "skills.gitLevel": "Avançado", "skills.learning": "Em desenvolvimento", "skills.daily": "Uso acadêmico", "skills.projects": "Projetos acadêmicos", "skills.circuits": "Circuitos eletrônicos", "skills.components": "Componentes eletrônicos", "skills.embedded": "Sistemas embarcados", "skills.sensors": "Sensores e atuadores", "skills.automation": "Automação",
    "interests.kicker": "CURIOSIDADE TAMBÉM É COMBUSTÍVEL", "interests.heading": "Além do código<span class=\"accent-dot\">.</span>", "interests.intro": "O que me faz querer abrir mais uma aba, desmontar mais um circuito e descobrir como tudo se conecta.", "interests.electronics": "Eletrônica e circuitos", "interests.robotics": "Robótica e automação", "interests.security": "Cibersegurança", "interests.ai": "Inteligência artificial", "interests.hardware": "Hardware e sistemas embarcados", "interests.software": "Desenvolvimento de software", "interests.music": "Rock clássico, progressivo e uma boa playlist para programar",
    "tastes.kicker": "UM POUCO ALÉM DA TECNOLOGIA", "tastes.heading": "Gostos pessoais<span class=\"accent-dot\">.</span>", "tastes.note": "Música, pedaladas, filmes e fotografia também fazem parte de quem sou fora da bancada.", "tastes.musicLabel": "NA MINHA PLAYLIST", "tastes.musicTitle": "Rock clássico e progressivo.", "tastes.musicDesc": "Guitarras, letras marcantes e músicas que dão vontade de ouvir o álbum inteiro.", "tastes.spotify": "Spotify · Rafamonte", "tastes.rideLabel": "NO CAMINHO", "tastes.rideTitle": "Pedal, paisagem e pôr do sol.", "tastes.rideDesc": "Gosto de andar de bike, explorar novos caminhos e parar para fotografar a paisagem.", "tastes.strava": "Strava · Rafael Montenegro", "tastes.screenLabel": "TELA GRANDE E PEQUENA", "tastes.screenTitle": "Filmes e séries, sem rótulo.", "tastes.screenDesc": "Sou eclético com filmes e séries. Musical é o único gênero que não costuma entrar na lista.", "tastes.photoLabel": "OLHAR COM CALMA", "tastes.photoTitle": "Paisagens que merecem uma pausa.", "tastes.photoDesc": "Também fotografo paisagens, luzes de fim de tarde e os lugares que encontro pelo caminho.", "tastes.flickr": "Flickr · Rafael Montenegro",
    "journey.kicker": "UM PASSO DE CADA VEZ", "journey.heading": "Minha trajetória<span class=\"accent-dot\">.</span>", "journey.note": "Ainda no começo, com bastante espaço pela frente para aprender, experimentar e contribuir.", "journey.y2025": "Conclusão do Ensino Médio", "journey.d2025": "Uma etapa concluída e o início de novos planos na tecnologia.", "journey.y2026": "Engenharia da Computação · USF", "journey.d2026": "Ingresso na Universidade São Francisco, campus Bragança Paulista. Segundo semestre do curso.", "journey.yProjects": "Projetos acadêmicos na prática", "journey.dProjects": "Programação, eletrônica, automação e sistemas embarcados em projetos que conectam software e hardware.", "journey.future": "O próximo capítulo está em aberto", "journey.dFuture": "Certificações, cursos e experiências profissionais — espaço reservado para o que vem a seguir.",
    "contact.kicker": "CONTATO", "contact.heading": "Vamos construir<br>algo interessante<span class=\"accent-dot\">?</span>", "contact.lead": "Estou aberto a oportunidades, projetos, conexões e experiências que contribuam para minha evolução na tecnologia.", "contact.formTitle": "Entre em contato comigo", "contact.name": "Nome completo", "contact.email": "E-mail", "contact.subject": "Assunto", "contact.optional": "(opcional)", "contact.message": "Mensagem", "contact.namePlaceholder": "Seu nome", "contact.emailPlaceholder": "voce@exemplo.com", "contact.subjectPlaceholder": "Sobre o que gostaria de conversar?", "contact.messagePlaceholder": "Conte um pouco sobre sua ideia...", "contact.send": "Enviar mensagem", "contact.formHint": "Resposta diretamente no seu e-mail.", "contact.formFoot": "Tem alguma ideia, projeto ou oportunidade interessante? Entre em contato. Será um prazer conversar!", "contact.setup": "Para receber mensagens, configure o endpoint do Formspree em script.js. Crie um formulário em formspree.io e cole o endpoint gerado na constante FORMSPREE_ENDPOINT.", "contact.success": "Mensagem enviada. Obrigado por entrar em contato!", "contact.error": "Não foi possível enviar agora. Tente novamente em instantes.", "contact.required": "Preencha este campo.", "contact.invalidEmail": "Informe um endereço de e-mail válido.", "contact.tooShort": "Escreva pelo menos 10 caracteres.", "contact.configure": "O formulário ainda precisa ser conectado ao Formspree. Veja a instrução abaixo.", "contact.sending": "Enviando…",
    "footer.copy": "Site feito com VibeCoding", "footer.top": "VOLTAR AO TOPO ↑"
  },
  en: {
    skip: "Skip to content", "nav.home": "Home", "nav.about": "About", "nav.projects": "Projects", "nav.skills": "Skills", "nav.tastes": "Personal", "nav.contact": "Contact",
    "hero.eyebrow": "COMPUTER ENGINEERING · USF", "hero.title": "Hi, I’m<br><span>Rafael Montenegro.</span>", "hero.lead": "Computer Engineering student passionate about technology, electronics, and building useful solutions.", "hero.manifesto": "Turning curiosity into projects, ideas into circuits, and knowledge into technology.", "hero.ctaProjects": "Explore my projects", "hero.ctaAbout": "About me", "hero.location": "BRAGANÇA PAULISTA, SP · BRAZIL", "hero.artCaption": "LEARN BY BUILDING.", "hero.scroll": "SCROLL TO EXPLORE",
    "about.kicker": "THE PERSON BEHIND THE PROJECTS", "about.heading": "Curious by nature.<br><span>Engineer in the making.</span>", "about.p1": "I’m Rafael Montenegro Ribeiro, a Computer Engineering student at Universidade São Francisco (USF) in Bragança Paulista, Brazil. I’m in my second semester and learn best by getting hands-on.", "about.p2": "I’m interested in technology, electronics, programming, and automation. I like understanding how things work, from individual circuit components to systems that bring hardware and software together.", "about.p3": "At university, I’ve been building projects with Arduino, electronic circuits, C programming, and web development. I want to turn each new concept into something I can test, improve, and share.", "about.p4": "I’m also eager to explore cybersecurity, embedded systems, software development, and artificial intelligence. For now, I’m learning and building one project at a time.", "about.fact1": "SEMESTER", "about.fact2": "COMPUTER ENGINEERING", "about.fact3": "CURIOSITY",
    "projects.kicker": "BUILT, TESTED, LEARNED", "projects.heading": "Projects that made it<br><span>off the workbench.</span>", "projects.note": "Every project is a chance to connect theory with practice — and learn something that wasn’t in the lesson plan.", "projects.academic": "ACADEMIC PROJECT", "projects.personal": "PERSONAL PROJECT", "projects.nfcTitle": "Access Control System", "projects.nfcDesc": "An access prototype that reads NFC/RFID cards with an RC522 module. The Arduino checks authorization and controls LEDs, a buzzer, and a servo motor that simulates opening a door.", "projects.embedded": "Servo Motor", "projects.repo": "View repository <span>↗</span>", "projects.more": "View presentation <span>↗</span>", "projects.calcTitle": "Scientific Calculator in C", "projects.calcDesc": "A scientific calculator with formulas in C, using only one library: stdio.h. The code has 44 menus, 107 different operations, and 3,069 lines of code.", "projects.logic": "Programming logic", "projects.math": "Mathematical operations", "projects.inProgress": "IN DEVELOPMENT", "projects.fireTitle": "Fire Prevention System", "projects.fireDesc": "An academic project exploring how technology can help identify and prevent risky situations. Specific details about how it works will be added as development progresses.", "projects.sensors": "Sensors", "projects.automation": "Automation", "projects.safety": "Prevention", "projects.detailsSoon": "More details soon", "projects.monitoring": "ACTIVE MONITORING",
    "skills.kicker": "TOOLS ON THE WORKBENCH", "skills.heading": "What I’m learning<br><span>to build.</span>", "skills.note": "Skills grow through study and practice. These descriptions reflect where I am today, not a final score.", "skills.programming": "Programming", "skills.tools": "Tools", "skills.electronics": "Electronics", "skills.basicInter": "Intermediate–advanced", "skills.basic": "Beginner", "skills.advanced": "Advanced", "skills.intermediate": "Intermediate", "skills.gitLevel": "Advanced", "skills.learning": "In progress", "skills.daily": "Academic use", "skills.projects": "Academic projects", "skills.circuits": "Electronic circuits", "skills.components": "Electronic components", "skills.embedded": "Embedded systems", "skills.sensors": "Sensors and actuators", "skills.automation": "Automation",
    "interests.kicker": "CURIOSITY IS FUEL, TOO", "interests.heading": "Beyond the code<span class=\"accent-dot\">.</span>", "interests.intro": "The things that make me open one more tab, take apart one more circuit, and find out how it all connects.", "interests.electronics": "Electronics and circuits", "interests.robotics": "Robotics and automation", "interests.security": "Cybersecurity", "interests.ai": "Artificial intelligence", "interests.hardware": "Hardware and embedded systems", "interests.software": "Software development", "interests.music": "Classic and progressive rock, plus a good coding playlist",
    "tastes.kicker": "A LITTLE BEYOND TECHNOLOGY", "tastes.heading": "Personal favorites<span class=\"accent-dot\">.</span>", "tastes.note": "Music, bike rides, films, and photography are part of who I am away from the workbench.", "tastes.musicLabel": "ON MY PLAYLIST", "tastes.musicTitle": "Classic and progressive rock.", "tastes.musicDesc": "Guitars, memorable lyrics, and albums worth listening to all the way through.", "tastes.spotify": "Spotify · Rafamonte", "tastes.rideLabel": "OUT ON THE ROAD", "tastes.rideTitle": "Bike rides, scenery, and sunsets.", "tastes.rideDesc": "I enjoy cycling, exploring new routes, and stopping to photograph the views along the way.", "tastes.strava": "Strava · Rafael Montenegro", "tastes.screenLabel": "BIG AND SMALL SCREENS", "tastes.screenTitle": "Films and series, no labels.", "tastes.screenDesc": "I’m eclectic when it comes to films and TV. Musical is the one genre I tend to skip.", "tastes.photoLabel": "TAKING IT IN", "tastes.photoTitle": "Landscapes worth pausing for.", "tastes.photoDesc": "I also photograph landscapes, late afternoon light, and the places I come across.", "tastes.flickr": "Flickr · Rafael Montenegro",
    "journey.kicker": "ONE STEP AT A TIME", "journey.heading": "My journey<span class=\"accent-dot\">.</span>", "journey.note": "I’m just getting started, with plenty of room to learn, experiment, and contribute.", "journey.y2025": "Completed high school", "journey.d2025": "One chapter wrapped up and new plans in technology taking shape.", "journey.y2026": "Computer Engineering · USF", "journey.d2026": "Started at Universidade São Francisco, Bragança Paulista campus. Currently in the second semester.", "journey.yProjects": "Academic projects in practice", "journey.dProjects": "Programming, electronics, automation, and embedded systems in projects that connect software with hardware.", "journey.future": "The next chapter is still open", "journey.dFuture": "Certifications, courses, and professional experience — room for whatever comes next.",
    "contact.kicker": "CONTACT", "contact.heading": "Let’s build<br>something interesting<span class=\"accent-dot\">?</span>", "contact.lead": "I’m open to opportunities, projects, connections, and experiences that help me grow in technology.", "contact.formTitle": "Get in touch", "contact.name": "Full name", "contact.email": "Email", "contact.subject": "Subject", "contact.optional": "(optional)", "contact.message": "Message", "contact.namePlaceholder": "Your name", "contact.emailPlaceholder": "you@example.com", "contact.subjectPlaceholder": "What would you like to talk about?", "contact.messagePlaceholder": "Tell me a little about your idea...", "contact.send": "Send message", "contact.formHint": "A reply straight to your inbox.", "contact.formFoot": "Have an idea, project, or interesting opportunity? Get in touch. I’d be glad to talk!", "contact.setup": "To receive messages, configure the Formspree endpoint in script.js. Create a form at formspree.io and paste its endpoint into the FORMSPREE_ENDPOINT constant.", "contact.success": "Message sent. Thanks for reaching out!", "contact.error": "Your message couldn’t be sent right now. Please try again shortly.", "contact.required": "Please fill in this field.", "contact.invalidEmail": "Enter a valid email address.", "contact.tooShort": "Please write at least 10 characters.", "contact.configure": "This form still needs to be connected to Formspree. See the setup note below.", "contact.sending": "Sending…",
    "footer.copy": "Site made with VibeCoding", "footer.top": "BACK TO TOP ↑"
  }
};

const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const languageButtons = [...document.querySelectorAll('[data-lang]')];
const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const formSetup = document.querySelector('#form-setup');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function savedValue(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } }
function saveValue(key, value) { try { localStorage.setItem(key, value); } catch { /* Storage can be unavailable in private contexts. */ } }

function setTheme(theme) {
  const chosen = theme === 'dark' ? 'dark' : 'light';
  root.dataset.theme = chosen;
  saveValue('rafamonte-theme', chosen);
  themeToggle.setAttribute('aria-label', chosen === 'light' ? (root.lang === 'en' ? 'Switch to dark mode' : 'Ativar modo escuro') : (root.lang === 'en' ? 'Switch to light mode' : 'Ativar modo claro'));
  document.querySelector('meta[name="theme-color"]').content = chosen === 'light' ? '#f8f9fa' : '#15191d';
}

function setLanguage(lang) {
  const chosen = lang === 'en' ? 'en' : 'pt-BR';
  const dictionary = translations[chosen];
  root.lang = chosen;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === chosen)));
  document.querySelector('.nav').setAttribute('aria-label', chosen === 'en' ? 'Main navigation' : 'Navegação principal');
  menuToggle.setAttribute('aria-label', navLinks.classList.contains('open') ? (chosen === 'en' ? 'Close menu' : 'Fechar menu') : (chosen === 'en' ? 'Open menu' : 'Abrir menu'));
  document.title = chosen === 'en' ? 'Rafamonte Portfolio — Rafael Montenegro Ribeiro' : 'Portfolio Rafamonte — Rafael Montenegro Ribeiro';
  setTheme(root.dataset.theme || 'light');
  saveValue('rafamonte-language', chosen);
  if (!formSetup.hidden) formSetup.textContent = dictionary['contact.setup'];
  formStatus.textContent = '';
}

setTheme(savedValue('rafamonte-theme', 'light'));
setLanguage(savedValue('rafamonte-language', 'pt-BR'));
if (!FORMSPREE_ENDPOINT.trim()) {
  formSetup.hidden = false;
  formSetup.textContent = translations[root.lang]['contact.setup'];
}

themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  navLinks.classList.toggle('open', open);
  menuToggle.setAttribute('aria-label', open ? (root.lang === 'en' ? 'Close menu' : 'Fechar menu') : (root.lang === 'en' ? 'Open menu' : 'Abrir menu'));
});
document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('open');
}));
document.querySelector('.back-top').addEventListener('click', (event) => {
  event.preventDefault();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-30% 0px -58% 0px' });
  sections.forEach((section) => observer.observe(section));
}

const revealTargets = [...document.querySelectorAll(
  '.section-heading, .about-visual, .about-copy > *, .project-card, .skill-card, .interest-card, .taste-card, .timeline-item, .contact-top > *, .contact-form-wrap'
)];
let revealFramePending = false;
revealTargets.forEach((element, index) => {
  element.classList.add('scroll-reveal');
  element.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
});
function revealOnScroll() {
  if (revealFramePending) return;
  revealFramePending = true;
  window.requestAnimationFrame(() => {
    revealFramePending = false;
    revealTargets.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.88) {
        element.classList.add('is-visible');
      }
    });
  });
}
window.addEventListener('scroll', revealOnScroll, { passive: true });
window.addEventListener('resize', revealOnScroll, { passive: true });
revealOnScroll();

function showFormError(element, message) {
  element.setAttribute('aria-invalid', 'true');
  formStatus.classList.add('error');
  formStatus.textContent = message;
}
form.querySelectorAll('input,textarea').forEach((field) => field.addEventListener('input', () => field.removeAttribute('aria-invalid')));
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  formStatus.classList.remove('error');
  formStatus.textContent = '';
  const name = form.elements.name;
  const email = form.elements.email;
  const message = form.elements.message;
  const t = translations[root.lang];
  for (const field of [name, email, message]) {
    if (!field.value.trim()) { showFormError(field, t['contact.required']); field.focus(); return; }
    if (field === email && !email.validity.valid) { showFormError(field, t['contact.invalidEmail']); field.focus(); return; }
    if (field === message && field.value.trim().length < 10) { showFormError(field, t['contact.tooShort']); field.focus(); return; }
  }
  if (!FORMSPREE_ENDPOINT.trim()) {
    formStatus.classList.add('error');
    formStatus.textContent = t['contact.configure'];
    formSetup.hidden = false;
    formSetup.textContent = t['contact.setup'];
    return;
  }
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.querySelector('span').textContent = t['contact.sending'];
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Formspree request failed');
    form.reset();
    formStatus.classList.remove('error');
    formStatus.textContent = t['contact.success'];
  } catch {
    formStatus.classList.add('error');
    formStatus.textContent = t['contact.error'];
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector('span').textContent = t['contact.send'];
  }
});
