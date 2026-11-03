
"use strict";

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

console.log(score);
announce();
startGame();

function startGame() {
    console.log(status);
}

const arrowGame = () => {
    console.log("Arrow game started");
};

arrowGame();