const openMenuButton = document.querySelector('[data-js="open-menu"]');
const closeMenuButton = document.querySelector('[data-js="close-menu"]');
const navMenu = document.querySelector('.nav__menu');
const dimOverlay = document.querySelector('.dim-overlay');

openMenuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  dimOverlay.classList.toggle('hidden');
});

closeMenuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  dimOverlay.classList.toggle('hidden');
});