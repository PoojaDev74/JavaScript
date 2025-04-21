let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * choices.length);
    return options[ranIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "rgb(6, 6, 35)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        return 'win';
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        return 'lose';
    }
    if (userScore === 15) {
        setTimeout(() => {
            winScreen.style.display = "flex";
        }, 900);    
      }
}

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        // Draw Game
        //drawGame();
        return 'tie up';
    } else {
        let userWin = true;
        if(userChoice === "stone") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;      
        } else if(userChoice === "paper") {
            // stone, scissors
            userWin = compChoice === "scissors" ? false : true; 
        } else {
            // stone, paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Rules popup
rulesBtn.addEventListener("click", () => {
    rulesPopup.classList.remove("hidden");
});
closeRulesBtn.addEventListener("click", () => {
    rulesPopup.classList.add("hidden");
});

const restartGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = "Choose your move!";
    msg.style.backgroundColor = "#738678";
    winScreen.style.display = "none";
  };