const openMenuButton = document.querySelector('[data-js="open-menu"]');
const closeMenuButton = document.querySelector('[data-js="close-menu"]');
const cartButton = document.querySelector('[data-js="toggle-cart"]');
const previousButton = document.querySelector('[data-js="previous-image"]');
const nextButton = document.querySelector('[data-js="next-image"]');
const cartIcon = document.querySelector('.button__cart-button-icon');
const cart = document.querySelector('.cart');
const navMenu = document.querySelector('.nav__menu');
const dimOverlay = document.querySelector('.dim-overlay');
const images = document.querySelectorAll('.card__preview-image-wrapper');
const thumbnailButtons = document.querySelectorAll('.button--thumbnail');
const thumbnails = document.querySelectorAll('.card__thumbnail');
const quantity = document.querySelector('.product__card-quantity');
const addButton = document.querySelector('.button--add');
const subtractButton = document.querySelector('.button--subtract');

addButton.addEventListener('click', () => {
  if (quantity.textContent !== '99') {
    quantity.textContent = parseInt(quantity.textContent) + 1;
  }
});

subtractButton.addEventListener('click', () => {
  if (quantity.textContent !== '0') {
    quantity.textContent = parseInt(quantity.textContent) - 1;
  }
});

openMenuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  dimOverlay.classList.toggle('hidden');
});

closeMenuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  dimOverlay.classList.toggle('hidden');
});

cartButton.addEventListener('click', () => {
  cart.classList.toggle('hidden');
  let style = getComputedStyle(cartIcon);

  if (style.fill == "rgb(29, 32, 37)") {
    cartIcon.style.fill = "#6D6F7A"
  } else {
    cartIcon.style.fill = "#1D2025"
  }
});

previousButton.addEventListener('click', () => {
  let previousImage;

  images.forEach(image => {
    if (!image.classList.contains('hidden')) {
      if (!images[0].classList.contains('hidden')) {
        previousImage = images[3];
      } else {
        previousImage = image.previousElementSibling;
      }
    }
  });

  images.forEach(image => {
    image.classList.add('hidden');
  });

  previousImage.classList.remove('hidden');
});

nextButton.addEventListener('click', () => {
  let nextImage;

  images.forEach(image => {
    if (!image.classList.contains('hidden')) {
      if (!images[3].classList.contains('hidden')) {
        nextImage = images[0];
      } else {
        nextImage = image.nextElementSibling;
      }
    }
  });

  images.forEach(image => {
    image.classList.add('hidden');
  });

  nextImage.classList.remove('hidden');
});

thumbnailButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    thumbnailButtons.forEach(button => {
      button.classList.remove('active-button');
    });

    button.classList.add('active-button');

    thumbnails.forEach(thumbnail => {
      thumbnail.classList.remove('active-image');
    });

    button.firstElementChild.classList.add('active-image');

    images.forEach(image => {
      image.classList.add('hidden');
    });

    images[index].classList.remove('hidden');
  });
});