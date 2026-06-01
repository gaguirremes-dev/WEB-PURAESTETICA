# ASSETS REQUERIDOS — Pura Estética
## Imágenes y Videos necesarios para el proyecto

> Este archivo documenta cada imagen y video que debe proporcionarse para completar el sitio web.
> Todos los archivos deben colocarse en la ruta indicada dentro de la carpeta `pura-estetica/`.

---

## VIDEOS

### `assets/videos/hero-bg.mp4`
- **Uso:** Fondo cinematográfico de la sección Hero en `index.html`
- **Descripción:** Video de atmósfera premium de clínica estética. Puede mostrar manos profesionales aplicando tratamiento, close-up de piel radiante, o ambiente elegante de la clínica. Sin audio. Debe transmitir lujo y calma.
- **Especificaciones:**
  - Formato: MP4 (H.264) + WebM opcional
  - Resolución: 1920×1080 mínimo
  - Duración: 10-30 segundos, loop continuo
  - Peso máximo: 8 MB (optimizar con HandBrake o ffmpeg)
  - Sin audio (o silenciado)
- **Alternativa:** Si no hay video, usar la imagen `assets/images/hero/hero-poster.jpg` como fondo estático (ya configurado como fallback)

---

## IMÁGENES — HERO

### `assets/images/hero/hero-poster.jpg`
- **Uso:** Poster/fallback del video hero en `index.html` — aparece mientras el video carga
- **Descripción:** Imagen estática premium de la clínica o tratamiento. Debe ser impactante en formato landscape.
- **Especificaciones:** 1920×1080px, JPG optimizado, máx 300 KB

---

## IMÁGENES — BRANDING

### `assets/images/branding/logo.png`
- **Uso:** Schema markup JSON-LD, footer y referencias generales
- **Descripción:** Logo oficial de Pura Estética sobre fondo transparente
- **Especificaciones:** PNG con transparencia, 400×120px aprox, fondo transparente

### `assets/images/branding/logo-dark.svg`
- **Uso:** Navbar cuando está en modo scrolled (fondo claro)
- **Descripción:** Logo en versión oscura/dorada para fondos claros
- **Especificaciones:** SVG vectorial

### `assets/images/branding/logo-light.svg`
- **Uso:** Navbar inicial (fondo oscuro) y footer
- **Descripción:** Logo en versión clara/blanca para fondos oscuros
- **Especificaciones:** SVG vectorial

### `assets/images/branding/favicon.svg`
- **Uso:** Tab del navegador
- **Descripción:** Versión icono del logo (puede ser la "P" o las iniciales "PE") en dorado
- **Especificaciones:** SVG, 32×32px viewBox

### `assets/images/branding/favicon.png`
- **Uso:** Fallback favicon para navegadores sin soporte SVG
- **Especificaciones:** PNG, 32×32px

### `assets/images/branding/apple-touch-icon.png`
- **Uso:** Icono al guardar en pantalla inicio iOS
- **Especificaciones:** PNG, 180×180px, fondo oscuro (`#2a2a2a`) con logo dorado

### `assets/images/branding/icon-192.png`
- **Uso:** PWA manifest — icono Android pequeño
- **Especificaciones:** PNG, 192×192px

### `assets/images/branding/icon-512.png`
- **Uso:** PWA manifest — icono Android grande
- **Especificaciones:** PNG, 512×512px

### `assets/images/branding/icon-maskable.png`
- **Uso:** PWA manifest — icono adaptativo Android
- **Especificaciones:** PNG, 512×512px, el logo debe estar dentro del 80% central (safe zone)

### `assets/images/branding/og-image.jpg`
- **Uso:** Open Graph y Twitter Cards en todas las páginas
- **Descripción:** Imagen de portada que aparece al compartir el sitio en redes sociales. Logo + fondo premium de la clínica
- **Especificaciones:** 1200×630px, JPG, máx 200 KB

---

## IMÁGENES — SERVICIOS

### `assets/images/services/placeholder.jpg`
- **Uso:** Imagen de placeholder mientras cargan las imágenes lazy
- **Descripción:** Imagen simple en gris o degradado dorado claro
- **Especificaciones:** 600×450px, JPG, mínima resolución (se reemplaza al cargar)

### `assets/images/services/fillers-acido-hialuronico.jpg`
- **Uso:** Card de servicio "Fillers" en `index.html` sección servicios
- **Descripción:** Close-up premium de aplicación de filler en labios o zona facial. Manos profesionales con guantes, jeringa de calidad, piel perfecta.
- **Especificaciones:** 600×450px, JPG, máx 120 KB

### `assets/images/services/fillers-detalle.jpg`
- **Uso:** Sección hero de "Fillers" en `servicios.html` (imagen lateral grande)
- **Descripción:** Imagen más grande y editorial del tratamiento de fillers
- **Especificaciones:** 800×1000px (portrait), JPG, máx 200 KB

### `assets/images/services/botox.jpg`
- **Uso:** Card de servicio "Botox" en `index.html`
- **Descripción:** Imagen premium de aplicación de botox. Estética médica elegante.
- **Especificaciones:** 600×450px, JPG, máx 120 KB

### `assets/images/services/botox-detalle.jpg`
- **Uso:** Sección "Botox" en `servicios.html`
- **Descripción:** Imagen editorial grande del tratamiento de botox
- **Especificaciones:** 800×1000px, JPG, máx 200 KB

### `assets/images/services/facial-premium.jpg`
- **Uso:** Card de servicio "Facial Premium" en `index.html`
- **Descripción:** Mujer recibiendo un facial de lujo. Ambiente spa premium.
- **Especificaciones:** 600×450px, JPG, máx 120 KB

### `assets/images/services/facial-detalle.jpg`
- **Uso:** Sección "Facial Premium" en `servicios.html`
- **Descripción:** Imagen editorial del facial premium
- **Especificaciones:** 800×1000px, JPG, máx 200 KB

### `assets/images/services/depilacion-laser.jpg`
- **Uso:** Card de servicio "Depilación Láser" en `index.html`
- **Descripción:** Imagen de depilación láser con equipo moderno
- **Especificaciones:** 600×450px, JPG, máx 120 KB

### `assets/images/services/laser-detalle.jpg`
- **Uso:** Sección "Depilación Láser" en `servicios.html`
- **Descripción:** Imagen editorial grande del tratamiento láser
- **Especificaciones:** 800×1000px, JPG, máx 200 KB

### `assets/images/services/medicina-estetica.jpg`
- **Uso:** Card de servicio "Bioestimulación" en `index.html`
- **Descripción:** Imagen de tratamiento médico estético no invasivo
- **Especificaciones:** 600×450px, JPG, máx 120 KB

### `assets/images/services/bioestimulacion-detalle.jpg`
- **Uso:** Sección "Bioestimulación" en `servicios.html`
- **Descripción:** Imagen editorial de bioestimulación/mesoterapia
- **Especificaciones:** 800×1000px, JPG, máx 200 KB

---

## IMÁGENES — EQUIPO / TEAM

### `assets/images/team/placeholder.jpg`
- **Uso:** Placeholder mientras cargan las fotos del equipo
- **Especificaciones:** 500×666px, gris claro

### `assets/images/team/clinica-interior.jpg`
- **Uso:** Sección "Sobre Nosotros" en `index.html` — imagen lateral
- **Descripción:** Interior elegante de la clínica Pura Estética. Recepción, sala de tratamiento o área de espera premium.
- **Especificaciones:** 800×1000px (portrait), JPG, máx 250 KB

### `assets/images/team/clinica-entrada.jpg`
- **Uso:** Sección "Historia" en `nosotros.html`
- **Descripción:** Entrada o fachada de la clínica, o imagen alternativa del interior premium
- **Especificaciones:** 800×1000px, JPG, máx 250 KB

### `assets/images/team/dra-hayde-cavazos.jpg`
- **Uso:** Card del equipo en `index.html` sección equipo
- **Descripción:** Foto profesional de la Dra. Hayde Cavazos Andrade. Estética médica, bata o ropa profesional elegante.
- **Especificaciones:** 500×666px (portrait 3:4), JPG, máx 150 KB

### `assets/images/team/dra-hayde-cavazos-perfil.jpg`
- **Uso:** Sección de perfil individual en `nosotros.html`
- **Descripción:** Foto editorial más grande de la Dra. Hayde. Puede ser la misma imagen con mejor resolución.
- **Especificaciones:** 600×800px, JPG, máx 200 KB

### `assets/images/team/dra-rebeca-diaz.jpg`
- **Uso:** Card del equipo en `index.html`
- **Descripción:** Foto profesional de la Dra. Rebeca Díaz Barazarte
- **Especificaciones:** 500×666px, JPG, máx 150 KB

### `assets/images/team/dra-rebeca-diaz-perfil.jpg`
- **Uso:** Perfil en `nosotros.html`
- **Descripción:** Foto editorial de la Dra. Rebeca Díaz
- **Especificaciones:** 600×800px, JPG, máx 200 KB

### `assets/images/team/patricia-diaz.jpg`
- **Uso:** Card del equipo en `index.html`
- **Descripción:** Foto profesional de Patricia María Díaz García
- **Especificaciones:** 500×666px, JPG, máx 150 KB

### `assets/images/team/patricia-diaz-perfil.jpg`
- **Uso:** Perfil en `nosotros.html`
- **Descripción:** Foto editorial de Patricia Díaz García
- **Especificaciones:** 600×800px, JPG, máx 200 KB

---

## IMÁGENES — ANTES Y DESPUÉS

> ⚠️ **IMPORTANTE:** Las imágenes de antes y después deben ser de pacientes reales de Pura Estética con su consentimiento firmado por escrito. No usar imágenes de stock para este propósito. Deben mostrar resultados naturales sin ser invasivas.

### `assets/images/before-after/ba-fillers-antes.jpg`
- **Uso:** Comparador antes/después — sección "Antes & Después" en `index.html`
- **Descripción:** Foto de paciente ANTES del tratamiento de fillers labiales
- **Especificaciones:** 600×800px (portrait), JPG, mismo encuadre que la imagen "después"

### `assets/images/before-after/ba-fillers-despues.jpg`
- **Uso:** Comparador — imagen "Después" de fillers
- **Descripción:** Foto de la MISMA paciente DESPUÉS del tratamiento de fillers
- **Especificaciones:** 600×800px, JPG, mismo encuadre exacto que el "antes"

### `assets/images/before-after/ba-botox-antes.jpg`
- **Uso:** Comparador botox — imagen "Antes"
- **Descripción:** Foto de paciente ANTES de botox en frente/entrecejo
- **Especificaciones:** 600×800px, JPG, encuadre consistente

### `assets/images/before-after/ba-botox-despues.jpg`
- **Uso:** Comparador botox — imagen "Después"
- **Descripción:** Foto DESPUÉS de botox, mismo encuadre
- **Especificaciones:** 600×800px, JPG

### `assets/images/before-after/ba-facial-antes.jpg`
- **Uso:** Comparador facial — imagen "Antes"
- **Descripción:** Foto de piel de paciente ANTES del facial premium
- **Especificaciones:** 600×800px, JPG

### `assets/images/before-after/ba-facial-despues.jpg`
- **Uso:** Comparador facial — imagen "Después"
- **Descripción:** Foto de piel DESPUÉS del facial premium, misma luz y encuadre
- **Especificaciones:** 600×800px, JPG

---

## IMÁGENES — TESTIMONIOS

> Los avatares de testimonios son opcionales. Si no se tienen fotos reales de las pacientes (con consentimiento), se puede usar un avatar genérico o simplemente omitir la imagen.

### `assets/images/testimonials/paciente-1.jpg`
- **Uso:** Avatar de testimonio "Sofía M." en `index.html`
- **Descripción:** Foto de perfil de paciente (con consentimiento) o avatar genérico premium
- **Especificaciones:** 96×96px (se muestra a 48px), JPG o PNG circular

### `assets/images/testimonials/paciente-2.jpg`
- **Uso:** Avatar de testimonio "Laura P."
- **Especificaciones:** 96×96px, JPG

### `assets/images/testimonials/paciente-3.jpg`
- **Uso:** Avatar de testimonio "Valeria R."
- **Especificaciones:** 96×96px, JPG

### `assets/images/testimonials/paciente-4.jpg`
- **Uso:** Avatar de testimonio "Daniela F."
- **Especificaciones:** 96×96px, JPG

---

## IMÁGENES — BLOG

### `assets/images/blog/fillers-guia-completa.jpg`
- **Uso:** Imagen del artículo destacado en `blog.html`
- **Descripción:** Imagen editorial sobre fillers de ácido hialurónico
- **Especificaciones:** 800×450px (16:9), JPG, máx 150 KB

### `assets/images/blog/botox-mitos-realidades.jpg`
- **Uso:** Card artículo "5 Mitos sobre el Botox"
- **Especificaciones:** 600×338px (16:9), JPG, máx 100 KB

### `assets/images/blog/rutina-cuidado-piel.jpg`
- **Uso:** Card artículo "Rutina de cuidado de piel"
- **Especificaciones:** 600×338px, JPG, máx 100 KB

### `assets/images/blog/depilacion-laser-preguntas.jpg`
- **Uso:** Card artículo "Depilación láser FAQ"
- **Especificaciones:** 600×338px, JPG, máx 100 KB

### `assets/images/blog/bioestimulacion-piel.jpg`
- **Uso:** Card artículo "Bioestimulación"
- **Especificaciones:** 600×338px, JPG, máx 100 KB

### `assets/images/blog/tendencias-estetica-2025.jpg`
- **Uso:** Card artículo "Tendencias 2025"
- **Especificaciones:** 600×338px, JPG, máx 100 KB

### `assets/images/blog/protector-solar-importancia.jpg`
- **Uso:** Card artículo "Protector solar"
- **Especificaciones:** 600×338px, JPG, máx 100 KB

---

## FUENTES (Self-hosted)

### `assets/fonts/GlacialIndifference-Regular.woff2`
### `assets/fonts/GlacialIndifference-Regular.woff`
- **Uso:** Tipografía de cuerpo en todo el sitio
- **Dónde obtener:** https://fontfabric.com/fonts/glacial-indifference/ (gratuita para uso personal/comercial)

### `assets/fonts/GlacialIndifference-Bold.woff2`
### `assets/fonts/GlacialIndifference-Bold.woff`
- **Uso:** Texto en negrita

### `assets/fonts/Maharlika-Regular.woff2`
- **Uso:** Tipografía de títulos y headings premium
- **Dónde obtener:** Google Fonts (https://fonts.google.com/specimen/Maharlika) — descargar y convertir a woff2
- **Nota:** Si no está disponible, el CSS ya tiene fallback a `Cormorant Garamond` que sí se carga desde Google Fonts CDN

---

## RESUMEN DE PRIORIDADES

| Prioridad | Asset | Impacto |
|-----------|-------|---------|
| 🔴 CRÍTICO | `hero-bg.mp4` | Hero visible inmediatamente |
| 🔴 CRÍTICO | `hero-poster.jpg` | Fallback del hero |
| 🔴 CRÍTICO | Fotos del equipo (×3) | Credibilidad y confianza |
| 🔴 CRÍTICO | `og-image.jpg` | Redes sociales / SEO |
| 🔴 CRÍTICO | Logos (SVG) | Identidad visual |
| 🟡 IMPORTANTE | Imágenes de servicios (×5) | Conversión |
| 🟡 IMPORTANTE | Before/after (×6) | Prueba social |
| 🟢 DESEABLE | Imágenes blog (×7) | Contenido SEO |
| 🟢 DESEABLE | Avatares testimonios (×4) | Humanización |
| 🟢 DESEABLE | Fuentes self-hosted | Performance |

---

*Documento generado: Mayo 2025 — Pura Estética*
