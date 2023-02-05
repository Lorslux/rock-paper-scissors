const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const resetButton = document.getElementById("reset-button");
const cards = ["rock", "paper", "scissors"];
let pcCard;
let playerCard;
let scorePlayer = 0;
let scorePc = 0;

rockButton.addEventListener("click", handleRockButtonClick);
paperButton.addEventListener("click", handlePaperButtonClick);
scissorsButton.addEventListener("click", handleScissorsButtonClick);
resetButton.addEventListener("click", resetGame);

function clearPlayerCard() {
  const boxPlayer = document.getElementById("box-player");
  boxPlayer.classList.remove("box-card-rock");
  boxPlayer.classList.remove("box-card-paper");
  boxPlayer.classList.remove("box-card-scissors");
}

function clearPcCard() {
  const boxPc = document.getElementById("box-pc");
  boxPc.classList.remove("box-card-rock");
  boxPc.classList.remove("box-card-paper");
  boxPc.classList.remove("box-card-scissors");
}

function handleRockButtonClick() {
  clearPlayerSelectedCard();
  this.classList.add("selected");

  clearPlayerCard();
  playPcAction();
  document.getElementById("box-player").classList.add("box-card-rock");
  playerCard = "rock";
  checkResult();
}

function handlePaperButtonClick() {
  clearPlayerSelectedCard();
  this.classList.add("selected");
  clearPlayerCard();
  playPcAction();
  document.getElementById("box-player").classList.add("box-card-paper");
  playerCard = "paper";
  checkResult();
}

function handleScissorsButtonClick() {
  clearPlayerSelectedCard();
  this.classList.add("selected");
  clearPlayerCard();
  playPcAction();
  document.getElementById("box-player").classList.add("box-card-scissors");
  playerCard = "scissors";
  checkResult();
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
}

function checkResult() {
  console.log("playerCard", playerCard, "pc card", pcCard);
  if (playerCard === pcCard) {
    setResult("it's a tie");
    return;
  }
  if (
    (playerCard === "rock" && pcCard === "scissors") ||
    (playerCard === "scissors" && pcCard === "paper") ||
    (playerCard === "paper" && pcCard === "rock")
  ) {
    scorePlayer++;
    setResult("🚩 YOU win! 🚩");
  } else {
    scorePc++;
    setResult("PC wins!");
  }
}

function setResult(result) {
  document.getElementById("result").innerHTML = result;
  updateScoreOnScreen();
}

function clearPlayerSelectedCard() {
  document.getElementById("rock-button").classList.remove("selected");
  document.getElementById("paper-button").classList.remove("selected");
  document.getElementById("scissors-button").classList.remove("selected");
}

function updateScoreOnScreen() {
  document.getElementById("player-score").innerHTML = scorePlayer;
  document.getElementById("pc-score").innerHTML = scorePc;
}

function resetScore() {
  scorePlayer = 0;
  scorePc = 0;
  updateScoreOnScreen();
}

function resetGame() {
  resetScore();
  setResult("Play Your Move!");
  clearPlayerSelectedCard();
  clearPlayerCard();
  clearPcCard();
}
