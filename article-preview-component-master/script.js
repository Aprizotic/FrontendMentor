const shareButton = document.getElementById('share-button');
const shareSection = document.getElementById('share-section');
const shareIcon = document.getElementById('share-icon');
const desaturatedDarkBlue = 'hsl(214, 17%, 51%)';
const white = 'hsl(255, 100%, 100%)';
const lightGrayishBlue = 'hsl(210, 46%, 95%)';

shareButton.addEventListener('click', () => {
    let opacity = getComputedStyle(shareSection).opacity;

    if (opacity === '0') {
      shareSection.style.opacity = '1';
      shareButton.classList.remove('inactive');
      shareButton.classList.add('active');
      shareIcon.style.fill = white;
      shareButton.style.backgroundColor = desaturatedDarkBlue;
      shareSection.style.pointerEvents = 'auto';
    } else {
      shareSection.style.opacity = '0';
      shareButton.classList.remove('active');
      shareButton.classList.add('inactive');
      shareIcon.style.fill = desaturatedDarkBlue;
      shareButton.style.backgroundColor = lightGrayishBlue;
      shareSection.style.pointerEvents = 'none';
  }
});

shareButton.addEventListener('mouseenter', () => {
  if (shareButton.classList.contains('active')) {
    shareIcon.style.fill = desaturatedDarkBlue;
    shareButton.style.backgroundColor = lightGrayishBlue; 
  } else {
    shareIcon.style.fill = white;
    shareButton.style.backgroundColor = desaturatedDarkBlue;
  }
});

shareButton.addEventListener('mouseleave', () => {
  if (shareButton.classList.contains('active')) {
    shareIcon.style.fill = white;
    shareButton.style.backgroundColor = desaturatedDarkBlue;
  } else {
    shareIcon.style.fill = desaturatedDarkBlue;
    shareButton.style.backgroundColor = lightGrayishBlue; 
  }
});