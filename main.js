const compscores = document.getElementById("computerscores-display");
const playerscores = document.getElementById("playerscores-display");
const results = document.getElementById("result-details");
const Choices = ["rock", "paper", "scissors"];
const emojireplacer = document.getElementById("scissors");
const emojireplacer2 = document.getElementById("rock");

// let the scores start at 0
let computerscores = 0;
let playerscore = 0;



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
               
                break
            case "paper":
                result = (computerchoice === "rock") ? "PLAYER WINS": "COMPUTER WINS"
                
                break
            case "scissors":
                result = (computerchoice === "paper") ? "PLAYER WINS": "COMPUTER WINS"
                
                break            
        }
    }
    // display results accordingly
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

    // replacing emojis with what the computer chooses
    let computeremoji = ""

    if (computerchoice === "rock") {
        computeremoji=("✊" )  
    }
    else if(computerchoice === "paper"){
        computeremoji=("✋")        
        }
    else{
         computeremoji = ("✌️")
    }
    emojireplacer.textContent = computeremoji


    //replacing emoji with what the player chooses 
    let playeremoji = ""

    if (playerchoice === "rock") {
        playeremoji=("✊" )  
    }
    else if(playerchoice === "paper"){
        playeremoji=("✋")        
        }
    else{
         playeremoji = ("✌️")
    }
    emojireplacer2.textContent = playeremoji
  
} 



    
   


    
