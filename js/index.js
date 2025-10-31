const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');

window.addEventListener('scroll', (event) => {
  if (header) {
    const limit = 150;
    const scrollY = window.scrollY;
    const positionPercent = Math.min(scrollY / limit, 1);

    header.style.backgroundColor = `rgba(255, 255, 255, ${0.12 * positionPercent})`;
    header.style.top = `${12 - 12 * positionPercent}px`;

    if (scrollY > limit) {
      header.style.backdropFilter = 'blur(38px)';
    } else {
      header.style.backdropFilter = 'blur(0px)';
    }
  }
});

if (header) {
  header.addEventListener('click', (event) => {
    const isBurger = event.target.classList.contains('header__burger-button');

    if (isBurger) {
      headerMenu.classList.add('active');
    }
  });
}

if (headerMenu) {
  headerMenu.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('header__menu-close');
    const isLink = event.target.classList.contains('header__social-link');
    const isButton = event.target.classList.contains('header__controls-button');

    if (isLayout || isClose || isLink || isButton) {
      headerMenu.classList.remove('active');
    }
  });
}
