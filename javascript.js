//Computer play, generate random choice

let userScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const words = ["Rock", "Paper", "Scissors"];
    return words[Math.floor(Math.random()*words.length)];
}
 //User play

function playRound(playerSelection, computerSelection){
   
    if ((playerSelection === "rock") && (computerSelection === "Scissors")
        || (playerSelection === "scissors") && (computerSelection === "Paper")
        || (playerSelection === "paper") && (computerSelection === "Rock")){
            
            return `You won! \n${playerSelection} beats ${computerSelection}`
    }
    else if ((playerSelection === "scissors") && (computerSelection === "Rock")
    || (playerSelection === "paper") && (computerSelection === "Scissors") 
    || (playerSelection === "rock") && (computerSelection === "Paper")){
        
        return `You lose! \n${computerSelection} beats ${playerSelection}`
    }
    else{
        return "It`s a tie!"
    }
}

//Keep score and declare a winner after 5 rounds

function game(){
        let i = 0; 
        while(i < 5){
        playerSelection = prompt("Please choose rock, paper or scissors!");
        playerSelection = playerSelection.toLowerCase()
            if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
                alert("Please choose wisely");
            continue;
            }
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection);
        if (result.startsWith("You won")){
            userScore++;
        }
        else if(result.startsWith("You lose")){
            computerScore++;
        }
        console.log(result);
        i++;
    }
    
    if (userScore > computerScore){
        console.log( `You are the best, you won the competition! Your score is ${userScore} and the computer score is ${computerScore} `);
    }
    else if (userScore < computerScore){
        console.log (`Try again, unfortunately you lost the competition! Your score is ${userScore} and the computer score is ${computerScore} `);
    } 
    else{
        console.log(`It's a tie! Your score is ${userScore} and the computer score is ${computerScore}`)
    }  
}
game()