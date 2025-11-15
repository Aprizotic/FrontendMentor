const form = document.querySelector('form');
const successMessage = document.querySelector('.form__success');
const inputs = document.querySelectorAll('input, textarea');

const reset = (input) => {
  input.classList.remove('required');
};

form.addEventListener('submit', e => {
  e.preventDefault();

  let isValid = true;

  inputs.forEach(input => {
    if (input.checkValidity()) {
      reset(input);

      if (input.type === 'email') {
        if (input.validity.typeMismatch) {
          let formatError = document.querySelector('[data-js="format-error"]');
          emailError.classList.add('hidden');
        } else {
          let requiredError = input.nextElementSibling;
          requiredError.classList.add('hidden');
        }
      } else if (input.type === 'radio') {
        let selectionError = document.querySelector('[data-js="selection-error"]');
        selectionError.classList.add('hidden');
      } else if (input.type === 'checkbox') {
        let consentError = document.querySelector('[data-js="consent-error"]');
        consentError.classList.add('hidden');
      } else {
        let requiredError = input.nextElementSibling;
        requiredError.classList.add('hidden');
      }
    } else {
      isValid = false;
      reset(input);

      if (input.type === 'email') {
        if (input.validity.typeMismatch) {
          let formatError = document.querySelector('[data-js="format-error"]');
          emailError.classList.remove('hidden');
        } else {
          let requiredError = input.nextElementSibling;
          requiredError.classList.remove('hidden');
        }
      } else if (input.type === 'radio') {
        let selectionError = document.querySelector('[data-js="selection-error"]');
        selectionError.classList.remove('hidden');
      } else if (input.type === 'checkbox') {
        let consentError = document.querySelector('[data-js="consent-error"]');
        consentError.classList.remove('hidden');
      } else {
        let requiredError = input.nextElementSibling;
        requiredError.classList.remove('hidden');
      }
    }
  });

  if (isValid) {
    successMessage.classList.remove('hidden');
    form.style.pointerEvents = 'none';
  }
});