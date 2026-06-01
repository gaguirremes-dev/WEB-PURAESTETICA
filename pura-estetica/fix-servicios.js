const fs = require('fs');
let html = fs.readFileSync('servicios.html', 'utf8');

// ── 1. SWAP IMAGES: NCTF ↔ PDRN en Anti-Age ─────────────────────
html = html
  .split('Anti-Age/NCTF%20HA%20135.webp').join('Anti-Age/__TEMP__.webp')
  .split('Anti-Age/PDRN%20de%20Salm%C3%B3n.webp').join('Anti-Age/NCTF%20HA%20135.webp')
  .split('Anti-Age/__TEMP__.webp').join('Anti-Age/PDRN%20de%20Salm%C3%B3n.webp');

// ── 2. INSERTAR LÁSER CO2 AL FINAL DEL GRID DE ANTI-AGE ──────────
const antiageGridClose = `
        </div>
      </div>
    </section>

    <!-- CORPORALES -->`;

const antiageWithCO2 = `
          <article class="stagger-item" style="background:var(--color-light);border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-soft);display:flex;flex-direction:column;">
            <div style="width:100%;height:220px;overflow:hidden;background:var(--color-darker);">
              <img data-src="assets/images/Servicios/Depilaci%C3%B3n%20L%C3%A1ser/L%C3%A1ser%20CO2.webp" src="assets/images/Servicios/Depilaci%C3%B3n%20L%C3%A1ser/L%C3%A1ser%20CO2.webp" alt="Láser CO2 para reducción de cicatrices y renovación de piel en Cancún — Pura Estética" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;" loading="lazy" />
            </div>
            <div style="padding:2rem 2rem 2.5rem;display:flex;flex-direction:column;gap:0.8rem;flex:1;">
              <h3 style="font-family:var(--font-heading);font-size:1.35rem;color:var(--color-darker);line-height:1.3;">Láser CO2</h3>
              <div style="width:35px;height:1px;background:var(--color-gold);"></div>
              <p style="font-family:var(--font-body);font-size:0.88rem;color:#6b6560;line-height:1.75;flex:1;">Recupera una piel más lisa y uniforme: tratamiento ideal para disminuir cicatrices, marcas de acné y renovar tu piel profundamente.</p>
              <a href="https://wa.me/529842660085?text=Hola%2C+me+interesa+el+L%C3%A1ser+CO2" class="btn btn-ghost" target="_blank" rel="noopener" style="align-self:flex-start;margin-top:0.5rem;">Agendar consulta</a>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- CORPORALES -->`;

html = html.split(antiageGridClose).join(antiageWithCO2);

// ── 3. REEMPLAZAR CARD CO2 EN SECCIÓN LÁSER POR 2 NUEVAS CARDS ───
const oldCO2inLaser = `          <article class="stagger-item" style="background:var(--color-light);border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-soft);display:flex;flex-direction:column;">
            <div style="width:100%;height:220px;overflow:hidden;background:var(--color-darker);">
              <img data-src="assets/images/Servicios/Depilaci%C3%B3n%20L%C3%A1ser/L%C3%A1ser%20CO2.webp" src="assets/images/Servicios/Depilaci%C3%B3n%20L%C3%A1ser/L%C3%A1ser%20CO2.webp" alt="Láser CO2 — Pura Estética" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;" loading="lazy" />
            </div>
            <div style="padding:2rem 2rem 2.5rem;display:flex;flex-direction:column;gap:0.8rem;flex:1;">
              <h3 style="font-family:var(--font-heading);font-size:1.35rem;color:var(--color-darker);line-height:1.3;">Láser CO2</h3>
              <div style="width:35px;height:1px;background:var(--color-gold);"></div>
              <p style="font-family:var(--font-body);font-size:0.88rem;color:#6b6560;line-height:1.75;flex:1;">Recupera una piel más lisa y uniforme: el tratamiento ideal para disminuir cicatrices, marcas de acné y renovar tu piel profundamente.</p>
              <a href="https://wa.me/529842660085?text=Hola%2C+me+interesa+el+L%C3%A1ser+CO2" class="btn btn-ghost" target="_blank" rel="noopener" style="align-self:flex-start;margin-top:0.5rem;">Agendar consulta</a>
            </div>
          </article>`;

const newLaserCards = `          <article class="stagger-item" style="background:var(--color-light);border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-soft);display:flex;flex-direction:column;">
            <div style="width:100%;height:220px;overflow:hidden;background:var(--color-darker);">
              <img data-src="assets/images/Servicios/Depilaci%C3%B3n%20L%C3%A1ser/Depilaci%C3%B3n%20L%C3%A1ser%20Corporal.webp" src="assets/images/Servicios/Depilaci%C3%B3n%20L%C3%A1ser/Depilaci%C3%B3n%20L%C3%A1ser%20Corporal.webp" alt="Depilación láser corporal Hairmax Ultra 4K en Cancún — Pura Estética" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;" loading="lazy" />
            </div>
            <div style="padding:2rem 2rem 2.5rem;display:flex;flex-direction:column;gap:0.8rem;flex:1;">
              <h3 style="font-family:var(--font-heading);font-size:1.35rem;color:var(--color-darker);line-height:1.3;">Depilación Láser Corporal</h3>
              <div style="width:35px;height:1px;background:var(--color-gold);"></div>
              <p style="font-family:var(--font-body);font-size:0.88rem;color:#6b6560;line-height:1.75;flex:1;">Eliminación definitiva del vello en piernas, axilas, bikini, zona íntima, brazos y espalda. Tecnología Hairmax Ultra 4K con 4 longitudes de onda para resultados rápidos y prácticamente sin dolor.</p>
              <a href="https://wa.me/529842660085?text=Hola%2C+me+interesa+la+depilaci%C3%B3n+l%C3%A1ser+corporal" class="btn btn-ghost" target="_blank" rel="noopener" style="align-self:flex-start;margin-top:0.5rem;">Agendar consulta</a>
            </div>
          </article>

          <article class="stagger-item" style="background:var(--color-light);border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-soft);display:flex;flex-direction:column;">
            <div style="width:100%;height:220px;overflow:hidden;background:var(--color-darker);">
              <img data-src="assets/images/Servicios/Depilaci%C3%B3n%20L%C3%A1ser/Depilaci%C3%B3n%20L%C3%A1ser%20Facial.webp" src="assets/images/Servicios/Depilaci%C3%B3n%20L%C3%A1ser/Depilaci%C3%B3n%20L%C3%A1ser%20Facial.webp" alt="Depilación láser facial en Cancún — Pura Estética" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;" loading="lazy" />
            </div>
            <div style="padding:2rem 2rem 2.5rem;display:flex;flex-direction:column;gap:0.8rem;flex:1;">
              <h3 style="font-family:var(--font-heading);font-size:1.35rem;color:var(--color-darker);line-height:1.3;">Depilación Láser Facial</h3>
              <div style="width:35px;height:1px;background:var(--color-gold);"></div>
              <p style="font-family:var(--font-body);font-size:0.88rem;color:#6b6560;line-height:1.75;flex:1;">Depilación precisa en rostro, labio superior, mentón, patillas y otras zonas faciales. Tecnología alemana adaptada para pieles sensibles con resultados duraderos desde las primeras sesiones.</p>
              <a href="https://wa.me/529842660085?text=Hola%2C+me+interesa+la+depilaci%C3%B3n+l%C3%A1ser+facial" class="btn btn-ghost" target="_blank" rel="noopener" style="align-self:flex-start;margin-top:0.5rem;">Agendar consulta</a>
            </div>
          </article>`;

html = html.split(oldCO2inLaser).join(newLaserCards);

fs.writeFileSync('servicios.html', html, 'utf8');

// Verificación
const h = fs.readFileSync('servicios.html', 'utf8');
const co2Count    = (h.match(/Láser CO2/g) || []).length;
const corporal    = h.includes('Depilación Láser Corporal');
const facial      = h.includes('Depilación Láser Facial');
const nctfImg     = h.includes('NCTF HA 135</h3>') ? (h.split('NCTF HA 135</h3>')[0].includes('PDRN') ? 'PDRN ✓' : 'NCTF ✗') : '?';
const pdrnImg     = h.includes('PDRN de Salmón</h3>') ? (h.split('PDRN de Salmón</h3>').slice(-2)[0].includes('NCTF') ? 'NCTF ✓' : 'PDRN ✗') : '?';

console.log('CO2 (debe ser 1):', co2Count);
console.log('Corporal creado:', corporal);
console.log('Facial creado:', facial);
console.log('Imagen NCTF card:', nctfImg);
console.log('Imagen PDRN card:', pdrnImg);
