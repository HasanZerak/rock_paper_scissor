let scissor = "SCISSOR";            //creating variables to hold the string values of rock paper and scissor so that they can be used later in the code.
let paper = "PAPER";
let rock = "ROCK";
let computerSelection;          //variable to hold computer selection.

function computerPlay(){
     let randomNumber;          // variable to store a random integer.
     randomNumber = Math.floor(Math.random()*3) + 1;            //assigning a random integer to variable randomNumber.
     
    //Adding condtitional statements to output/return either of the three outputs, by assigning a integer to either of the three.
    if(randomNumber === 1){
        computerSelection = rock;
        return computerSelection;
    }
    else if(randomNumber === 2){
        computerSelection = paper;
        return computerSelection;
    }
    else{
        computerSelection = scissor;
        return computerSelection;
    }
 }

 function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();            //converting the user output to upper case everytime to make the function case insensitve. 
    
    // Adding conditional statements to play a single game
    if(playerSelection === computerSelection){          //returning a draw statement if both the selection are same.
        return "It's a DRAW.";
    }
    else{
        if(playerSelection === rock){           //if plater selects rock, conditionals to check if they win or not 
            if(computerSelection === paper){    //by comparng user selection with computer selection.
                if(computerSelection === paper){ 
                return "You Lose.";
            }
            else{
                return "You Win";
            }
        }    
    }
        if(playerSelection === paper){              //""
            if(computerSelection === scissor){
                return "You Lose.";
            }
            else{
                return "You win";
            }
        } 
        if(playerSelection === scissor){            //""
            if(computerSelection === rock){
                return "You Lose.";
            }
            else{
                return "You Win";
            }
        }
    }
    
 }

computerSelection = computerPlay();         //getting a computer generated random output.
let playerSelection = prompt("Throw your hand.");           //asking the user to make a choice.
console.log(playRound(playerSelection, computerSelection));