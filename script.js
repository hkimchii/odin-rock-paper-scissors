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

const playerSelection = "rock";
const computerSelection = computerPlay();

// running of a round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
    return playerSelection + " against " + computerSelection + "! It's a tie!";
  }
  else if (playerSelection == "rock" && computerSelection == "paper"){
    return "Rock against Paper! You lost!";
  }
  else if (playerSelection == "rock" && computerSelection == "scissors"){
    return "Rock against Scissors! You win!";
  }
  else if (playerSelection == "paper" && computerSelection == "rock"){
    return "Paper against Rock! You win!";
  }
  else if (playerSelection == "paper" && computerSelection == "scissors"){
    return "Paper against Scissors! You lose!";
  }
  else if (playerSelection == "scissors" && computerSelection == "rock"){
    return "Scissors against Rock! You lose!";
  }
  else {
    return "Scissors against Paper! You win!";
  }
  }
