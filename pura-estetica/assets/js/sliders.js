/* ============================================================
   SLIDERS — Swiper.js
   ============================================================ */

export function initSliders() {
  // ── Testimonios ─────────────────────────────────────────
  if (document.querySelector('.swiper-testimonials')) {
    new Swiper('.swiper-testimonials', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: '.swiper-testimonials .swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-testimonials .swiper-button-next',
        prevEl: '.swiper-testimonials .swiper-button-prev',
      },
      breakpoints: {
        640:  { slidesPerView: 1.5, spaceBetween: 24 },
        1024: { slidesPerView: 2,   spaceBetween: 32 },
        1280: { slidesPerView: 3,   spaceBetween: 32 },
      },
      effect: 'slide',
    });
  }

  // ── Hero (si aplica) ─────────────────────────────────────
  if (document.querySelector('.swiper-hero')) {
    new Swiper('.swiper-hero', {
      loop: true,
      effect: 'fade',
      speed: 1500,
      autoplay: { delay: 6000, disableOnInteraction: false },
      pagination: { el: '.swiper-hero .swiper-pagination', clickable: true },
    });
  }

  // ── Servicios mobile ─────────────────────────────────────
  let serviceSwiper;
  function initServiceSwiper() {
    if (window.innerWidth < 768 && !serviceSwiper) {
      serviceSwiper = new Swiper('.swiper-services', {
        slidesPerView: 1.2,
        spaceBetween: 16,
        centeredSlides: true,
        pagination: { el: '.swiper-services .swiper-pagination', clickable: true },
      });
    } else if (window.innerWidth >= 768 && serviceSwiper) {
      serviceSwiper.destroy(true, true);
      serviceSwiper = null;
    }
  }
  if (document.querySelector('.swiper-services')) {
    initServiceSwiper();
    window.addEventListener('resize', initServiceSwiper);
  }
}

/* ── Before / After interactivo ──────────────────────────── */
export function initBeforeAfter() {
  document.querySelectorAll('.ba-container').forEach((container) => {
    const afterImg  = container.querySelector('.ba-after');
    const divider   = container.querySelector('.ba-divider');
    const handle    = container.querySelector('.ba-handle');
    let dragging    = false;

    function setPosition(x) {
      const rect  = container.getBoundingClientRect();
      let pct     = ((x - rect.left) / rect.width) * 100;
      pct = Math.max(5, Math.min(95, pct));
      afterImg.style.clipPath  = `inset(0 ${100 - pct}% 0 0)`;
      divider.style.left       = `${pct}%`;
      handle.style.left        = `${pct}%`;
    }

    handle.addEventListener('mousedown',  () => { dragging = true; });
    handle.addEventListener('touchstart', () => { dragging = true; }, { passive: true });

    window.addEventListener('mousemove', (e) => { if (dragging) setPosition(e.clientX); });
    window.addEventListener('touchmove', (e) => {
      if (dragging) setPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('mouseup',  () => { dragging = false; });
    window.addEventListener('touchend', () => { dragging = false; });
  });
}
