# Pura Estética — Sitio Web Corporativo Premium

Clínica de medicina estética premium en Cancún, Quintana Roo, México.

---

## Stack tecnológico

- HTML5 semántico
- TailwindCSS (CDN en desarrollo, compilar con CLI en producción)
- JavaScript Vanilla ES Modules
- GSAP 3.12 + ScrollTrigger
- Lenis (smooth scroll)
- Swiper.js 11
- PHP 8.2 (contact handler)

---

## Estructura de carpetas

```
pura-estetica/
├── index.html          ← Home
├── servicios.html      ← Página de tratamientos
├── nosotros.html       ← Equipo y filosofía
├── contacto.html       ← Formulario + mapa
├── blog.html           ← Blog SEO
│
├── assets/
│   ├── css/            ← main.css + módulos
│   ├── js/             ← ES Modules
│   ├── images/         ← Ver ASSETS_NEEDED.md
│   ├── videos/         ← Ver ASSETS_NEEDED.md
│   └── fonts/          ← Glacial Indifference + Maharlika
│
├── seo/
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── schema.json
│   └── manifest.json
│
├── forms/
│   └── contact-handler.php
│
├── .htaccess
├── cpanel.yml
└── README.md
```

---

## Configuración para producción

### 1. Compilar TailwindCSS

Reemplazar el CDN de Tailwind por una compilación optimizada:

```bash
npm init -y
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/tailwind.min.css --minify
```

### 2. Subir fuentes

Colocar en `assets/fonts/`:
- `GlacialIndifference-Regular.woff2`
- `GlacialIndifference-Bold.woff2`
- `Maharlika-Regular.woff2`

Fuentes disponibles en Google Fonts / DaFont / FontSquirrel.

### 3. Agregar imágenes y videos

Ver `ASSETS_NEEDED.md` para el listado completo con especificaciones.

### 4. Deploy en cPanel

1. Comprimir la carpeta `pura-estetica/`
2. Subir vía File Manager al `public_html`
3. Configurar SSL (Let's Encrypt)
4. Verificar PHP 8.2 activo

### 5. Configurar Google Analytics 4

Agregar en el `<head>` de todas las páginas antes del cierre:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Paleta de colores

| Token           | Hex       |
|-----------------|-----------|
| `--color-light` | `#F4F4F4` |
| `--color-gold-light` | `#d0b174` |
| `--color-gold`  | `#c99e48` |
| `--color-gold-dark` | `#b58b38` |
| `--color-dark`  | `#3b3937` |
| `--color-darker`| `#2a2a2a` |

---

## Contacto del cliente

- **Clínica:** Pura Estética
- **WhatsApp:** 984 266 0085
- **Email:** puraestetica.cancun@gmail.com
- **Instagram:** @puraestetica.mx
- **Dirección:** Av. Sayil SM 6 M 05 Local 202, Zona Hotelera, CP 77500 Cancún, Q.R.

---

## Mantenimiento

- Actualizar `sitemap.xml` al agregar nuevas páginas o artículos de blog
- El `schema.json` en `seo/` es de referencia; el schema principal está inline en cada página
- Los JS son ES Modules — no requieren bundler, pero se recomienda minificar para producción



  Cloudflare vs EmailJS

  Cloudflare Pages (hosting estático) solo = igual que ahora, sin backend, EmailJS seguiría siendo necesario.

  Cloudflare Pages + Workers = tienes funciones serverless. Con un Worker puedes recibir el formulario y enviar emails vía un servicio transaccional como Resend (plan gratis: 3,000 emails/mes). Esto elimina la necesidad de    
  EmailJS y es más profesional y controlado.

  ---
  Conexión con GoHighLevel

  GHL tiene 3 formas de recibir datos del formulario:

  Opción A — Webhook directo (más simple)
  El formulario hace un POST al webhook de GHL. GHL recibe los datos, crea el contacto automáticamente y sus Automations se encargan de todo: email de confirmación al cliente, notificación al equipo, pipeline de ventas. No    
  necesitas ningún servicio externo adicional.

  Opción B — Formulario nativo GHL embebido
  Reemplazar el formulario actual por uno de GHL embebido en la página. GHL lo gestiona todo nativamente.

  Opción C — Zapier / Make
  El formulario dispara una automatización que crea el contacto en GHL. Más pasos, innecesario si tienes webhook.

  ---
  Recomendación real para tu caso

  La mejor arquitectura sería:

  Formulario → Cloudflare Worker → GHL Webhook (crea contacto + dispara automation)
                                → Resend (email confirmación al cliente)

  O aún más simple:

  Formulario → GHL Webhook directamente
               GHL Automation → email al cliente + notificación interna

  Porque GHL ya tiene email integrado — si pagas GHL, ya tienes todo lo necesario sin contratar nada más. El webhook directo es la opción más limpia y rápida de implementar.

  ¿Tienes GHL activo ya? Si es así, con el webhook directo lo conectamos rápido — solo necesito la URL del webhook de tu cuenta para implementarlo.