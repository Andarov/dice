// Variables
const elRetry = document.querySelector('#retry');
const elGetPoint = document.querySelector('#get-point');
const elGame = document.querySelector('#game');
const elRandom = document.querySelector('#random');
const elPlayerOne = document.querySelector('#player-0');
const elPlayerTwo = document.querySelector('#player-1');
const elPlayerOneTotal = document.querySelector('#scores-0');
const elPlayerTwoTotal = document.querySelector('#scores-1');
const elPlayerOneCurrent = document.querySelector('#current-0');
const elPlayerTwoCurrent = document.querySelector('#current-1');

let scores, currentOne, activePlayer, play;

const refresh = function() {
    scores = [0, 0]
    currentOne = 0;
    activePlayer = 0;
    play = true;
    elRandom.textContent = 0;
    elPlayerOneTotal.textContent = 0;
    elPlayerTwoTotal.textContent = 0;
    elPlayerOneCurrent.textContent = 0;
    elPlayerTwoCurrent.textContent = 0;
    elPlayerOne.classList.remove('winner')
    elPlayerOne.classList.add('active')
    elPlayerTwo.classList.remove('winner')
    elPlayerTwo.classList.add('player-two')
}

refresh();

// Switch funksiyasi
const switchPlayer = function() {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentOne = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    console.log(elPlayerOne.classList.toggle('active'));
    elPlayerTwo.classList.toggle('active');
}

// Create random number
elGame.addEventListener('click', function() {
    if(play){
        let random = Math.trunc(Math.random() *6)+1;
        elRandom.textContent = random;
        if(random != 1) {
            currentOne += random;
            document.getElementById(`current-${activePlayer}`).textContent = currentOne;
        }else {
            switchPlayer()
        }
    }
})

// Ballni olish
elGetPoint.addEventListener('click', function() {
    if(play) {
        // Scoresni totalini ozgartirish
        scores[activePlayer] += currentOne;
        document.getElementById(`scores-${activePlayer}`).textContent = scores[activePlayer];
    
        if(scores[activePlayer] >= 30) {
            play = false;
            document.getElementById(`scores-${activePlayer}`).textContent = 'Player win';
            document.getElementById(`player-${activePlayer}`).classList.add('winner');
            elRandom.textContent = ''
        }else {
            elRandom.textContent = 0;
            switchPlayer();
        }
    }
})

// Ynagilash
elRetry.addEventListener('click', refresh)