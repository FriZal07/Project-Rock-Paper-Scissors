let humanScore = 0;
let computerScore = 0;
let timehandled = 1;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let humscoretitle = document.querySelector(".human .resultMarks");
let comscoretitle = document.querySelector(".computer .resultMarks");
let text = document.querySelector(".text");

rock.addEventListener("click",function(){playGames("rock"); timehandled++});
paper.addEventListener("click",function(){playGames("paper"); timehandled++});
scissor.addEventListener("click",function(){playGames("scissor"); timehandled++});



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


function playGames(word){
    playRouund(word);

    humscoretitle.textContent = humanScore;
    comscoretitle.textContent = computerScore;

    if (timehandled % 5 == 0){
        humanScore = 0;
        computerScore= 0;
    }
}

function playRouund(word) {

    let computer = getComputerChoice();
    let human = word;

    if (computer == human){
            text.textContent = "You got a Draw";
        }
    else if (computer == "rock"){
            if (human == "scissor"){
                text.textContent = "You lose! Rock beats Scissor";
                computerScore++
            }
            else{
                text.textContent = "You win! Paper beats Rock";
                humanScore++
            }
        }
    else if (computer == "scissor"){
            if (human == "paper"){
                text.textContent = "You lose! Scissor beats Paper";
                computerScore++
            }
            else{
                text.textContent = "You win! Rock beats Scissor";
                humanScore++
            }
        }
    else if (computer == "paper"){
            if (human == "rock"){
                text.textContent = "You lose! Paper beats Rock";
                computerScore++
            }
            else{
                text.textContent = "You win! Scissor beats Paper";
                humanScore++
            }
        }

    if (timehandled % 5 == 0 && timehandled != 1){
        let res = "";

        if (humanScore<computerScore){
            res = "Computer won!"}
            else {res = "Human won!"};
    
            text.textContent = res;
        }
}

function playGame(){
    for(let i = 1;i <= 5; i++ ){
        playRouund();
    }
}
