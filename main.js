const compscores = document.getElementById("computerscores-display");
const playerscores = document.getElementById("playerscores-display");
const results = document.getElementById("result-details");
const changerock = document.getElementById("rock")
const changescissors = document.getElementById("scissors")
const changepaper = document.getElementsByClassName("paper-emoji")
const Choices = ["rock", "paper", "scissors"];

// let the scores start at 0
let computerscores = 0;
let playerscore = 0;
let typeofemoji = ""

// // function that allows one player to play the game
// // give the choices indexed 0-rock 1-paper 2-scissors
function playgame(playerchoice) {
    const computerchoice = Choices[Math.floor(Math.random()*3)];
    

    console.log(computerchoice)
    // If the computer chooses Rock and the player chooses Scissors, the computer wins and scores 1 point.
    // If the computer chooses Scissors and the player chooses Paper, the computer wins and scores 1 point.
    // If the computer chooses Paper and the player chooses Rock, the computer wins and scores 1 point.    
    let result = ""
   
    if (playerchoice === computerchoice) {
        result = "DRAW"   
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice === "scissors") ? "PLAYER WINS": "COMPUTER WINS"
                typeofemoji = changerock
                break
            case "paper":
                result = (computerchoice === "rock") ? "PLAYER WINS": "COMPUTER WINS"
                typeofemoji = changescissors
                break
            case "scissors":
                result = (computerchoice === "paper") ? "PLAYER WINS": "COMPUTER WINS"
                typeofemoji = changepaper
                break            
        }
    }
    results.textContent = result;
    
    switch(result){
        case "PLAYER WINS":
            playerscore ++;
            playerscores.textContent = playerscore
            break;  
        case "COMPUTER WINS":
            computerscores ++;
            compscores.textContent = computerscores
            break; 
    } 

    
}  


    
