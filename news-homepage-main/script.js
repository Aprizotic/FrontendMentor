const openButton = document.querySelector('[data-js="open-modal"]');
const closeButton = document.querySelector('[data-js="close-modal"]');
const navMenu = document.querySelector('.header__nav-items');
const navItems = document.querySelectorAll('.header__nav-item');
const mediaQuery = window.matchMedia('(min-width: 40rem)');

const adjustDevice = (e) => {
  if (e.matches) {
    openButton.classList.add('hidden');
    navMenu.classList.add('header__nav-items--desktop');
    navMenu.classList.remove('hidden');
    navItems.forEach((item) => {
      item.classList.add('header__nav-item--desktop');
    });
  } else {
    openButton.classList.remove('hidden');
    navMenu.classList.remove('header__nav-items--desktop');
    navMenu.classList.add('hidden');
    navItems.forEach((item) => {
      item.classList.remove('header__nav-item--desktop');
    });
  }
}

const toggleMenu = () => {
  navMenu.classList.toggle('hidden');
  closeButton.classList.toggle('hidden');
  openButton.classList.toggle('hidden');
}

openButton.addEventListener('click', () => {
  toggleMenu();
});

closeButton.addEventListener('click', () => {
  toggleMenu();
});

mediaQuery.addEventListener('change', adjustDevice);

adjustDevice(mediaQuery);