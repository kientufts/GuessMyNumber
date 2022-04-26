'use strict';

let secretNumber = getSecretNumber();

let gameScore = 20;

let highScore = 0;

function getSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function setMessage(aMessage) {
  document.querySelector('.message').textContent = aMessage;
}

function setBackGroundColor(aColorCode) {
  document.querySelector('body').style.backgroundColor = aColorCode;
}

function setNumberBoxWidth(aWidth) {
  document.querySelector('.number').style.width = aWidth;
}

function setNumberBoxContent(aContent) {
  document.querySelector('.number').textContent = aContent;
}

function setGameScore(aScore) {
  document.querySelector('.score').textContent = aScore;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no number entered
  if (!guess) {
    setMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    setMessage('Correct Number 😍');
    setBackGroundColor('#60b347');
    setNumberBoxWidth('30rem');
    setNumberBoxContent(secretNumber);

    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else {
    setMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
    gameScore--;
  }

  // Avoid score to be negative
  if (gameScore <= 0) {
    setMessage('💥 You lost the game!');
    gameScore = 0;
  }
  setGameScore(gameScore);

  // FIXME: Stop the game when score = 0
});

document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  secretNumber = getSecretNumber();

  setNumberBoxContent('?');
  document.querySelector('.guess').value = '';
  setMessage('Start guessing...');
  setGameScore(gameScore);
  setBackGroundColor('#222');
  setNumberBoxWidth('15rem');
});
