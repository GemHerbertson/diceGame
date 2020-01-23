// HTML declarations 


// const playerId = document.getElementById("playerId")
const playerScore = document.getElementById("playerScore");
const totalScore = document.getElementById("totalScore");
const diceImage = document.getElementById("diceImage");
const scoreMessage = document.getElementById("scoreMessage");
const rollButton = document.getElementById("roll");


// const resetButton = document.getElementById("reset");

diceImage.style.visibility = "hidden";

let numberRolled;
let pointScored = 0;
// let playerTurn = true;

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
        scoreMessage.textContent = "You Lose! Next player step up...";
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

// const activeplayer = () => {
//     if (playerTurn) {
//         playerId.textContent = "Player One"
//         playerTurn = false
//     } else 
//         playerId.textContent = "Player Two"
//         playerOneTurn = true
// }

rollButton.addEventListener("click", () => {
    diceRoll()
    playerScore.textContent = `You have rolled ${numberRolled}`
    totalScore.textContent = `Your score is ${pointScored += numberRolled}`
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`;
    winOrLose()
})

// diceRoll()
// cummulativeScore()
// winOrLose()
