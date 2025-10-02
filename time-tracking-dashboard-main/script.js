let json;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    json = data
  })
  .catch(error => console.error(error));

const reset = () => {
  buttons.forEach(button => {
    button.classList.remove('active');
  });
};

let dailyButton = document.querySelector('[data-js="daily"]');
let weeklyButton = document.querySelector('[data-js="weekly"]');
let monthlyButton = document.querySelector('[data-js="monthly"]');
let buttons = [dailyButton, weeklyButton, monthlyButton];

dailyButton.addEventListener('click', () => {
  reset();
  dailyButton.classList.add('active');

  json.forEach(section => {
    console.log(json);
    let parent = document.querySelector(`.${(section.title).toLowerCase().replace(/\s+/g, '')}`);
    let current = parent.querySelector('.current');
    let previous = parent.querySelector('.previous');
    
    current.textContent = `${section.timeframes.daily.current}hrs`;
    previous.textContent = `Yesterday - ${section.timeframes.daily.previous}hrs`;
  });
});

weeklyButton.addEventListener('click', () => {
  reset();
  weeklyButton.classList.add('active');

  json.forEach(section => {
    console.log(json);
    let parent = document.querySelector(`.${(section.title).toLowerCase().replace(/\s+/g, '')}`);
    let current = parent.querySelector('.current');
    let previous = parent.querySelector('.previous');
    
    current.textContent = `${section.timeframes.weekly.current}hrs`;
    previous.textContent = `Last Week - ${section.timeframes.weekly.previous}hrs`;
  });
});

monthlyButton.addEventListener('click', () => {
  reset();
  monthlyButton.classList.add('active');

  json.forEach(section => {
    console.log(json);
    let parent = document.querySelector(`.${(section.title).toLowerCase().replace(/\s+/g, '')}`);
    let current = parent.querySelector('.current');
    let previous = parent.querySelector('.previous');
    
    current.textContent = `${section.timeframes.monthly.current}hrs`;
    previous.textContent = `Last Month - ${section.timeframes.monthly.previous}hrs`;
  });
});