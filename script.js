'use strict';
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// const numberInput = document.querySelector('.guess').value = 23;
// console.log(numberInput.value);
const secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When no input applied
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️No number';
  //When player wins
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎉Its match!!';
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You have lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You have lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '9rem';
    }
  } 
  }
);

document.querySelector('.again').addEventListener('click', function(){
document.querySelector('.number').textContent = ' ? '
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = '';
document.querySelector('.highscore').textContent = 0;
document.querySelector('body').style.backgroundColor='#222'
})
