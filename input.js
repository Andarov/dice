// Variables
const elRetry = document.querySelector('#retry');
const elGetPoint = document.querySelector('#get-point');
const elGame = document.querySelector('#game');
const elRandom = document.querySelector('#random');
const elPlayerOne = document.querySelector('#player-0');
const elPlayerTwo = document.querySelector('#player-1');
const elPlayerOneTotal = document.querySelector('#player-one-total');
const elPlayerTwoTotal = document.querySelector('#player-two-total');
const elPlayerOneCurrent = document.querySelector('#current-0');
const elPlayerTwoCurrent = document.querySelector('#current-1');

// Current numbers
let currentOne = 0;
let activePlayer = 0;
// const currentTwo = Number(elPlayerTwoCurrent);

// Create random number
elGame.addEventListener('click', function() {
    let random = Math.trunc(Math.random() *6)+1;
    elRandom.textContent = random;
    if(random != 1) {
        currentOne += random;
        document.getElementById(`current-${activePlayer}`).textContent = currentOne;
    }else {
        document.getElementById(`current-${activePlayer}`).textContent = 0;
        currentOne = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        elPlayerOne.classList.toggle('bg-red-300');
        elPlayerTwo.classList.toggle('bg-red-200');
    }
})