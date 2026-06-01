/* ============================================================
   FORMS — validación y envío premium
   ============================================================ */

export function initForms() {
  document.querySelectorAll('.contact-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm(form)) return;

      const btn  = form.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.disabled    = true;
      btn.textContent = 'Enviando…';

      const nombre     = (form.querySelector('[name="nombre"]')?.value     || '').trim();
      const telefono   = (form.querySelector('[name="telefono"]')?.value   || '').trim();
      const email      = (form.querySelector('[name="email"]')?.value      || '').trim();
      const tratamiento= (form.querySelector('[name="tratamiento"]')?.value|| '').trim();
      const mensaje    = (form.querySelector('[name="mensaje"]')?.value    || '').trim();

      const lineas = [
        `Hola, me llamo *${nombre}*.`,
        `📱 Teléfono: ${telefono}`,
        `📧 Email: ${email}`,
        tratamiento ? `💆 Tratamiento de interés: ${tratamiento}` : '',
        `\n${mensaje}`,
      ].filter(Boolean).join('\n');

      const url = `https://wa.me/529842660085?text=${encodeURIComponent(lineas)}`;

      setTimeout(() => {
        showToast('Redirigiendo a WhatsApp…', 'success');
        form.reset();
        btn.disabled    = false;
        btn.textContent = orig;
        window.open(url, '_blank', 'noopener');
      }, 400);
    });

    // Validación en tiempo real
    form.querySelectorAll('.form-input, .form-textarea').forEach((input) => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) validateField(input);
      });
    });
  });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach((field) => {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

function validateField(field) {
  const wrap = field.closest('.form-group');
  const err  = wrap?.querySelector('.form-error');
  let   msg  = '';

  if (!field.value.trim()) {
    msg = 'Este campo es obligatorio.';
  } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
    msg = 'Ingresa un correo válido.';
  } else if (field.type === 'tel' && field.value.trim().length < 8) {
    msg = 'Ingresa un teléfono válido.';
  }

  field.classList.toggle('error', !!msg);
  if (err) {
    err.textContent = msg;
    err.style.display = msg ? 'block' : 'none';
  }
  return !msg;
}

function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type}`;
  toast.setAttribute('role', 'alert');
  toast.textContent = message;

  const styles = `
    position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(20px);
    background:${type === 'success' ? '#2a2a2a' : '#c0392b'}; color:#fff;
    padding:1rem 2rem; border-radius:9999px; font-family:'Montserrat',sans-serif;
    font-size:0.85rem; letter-spacing:0.05em; z-index:9999;
    box-shadow:0 8px 30px rgba(0,0,0,0.2); opacity:0;
    transition:opacity 0.4s ease, transform 0.4s ease;
  `;
  toast.style.cssText = styles;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity   = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity   = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}
