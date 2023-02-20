let computerChoice;
let result;
let playerChoice = prompt("Rock, paper or scissor?")
playerChoice = playerChoice.toLowerCase();
let playerCounter = 0;
let computerCounter =0;

function getComputerChoice (){
    const randomNumber = Math.floor(Math.random()*3 +1);
    if (randomNumber === 1){
        return computerChoice = "rock";
    }
    else if (randomNumber === 2){
        return computerChoice = "scissor";
    }
    else if (randomNumber === 3){
        return computerChoice = "paper";
    }
}

function gameRound (playerChoice, computerChoice){
    if (playerChoice == "rock" && computerChoice == "rock"){
        result ="You draw!";
    }
    else if (playerChoice =="rock" && computerChoice == "scissor"){
        result = "You win!";
    }
    else if (playerChoice == "rock" && computerChoice=="paper"){
        result ="You lose!";
    }
    else if (playerChoice == "paper" && computerChoice =="scissor"){
        result ="You lose!";
    }
    else if (playerChoice =="paper" && computerChoice == "rock"){
        result = "You win!";
    }
    else if (playerChoice == "scissor" && computerChoice == "rock"){
        result = "You Lose!";
    }
    else if (playerChoice == "scissor" && computerChoice == "paper"){
        result = "You Win!"
    }
    return result;
}

getComputerChoice();
gameRound();
console.log(computerChoice);
console.log(result);