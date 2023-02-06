const playButton = document.getElementById("play-button")
const resetButton = document.getElementById("reset-button");
const cards = ["rock", "paper", "scissors"];
let pcCard;
let pc2Card;
let scorePc2 = 0;
let scorePc = 0;

playButton.addEventListener("click",playPcAction);
playButton.addEventListener("click",playPc2Action);
resetButton.addEventListener("click", resetGame);



function clearPcCard() {
  const boxPc = document.getElementById("box-pc");
  boxPc.classList.remove("box-card-rock");
  boxPc.classList.remove("box-card-paper");
  boxPc.classList.remove("box-card-scissors");
}
function clearPc2Card() {
  const boxPc = document.getElementById("box-pc2");
  boxPc.classList.remove("box-card-rock");
  boxPc.classList.remove("box-card-paper");
  boxPc.classList.remove("box-card-scissors");
}


function getRandomChoice() {
  return cards[Math.floor(Math.random() * 3)];
}

function playPcAction() {
  clearPcCard();
  const randomAction = getRandomChoice();
  pcCard = randomAction;
  const boxPc = document.getElementById("box-pc");
  boxPc.classList.add(`box-card-${randomAction}`);
  checkResult();
 
}

function playPc2Action() {
  clearPc2Card();
  const randomAction2 = getRandomChoice();
  pc2Card = randomAction2;
  const boxPc2 = document.getElementById("box-pc2");
  boxPc2.classList.add(`box-card-${randomAction2}`);
  checkResult();
}

function checkResult() {
  console.log("pc2 card", pc2Card, "pc card", pcCard);
  if (pc2Card === pcCard) {
    setResult("it's a tie");
    return;
  }
  if (
    (pc2Card === "rock" && pcCard === "scissors") ||
    (pc2Card === "scissors" && pcCard === "paper") ||
    (pc2Card === "paper" && pcCard === "rock")
  ) {
    scorePc2++;
    setResult("PC 2 <br> WINS!");
  } else {
    scorePc++;
    setResult("PC 1 <br> WINS!");
  }
}

function setResult(result) {
  document.getElementById("result").innerHTML = result;
  updateScoreOnScreen();
}



function updateScoreOnScreen() {
  document.getElementById("pc2-score").innerHTML = scorePc2;
  document.getElementById("pc-score").innerHTML = scorePc;
}

function resetScore() {
  scorePc2 = 0;
  scorePc = 0;
  updateScoreOnScreen();
}

function resetGame() {
  resetScore();
  setResult("Rock! Paper! Scissors!");
  clearPcCard();
  clearPc2Card();
}



