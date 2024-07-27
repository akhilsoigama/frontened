let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let drawGame = () => {
    msg.innerHTML = "Game was Draw, play again"
    msg.style.background = "#081b31"
}
let showWinner = (userWin,compChoice,userChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You lose ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    };
}
const genCompChoice = () => {
    let options = ["rock","papper","scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice",compChoice);

    if(userChoice === compChoice){
       drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors,papper
            userWin = compChoice === "papper" ? false : true;
        }else if(userWin === "papper"){
            // scissors,rock
            userWin = compChoice === "scissors" ? false : true;
        }else {
            // papper,rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});