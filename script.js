function game() {
  // Computer picks a random option from rock, paper, scissors
  function computerPlay() {
    let options = ["rock", "paper", "scissors"];

    let randomOption = options[Math.floor(Math.random() * options.length)];

    return randomOption;
  }

  // running of a round
  function playRound() {
    let playerSelection = prompt("Choose your move").toUpperCase();
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
      return (
        playerSelection + " against " + computerSelection + "! It's a tie!"
      );
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
      return "ROCK against PAPER! You lose!";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
      return "ROCK against SCISSORS! You win!";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
      return "PAPER against ROCK! You win!";
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
      return "PAPER against SCISSORS! You lose!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
      return "SCISSORS against ROCK! You lose!";
    } else {
      return "SCISSORS against PAPER! You win!";
    }
  }

  return playRound();
}
