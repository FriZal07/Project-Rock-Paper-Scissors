let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let x = Math.floor(Math.random()*3)
    
    if (x==0)
        {
            return "rock";
        }
    else if (x==1)
        {
            return "paper";
        }
    else if (x==2)
        {
            return "scissor";
        }
    else{
    }

};

function getHumanChoice(){
    return prompt("rock, paper or scissor?").toLowerCase();
}

function playRouund() {
    let computer = getComputerChoice();
    let human = getHumanChoice();

    if (computer == human){
            console.log("Draw")
            return;
        }
    else if (computer == "rock"){
            if (human == "scissor"){
                console.log("You lose! Rock beats Scissor")
                computerScore++
            }
            else{
                console.log("You win! Paper beats Rock")
                humanScore++
            }
        }
    else if (computer == "scissor"){
            if (human == "paper"){
                console.log("You lose! Scissor beats Paper")
                computerScore++
            }
            else{
                console.log("You win! Rock beats Scissor")
                humanScore++
            }
        }
    else if (computer == "paper"){
            if (human == "rock"){
                console.log("You lose! Paper beats Rock")
                computerScore++
            }
            else{
                console.log("You win! Scissor beats Paper")
                humanScore++
            }
        }

}

function playGame(){
    for(let i = 1;i <= 5; i++ ){
        playRouund();
    }
}

playGame();
if (humanScore < computerScore){
        console.log("Computer won!")
    }
else{
    console.log("Human Won!")
}