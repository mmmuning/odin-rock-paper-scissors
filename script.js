function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let round = 0;

  function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);

    switch (result) {
      case 0:
        return "ROCK";
      case 1:
        return "PAPER";
      case 2:
        return "SCISSORS";
      default:
        console.log("Invalid input.");
    }
  }

  function getHumanChoice() {
    return prompt("ROCK, PAPER, or SCISSORS?").toUpperCase();
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "ROCK") {
      if (computerChoice == "PAPER") {
        computerScore++;
      } else if (computerChoice == "SCISSORS") {
        humanScore++;
      }
    } else if (humanChoice == "PAPER") {
      if (computerChoice == "ROCK") {
        humanScore++;
      } else if (computerChoice == "SCISSORS") {
        computerScore++;
      }
    } else if (humanChoice == "SCISSORS") {
      if (computerChoice == "ROCK") {
        computerScore++;
      } else if (computerChoice == "PAPER") {
        humanScore++;
      }
    }

    console.log(
      `[ROUND ${round + 1}]: YOU: ${humanChoice}, COMPUTER: ${computerChoice}`
    );
  }

  while (round != 5) {
    // Get players' choices
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // Plays the round
    playRound(humanSelection, computerSelection);
    round++;
  }

  console.log(`[SCORES]: YOU: ${humanScore}, COMPUTER: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("YOU WIN!!!");
  } else if (humanScore == computerScore) {
    console.log("IT'S A TIE!!!");
  } else {
    console.log("YOU LOST! BETTER LUCK NEXT TIME!");
  }
}

playGame();
