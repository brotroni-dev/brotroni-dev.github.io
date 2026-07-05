/* ============================================================
   Portfolio interaction layer - progressive enhancement.
   Custom smiley cursor, sticky table of contents, scroll progress,
   scroll-reveal (framed elements only), and the rotating opener stamp.
   The page is fully usable with JS disabled; nothing here is required.
   ============================================================ */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(pointer: fine)').matches;
  var ACCENT = '#B0613A';

  /* ---- Top scroll-progress bar ------------------------------ */
  var prog = document.createElement('div');
  prog.className = 'progress';
  var bar = document.createElement('div');
  bar.className = 'progress__bar';
  prog.appendChild(bar);
  document.body.appendChild(prog);
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---- Sticky table of contents ----------------------------- */
  var secs = Array.prototype.slice.call(document.querySelectorAll('[data-toc]'));
  if (secs.length) {
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
      a.innerHTML = s.getAttribute('data-toc') + '<span class="toc__u"></span>';
      a.addEventListener('click', function (e) {
        e.preventDefault();
        s.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      });
      nav.appendChild(a);
    });
    document.body.appendChild(nav);
    var links = nav.querySelectorAll('.toc__item');
    var tio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var id = en.target.id;
          links.forEach(function (l) {
            l.classList.toggle('is-active', l.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    secs.forEach(function (s) { tio.observe(s); });
  }

  /* ---- Scroll reveal (framed elements only) ----------------- */
  if (document.documentElement.classList.contains('reveal-ready')) {
    var sel = '.pg-card, .mini-card, .approach-card, .stat, .voice, .flow__step, .diagram, .principle-callout, .result';
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); rio.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    Array.prototype.forEach.call(document.querySelectorAll(sel), function (el) {
      var idx = 0, p = el.parentNode;
      if (p) { var c = p.children; for (var k = 0; k < c.length; k++) { if (c[k] === el) { idx = k; break; } } }
      el.style.transitionDelay = Math.min(idx, 4) * 55 + 'ms';
      rio.observe(el);
    });
  }

  /* ---- Rotating opener stamp -------------------------------- */
  var stamp = document.querySelector('.stamp');
  if (stamp) {
    var proj = (document.body.getAttribute('data-project') || '').toUpperCase();
    var txt = 'RONI BROT-KOLINKÓ · ' + proj + ' · ';
    stamp.innerHTML =
      '<svg width="150" height="150" viewBox="0 0 140 140" aria-hidden="true">' +
        '<defs><path id="stampPath" d="M70,70 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0" fill="none"/></defs>' +
        '<g class="stamp__spin"><text font-family="IBM Plex Mono, monospace" font-size="10.5" letter-spacing="2.2" fill="' + ACCENT + '" textLength="377" lengthAdjust="spacing"><textPath href="#stampPath" startOffset="0">' + txt + '</textPath></text></g>' +
      '</svg>';
    if (!reduce) {
      window.addEventListener('scroll', function () {
        /* factor > 1 so it nets a downward drift in the viewport as you scroll */
        stamp.style.transform = 'translateY(' + (window.scrollY * 1.35) + 'px)';
      }, { passive: true });
    }
  }

  /* ---- Smiley custom cursor --------------------------------- */
  if (fine && !reduce) {
    document.body.classList.add('cursor-on');
    var face = document.createElement('div');
    face.className = 'cursor-face';
    face.innerHTML =
      '<svg width="40" height="40" viewBox="0 0 40 40">' +
        '<circle cx="20" cy="20" r="15" fill="none" stroke="' + ACCENT + '" stroke-width="1.6"/>' +
        '<circle cx="14.5" cy="16" r="1.7" fill="' + ACCENT + '"/>' +
        '<circle cx="25.5" cy="16" r="1.7" fill="' + ACCENT + '"/>' +
        '<path class="cf-sm" d="M13.5 24 Q20 29 26.5 24" fill="none" stroke="' + ACCENT + '" stroke-width="1.7" stroke-linecap="round"/>' +
      '</svg>';
    var nose = document.createElement('div');
    nose.className = 'cursor-nose';
    document.body.appendChild(face);
    document.body.appendChild(nose);
    var sm = face.querySelector('.cf-sm');
    var SM = 'M13.5 24 Q20 29 26.5 24';    /* resting smile */
    var SM_BIG = 'M12 23 Q20 31 28 23';    /* happy (hover clickable) */
    var SM_O = 'M20 24 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0'; /* surprised :O on click */
    var nx = window.innerWidth / 2, ny = window.innerHeight / 2, fx = nx, fy = ny, vx = 0, vy = 0;
    var big = false, shown = false;
    function isHot(t) { return t && t.closest && t.closest('a, button, .toc__item, .next, [data-hover]'); }
    document.addEventListener('mousemove', function (e) {
      nx = e.clientX; ny = e.clientY;
      nose.style.left = nx + 'px'; nose.style.top = ny + 'px';
      if (!shown) { shown = true; face.style.opacity = 1; nose.style.opacity = 1; }
    }, { passive: true });
    document.addEventListener('mouseover', function (e) {
      if (isHot(e.target)) { big = true; face.style.transform = 'translate(-50%,-50%) scale(1.18)'; sm.setAttribute('d', SM_BIG); }
    });
    document.addEventListener('mouseout', function (e) {
      if (isHot(e.target)) { big = false; face.style.transform = 'translate(-50%,-50%) scale(1)'; sm.setAttribute('d', SM); }
      if (!e.relatedTarget && e.target === document.documentElement) { face.style.opacity = 0; nose.style.opacity = 0; shown = false; }
    });
    document.addEventListener('mousedown', function (e) {
      if (!isHot(e.target)) { sm.setAttribute('d', SM_O); face.style.transform = 'translate(-50%,-50%) scale(1.08)'; }
    });
    document.addEventListener('mouseup', function () {
      if (!big) { sm.setAttribute('d', SM); face.style.transform = 'translate(-50%,-50%) scale(1)'; }
    });
    (function loop() {
      vx += (nx - fx) * 0.14; vy += (ny - fy) * 0.14;
      vx *= 0.72; vy *= 0.72; fx += vx; fy += vy;
      face.style.left = fx + 'px'; face.style.top = fy + 'px';
      requestAnimationFrame(loop);
    })();
  }
})();
