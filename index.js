const instructionsButton = document.getElementById("instructions-button");
const closeInstructionsButton = document.getElementById("close-instructions");

instructionsButton.addEventListener("click", handleInstructionsButton);
closeInstructionsButton.addEventListener("click", handleCloseButton);

function handleInstructionsButton() {
  document.body.classList.add("show-instructions");
}

function handleCloseButton() {
  document.body.classList.remove("show-instructions");
}
