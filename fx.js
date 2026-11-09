/* ==========================================================================
   fx.js — camada de efeitos do portfólio Rafamonte
   Depende de script.js (usa `translations`, `setTheme`, `setLanguage`).
   Tudo aqui é opcional: se algo falhar, o site base continua funcionando.
   ========================================================================== */
(() => {
  'use strict';

  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const L = () => (root.lang === 'en' ? 'en' : 'pt-BR');
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const mem = {
    get(k) { try { return sessionStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch { /* ignore */ } }
  };

  /* ---------- Traduções extras (mescladas ao dicionário do script.js) ---------- */
  const EXTRA = {
    'pt-BR': {
      'projects.academicFair': 'PROJETO ACADÊMICO · FEIRA DE PROJETOS USF',
      'stats.lines': 'LINHAS DE CÓDIGO EM C',
      'stats.ops': 'OPERAÇÕES NA CALCULADORA',
      'stats.menus': 'MENUS INTERATIVOS',
      'stats.projects': 'PROJETOS ACADÊMICOS',
      'terminal.kicker': 'PARA QUEM GOSTA DE LINHA DE COMANDO',
      'terminal.heading': 'Prefere o terminal<span class="accent-dot">?</span>',
      'terminal.note': 'Um terminal de mentira com respostas de verdade. Digite help para começar ou toque em um comando.',
      'hero.ctaCv': 'Currículo',
      'contact.cv': 'Currículo (PDF) <span>↗</span>',
      'cv.title': 'Currículo',
      'cv.desc': 'Tudo isso em uma página só, sempre na versão mais recente.',
      'cv.download': 'Baixar PDF',
      'cv.view': 'Abrir',
      'skills.allUsf': 'Tudo na USF',
      'skills.learnedKicker': 'ONDE APRENDI',
      'skills.fromUsf': 'C e toda a parte de eletrônica',
      'skills.fromCev': 'Python, HTML, CSS, Git e GitHub'
    },
    en: {
      'projects.academicFair': 'ACADEMIC PROJECT · USF PROJECT FAIR',
      'stats.lines': 'LINES OF C CODE',
      'stats.ops': 'CALCULATOR OPERATIONS',
      'stats.menus': 'INTERACTIVE MENUS',
      'stats.projects': 'ACADEMIC PROJECTS',
      'terminal.kicker': 'FOR COMMAND-LINE PEOPLE',
      'terminal.heading': 'Prefer the terminal<span class="accent-dot">?</span>',
      'terminal.note': 'A fake terminal with real answers. Type help to start, or tap a command.',
      'hero.ctaCv': 'Résumé',
      'contact.cv': 'Résumé (PDF) <span>↗</span>',
      'cv.title': 'Résumé',
      'cv.desc': 'All of this on a single page, always the latest version.',
      'cv.download': 'Download PDF',
      'cv.view': 'Open',
      'skills.allUsf': 'All at USF',
      'skills.learnedKicker': 'WHERE I LEARNED IT',
      'skills.fromUsf': 'C and all of the electronics',
      'skills.fromCev': 'Python, HTML, CSS, Git and GitHub'
    }
  };
  try {
    Object.assign(translations['pt-BR'], EXTRA['pt-BR']);
    Object.assign(translations.en, EXTRA.en);
  } catch { /* translations indisponível */ }

  /* ---------- Observador único de idioma ---------- */
  const langListeners = [];
  const onLang = (fn) => langListeners.push(fn);
  new MutationObserver(() => langListeners.forEach((fn) => fn())).observe(root, { attributes: true, attributeFilter: ['lang'] });

  /* ---------- Boot ---------- */
  const BOOT = {
    'pt-BR': {
      skip: 'toque ou pressione qualquer tecla para pular',
      rows: ['boot rafamonte.portfolio', 'carregando curiosidade', 'compilando projetos em C e Arduino', 'calibrando sensores e circuitos', 'conectando hardware e software', 'pronto. seja bem-vindo(a).']
    },
    en: {
      skip: 'tap or press any key to skip',
      rows: ['boot rafamonte.portfolio', 'loading curiosity', 'compiling projects in C and Arduino', 'calibrating sensors and circuits', 'connecting hardware and software', 'ready. welcome.']
    }
  };

  async function boot() {
    const el = $('#boot');
    if (!el) return;
    if (reduced || mem.get('rafamonte-booted')) { el.remove(); return; }
    const log = $('#boot-log', el);
    const bar = $('.boot-bar i', el);
    const skip = $('.boot-skip', el);
    const data = BOOT[L()];
    skip.textContent = data.skip;
    document.body.classList.add('is-booting');
    let over = false;
    const finish = () => {
      if (over) return;
      over = true;
      mem.set('rafamonte-booted', '1');
      document.body.classList.remove('is-booting');
      el.classList.add('is-done');
      setTimeout(() => el.remove(), 700);
    };
    el.addEventListener('click', finish);
    window.addEventListener('keydown', finish, { once: true });
    const total = data.rows.length;
    for (let k = 0; k < total && !over; k++) {
      const line = document.createElement('div');
      if (k === 0) {
        const c = document.createElement('span');
        c.className = 'cmd';
        c.textContent = '$ ';
        line.append(c, document.createTextNode(data.rows[k]));
      } else {
        const ok = document.createElement('span');
        ok.className = 'ok';
        ok.textContent = '[ OK ]';
        line.append(ok, document.createTextNode(data.rows[k]));
      }
      log.appendChild(line);
      bar.style.width = `${((k + 1) / total) * 100}%`;
      await wait(k === 0 ? 380 : 300);
    }
    await wait(380);
    finish();
  }

  /* ---------- Progresso de rolagem ---------- */
  function initProgress() {
    const bar = $('.scroll-progress i');
    if (!bar) return;
    const update = () => {
      const h = root.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  /* ---------- Brilho do cursor + luz nos cards + botões magnéticos ---------- */
  function initPointerFx() {
    if (!fine || reduced) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);
    let tx = 0, ty = 0, cx = 0, cy = 0, running = false;
    const loop = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      glow.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) requestAnimationFrame(loop);
      else running = false;
    };
    window.addEventListener('pointermove', (e) => {
      tx = e.clientX; ty = e.clientY;
      glow.classList.add('on');
      if (!running) { running = true; requestAnimationFrame(loop); }
    }, { passive: true });
    document.addEventListener('pointerleave', () => glow.classList.remove('on'));

    $$('.project-card, .skill-card, .interest-card, .taste-card, .contact-form-wrap').forEach((card) => {
      card.classList.add('spot');
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });

    $$('.button-primary, .button-quiet').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        btn.style.translate = `${dx * 8}px ${dy * 6}px`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.translate = ''; });
    });

    // inclinação 3D da bancada do hero
    const art = $('.hero-art');
    const svg = $('.circuit-art');
    if (art && svg) {
      art.addEventListener('pointermove', (e) => {
        const r = art.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        svg.style.transform = `perspective(1100px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
      });
      art.addEventListener('pointerleave', () => { svg.style.transform = ''; });
    }
  }

  /* ---------- Rede de nós no fundo do hero ---------- */
  function initNetwork() {
    const hero = $('.hero');
    if (!hero) return;
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-net';
    canvas.setAttribute('aria-hidden', 'true');
    hero.prepend(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let w = 0, h = 0, nodes = [], visible = true, raf = 0;
    const mouse = { x: 0, y: 0, on: false };
    const LINK = 125, MLINK = 170;

    function resize() {
      const r = hero.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(72, Math.round((w * h) / 15000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.3 + 0.8
      }));
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(0,170,255,${(1 - d / LINK) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        if (mouse.on) {
          const d = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (d < MLINK) {
            ctx.strokeStyle = `rgba(0,170,255,${(1 - d / MLINK) * 0.5})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(0,170,255,.55)';
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        if (mouse.on) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d < MLINK && d > 1) { n.x += (dx / d) * 0.35; n.y += (dy / d) * 0.35; }
        }
      }
      draw();
    }

    function loop() {
      if (!visible || document.hidden) { raf = 0; return; }
      step();
      raf = requestAnimationFrame(loop);
    }
    const start = () => { if (!raf && !reduced) raf = requestAnimationFrame(loop); };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    if (reduced) return;

    window.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      mouse.on = mouse.y >= 0 && mouse.y <= r.height && mouse.x >= 0 && mouse.x <= r.width;
    }, { passive: true });
    document.addEventListener('visibilitychange', start);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) start(); }).observe(hero);
    }
    start();
  }

  /* ---------- Typewriter do hero ---------- */
  function initRoles() {
    const el = $('#role-text');
    if (!el) return;
    const R = {
      'pt-BR': ['construindo circuitos', 'escrevendo em C', 'prototipando com Arduino', 'estudando sistemas embarcados', 'explorando cibersegurança', 'pedalando por aí'],
      en: ['building circuits', 'writing C', 'prototyping with Arduino', 'studying embedded systems', 'exploring cybersecurity', 'riding bikes somewhere']
    };
    if (reduced) {
      const set = () => { el.textContent = R[L()][0]; };
      set(); onLang(set);
      return;
    }
    let i = 0, j = 0, del = false, timer = 0;
    const tick = () => {
      const list = R[L()];
      const word = list[i % list.length];
      if (!del) {
        j++;
        el.textContent = word.slice(0, j);
        if (j >= word.length) { del = true; timer = setTimeout(tick, 1600); return; }
        timer = setTimeout(tick, 65 + Math.random() * 55);
      } else {
        j--;
        el.textContent = word.slice(0, j);
        if (j <= 0) { del = false; i++; timer = setTimeout(tick, 380); return; }
        timer = setTimeout(tick, 30);
      }
    };
    onLang(() => { clearTimeout(timer); j = 0; del = false; el.textContent = ''; timer = setTimeout(tick, 250); });
    tick();
  }

  /* ---------- Faixa de tecnologias ---------- */
  function initTicker() {
    const track = $('.ticker-track');
    const group = $('.ticker-group');
    if (!track || !group) return;
    track.appendChild(group.cloneNode(true));
    if (reduced) return;
    const anim = track.getAnimations ? track.getAnimations()[0] : null;
    if (!anim) return;
    let lastY = window.scrollY, vel = 0, running = false;
    const loop = () => {
      vel *= 0.92;
      anim.playbackRate = 1 + vel / 5;
      if (vel > 0.1) requestAnimationFrame(loop);
      else { anim.playbackRate = 1; running = false; }
    };
    window.addEventListener('scroll', () => {
      const dy = Math.abs(window.scrollY - lastY);
      lastY = window.scrollY;
      vel = Math.min(Math.max(vel, dy), 60);
      if (!running) { running = true; requestAnimationFrame(loop); }
    }, { passive: true });
  }

  /* ---------- Contadores ---------- */
  function initCounters() {
    const els = $$('[data-count]');
    if (!els.length) return;
    const fmt = (n) => new Intl.NumberFormat(L()).format(Math.round(n));
    const run = (el) => {
      const target = Number(el.dataset.count);
      el.dataset.done = '1';
      if (reduced) { el.textContent = fmt(target); return; }
      const t0 = performance.now(), dur = 1400;
      const frame = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };
    els.forEach((el) => { el.textContent = fmt(0); });
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { io.unobserve(en.target); run(en.target); }
      }), { threshold: 0.6 });
      els.forEach((el) => io.observe(el));
    } else els.forEach(run);
    onLang(() => els.forEach((el) => { if (el.dataset.done) el.textContent = fmt(Number(el.dataset.count)); }));
  }

  /* ---------- Medidores de habilidade ---------- */
  function initMeters() {
    const LEVELS = { 'skills.advanced': 88, 'skills.gitLevel': 88, 'skills.basicInter': 72, 'skills.intermediate': 55, 'skills.basic': 28 };
    $$('.skill-list li').forEach((li) => {
      const level = $('.level', li);
      const pct = level && LEVELS[level.dataset.i18n];
      if (!pct) return;
      const meter = document.createElement('i');
      meter.className = 'meter';
      meter.setAttribute('aria-hidden', 'true');
      const bar = document.createElement('b');
      bar.style.setProperty('--w', `${pct}%`);
      meter.appendChild(bar);
      li.appendChild(meter);
    });
  }

  /* ---------- Revelação de elementos novos ---------- */
  function initReveal() {
    const targets = $$('.ticker, .stats-strip, .term');
    targets.forEach((el, i) => {
      el.classList.add('scroll-reveal');
      el.style.setProperty('--reveal-delay', `${(i % 3) * 60}ms`);
    });
    if (!('IntersectionObserver' in window)) { targets.forEach((el) => el.classList.add('is-visible')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    targets.forEach((el) => io.observe(el));
  }

  /* ---------- Transição de tema em círculo ---------- */
  function initThemeTransition() {
    const btn = $('.theme-toggle');
    if (!btn || reduced || !document.startViewTransition || typeof setTheme !== 'function') return;
    btn.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const r = btn.getBoundingClientRect();
      const x = r.left + r.width / 2, y = r.top + r.height / 2;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      const t = document.startViewTransition(() => setTheme(next));
      t.ready.then(() => root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)', pseudoElement: '::view-transition-new(root)' }
      )).catch(() => { });
    }, true);
  }

  /* ---------- Matrix (easter egg) ---------- */
  let stopMatrix = null;
  function matrix(ms = 7000) {
    if (reduced || document.getElementById('matrix')) return false;
    const c = document.createElement('canvas');
    c.id = 'matrix';
    c.setAttribute('aria-hidden', 'true');
    document.body.appendChild(c);
    const ctx = c.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = window.innerWidth, H = window.innerHeight;
    c.width = W * dpr; c.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const size = 16;
    const drops = Array.from({ length: Math.ceil(W / size) }, () => Math.random() * -40);
    const chars = '01{}[]<>/;=+*#ABCDEF$%&';
    ctx.font = `${size}px "DM Mono", monospace`;
    const id = setInterval(() => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,.14)';
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';
      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = Math.random() > 0.96 ? '#e6fbff' : '#00d4ff';
        ctx.fillText(ch, i * size, y * size);
        drops[i] = y * size > H && Math.random() > 0.975 ? 0 : y + 1;
      });
    }, 50);
    const end = () => {
      clearInterval(id);
      clearTimeout(timeout);
      window.removeEventListener('keydown', onKey);
      c.style.opacity = '0';
      setTimeout(() => c.remove(), 850);
      stopMatrix = null;
    };
    const onKey = (e) => { if (e.key === 'Escape') end(); };
    const timeout = setTimeout(end, ms);
    window.addEventListener('keydown', onKey);
    stopMatrix = end;
    return true;
  }

  /* ---------- Terminal interativo ---------- */
  const LINKS = {
    github: 'https://github.com/Famontegro',
    linkedin: 'https://www.linkedin.com/in/rafael-montenegro-ribeiro/',
    instagram: 'https://www.instagram.com/famontegro/',
    spotify: 'https://open.spotify.com/user/rafamonte98',
    strava: 'https://www.strava.com/athletes/50667027',
    letterboxd: 'https://letterboxd.com/Rafamonte/',
    serializd: 'https://www.serializd.com/user/Rafamonte/shows',
    flickr: 'https://www.flickr.com/photos/205078036@N07/',
    nfc: 'https://github.com/Famontegro/ProjetoNFC',
    calc: 'https://github.com/Famontegro/Calculadora-Cientifica-Avancada-em-C-usando-uma-Biblioteca'
  };

  const T = {
    'pt-BR': {
      banner: ['rafamonte shell v1.0', "digite 'help' para ver os comandos."],
      help: [
        ['help', 'lista os comandos'], ['whoami', 'quem sou eu'], ['about', 'resumo rápido'],
        ['projects', 'meus projetos'], ['skills', 'o que estou aprendendo'], ['contact', 'como falar comigo'],
        ['open <alvo>', 'abre um link: ' + Object.keys(LINKS).join(', ')],
        ['theme', 'alterna claro/escuro'], ['lang pt|en', 'troca o idioma do site'],
        ['matrix', 'não me pergunte'], ['clear', 'limpa o terminal']
      ],
      whoami: ['rafael montenegro ribeiro', 'estudante de Engenharia da Computação · USF · Bragança Paulista, SP'],
      about: ['2º semestre, aprendendo colocando a mão na massa.', 'C, Arduino, circuitos e web. Próximos alvos: cibersegurança, embarcados e IA.'],
      projects: [
        ['001', 'Sistema de Controle de Acesso', 'Arduino · RC522 · NFC/RFID'],
        ['002', 'Calculadora Científica em C', '44 menus · 107 operações · 3.069 linhas'],
        ['003', 'Prevenção de Incêndios', 'em desenvolvimento']
      ],
      projectsTip: 'dica: open nfc · open calc',
      skills: ['programação   C · Python · HTML · CSS', 'ferramentas   Git/GitHub · VS Code · Arduino IDE · Linux', 'eletrônica    Arduino · circuitos · sensores · embarcados'],
      contact: ['email      rafamonte98@gmail.com', 'github     github.com/Famontegro', 'linkedin   linkedin.com/in/rafael-montenegro-ribeiro', 'instagram  @famontegro'],
      ls: ['projetos/  habilidades/  gostos/  trajetoria/  contato.txt'],
      notFound: (c) => `comando não encontrado: ${c}. digite help.`,
      sudo: ['rafael não está no arquivo sudoers. Este incidente será reportado. (brincadeira.)'],
      hire: ['[sudo] permissão concedida.', 'iniciando contratação... erro 404: setor de RH não encontrado.', 'dica: mande um e-mail para rafamonte98@gmail.com'],
      coffee: ['☕ cafeína carregada. produtividade +12%.'],
      exit: ['não há para onde fugir. role a página ou continue brincando.'],
      matrixOn: 'entrando na matrix... (Esc para sair)',
      matrixOff: 'movimento reduzido está ativo, então a matrix fica para outro dia.',
      themeSet: (m) => `tema: ${m === 'dark' ? 'escuro' : 'claro'}`,
      langSet: (m) => `idioma: ${m === 'en' ? 'inglês' : 'português'}`,
      langUsage: 'uso: lang pt | lang en',
      opening: (n) => `abrindo ${n}...`,
      openUsage: 'uso: open <alvo>. alvos: ' + Object.keys(LINKS).join(', '),
      openUnknown: (n) => `alvo desconhecido: ${n}`,
      placeholder: 'digite um comando'
    },
    en: {
      banner: ['rafamonte shell v1.0', "type 'help' to see the commands."],
      help: [
        ['help', 'list commands'], ['whoami', 'who I am'], ['about', 'quick summary'],
        ['projects', 'my projects'], ['skills', 'what I am learning'], ['contact', 'how to reach me'],
        ['open <target>', 'open a link: ' + Object.keys(LINKS).join(', ')],
        ['theme', 'toggle light/dark'], ['lang pt|en', 'switch the site language'],
        ['matrix', "don't ask"], ['clear', 'clear the terminal']
      ],
      whoami: ['rafael montenegro ribeiro', 'Computer Engineering student · USF · Bragança Paulista, Brazil'],
      about: ['2nd semester, learning by getting hands-on.', 'C, Arduino, circuits and web. Next targets: cybersecurity, embedded systems and AI.'],
      projects: [
        ['001', 'Access Control System', 'Arduino · RC522 · NFC/RFID'],
        ['002', 'Scientific Calculator in C', '44 menus · 107 operations · 3,069 lines'],
        ['003', 'Fire Prevention System', 'in development']
      ],
      projectsTip: 'tip: open nfc · open calc',
      skills: ['programming  C · Python · HTML · CSS', 'tools        Git/GitHub · VS Code · Arduino IDE · Linux', 'electronics  Arduino · circuits · sensors · embedded'],
      contact: ['email      rafamonte98@gmail.com', 'github     github.com/Famontegro', 'linkedin   linkedin.com/in/rafael-montenegro-ribeiro', 'instagram  @famontegro'],
      ls: ['projects/  skills/  favorites/  journey/  contact.txt'],
      notFound: (c) => `command not found: ${c}. type help.`,
      sudo: ['rafael is not in the sudoers file. This incident will be reported. (just kidding.)'],
      hire: ['[sudo] permission granted.', 'starting hiring process... error 404: HR department not found.', 'tip: send an email to rafamonte98@gmail.com'],
      coffee: ['☕ caffeine loaded. productivity +12%.'],
      exit: ['nowhere to run. scroll the page or keep playing.'],
      matrixOn: 'entering the matrix... (Esc to exit)',
      matrixOff: 'reduced motion is on, so the matrix will have to wait.',
      themeSet: (m) => `theme: ${m}`,
      langSet: (m) => `language: ${m === 'en' ? 'English' : 'Portuguese'}`,
      langUsage: 'usage: lang pt | lang en',
      opening: (n) => `opening ${n}...`,
      openUsage: 'usage: open <target>. targets: ' + Object.keys(LINKS).join(', '),
      openUnknown: (n) => `unknown target: ${n}`,
      placeholder: 'type a command'
    }
  };

  function initTerminal() {
    const box = $('#term');
    const body = $('#term-body');
    const form = $('#term-form');
    const input = $('#term-input');
    if (!box || !body || !form || !input) return;
    const t = () => T[L()];
    const history = [];
    let hIdx = 0;
    let queue = Promise.resolve();

    const addLine = (text, cls) => {
      const d = document.createElement('div');
      d.className = 'term-line' + (cls ? ' ' + cls : '');
      d.textContent = text;
      body.appendChild(d);
      body.scrollTop = body.scrollHeight;
    };
    const print = (lines, cls) => {
      const arr = [].concat(lines);
      queue = queue.then(async () => {
        for (const l of arr) { addLine(l, cls); if (!reduced) await wait(24); }
      });
      return queue;
    };
    const setPlaceholder = () => { input.placeholder = t().placeholder; };
    setPlaceholder();
    onLang(setPlaceholder);

    const commands = {
      help() { print(t().help.map(([c, d]) => '  ' + c.padEnd(14) + d)); },
      whoami() { print(t().whoami); },
      about() { print(t().about); },
      projects() {
        print(t().projects.map(([id, name, desc]) => `  ${id}  ${name.padEnd(32)}${desc}`));
        print(t().projectsTip, 'dim');
      },
      skills() { print(t().skills); },
      contact() { print(t().contact); },
      ls() { print(t().ls); },
      coffee() { print(t().coffee, 'ok'); },
      exit() { print(t().exit, 'dim'); },
      date() { print(new Date().toLocaleString(L())); },
      echo(args) { print(args.join(' ')); },
      clear() { queue = queue.then(() => { body.textContent = ''; }); },
      theme() {
        if (typeof setTheme !== 'function') return;
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        print(t().themeSet(next), 'ok');
      },
      lang(args) {
        const v = (args[0] || '').toLowerCase();
        if (typeof setLanguage !== 'function' || !['pt', 'pt-br', 'en'].includes(v)) { print(t().langUsage, 'err'); return; }
        const next = v === 'en' ? 'en' : 'pt-BR';
        setLanguage(next);
        print(T[next].langSet(next), 'ok');
      },
      open(args) {
        const name = (args[0] || '').toLowerCase();
        if (!name) { print(t().openUsage, 'err'); return; }
        if (!LINKS[name]) { print(t().openUnknown(name), 'err'); return; }
        print(t().opening(name), 'ok');
        window.open(LINKS[name], '_blank', 'noopener,noreferrer');
      },
      matrix() {
        if (matrix()) print(t().matrixOn, 'ok');
        else if (reduced) print(t().matrixOff, 'dim');
      },
      sudo(args) {
        if ((args[0] || '').toLowerCase() === 'hire') print(t().hire, 'ok');
        else print(t().sudo, 'err');
      }
    };

    const run = (raw) => {
      const line = raw.trim();
      if (!line) return;
      history.push(line);
      hIdx = history.length;
      print(line, 'cmd');
      const [cmd, ...args] = line.split(/\s+/);
      const fn = commands[cmd.toLowerCase()];
      if (fn && Object.prototype.hasOwnProperty.call(commands, cmd.toLowerCase())) fn(args);
      else print(t().notFound(cmd), 'err');
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = input.value;
      input.value = '';
      run(v);
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        if (!history.length) return;
        e.preventDefault();
        hIdx = Math.max(0, hIdx - 1);
        input.value = history[hIdx] || '';
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        hIdx = Math.min(history.length, hIdx + 1);
        input.value = history[hIdx] || '';
      } else if (e.key === 'Tab') {
        const v = input.value.trim().toLowerCase();
        if (!v) return;
        const match = Object.keys(commands).filter((c) => c.startsWith(v));
        if (match.length === 1) { e.preventDefault(); input.value = match[0] + ' '; }
      }
    });
    box.addEventListener('click', (e) => {
      if (e.target.closest('button') || window.getSelection().toString()) return;
      input.focus({ preventScroll: true });
    });
    $$('.term-chips [data-cmd]', box).forEach((b) => b.addEventListener('click', () => run(b.dataset.cmd)));

    print(t().banner, 'dim');
  }

  /* ---------- Extras: título ao sair, console, Konami ---------- */
  function initExtras() {
    let saved = '';
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        saved = document.title;
        document.title = L() === 'en' ? '👋 Come back, still building!' : '👋 Volta aqui, ainda construindo!';
      } else if (saved) {
        document.title = saved;
        saved = '';
      }
    });

    const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let pos = 0;
    window.addEventListener('keydown', (e) => {
      if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) { pos = 0; return; }
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = k === seq[pos] ? pos + 1 : (k === seq[0] ? 1 : 0);
      if (pos === seq.length) { pos = 0; matrix(9000); }
    });

    try {
      console.log('%c rafamonte_ ', 'background:#00aaff;color:#07131a;font-weight:800;padding:4px 8px;border-radius:4px', 'Curioso? Abra o terminal na página e digite help. Ou tente o código Konami.');
    } catch { /* ignore */ }
  }

  /* ---------- Início ---------- */
  function init() {
    // remove animações SMIL se o usuário prefere menos movimento
    if (reduced) $$('animateTransform').forEach((a) => a.remove());
    if (typeof setLanguage === 'function') setLanguage(L()); // aplica traduções extras
    const steps = [boot, initProgress, initPointerFx, initNetwork, initRoles, initTicker, initCounters, initMeters, initReveal, initThemeTransition, initTerminal, initExtras];
    steps.forEach((fn) => { try { fn(); } catch (err) { console.warn('fx:', fn.name, err); } });
  }
  init();
})();
