'use strict';

// ! We capture all our elements

const guess = document.querySelector(".guess")
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

// We create our random secret number

let secretNumber = Math.floor((Math.random() * 20) + 1);
console.log(secretNumber);

function displayMessage(display) {
    message.textContent = display;
}

let a = Number(score.textContent)
let b = Number(highscore.textContent)

check.addEventListener('click', function () {

    if (Number(guess.value) === secretNumber) {
        displayMessage('Congratulations!');
        body.style.backgroundColor = "green";
        number.textContent = secretNumber;

        if(Number(score.textContent) > Number(highscore.textContent)){
            highscore.textContent = score.textContent 
        }

    } else if (Number(guess.value) <= 0 || Number(guess.value) > 20) {
        displayMessage("🚫 Not a Valid Number!");
    } else if (Number(guess.value) > secretNumber) {
        displayMessage('Too High');
        score.textContent = Number(score.textContent - 1);
    } else {
        displayMessage('Too Low');
        score.textContent = Number(score.textContent - 1);
    }    

})

again.addEventListener('click', function(){
    guess.value = 0;
    score.textContent = 20;
    body.style.backgroundColor = '#222';
    message.textContent = 'Start guessing...'
    number.textContent = '?';
    secretNumber = Math.floor((Math.random() * 20) + 1)
    console.log(secretNumber);

})




















































// let newSecretNumber = () => Math.trunc(Math.random()*20 +1);
// let displayMessage = (str) => document.querySelector('.message').textContent = str;
// let displayNumber = (num) => document.querySelector('.number').textContent = num;

// let secretNumber = newSecretNumber();
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess);

//             //When Player does not input a number
//     if(!guess){
//         // document.querySelector('.message').textContent = `🚫 No number!`
//         displayMessage(`🚫 No number!`);

//     }else if (guess === secretNumber){
//             //When Player wins
//         const numberDOM = document.querySelector('.number').textContent = secretNumber;
//         console.log(numberDOM);
//         displayMessage(`🏆 Correct Number!`);
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';
//         //Highscore Added
//         if (score > highscore){
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }
//     }    
//         //When the player is wrong
//      else if (guess !== secretNumber){
//          score--;
//         document.querySelector('.score').textContent = score;
//         if (score > 0){
//             displayMessage(guess > secretNumber ? `☝️ Too high :(` : `👇 Too low!`);
//         }else{
//             displayMessage( `😭 You Lose the game :(`);
//             document.querySelector('.score').textContent = 0;
//         }
//      }
// });

// document.querySelector('.check').addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess);
// })

// document.querySelector('.again').addEventListener('click', function(){
//     document.querySelector('.score').textContent = score = 20;
//     secretNumber = newSecretNumber();
//     displayNumber(`?`);
//     displayMessage(`Start Guessing...`);
//     document.querySelector('.guess').value ='';
//     document.querySelector('body').style.backgroundColor= '#222';
//     document.querySelector('.number').style.width='15rem';
// })






