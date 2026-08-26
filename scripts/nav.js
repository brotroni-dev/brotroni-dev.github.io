/* Sticky nav: one fixed height, and it slides out of the way on the way down
   so a long case study keeps its full screen, then comes straight back the
   moment you scroll up.
   The only read per frame is scrollY and the only write is a class toggle,
   both behind requestAnimationFrame, so scrolling never waits on layout. */
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  /* Someone who asked for less motion gets a plain sticky bar that never moves. */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var TOP  = 120;   /* below this it is always shown - nothing to gain by hiding */
  var STEP = 6;     /* ignore trackpad jitter so the bar cannot flap */

  var last = window.scrollY;
  var queued = false;

  function update() {
    queued = false;
    var y = window.scrollY;
    var moved = y - last;
    if (Math.abs(moved) < STEP) return;
    last = y;

    /* Always visible at the top, and never hidden while the keyboard focus is
       inside it - tabbing to a link you cannot see is worse than a fixed bar. */
    if (y <= TOP || nav.contains(document.activeElement)) {
      nav.classList.remove('nav--tucked');
      return;
    }
    nav.classList.toggle('nav--tucked', moved > 0);
  }

  addEventListener('scroll', function () {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });

  nav.addEventListener('focusin', function () { nav.classList.remove('nav--tucked'); });
})();
