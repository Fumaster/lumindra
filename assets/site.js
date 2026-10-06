(function () {
  'use strict';
  var d = document, w = window;
  d.documentElement.classList.remove('no-js');

  /* old service workers / caches: clear */
  try {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (regs) { regs.forEach(function (r) { r.unregister(); }); });
      if (w.caches && caches.keys) caches.keys().then(function (ks) { ks.forEach(function (k) { caches.delete(k); }); });
    }
  } catch (e) {}

  var reduce = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* header scrolled state */
  var hdr = d.querySelector('header.top');
  function onScroll() {
    if (hdr) hdr.classList.toggle('scrolled', w.scrollY > 10);
    if (!reduce) parallax();
  }

  /* active nav */
  var path = location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
  d.querySelectorAll('nav.main a, .drawer a').forEach(function (a) {
    var h = a.getAttribute('href');
    if (!h || h.charAt(0) === '#' || h.indexOf('http') === 0) return;
    var p = h.replace(/\.html$/, '').replace(/\/$/, '') || '/';
    if (p === path) a.setAttribute('aria-current', 'page');
  });

  /* mobile drawer */
  var btn = d.querySelector('.menu-btn'), drawer = d.querySelector('.drawer');
  function setMenu(open) {
    if (!btn || !drawer) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.classList.toggle('open', open);
    d.body.style.overflow = open ? 'hidden' : '';
  }
  if (btn && drawer) {
    btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    w.addEventListener('resize', function () { if (w.innerWidth >= 1060) setMenu(false); });
  }

  /* reveal */
  var rv = d.querySelectorAll('.reveal');
  if ('IntersectionObserver' in w && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('in'); });

  /* counters */
  var cs = d.querySelectorAll('[data-count]');
  function runCount(el) {
    var end = parseFloat(el.getAttribute('data-count')), dec = (el.getAttribute('data-count').split('.')[1] || '').length;
    var suf = el.getAttribute('data-suffix') || '', t0 = null, dur = 1400;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), v = end * (1 - Math.pow(1 - p, 3));
      el.textContent = v.toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in w && !reduce) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    cs.forEach(function (el) { co.observe(el); });
  }

  /* parallax bands */
  var bgs = d.querySelectorAll('.band .bg');
  function parallax() {
    bgs.forEach(function (bg) {
      var r = bg.parentNode.getBoundingClientRect();
      if (r.bottom < 0 || r.top > w.innerHeight) return;
      var off = (r.top + r.height / 2 - w.innerHeight / 2) * -0.12;
      bg.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0)';
    });
  }

  /* hero tilt (pointer devices only) */
  var shot = d.querySelector('.hero-shot'), frame = shot && shot.querySelector('.frame');
  if (frame && !reduce && w.matchMedia('(hover:hover)').matches) {
    shot.addEventListener('mousemove', function (e) {
      var r = shot.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      frame.style.transform = 'rotateY(' + (x * 10).toFixed(2) + 'deg) rotateX(' + (-y * 8).toFixed(2) + 'deg)';
    });
    shot.addEventListener('mouseleave', function () { frame.style.transform = ''; });
  }

  /* lightbox */
  var lb = d.createElement('div');
  lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-label', 'Image viewer');
  lb.innerHTML = '<button type="button" aria-label="Close">&times;</button><img alt="">';
  d.body.appendChild(lb);
  var lbi = lb.querySelector('img');
  d.querySelectorAll('.photo img').forEach(function (im) {
    im.parentNode.addEventListener('click', function () { lbi.src = im.currentSrc || im.src; lbi.alt = im.alt; lb.classList.add('open'); });
  });
  lb.addEventListener('click', function () { lb.classList.remove('open'); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('open'); });

  w.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
