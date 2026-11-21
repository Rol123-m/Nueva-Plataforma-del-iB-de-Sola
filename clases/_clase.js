/* Mejoras compartidas para todas las lecciones del Instituto. */
(function () {
  'use strict';

  var main = document.querySelector('main');
  var bar = document.createElement('div');
  bar.id = 'lectura-barra';
  bar.setAttribute('aria-hidden', 'true');
  document.body.prepend(bar);

  function updateReadingProgress() {
    var root = document.documentElement;
    var max = root.scrollHeight - root.clientHeight;
    var progress = max > 0 ? (root.scrollTop / max) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  }
  window.addEventListener('scroll', updateReadingProgress, { passive: true });
  window.addEventListener('resize', updateReadingProgress, { passive: true });
  updateReadingProgress();

  // Normaliza barras antiguas cuyo ancho estaba aplicado al contenedor.
  document.querySelectorAll('.progreso-barra').forEach(function (container) {
    if (!container.querySelector('div') && container.style.width) {
      var width = container.style.width;
      container.style.width = '';
      var fill = document.createElement('div');
      fill.style.width = width;
      container.appendChild(fill);
    }
  });

  // El regreso debe funcionar incluso cuando la lección se abre directamente,
  // sin depender de history.back() ni del lugar desde el que llegó el estudiante.
  var back = document.body.getAttribute('data-volver');
  if (back) {
    var backUrl;
    try {
      backUrl = new URL(back, document.baseURI).href;
    } catch (error) {
      backUrl = back;
    }

    document.querySelectorAll('.btn-volver, .btn-volver-clase').forEach(function (link) {
      link.href = backUrl;
      link.removeAttribute('onclick');
    });

    var topbar = document.createElement('nav');
    topbar.className = 'lesson-topbar';
    topbar.setAttribute('aria-label', 'Navegación de la lección');

    var backLink = document.createElement('a');
    backLink.href = backUrl;
    backLink.textContent = '← Volver a la asignatura';

    var heading = document.querySelector('h1');
    var crumb = document.createElement('span');
    crumb.className = 'crumb';
    crumb.textContent = heading ? heading.textContent.trim() : 'Lección';

    topbar.appendChild(backLink);
    topbar.appendChild(crumb);
    document.body.insertBefore(topbar, bar.nextSibling);
  }

  if (!main) return;

  // Genera un índice accesible a partir de los títulos reales de la lección.
  var headings = Array.prototype.slice.call(main.querySelectorAll('h2')).filter(function (heading) {
    return !heading.closest('.objetivo-card, .resumen-final, .lesson-toc') && !heading.hasAttribute('data-no-toc');
  });
  if (headings.length < 4) return;

  var list = document.createElement('ol');
  headings.forEach(function (heading, index) {
    if (!heading.id) heading.id = 'seccion-' + (index + 1);
    var item = document.createElement('li');
    var link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent.trim();
    item.appendChild(link);
    list.appendChild(item);
  });

  var toc = document.createElement('nav');
  toc.className = 'lesson-toc';
  toc.setAttribute('aria-label', 'Contenido de la lección');
  var title = document.createElement('strong');
  title.textContent = 'En esta lección';
  toc.appendChild(title);
  toc.appendChild(list);

  var anchor = main.querySelector('.objetivo-card') || main.querySelector('.progreso-clase');
  if (anchor) anchor.insertAdjacentElement('afterend', toc);
  else (main.querySelector('.container') || main).prepend(toc);
})();
