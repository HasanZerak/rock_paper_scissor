// console.log("hello world");

function computerPlay(){
     let randomNumber;          // variable to store a random integer.
     randomNumber = Math.floor(Math.random()*3) + 1;            //assigning a random integer to variable randomNumber.
     
    //Adding condtitional statements to output either of the three outputs, by assigning a integer to either of the three.
    if(randomNumber === 1){
        console.log("ROCK");
    }
    else if(randomNumber === 2){
        console.log("PAPER");
    }
    else{
        console.log("SCISSOR");
    }
 }
computerPlay();