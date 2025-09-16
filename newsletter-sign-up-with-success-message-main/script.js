const subscribeBtn = document.querySelector('[data-js="open-modal"]');
const dismissBtn = document.querySelector('[data-js="close-modal"]');
const successPage = document.querySelector('.success-page');
const mainPage = document.querySelector('.main-page');
const form = document.getElementById('form');
const inputBox = document.querySelector('input');
const emailError = document.querySelector('.email-error');
const successWrapper = document.querySelector('.success-wrapper');

const adjustHeight = () => {
  let style = window.getComputedStyle(successPage);

  successPage.style.height = mainPage.scrollHeight + 'px';
  successWrapper.style.height = mainPage.scrollHeight + 1 + 'px';
  successWrapper.style.width = mainPage.scrollWidth + 1+ 'px';

  if (window.matchMedia("(min-width: 40em) and (max-width: 80em)").matches) {
    successPage.style.height = style.width;
  } else if (window.matchMedia("(min-width: 80em)").matches) {
    successPage.style.height = mainPage.scrollHeight + 'px';
    successPage.style.width = style.height;
  } else {
    successPage.style.width = mainPage.scrollWidth + 'px';
  }
};

const isValid = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

window.addEventListener('resize', adjustHeight);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (isValid(form.email.value)) {
    adjustHeight();
    successPage.setAttribute('aria-hidden', 'false');
    inputBox.classList.remove('invalid');
    emailError.classList.remove('show');
    successPage.classList.add('show');
    successWrapper.classList.add('show');
  }
  else {
    inputBox.classList.add('invalid');
    emailError.classList.add('show');
  }
});

form.addEventListener('input', () => {
  inputBox.classList.remove('invalid');
  emailError.classList.remove('show');
});

dismissBtn.addEventListener('click', () => {
  successPage.setAttribute('aria-hidden', 'true');
  successPage.classList.remove('show');
  successWrapper.classList.remove('show');
});