// Rock, paper, scissors
let userChoice;
let computerChoice;
let comparisonResult = "string";
let playerScore = 0;
let computerScore =0;



//function to collect the users input
function userInput(userChoice){
    userChoice = prompt("Choose rock, paper or scissors!");
    return userChoice.toLowerCase();
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


//function to compare the results
function compareResults(){
    if (userChoice == "rock" && computerChoice == "rock"){
        return comparisonResult = "It's a draw! You both picked the same option!";
    } 
    else if (userChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        return comparisonResult = "You lose! You chose rock, the computer chose paper!";
    } 
    else if (userChoice == "rock" && computerChoice == "scissors"){
        playerScore += 1;
        return comparisonResult = "You win! You chose rock, the computer chose scissors!";
    } 
    else if (userChoice == "paper" && computerChoice == "paper"){
        return comparisonResult = "It's a draw! You both picked the same option!";
    }
    else if (userChoice == "paper" && computerChoice == "rock"){
        playerScore += 1;
        return comparisonResult = "You win! You chose paper, the computer chose rock!";
    } 
    else if (userChoice == "paper" && computerChoice == "scissors"){
        computerScore += 1;
        return comparisonResult = "You lose! You chose paper, the computer chose Scissors!";
    } 
    else if (userChoice == "scissors" && computerChoice == "scissors"){
        return comparisonResult = "It's a draw! You both picked the same option!";
    }
    else if (userChoice == "scissors" && computerChoice == "paper"){
        playerScore += 1;
        return comparisonResult = "You win! You chose scissors, the computer chose paper!";
    } 
    else if (userChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        return comparisonResult = "You lose! You chose scissors, the computer chose rock!";
    }
}
//Game function
function game(){
    userChoice = userInput();
    computerChoice = computerInput();
    comparisonResult = (compareResults());
    console.log(comparisonResult);
}


//Run the game when page loads
while (playerScore <5 && computerScore <5){
    game();
}