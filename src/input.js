// Variables
const elRetry = document.querySelector('#retry');
const elGetPoint = document.querySelector('#get-point');
const elGame = document.querySelector('#game');
const elRandom = document.querySelector('#random');
const elPlayerOne = document.querySelector('#player-one');
const elPlayerTwo = document.querySelector('#player-two');
const elPlayerOneTotal = document.querySelector('#player-one-total');
const elPlayerTwoTotal = document.querySelector('#player-two-total');
const elPlayerOneCurrent = document.querySelector('#player-one-current');
const elPlayerTwoCurrent = document.querySelector('#player-two-current');

// Current numbers
// const currentOne = Number(elPlayerOneCurrent);
// const currentTwo = Number(elPlayerTwoCurrent);

// Create random number
let random = Math.trunc(Math.random() *6)+1;