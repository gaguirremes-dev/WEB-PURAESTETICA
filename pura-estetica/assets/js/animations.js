/* ============================================================
   ANIMATIONS — GSAP premium
   ============================================================ */

export function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // ── Reveal general ─────────────────────────────────────
  gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  gsap.utils.toArray('.reveal-left').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  gsap.utils.toArray('.reveal-right').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  gsap.utils.toArray('.reveal-scale').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  // ── Stagger en grids ────────────────────────────────────
  document.querySelectorAll('.stagger-group').forEach((group) => {
    const items = group.querySelectorAll('.stagger-item');
    gsap.set(items, { opacity: 0, y: 30 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: group, start: 'top 82%', toggleActions: 'play none none none' },
    });
  });

  // ── Líneas doradas ──────────────────────────────────────
  gsap.utils.toArray('.line-reveal').forEach((el) => {
    gsap.to(el, {
      scaleX: 1,
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
    });
  });

  // ── Parallax imágenes ───────────────────────────────────
  gsap.utils.toArray('.parallax-img').forEach((img) => {
    gsap.to(img, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: {
        trigger: img.closest('.parallax-wrap') || img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // ── Section titles text split ───────────────────────────
  // Requiere SplitType o manual
  document.querySelectorAll('[data-split]').forEach((el) => {
    const text = el.innerText;
    el.innerHTML = text
      .split('')
      .map((c) => `<span class="char" style="display:inline-block">${c === ' ' ? '&nbsp;' : c}</span>`)
      .join('');
    gsap.from(el.querySelectorAll('.char'), {
      opacity: 0,
      y: 20,
      duration: 0.06,
      stagger: 0.025,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  // ── Scroll progress bar ─────────────────────────────────
  const progress = document.getElementById('scroll-progress');
  if (progress) {
    gsap.to(progress, {
      width: '100%',
      ease: 'none',
      scrollTrigger: { start: 'top top', end: 'bottom bottom', scrub: 0 },
    });
  }
}

// ── Animación entrada Hero ────────────────────────────────
export function initHeroAnimation() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('.hero-eyebrow', { opacity: 1, duration: 0.8 }, 0.3)
    .to('.hero-title-line', {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
    }, 0.5)
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.9 }, 1.1)
    .to('.hero-btns', { opacity: 1, y: 0, duration: 0.8 }, 1.3)
    .to('.hero-scroll-hint', { opacity: 1, duration: 0.8 }, 1.6);

  // Parallax sutil del video hero
  gsap.to('.hero-media', {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}


// ── Counter animado ────────────────────────────────────────
export function initCounters() {
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: function () {
            el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
          },
        });
      },
      once: true,
    });
  });
}

// ── Navbar shrink ─────────────────────────────────────────
export function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      nav.classList.toggle('scrolled', self.scroll() > 80);
    },
  });
}
