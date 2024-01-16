const rock = document.getElementById("rock_btn");
const paper = document.getElementById("paper_btn");
const scissors = document.getElementById("scissors_btn");
let playerResult = document.getElementById("player-result");
let computerResult = document.getElementById("computer-result");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let display = document.getElementById("display-result");
let buttons = document.querySelectorAll(".buttons");
let p_Score = 0;
let c_Score = 0;
let playerChoice;
let computerChoice;
// console.log(buttons);



buttons.forEach(button =>{
    button.addEventListener("click", event => {
        const array = ["Rock", "Paper", "Scissors"];
        computerResult.textContent = "Computer: ";
        computerChoice = array[Math.floor(Math.random()*3)];
        computerResult.textContent += computerChoice;

        // if(computerChoice === playerChoice){
            // display.style.display = "block";
        //     display.textContent = "It's a TIE!"
        //     display.style.color = "black";
        // }
    });
});

rock.addEventListener("click", event => {
    playerChoice = "Rock";
    playerResult.textContent = "Player: ";
    playerResult.textContent += playerChoice;

    switch(computerChoice){
        case("Paper"):
            c_Score += 1;
            computerScore.textContent = c_Score;
            display.style.display = "block";
            display.textContent = "YOU LOSE!"
            display.style.color = "red";
            break;
        case("Scissors"):
            p_Score += 1;
            playerScore.textContent = p_Score;
            display.style.display = "block";
            display.textContent = "YOU WIN!"
            display.style.color = "green";
            break;
        case("Rock"):
            display.style.display = "block";
            display.textContent = "It's a TIE!"
            display.style.color = "black";
            break;
    }
});
paper.addEventListener("click", event => {
    playerChoice = "Paper";
    playerResult.textContent = "Player: ";
    playerResult.textContent += playerChoice;

    switch(computerChoice){
        case("Paper"):
            display.style.display = "block";
            display.textContent = "It's a TIE!"
            display.style.color = "black";
            break;
        case("Scissors"):
            c_Score += 1;
            computerScore.textContent = c_Score;
            display.style.display = "block";
            display.textContent = "YOU LOSE!"
            display.style.color = "red";
            break;
        case("Rock"):
            p_Score += 1;
            playerScore.textContent = p_Score;
            display.style.display = "block";
            display.textContent = "YOU WIN!"
            display.style.color = "green";
            break;
    }
});
scissors.addEventListener("click", event => {
    playerChoice = "Scissors"
    playerResult.textContent = "Player: ";
    playerResult.textContent += playerChoice;

    switch(computerChoice){
        case("Paper"):
            p_Score += 1;
            playerScore.textContent = p_Score;
            display.style.display = "block";
            display.textContent = "YOU WIN!"
            display.style.color = "green";
            break;
        case("Scissors"):
            display.style.display = "block";
            display.textContent = "It's a TIE!"
            display.style.color = "black";
            break;
        case("Rock"):
            c_Score += 1;
            computerScore.textContent = c_Score;
            display.style.display = "block";
            display.textContent = "YOU LOSE!"
            display.style.color = "red";
            break;
    }
});