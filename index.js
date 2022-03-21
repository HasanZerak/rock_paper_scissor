let scissor = "SCISSOR";            //creating variables to hold the string values of rock paper and scissor so that they can be used later in the code.
let paper = "PAPER";
let rock = "ROCK";
let computerSelection;          //variable to hold computer selection.

function computerPlay() {
    let randomNumber;          // variable to store a random integer.
    randomNumber = Math.floor(Math.random() * 3) + 1;            //assigning a random integer to variable randomNumber.

    //Adding condtitional statements to output/return either of the three outputs, by assigning a integer to either of the three.
    if (randomNumber === 1) {
        computerSelection = rock;
        return computerSelection;
    }
    else if (randomNumber === 2) {
        computerSelection = paper;
        return computerSelection;
    }
    else if (randomNumber === 3) {
        computerSelection = scissor;
        return computerSelection;
    }                               // change
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();            //converting the user output to upper case everytime to make the function case insensitve. 

    // Adding conditional statements to play a single game
    if (playerSelection === computerSelection) {          //returning a draw statement if both the selection are same.
        display.textContent = "It's a DRAW.";
    }
    else {
        if (playerSelection === rock) {           //if plater selects rock, conditionals to check if they win or not 
            if (computerSelection === paper) {    //by comparng user selection with computer selection.
                display.textContent = "You Lost this round.";
                them += 1;
            }
            else if (computerSelection === scissor) {
                display.textContent = "You Won this round.";
                us += 1;
            }
        }
        if (playerSelection === paper) {              //""
            if (computerSelection === scissor) {
                display.textContent = "You Lost this round";
                them += 1;
            }
            else if (computerSelection === rock) {
                display.textContent = "You Won this round. ";
                us += 1;
            }
        }
        if (playerSelection === scissor) {            //""
            if (computerSelection === rock) {
                display.textContent = "You Lost this round.";
                them += 1;
            }
            else if (computerSelection === paper) {
                display.textContent = "You Won this round.";
                us += 1;
            }
        }
    }
    singleResult.textContent = `Computer : ${them}       You : ${us}`;

}

function game() {
    if (them === 5) {
        finalGame.textContent = "You lost, Computer Won.";
        return true;
    }
    else if (us === 5) {
        finalGame.textContent = "You Won, Congratulations!!";
        return true;
    }
    else {
        finalGame.textContent = " ";
        return false;
    }

}

let options = document.querySelectorAll(".options");
let show = document.querySelector(".show");
let display = document.createElement('div');
let singleResult = document.createElement('div');
let finalGame = document.createElement('div');

let us = 0;         //declaring two variables to record scores.
let them = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        let playerSelection = this.textContent;
        playRound(playerSelection, computerPlay());


        show.appendChild(display);
        display.appendChild(singleResult);
        singleResult.appendChild(finalGame);
        if (game()) {
            them = 0;
            us = 0;

        }
    });
});