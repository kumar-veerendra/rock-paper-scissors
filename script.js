const buttons = document.querySelectorAll("button");
const resultEle = document.getElementById("result");
const playerScoreEle = document.getElementById("user-score");
const computerScoreEle = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) =>{
    button.addEventListener("click", ()=>{
        // console.log("User choice : ", button.id);
        const result = playRound(button.id, computerPlay());
        // console.log(result);
        resultEle.textContent = result;
    });
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "it is a Tie !."
    }
    else if( (playerSelection ==="rock" && computerSelection ==="scissors") ||
             (playerSelection ==="paper" && computerSelection ==="rock") ||
             (playerSelection ==="scissors" && computerSelection ==="paper"))
             {
                playerScore++;
                playerScoreEle.textContent = playerScore;
                return " You win! " + playerSelection + " beats " + computerSelection ;
             }
    else{
            computerScore++;
            computerScoreEle.textContent = computerScore;
            return " You lose! " + computerSelection + " beats " + playerSelection ;
    }
}