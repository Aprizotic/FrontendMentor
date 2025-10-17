const form = document.querySelector('form');
const ratingContainer = document.querySelector('.rating-container');
const thanksPage = document.querySelector('section');
const labels = document.querySelectorAll('label');
const starIcon = document.querySelector('.star-icon');

labels.forEach(label => {
  label.addEventListener('click', () => {
    labels.forEach(label => label.classList.remove('active'));
    label.classList.add('active');
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  thanksPage.classList.remove('hidden');
  form.classList.add('hidden');
  starIcon.classList.add('hidden');

  const formData = new FormData(form);
  const rating = formData.get('rating');

  ratingContainer.textContent = rating;
});
