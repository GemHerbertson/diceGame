// HTML declarations 

const playerScore = document.getElementById("playerScore");
const totalScore = document.getElementById("totalScore");
const diceImage = document.getElementById("diceImage");
const scoreMessage = document.getElementById("scoreMessage");
const rollButton = document.getElementById("roll");

diceImage.style.visibility = "hidden";

// JS Variables

let numberRolled;
let pointScored = 0;
let playerOneTurn = true;
let playerTwoTurn = false;



const diceRoll = () => {
    numberRolled=(Math.ceil(Math.random() * 6));
}

const playerOneScore = () => {
    diceRoll()
    pointScored += numberRolled;
}

const playerTwoScore = () => {
    diceRoll()
    pointScored += numberRolled;
}

const activePlayer = () => {
    if (playerOneTurn) {
        console.log("Player Two Turn")
        playerOneTurn = false
    } else {
        playerOneTurn = true
        console.log("Player One Turn")
    }
}

// Function declarations

const winOrLose = () => {
    if (numberRolled == 1) {
        scoreMessage.textContent = "You Lose! Next player step up...";
        rollButton.textContent = "Play again";
        pointScored = 0;
    } else if (pointScored >= 21) {
        scoreMessage.textContent = "You Win!";
        rollButton.textContent = "Play again";
        pointScored = 0;
    } else {
        scoreMessage.textContent = "Roll again...";
        rollButton.textContent = "Roll";
    }
}

// Event listeners
rollButton.addEventListener("click", () => {
    diceRoll()
    playerScore.textContent = `You rolled ${numberRolled}`
    totalScore.textContent = `Your total score is ${pointScored += numberRolled}`
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`;
    winOrLose()
})
