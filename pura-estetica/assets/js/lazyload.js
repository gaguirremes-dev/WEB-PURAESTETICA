/* ============================================================
   LAZY LOAD — Intersection Observer nativo
   ============================================================ */

export function initLazyLoad() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;

        if (el.tagName === 'IMG' && el.dataset.src) {
          el.src = el.dataset.src;
          if (el.dataset.srcset) el.srcset = el.dataset.srcset;
          el.removeAttribute('data-src');
          el.removeAttribute('data-srcset');
          el.classList.add('loaded');
        }

        if (el.tagName === 'VIDEO' && el.dataset.src) {
          el.src = el.dataset.src;
          el.load();
          el.removeAttribute('data-src');
          el.classList.add('loaded');
        }

        if (el.tagName === 'IFRAME' && el.dataset.src) {
          el.src = el.dataset.src;
          el.removeAttribute('data-src');
        }

        observer.unobserve(el);
      });
    },
    { rootMargin: '200px 0px', threshold: 0 }
  );

  document.querySelectorAll('[data-src]').forEach((el) => observer.observe(el));
}
