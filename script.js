// HTML declarations 

const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("playerScore");
const totalScore = document.getElementById("totalScore");
const diceImage = document.getElementById("diceImage");
const scoreMessage = document.getElementById("scoreMessage");
// const resetButton = document.getElementById("reset");

diceImage.style.visibility = "hidden";

let numberRolled;
let pointScored = 0;

// Function declarations

const diceRoll = () => {
    numberRolled=(Math.ceil(Math.random() * 6));
    // console.log(`You've rolled ${numberRolled}`);
}

const cummulativeScore = () => {
    diceRoll()
    pointScored += numberRolled;
    // console.log(`Your score is ${pointScored}`);
}

const winOrLose = () => {
    // cummulativeScore()
    if (numberRolled == 1) {
        scoreMessage.textContent = "You Lose!";
        rollButton.textContent = "Play again";
        pointScored = 0;
    } else if (pointScored >= 20) {
        scoreMessage.textContent = "You Win!";
        rollButton.textContent = "Play again";
        pointScored = 0;
    } else {
        scoreMessage.textContent = "Roll again...";
        rollButton.textContent = "Roll";
    }
}

rollButton.addEventListener("click", () => {
    diceRoll()
    playerScore.textContent = numberRolled
    totalScore.textContent = pointScored += numberRolled
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`;
    winOrLose()
})

// resetButton.addEventListener("click", () => {
//     if 
// })

// diceRoll()
// cummulativeScore()
// winOrLose()
