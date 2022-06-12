'use strict';

let newSecretNumber = () => Math.trunc(Math.random()*20 +1);
let displayMessage = (str) => document.querySelector('.message').textContent = str;
let displayNumber = (num) => document.querySelector('.number').textContent = num;

let secretNumber = newSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

            //When Player does not input a number
    if(!guess){
        // document.querySelector('.message').textContent = `🚫 No number!`
        displayMessage(`🚫 No number!`);

    }else if (guess === secretNumber){
            //When Player wins
        const numberDOM = document.querySelector('.number').textContent = secretNumber;
        console.log(numberDOM);
        displayMessage(`🏆 Correct Number!`);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        //Highscore Added
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }    
        //When the player is wrong
     else if (guess !== secretNumber){
         score--;
        document.querySelector('.score').textContent = score;
        if (score > 0){
            displayMessage(guess > secretNumber ? `☝️ Too high :(` : `👇 Too low!`);
        }else{
            displayMessage( `😭 You Lose the game :(`);
            document.querySelector('.score').textContent = 0;
        }
     }
});

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
})

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = score = 20;
    secretNumber = newSecretNumber();
    displayNumber(`?`);
    displayMessage(`Start Guessing...`);
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.number').style.width='15rem';
})






