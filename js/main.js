/* ============================================================
   Eldrin David Asuncion — Cybersecurity Portfolio
   main.js
   ============================================================ */

/* ── Scroll Reveal ─────────────────────────────────────────── */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.skill-card, .timeline-item, .edu-card, .cert-card'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach(el => observer.observe(el));
})();

/* ── Hex Grid Interactivity ────────────────────────────────── */
(function initHexGrid() {
  document.querySelectorAll('.hex').forEach(hex => {
    hex.addEventListener('mouseenter', () => {
      hex.style.background   = 'rgba(0,212,255,0.18)';
      hex.style.borderColor  = 'var(--accent)';
      hex.style.opacity      = '1';
      hex.style.boxShadow    = '0 0 12px rgba(0,212,255,0.3)';
    });
    hex.addEventListener('mouseleave', () => {
      hex.style.background  = '';
      hex.style.borderColor = '';
      hex.style.opacity     = '';
      hex.style.boxShadow   = '';
    });
  });
})();

/* ── Active Nav Link on Scroll ─────────────────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          const active = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ── Typing Effect for Hero Tag ────────────────────────────── */
(function initTypingEffect() {
  const el = document.querySelector('.hero-tag');
  if (!el) return;

  const text    = el.textContent.trim();
  const delay   = 800; // ms before start
  let   index   = 0;

  el.textContent = '';
  el.style.opacity = '1';        // override fade-up so we control it

  setTimeout(() => {
    const interval = setInterval(() => {
      el.textContent = text.slice(0, ++index);
      if (index >= text.length) clearInterval(interval);
    }, 40);
  }, delay);
})();

/* ── Glitch Flicker on Name ────────────────────────────────── */
(function initGlitch() {
  const name = document.querySelector('h1');
  if (!name) return;

  setInterval(() => {
    if (Math.random() > 0.92) {
      name.style.textShadow = '2px 0 #ff4b6e, -2px 0 #00ff9d';
      setTimeout(() => { name.style.textShadow = ''; }, 80);
    }
  }, 2000);
})();
