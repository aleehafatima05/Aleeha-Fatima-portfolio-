(() => {
  const d = document, header = d.querySelector('header'), btn = d.querySelector('.menu'), menu = d.getElementById('site-menu');
  const setMenu = o => { menu.classList.toggle('open', o); btn.setAttribute('aria-expanded', String(o)); };
  if (btn && menu) {
    btn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    d.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    d.addEventListener('click', e => { if (!header.contains(e.target)) setMenu(false); });
    matchMedia('(min-width:1001px)').addEventListener('change', () => setMenu(false));
  }
  const items = d.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } }), { threshold: 0.12 });
    items.forEach(x => io.observe(x));
  } else items.forEach(x => x.classList.add('show'));
  d.querySelectorAll('[data-year]').forEach(x => x.textContent = new Date().getFullYear());
})();
