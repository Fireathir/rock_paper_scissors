// Rock, paper, scissors
let userChoice;
let computerChoice;

//function to collect the users input
function userInput(userchoice){
    userChoice = prompt("Choose rock, paper or scissors!");
    return userChoice;
}

//random generator for computer choice
function randomNumber(number){
    return Math.floor(Math.random() * number);
}
    
//funtion to generat the computers choice with the random number generator as base
function computerInput(computerChoice){
    let x = randomNumber(2);
    if (x == 0){
        return computerChoice = "rock";
    }
    else if (x == 1){
        return computerChoice = "paper";
    }
    else if (x == 2){
        return computerChoice = "scissors";
    }
}


// function to run the game

console.log(userInput());
console.log(randomNumber(3));
console.log(computerInput());
console.log(userChoice);