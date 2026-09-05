// Mobile nav toggle
(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();

// Active nav link — highlights whichever section is currently in view
(function () {
  const navLinks = Array.from(document.querySelectorAll('#siteNav a[href^="#"]'));
  if (!navLinks.length) return;

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || !sections.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));
})();

// Subtle reveal for section headings as they enter the viewport —
// a single, quiet motion cue rather than per-element animation.
(function () {
  const targets = document.querySelectorAll('.section-title');
  if (!targets.length) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  targets.forEach((el) => observer.observe(el));
})();

// Single orchestrated motion moment: the hero profile panel reveals
// itself line by line, as if a status check were running live.
(function () {
  const lines = document.querySelectorAll('#profileLines li');
  if (!lines.length) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    lines.forEach((line) => line.classList.add('is-visible'));
    return;
  }

  const STEP_DELAY = 380; // ms between lines
  const START_DELAY = 300;

  lines.forEach((line, i) => {
    setTimeout(() => {
      lines.forEach((l) => l.classList.remove('is-current'));
      line.classList.add('is-visible');
      line.classList.add('is-current');

      // last line keeps the blinking caret; earlier ones drop it
      if (i < lines.length - 1) {
        setTimeout(() => line.classList.remove('is-current'), STEP_DELAY - 30);
      }
    }, START_DELAY + i * STEP_DELAY);
  });
})();
