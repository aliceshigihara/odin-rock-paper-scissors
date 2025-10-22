function getComputerChoice() {
    let randomChoiceNumber = Math.floor(Math.random() * 3);
    if (randomChoiceNumber === 0) {
        return "rock";
    } else if (randomChoiceNumber === 1) {
        return "paper";
    } else if (randomChoiceNumber === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Write Rock, Paper, or Scissors 5x times!").toLowerCase();
    return userChoice;
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === 'paper')
  ) {
    console.log("Player wins round.");
    return 'player wins round'
  }

  else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === 'paper')
  ) {
    console.log("Computer wins round.");
    return 'computer wins round'
  } else {
    console.log("Tie!");
  }
  
}

function Winner(humanScore, computerScore){
  if (humanScore > computerScore){
    console.log('Player won!');
  }
  else if (computerScore > humanScore){
    console.log('Computer won');
  }
  else {
    console.log('ops, tie!');
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundWinner;

  for (let i = 0; i <= 5; i++) {
    roundWinner = playRound();
    if (roundWinner === 'player wins round') {
      humanScore++;
    }
    else if (roundWinner === 'computer wins round') {
      computerScore++;
    }
  }
  Winner(humanScore, computerScore);
}

playGame();