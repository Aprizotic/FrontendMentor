const tipButtons = document.querySelectorAll('.tip-button');
const inputs = document.querySelectorAll('input');
const bill = document.querySelector('[data-js="bill-input"]');
const people = document.querySelector('[data-js="people-input"]');
const custom = document.querySelector('[data-js="custom-input"]');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const forms = document.querySelectorAll('form');
const reset = document.querySelector('.reset');
let percentage;
let tipValue;

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
});

tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      button.classList.remove('active');
    } else {
      tipButtons.forEach(button => button.classList.remove('active'));
      custom.classList.remove('active', 'valid', 'invalid');
      button.classList.add('active');
    }
  });
});

// Focus cursor on right side of input
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    const value = input.value;
    input.value = '';
    input.value = value;
  });

  input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input.checkValidity()) {
      input.blur();
    } else if (e.key === 'Enter' && !(input.checkValidity())){
      input.value = '';
      input.classList.add('invalid');
      input.classList.remove('valid');
    }
  });
});

bill.addEventListener('blur', () => {
  bill.reportValidity();

  if (bill.checkValidity()) {
    bill.value = parseFloat(bill.value).toFixed(2);
    bill.classList.remove('invalid');
    bill.classList.add('valid');
  } else {
    bill.value = '';
    bill.classList.add('invalid');
    bill.classList.remove('valid');
  }
});

people.addEventListener('blur', () => {
  people.reportValidity();

  if (people.checkValidity()) {
    people.value = parseFloat(people.value).toFixed(0);
    people.classList.remove('invalid');
    people.classList.add('valid');
  } else {
    people.value = '';
    people.classList.add('invalid');
    people.classList.remove('valid');
  }
});

custom.addEventListener('blur', () => {
  custom.reportValidity();

  if (custom.checkValidity() && custom.value) {
    custom.value = parseFloat(custom.value).toFixed(0);
    custom.classList.remove('invalid');
    custom.classList.add('valid');
  } else if (!(custom.checkValidity())) {
    custom.value = '';
    custom.classList.add('invalid');
    custom.classList.remove('valid');
  }
});

custom.addEventListener('focus', () => {
  custom.classList.add('active');
  tipButtons.forEach(button => button.classList.remove('active'));
});

setInterval(() => {
  if (bill.classList.contains('valid') && people.classList.contains('valid')) {
    if ([...tipButtons].some(el => el.classList.contains('active'))
        || custom.classList.contains('active')) {
      if (custom.classList.contains('active')) {
        percentage = parseInt(custom.value.replace('%', '')) / 100;
      } else {
        tipButtons.forEach(button => {
          if (button.classList.contains('active')) {
            percentage = parseInt(button.textContent.replace('%', '')) / 100;
          }
        });
      }

      tipValue = parseFloat(bill.value) * percentage;

      tip.textContent = `$${(tipValue / parseInt(people.value)).toFixed(2)}`
      total.textContent = `$${((parseFloat(bill.value) + tipValue) / parseInt(people.value)).toFixed(2)}`
      reset.classList.remove('invalid');
    }
  } else {
    reset.classList.add('invalid');
    total.textContent = '$0.00'
    tip.textContent = '$0.00'
  }
}, 1);

reset.addEventListener('click', () => {
  inputs.forEach(input => {
    input.value = ''
    input.classList.remove('valid');
  });

  tipButtons.forEach(button => button.classList.remove('active'));
});

inputs.forEach(input => {
  input.value = ''
  input.classList.remove('valid');
});

tipButtons.forEach(button => button.classList.remove('active'));
bill.focus();
