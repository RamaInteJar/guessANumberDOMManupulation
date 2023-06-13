'use strict';
const secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;

const conveyMessage = (message)=>{
  document.querySelector('.message').textContent =message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When no input applied
  if (!guess) {
     conveyMessage('⛔️No number');
  //When player wins
  } else if (guess === secretNum) {
    conveyMessage('🎉Its match!!');
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').style.width = '30rem';


} else if (guess !== secretNum){
  //use tenary operator
  if (score > 1) {
    // document.querySelector('.message').textContent = guess > secretNum ? 'Too high!': 'Too low';
    conveyMessage(guess > secretNum ? 'Too high!': 'Too low')
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    // document.querySelector('.message').textContent = 'You lost the game!';
    conveyMessage('You lost the game!')
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '9rem';
  }
  

// }else if (guess > secretNum) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You have lost the game!';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
//   } else if (guess < secretNum) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You have lost the game!';
//       document.querySelector('.score').textContent = 0;
//       
//     }
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
