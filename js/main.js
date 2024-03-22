const nav = document.querySelectorAll('.navbar a')
nav.forEach(item => item.addEventListener('click', (event) => {
  nav.forEach(a => a.classList.remove('active'))
  event.target.classList.add('active')
}))



function highlightSidebarIcon() {
  const sections = document.querySelectorAll('section')

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100
    const sectionBottom = sectionTop + section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      nav.forEach((link) => {
        link.classList.remove('active')
      });
      nav[index].classList.add('active')
    }
  });
}

window.addEventListener('scroll', highlightSidebarIcon)