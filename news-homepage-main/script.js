const openButton = document.querySelector('[data-js="open-modal"]');
const closeButton = document.querySelector('[data-js="close-modal"]');
const navMenu = document.querySelector('.header__nav-items');

const toggleMenu = () => {
  navMenu.classList.toggle('hidden');
  closeButton.classList.toggle('hidden');
}

openButton.addEventListener('click', () => {
  toggleMenu();
});

closeButton.addEventListener('click', () => {
  toggleMenu();
});