//Computer play
const words = ["Rock" , "Paper" , "Scissors"]
function getComputeChoice(){
    return words[ Math.floor(Math.random()*words.length)]
}
const computerSelection = getComputeChoice()
console.log(computerSelection)