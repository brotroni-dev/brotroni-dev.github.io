/* ============================================================
   Portfolio interaction layer - minimal, progressive enhancement.
   Only the Contents navigation (sticky, active-section tracking).
   The page is fully usable with JS disabled.
   ============================================================ */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var secs = Array.prototype.slice.call(document.querySelectorAll('[data-toc]'));
  if (!secs.length) return;

  var nav = document.createElement('nav');
  nav.className = 'toc';
  nav.setAttribute('aria-label', 'On this page');
  var lab = document.createElement('div');
  lab.className = 'toc__label';
  lab.textContent = 'Contents';
  nav.appendChild(lab);

  secs.forEach(function (s, i) {
    if (!s.id) s.id = 'sec-' + i;
    var a = document.createElement('a');
    a.className = 'toc__item';
    a.href = '#' + s.id;
    a.textContent = s.getAttribute('data-toc');
    a.addEventListener('click', function (e) {
      e.preventDefault();
      s.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
    nav.appendChild(a);
  });
  document.body.appendChild(nav);

  // Switch the rail to light-on-dark colours while it overlaps a .black section
  var black = document.querySelector('.black');
  if (black) {
    var checkDark = function () {
      var b = black.getBoundingClientRect();
      var t = nav.getBoundingClientRect();
      nav.classList.toggle('toc--dark', b.top < t.bottom && b.bottom > t.top);
    };
    window.addEventListener('scroll', checkDark, { passive: true });
    window.addEventListener('resize', checkDark, { passive: true });
    checkDark();
  }

  var links = nav.querySelectorAll('.toc__item');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        var id = en.target.id;
        links.forEach(function (l) {
          l.classList.toggle('is-active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
  secs.forEach(function (s) { io.observe(s); });
})();
