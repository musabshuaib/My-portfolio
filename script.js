// Single orchestrated motion moment: the hero reasoning trace reveals
// itself line by line, as if being logged in real time.

(function () {
  const lines = document.querySelectorAll('#traceLines li');
  if (!lines.length) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    lines.forEach((line) => line.classList.add('is-visible'));
    return;
  }

  const STEP_DELAY = 420; // ms between lines
  const START_DELAY = 300;

  lines.forEach((line, i) => {
    setTimeout(() => {
      lines.forEach((l) => l.classList.remove('is-current'));
      line.classList.add('is-visible');
      line.classList.add('is-current');

      // last line keeps the blinking caret; earlier ones drop it
      if (i < lines.length - 1) {
        setTimeout(() => line.classList.remove('is-current'), STEP_DELAY - 40);
      }
    }, START_DELAY + i * STEP_DELAY);
  });
})();
