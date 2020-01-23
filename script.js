// HTML declarations 

const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("playerScore");
const diceImage = document.getElementById("diceImage");

diceImage.style.visibility = "hidden";

let numberRolled;
let pointScored = 0;

// Function declarations

const diceRoll = () => {
    numberRolled=(Math.ceil(Math.random() * 6));
    console.log(`You've rolled ${numberRolled}`);
}

const cummulativeScore = () => {
    diceRoll()
    pointScored += numberRolled;
    console.log(`Your score is ${pointScored}`);
}
const winOrLose = () => {
    cummulativeScore()
    if (numberRolled == 1) {
        console.log("You Lose!");
        pointScored = 0;
    } else if (pointScored >= 20) {
        console.log("You Won!")
        pointScored = 0;
    } else {
        console.log("Roll again...");
    }
}

rollButton.addEventListener("click", () => {
    diceRoll()
    playerScore.textContent = numberRolled
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`;
})

// diceRoll()
// cummulativeScore()
// winOrLose()
