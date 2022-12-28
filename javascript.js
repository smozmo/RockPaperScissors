//Computer play
const words = ["Rock" , "Paper" , "Scissors"]
function getComputeChoice(){
    return words[ Math.floor(Math.random()*words.length)]
}
const computerSelection = getComputeChoice()
//Game rules
playerSelection = prompt("Please choose between \nRock , Paper or Scissors")
playerSelection = playerSelection.toLowerCase() 

function playRound(playerSelection, computerSelection){
    
    if((computerSelection === "Paper") && (playerSelection === "rock")){
        return ("You lose! \nPaper beats Rock")
    }
    else if((computerSelection ==="Scissors") && (playerSelection === "rock")){
        alert("You won! \nRock beats Scissors")
        console.log(playerWon)
        playerScore += 1
    }
    else if((computerSelection === "Rock") && (playerSelection === "scissors")){
        alert("You lose! \nRock beats Scissors")
    }
    else if((computerSelection === "Paper") && (playerSelection === "scissors")){
        alert("You won! \nScissors beats Paper")
        console.log(playerWon)
    }
    else if ((computerSelection === "Rock") && (playerSelection === "paper")){
        alert("You won! \nPaper beats Rock")
        console.log(playerWon)
    }
    else if((computerSelection === "Scissors") && (playerSelection === "paper")){
        alert("You lose! \nScissors beats Paper")
    }
    else if((computerSelection === "Rock") && (playerSelection === "rock")){
        alert(draw)
    }
    else if((computerSelection === "Scissors") && (playerSelection === "scissors")){
        alert(draw)
    }
    else if((computerSelection === "Paper") && (playerSelection === "paper")){
        alert(draw)
   } 
 }
//Keeps score and declare winner/looser after 5 rounds
function game(){
    if (playerScore > 3){
        alert("WOn")
    }else{
        alert("Lost")
    }
}
let playerWon = ("Won!")
let playerScore = 0
let computerScore = 0
let draw = "It`s a tie!"
let round = playRound(playerSelection, computerSelection)
for (let i = 0; i<5; i++){
    i= playerScore
    if(playerWon >3 ){
        alert("cas")}
    
}

