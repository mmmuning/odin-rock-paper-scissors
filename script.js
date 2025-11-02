function playGame() {
  let options = document.querySelector("#options");
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

  function getHumanChoice(event) {
    let target = event.target;
    let choice;

    switch (target.id) {
      case "rock":
        choice = "ROCK";
        break;
      case "paper":
        choice = "PAPER";
        break;
      case "scissors":
        choice = "SCISSORS";
        break;
      default:
        console.log("Invalid choice.");
    }

    // Stores choices for both players
    const humanSelection = choice;
    const computerSelection = getComputerChoice();

    // Plays the round
    playRound(humanSelection, computerSelection);
  }

  options.addEventListener("click", getHumanChoice);

  function playRound(humanChoice, computerChoice) {
    const container = document.querySelector("#container");
    const playerChoices = document.createElement("p");
    const results = document.createElement("h2");
    const humanScoreText = document.querySelector("#humanScore");
    const computerScoreText = document.querySelector("#computerScore");

    playerChoices.textContent = `[YOU] ${humanChoice} vs. ${computerChoice} [COMPUTER]`;
    container.appendChild(playerChoices);

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

    humanScoreText.textContent = `${humanScore}`;
    computerScoreText.textContent = `${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore === computerScore) {
        results.textContent = "IT'S A TIE!!!";
      } else if (humanScore > computerScore) {
        results.textContent = "YOU WIN!!!";
      } else {
        results.textContent = "YOU LOST! BETTER LUCK NEXT TIME!";
      }
      container.appendChild(results);

      // Resets the scores
      humanScore = 0;
      computerScore = 0;
    }
  }
}

playGame();
