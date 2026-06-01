/* ============================================================
   MAIN — Pura Estética
   ============================================================ */

import { initAnimations, initHeroAnimation, initCounters, initNavbar } from './animations.js';
import { initSliders, initBeforeAfter }    from './sliders.js';
import { initForms }                       from './forms.js';
import { initLazyLoad }                    from './lazyload.js';
import { initSEO }                         from './seo.js';

/* ── Page Loader ─────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return Promise.resolve();

  const logo = loader.querySelector('.loader-logo');
  const bar  = loader.querySelector('.loader-bar');

  return new Promise((resolve) => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            loader.style.display = 'none';
            resolve();
          },
        });
      },
    });

    tl.to(logo, { opacity: 1, duration: 0.6, ease: 'power2.out' })
      .to(bar,  { width: '100%', duration: 1.4, ease: 'power3.inOut' }, 0.2);
  });
}

/* ── Mobile menu ─────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu      = document.querySelector('.mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── FAQ accordion ───────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── Active nav link ─────────────────────────────────────── */
function setActiveNavLink() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = new URL(a.href).pathname.replace(/\/$/, '') || '/';
    a.classList.toggle('active', path.endsWith(href));
  });
}

/* ── Bootstrap ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  await initLoader();

  initNavbar();
  initMobileMenu();
  setActiveNavLink();

  initHeroAnimation();
  initAnimations();
  initCounters();

  initSliders();
  initBeforeAfter();

  initLazyLoad();
  initForms();
  initFAQ();
  initSEO();
});
