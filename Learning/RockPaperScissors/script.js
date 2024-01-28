let userScore = 0;
let compScore = 0;

// const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // rock , paper, scissors
};

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerHTML = "Game was Draw. Play again."
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        //  console.log("You win!");
        msg.innerHTML = `You win! ${userChoice} beats ${compChoice}`;

    }
    else {
        compScore++;
        compScorePara.innerHTML = compScore;
        //  console.log("You lose");
        msg.innerHTML = `You lose ${compChoice} beats ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    //   console.log("user choice = ", userChoice);
    // Generate computer choice -> modular programming
    const compChoice = genCompChoice();
    // console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock ,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice)
        playGame(userChoice);
    });
})