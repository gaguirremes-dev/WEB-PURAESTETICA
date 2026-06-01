/* ============================================================
   SEO — helpers dinámicos (breadcrumb, schema, OG)
   ============================================================ */

export function initSEO() {
  injectBreadcrumbSchema();
  trackPageView();
}

function injectBreadcrumbSchema() {
  const breadcrumb = document.querySelector('.breadcrumb');
  if (!breadcrumb) return;

  const items = Array.from(breadcrumb.querySelectorAll('a')).map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: a.textContent.trim(),
    item: a.href,
  }));

  if (!items.length) return;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function trackPageView() {
  // Slot para integrar con GA4 u otro analytics
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', {
      page_title:    document.title,
      page_location: window.location.href,
    });
  }
}
