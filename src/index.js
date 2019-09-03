import { levels } from './config.json';
import KeyEval from './keyEvaluater.js';

const canvas = document.getElementById("entry");
const ctx = canvas.getContext("2d");

let currentLevel = levels[0];
let currentIndex = 0;
let playerScore = 0;

function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Words Typed: " + playerScore, 10, 50);

    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText(currentLevel.substring(currentIndex, currentLevel.length), 10, 100);
}

function onKeyPress(event) {
    KeyEval(event, currentLevel[currentIndex], onInputMatches, onInputDoesNotMatch);
}

function onInputMatches(input) {
    currentIndex++;
    if (input == " ") {
        playerScore++;
    }
    if(currentIndex == currentLevel.length){
        playerScore++;
        currentIndex = 0;
    }
    draw();
}

function onInputDoesNotMatch(input) {
    currentIndex = 0;
    playerScore = 0;
    draw();
}

function beginListening() {
    document.addEventListener('keydown', onKeyPress);
    document.addEventListener("resize", draw);
}

function init() {
    draw();
    beginListening();
}

init();

