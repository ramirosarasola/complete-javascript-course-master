'use strict';

// Selecting Elements first
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// const name0El = document.getElementById('name--0');
// const name1El = document.getElementById('name--1');
// console.log(name0El.textContent, name1El.textContent);

// name0El.textContent = prompt('Player 1 name:');
// name1El.textContent = prompt('Player 2 name:');

const diceEl = document.querySelector('.dice');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');



// const restartGame = function(){
// }


//Rolling dice functionality
const switchPlayer = function(){
            // Reset currentScore
            currentScore = 0
            resetScore();
            // document.getElementById(`current--${activePlayer}`).textContent = currentScore = 0;

        // Switch to next player
        // Toggle function add or remove classes wether they already exists or not.
        activePlayer = activePlayer === 0 ? 1: 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

const resetScore = function(){
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
}

//btn Roll Functionality

btnRoll.addEventListener('click', function(){
    if (playing){
        //1. Generaing a random dice roll
        const dice = Math.trunc(Math.random()*6)+1;
    
        //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        //3. Check for rolled 1: if true, switch to next player
        if(dice !== 1){
            // Add to the current score
                currentScore += dice;
                resetScore();
                // document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            switchPlayer();
        }
    }
})

//Btn Hold Functionality

btnHold.addEventListener('click', function(){
    if (playing){
        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        console.log(scores)
    
        //2. Check if player's score is >= 100
        if (scores[activePlayer] >= 20){
            //Finish the game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

            // let winner = document.getElementById(`name--${activePlayer}`).textContent;
            // console.log(winner)
            // alert(`Congratulations! ${winner.toUpperCase()} wins the match!! 🏆🥇`);
    
        }
        // Switch player
        switchPlayer();
    }
})

//BTN NEW GAME
btnNew.addEventListener('click', function(){
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    playing= true;
    scores[0] = scores[0] - scores[0];
    scores[1] = scores[1] - scores[1];

    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden')
    player0El.classList.remove("player--winner");
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    name0El.textContent = 'PLAYER 1';
    name1El.textContent = 'PLAYER 2';

    name0El.textContent = prompt('Player 1 name:');
    name1El.textContent = prompt('Player 2 name:');

});

