function getPlayerhand() {
  const choice = prompt("(1 / r) Rock \n(2 / p) Paper \n (3 / s) Scissors");

  if (choice == 1 || choice == "r") {
    return "rock";
  } else if (choice == 2 || choice == "p") {
    return "paper";
  } else {
    return "scissors";
  }
}

function getComputerHand() {
  const rng = Math.floor(Math.random() * 3);

  if (rng === 0) {
    return "rock";
  } else if (rng === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function match(playerHand, computerHand) {
  switch (playerHand) {
    case "rock":
      if (computerHand === "paper") {
        return "computer";
      } else if (computerHand === "scissors") {
        return "player";
      }
      break;
    case "paper":
      if (computerHand === "scissors") {
        return "computer";
      } else if (computerHand === "rock") {
        return "player";
      }
      break;
    case "scissors":
      if (computerHand === "rock") {
        return "computer";
      } else if (computerHand === "paper") {
        return "player";
      }
      break;
    default:
      return "draw";
  }
}

let playerScore = 0;
let computerScore = 0;
let winner;
function play(round) {
  while (!winner) {
    const playerHand = getPlayerhand();
    const computerHand = getComputerHand();

    const roundWinner = match(playerHand, computerHand);
    if (roundWinner === "player") {
      playerScore += 1;
    } else if (roundWinner === "computer") {
      computerScore += 1;
    }

    if (playerScore === round) {
      winner = "player";
    } else if (computerScore === round) {
      winner = "computer";
    }
    alert(
      `You: ${playerScore} \nComputer: ${computerScore} \n Hands: You (${playerHand}) Computer (${computerHand})`
    );
  }
  alert(`${winner} wins`);
  const playAgain = prompt("Player Again?");
  if (playAgain == "y" || playAgain == "yes") {
    playerScore = 0;
    computerScore = 0;
    winner = 0;
  }
}

play(5);
