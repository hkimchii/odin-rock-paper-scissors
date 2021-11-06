

// Asks the user to pick a choice from rock, paper, or scissors
let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase(); // Choice is converted to lower case
let computerSelection = computerPlay();

// Computer picks a random option from rock, paper, scissors
function computerPlay() {
  let options = [
    "rock",
    "paper",
    "scissors"
  ]

  let randomOption = options[Math.floor(Math.random() * options.length)];

  return randomOption;
}

// running of a round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
    return playerSelection + " against " + computerSelection + "! It's a tie!";
  }
  }




