// Breakpoints
const tabletBp = window.matchMedia('(min-width: 50rem)');
const desktopBp = window.matchMedia('(min-width: 90rem)');

// Nav
const openMenuButton = document.querySelector('[data-js="open-menu"]');
const closeMenuButton = document.querySelector('[data-js="close-menu"]');
const nav = document.querySelector('.nav');
const dimmer = document.querySelector('.dimmer');

// Slider
const slider = document.querySelector('.slider');
const previousSlideButton = document.querySelector('[data-js="previous-slide"]');
const nextSlideButton = document.querySelector('[data-js="next-slide"]');
const heroSlides = document.querySelectorAll('.hero__slide');
const images = document.querySelectorAll('.grid__img--hero');

// Functions

const updateNav = e => {
  if (e.matches) {
    nav.classList.remove('hidden');
    closeMenuButton.classList.add('hidden');
  } else {
    nav.classList.add('hidden');
    closeMenuButton.classList.remove('hidden');
  }
};

// Nav function

openMenuButton.addEventListener('click', () => {
  nav.classList.remove('hidden');
  openMenuButton.setAttribute('aria-expanded', 'true');
  closeMenuButton.focus();

  if (!tabletBp.matches) {
    dimmer.classList.remove('hidden');
  }
});

closeMenuButton.addEventListener('click', () => {
  nav.classList.add('hidden');
  dimmer.classList.add('hidden');
  openMenuButton.setAttribute('aria-expanded', 'false');
  openMenuButton.focus();
});

dimmer.addEventListener('click', () => {
  nav.classList.add('hidden');
  dimmer.classList.add('hidden');
  openMenuButton.setAttribute('aria-expanded', 'false');
  openMenuButton.focus();
});

// Slider function

previousSlideButton.addEventListener('click', () => {
  let index;

  heroSlides.forEach((slide, i) => {
    if (!slide.classList.contains('hidden')) {
      index = i;
    }
  });

  heroSlides.forEach(slide => {
    slide.classList.add('hidden');
  });

  images.forEach(image => {
    image.classList.add('hidden');
  });

  if (index === 0) {
    heroSlides[2].classList.remove('hidden');
    images[2].classList.remove('hidden');
  } else {
    heroSlides[index - 1].classList.remove('hidden');
    images[index - 1].classList.remove('hidden');
  }
});

nextSlideButton.addEventListener('click', () => {
  let index;

  heroSlides.forEach((slide, i) => {
    if (!slide.classList.contains('hidden')) {
      index = i;
    }
  });

  heroSlides.forEach(slide => {
    slide.classList.add('hidden');
  });

  images.forEach(image => {
    image.classList.add('hidden');
  });

  if (index === 2) {
    heroSlides[0].classList.remove('hidden');
    images[0].classList.remove('hidden');
  } else {
    heroSlides[index + 1].classList.remove('hidden');
    images[index + 1].classList.remove('hidden');
  }
});

const observer = new ResizeObserver(entries => {
  for (const entry of entries) {
    if (!entry.target.classList.contains('hidden')) {
      let styles = getComputedStyle(slider);
      slider.style.top = `calc(${entry.contentRect.height}px - ${styles.height})`;
      
      if (tabletBp.matches && !desktopBp.matches) {
        nav.style.blockSize = `calc(${entry.contentRect.height}px`;
      }

      if (desktopBp.matches) {
        nav.style.inlineSize = `calc(${entry.contentRect.width}px`;
        nav.style.blockSize = '9rem';
      }
    }
  }
});

images.forEach(image => {
  observer.observe(image);
});

desktopBp.addEventListener('change', updateNav);

updateNav(desktopBp);