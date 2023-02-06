const cards = ["rock", "paper", "scissors"];


/* 
 from: https://pthree.org/2018/06/13/why-the-multiply-and-floor-rng-method-is-biased/
 */
 function uniformRandNumber(range) {
    var max = Math.floor(2**32/range) * range; // make "max" a multiple of "range"
    do {
        var x = Math.floor(Math.random() * 2**32); // pick a number of [0, 2^32).
    } while(x >= max); // try again if x is too big
    return(x % range); // uniformly picked in [0, range)
  }

  function getRandomChoice() {
    // return cards[Math.floor(Math.random() * 3)];
    return cards[uniformRandNumber(cards.length)];
  }

  function isPlayer1Winner(player1Card, player2card) {
    return (
      (player1Card === "rock" && player2card === "scissors") ||
      (player1Card === "scissors" && player2card === "paper") ||
      (player1Card === "paper" && player2card === "rock")
    );
  }

  function setResult(result) {
    document.getElementById("result").innerHTML = result;
    updateScoreOnScreen();
  }

  module.exports = isPlayer1Winner;