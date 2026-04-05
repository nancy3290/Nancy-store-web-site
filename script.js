/* ════════════════════════════════════════════════
   NANCY STORE — script.js
   Bilingual FR/EN · Dark Mode · All interactions
   ════════════════════════════════════════════════ */

// ═══════════════════════════════════════
//  LANGUAGE SYSTEM
// ═══════════════════════════════════════

const LANG_KEY = 'ns-lang';

/** Return the active language ('fr' or 'en') */
function getLang() {
  return localStorage.getItem(LANG_KEY) || 'fr';
}

/**
 * Apply a language to the entire page.
 * - Elements with [data-fr] / [data-en] get their innerHTML replaced.
 * - Inputs/textareas with [data-placeholder-fr] / [data-placeholder-en]
 *   get their placeholder replaced.
 * - <select> <option> elements with [data-fr] / [data-en] are handled too.
 * - The <html lang=""> attribute is updated.
 * - Lang buttons get the .active class toggled.
 */
function applyLang(lang) {
  // 1. Update <html lang>
  document.documentElement.lang = lang;

  // 2. Translate all elements that carry data-fr / data-en
  document.querySelectorAll('[data-fr], [data-en]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text === null) return;               // attribute missing → skip

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      // Never change value, only placeholder (handled below)
      return;
    }

    if (el.tagName === 'OPTION') {
      el.textContent = text;
      return;
    }

    // For any other element: set innerHTML so HTML entities work (&amp; etc.)
    el.innerHTML = text;
  });

  // 3. Translate placeholders
  document.querySelectorAll('[data-placeholder-fr], [data-placeholder-en]').forEach(el => {
    const ph = el.getAttribute('data-placeholder-' + lang);
    if (ph !== null) el.placeholder = ph;
  });

  // 4. Update lang-switch button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // 5. Persist
  localStorage.setItem(LANG_KEY, lang);
}

/** Toggle language and re-apply. */
function switchLang(lang) {
  applyLang(lang);
  // Re-render dynamic shop content if present
  if (typeof renderProducts === 'function') renderProducts();
  if (typeof initDetailPage === 'function')  initDetailPage();
}

// ═══════════════════════════════════════
//  THEME SYSTEM
// ═══════════════════════════════════════

const THEME_KEY = 'ns-theme';

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

// ═══════════════════════════════════════
//  INIT — runs after DOM is ready
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Apply saved (or default) language ──
  applyLang(getLang());

  // ── Apply saved (or system) theme ──
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  // ── Lang switch buttons ──
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });

  // ── Theme toggle button ──
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ── Sticky header on scroll ──
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── Mobile hamburger menu ──
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');

  hamburger?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── Scroll-triggered fade-in animations ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fadeUp');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    '.collection-card, .stat, .about-text, .info-item'
  ).forEach(el => observer.observe(el));

  // ── Staggered animation delays for collection cards ──
  document.querySelectorAll('.collection-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.12}s`;
  });

  // ── Newsletter form ──
  document.getElementById('newsletter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const lang = getLang();
    const btn  = this.querySelector('[type="submit"]');
    btn.textContent = lang === 'fr' ? '✓ Abonné !' : '✓ Subscribed!';
    btn.style.background = '#4a9a5a';
    this.querySelector('input').value = '';
    setTimeout(() => {
      btn.textContent = lang === 'fr' ? "S'abonner" : 'Subscribe';
      btn.style.background = '';
    }, 3000);
  });

});

// ═══════════════════════════════════════
//  FORM HANDLERS (called inline via onsubmit)
// ═══════════════════════════════════════

/** Toggle password visibility on signup page */
function togglePassword() {
  const inp = document.getElementById('password');
  if (!inp) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

/** Sign-up form submission simulation */
function handleSignup(e) {
  e.preventDefault();
  const lang = getLang();
  const btn  = e.target.querySelector('[type="submit"]');

  btn.textContent = lang === 'fr' ? 'Création en cours…' : 'Creating account…';
  btn.disabled    = true;

  setTimeout(() => {
    btn.textContent      = lang === 'fr' ? '✓ Compte créé !' : '✓ Account Created!';
    btn.style.background = '#4a9a5a';
    setTimeout(() => {
      btn.textContent      = lang === 'fr' ? 'Créer mon compte' : 'Create Account';
      btn.style.background = '';
      btn.disabled         = false;
      e.target.reset();
    }, 3000);
  }, 1500);
}

/** Contact form submission simulation */
function handleContact(e) {
  e.preventDefault();
  const lang    = getLang();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = e.target.querySelector('[type="submit"]');

  btn.textContent = lang === 'fr' ? 'Envoi en cours…' : 'Sending…';
  btn.disabled    = true;

  setTimeout(() => {
    form.style.display    = 'none';
    success.style.display = 'flex';
    // Re-apply language to the newly visible success panel
    applyLang(getLang());
  }, 1400);
}

/** Reset contact form to show it again */
function resetForm() {
  const lang    = getLang();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.reset();
  form.style.display    = '';
  success.style.display = 'none';

  const btn = form.querySelector('[type="submit"]');
  if (btn) {
    btn.textContent = lang === 'fr' ? 'Envoyer le message' : 'Send Message';
    btn.disabled    = false;
  }
}
