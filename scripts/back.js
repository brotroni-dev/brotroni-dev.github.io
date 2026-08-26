/* The Back link behaves like the browser's own Back button, so arriving here
   from a case study returns you to that case study rather than to the home
   page. The href stays as the fallback for a direct visit, a new tab, or a
   visitor coming from outside the site. */
(function () {
  var back = document.querySelector('[data-back]');
  if (!back) return;
  var internal = false;
  try {
    internal = !!document.referrer &&
               new URL(document.referrer).origin === location.origin;
  } catch (e) {}
  if (!internal || history.length < 2) return;
  back.addEventListener('click', function (e) {
    /* leave modifier-clicks alone so "open in new tab" still works */
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    history.back();
  });
})();
