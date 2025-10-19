const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const answer = card.nextElementSibling;
    answer.classList.toggle('hidden');

    const expanded = card.getAttribute('aria-expanded') === 'true';
    card.setAttribute('aria-expanded', !expanded);
    answer.setAttribute('aria-hidden', expanded);
    
    const img = card.querySelector('img');
    img.src = expanded ? "assets/images/icon-plus.svg" : "assets/images/icon-minus.svg";
    img.alt = expanded ? "Expand" : "Collapse";
  });
});