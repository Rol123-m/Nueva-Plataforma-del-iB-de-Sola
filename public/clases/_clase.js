/* Mejoras comunes a todas las lecciones: barra de lectura, índice y barra superior */
(function () {
  var main = document.querySelector('main');
  // barra de lectura
  var bar = document.createElement('div'); bar.id = 'lectura-barra'; document.body.prepend(bar);
  addEventListener('scroll', function () {
    var h = document.documentElement; var max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  }, { passive: true });
  // normaliza barras de progreso antiguas (el ancho venía en la propia barra)
  document.querySelectorAll('.progreso-barra').forEach(function (b) {
    if (!b.querySelector('div') && b.style.width) { var w = b.style.width; b.style.width = ''; b.innerHTML = '<div style="width:' + w + '"></div>'; }
  });
  // barra superior con regreso a la asignatura
  var back = document.body.getAttribute('data-volver');
  if (back) {
    var t = document.createElement('div'); t.className = 'lesson-topbar';
    var h1 = document.querySelector('h1');
    t.innerHTML = '<a href="' + back + '">← Volver a la asignatura</a><span class="crumb">' + (h1 ? h1.textContent : '') + '</span>';
    document.body.insertBefore(t, bar.nextSibling);
  }
  // índice automático (solo si hay 4+ secciones)
  if (!main) return;
  var hs = [].slice.call(main.querySelectorAll('h2')).filter(function (h) { return !h.closest('.objetivo-card,.resumen-final,.lesson-toc'); });
  if (hs.length < 4) return;
  var ol = document.createElement('ol');
  hs.forEach(function (h, i) {
    if (!h.id) h.id = 'sec-' + (i + 1);
    var li = document.createElement('li'), a = document.createElement('a');
    a.href = '#' + h.id; a.textContent = h.textContent.replace(/^[^\p{L}\p{N}]+/u, ''); li.appendChild(a); ol.appendChild(li);
  });
  var toc = document.createElement('nav'); toc.className = 'lesson-toc'; toc.setAttribute('aria-label', 'Contenido de la lección');
  toc.innerHTML = '<strong>En esta lección</strong>'; toc.appendChild(ol);
  var anchor = main.querySelector('.objetivo-card') || main.querySelector('.progreso-clase');
  if (anchor) anchor.insertAdjacentElement('afterend', toc); else (main.querySelector('.container') || main).prepend(toc);
})();
