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
        console.log ("It's a draw!");
    } else if (computerChoice == "rock" && humanChoice == "paper"){
        console.log ("You win!");
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        console.log ("You lose!");
    } else if (computerChoice == "paper" && humanChoice == "rock"){
        console.log ("You lose!");
    } else if (computerChoice == "paper" && humanChoice == "paper"){
        console.log ("It's a draw!");
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        console.log ("You win!");
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        console.log ("You lose!");
    } else if (computerChoice == "scissors" && humanChoice == "paper"){
        console.log ("It's a draw!");
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        console.log ("You win!");
    }
}

function playGame(){
    for (let n = 0; n <= 5; n++){

    }
}