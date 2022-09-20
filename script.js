'use strict';

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const message = function (variable) {
  document.querySelector('.message').textContent = variable;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message('No number!');
  } else if (guess === random) {
    message('Correct!');
    document.querySelector('.number').textContent = random;
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== random) {
    if (score > 1) {
      message(guess > random ? 'Too high!' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('You lose!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  message('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
