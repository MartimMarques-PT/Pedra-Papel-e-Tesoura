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
        return "It's a draw!";
    } else if (computerChoice == "rock" && humanChoice == "paper"){
        return "You win!";
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        return "You lose!";
    } else if (computerChoice == "paper" && humanChoice == "rock"){
        return "You lose!";
    } else if (computerChoice == "paper" && humanChoice == "paper"){
        return "It's a draw!";
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        return "You win!";
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        return "You lose!";
    } else if (computerChoice == "scissors" && humanChoice == "paper"){
        return "It's a draw!";
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        return "You win!";
    }
}

function playGame(){
    
}