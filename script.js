'use strict';

let secretNumber = getSecretNumber();

let gameScore = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no number entered
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 😍';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
    gameScore--;

    // When guess is too low
  } else {
    document.querySelector('.message').textContent = '📉 Too Low!';
    gameScore--;
  }

  // Avoid score to be negative
  if (gameScore <= 0) {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    gameScore = 0;
  }
  document.querySelector('.score').textContent = gameScore;

  // FIXME: Stop the game when score = 0
});

document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  secretNumber = getSecretNumber();

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

function getSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
