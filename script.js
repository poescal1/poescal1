\// deze code is om een scroller toe te voegen maar de websitepagina's zijn niet lang genoeg om dat te laten werkne
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
