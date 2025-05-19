function getComputerChoice(){
    let n = Math.random();
    if (n <= 0.33){
        return "rock";
    } else if (n <= 0.66){
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    let n1 = prompt("Write your what you want between rock, paper and scissors");
    let message = "your choice is $(n1)";
}

function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase() = gethumanChoice();
    computerChoice = getComputerChoice();
    if (computerChoice == "rock" && humanChoice == "rock"){
        console.log ("It's a draw! The score is",humanScore,"-",computerScore,".");
    } else if (computerChoice == "rock" && humanChoice == "paper"){
        console.log ("You win! The score is",humanScore,"-",computerScore,".");
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        console.log ("You lose! The score is",humanScore,"-",computerScore,".");
    } else if (computerChoice == "paper" && humanChoice == "rock"){
        console.log ("You lose! The score is",humanScore,"-",computerScore,".");
    } else if (computerChoice == "paper" && humanChoice == "paper"){
        console.log ("It's a draw! The score is",humanScore,"-",computerScore,".");
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        console.log ("You win! The score is",humanScore,"-",computerScore,".");
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        console.log ("You lose! The score is",humanScore,"-",computerScore,".");
    } else if (computerChoice == "scissors" && humanChoice == "paper"){
        console.log ("It's a draw! The score is",humanScore,"-",computerScore,".");
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        console.log ("You win! The score is",humanScore,"-",computerScore,".");
    }
}

function playGame(){
    for (let n = 0; n <= 5; n++){
        console.log(playRound());
    }
    if (humanScore > computerScore){
        console.log("You win!")
        return "You win!";
    } else if (humanScore == computerScore){
        console.log("It's a draw!");
        return "It's a draw!";
    } else if (humanScore < computerScore){
        console.log("You lose!")
        return "You lose!";
    }
}

console.log(playGame());