// varialbles

let playerChoice = 0;
let winner = 0;
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll(".choice");
const results = document.getElementById('results');

const roundInfo = document.getElementById('round-info');
const counter = document.getElementById('counter')


// functions

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(computerChoice, playerChoice) {
  //results
  switch (playerChoice) {
    case 'rock':
      if (computerChoice === 'rock') {
        winner = 0;
        break;
      } else if (computerChoice === 'paper') {
        winner = 'computer'
        break;
      } else if (computerChoice === 'scissors') {
        winner = 'player';
        break;
      }
  
    case 'paper':
      if (computerChoice === 'paper') {
        winner = 0;
        break;
      } else if (computerChoice === 'scissors') {
        winner = 'computer'
        break;
      } else if (computerChoice === 'rock') {
        winner = 'player';
        break;
      }
  
    case 'scissors':
      if (computerChoice === 'scissors') {
        winner = 0;
        break;
      } else if (computerChoice === 'rock') {
        winner = 'computer'
        break;
      } else if (computerChoice === 'paper') {
        winner = 'player';
        break;
      }
  }
}

function displayResult(computerChoice, playerChoice, winner) {
  if (winner === 0) {
    roundInfo.textContent = `You and the computer choose ${computerChoice}; Is\'s a tie!`;
    counter.textContent = `Player: ${playerWins} / Computer: ${computerWins}`;
  } else if (winner === 'player') {
    roundInfo.textContent = `Computer\'s choice: ${computerChoice}. Your choice: ${playerChoice}; You won!`;
    counter.textContent = `Player: ${playerWins} / Computer: ${computerWins}`;
  } else if (winner === 'computer') {
    roundInfo.textContent = `Computer\'s choice: ${computerChoice}. Your choice: ${playerChoice}; You lost!`;
    counter.textContent = `Player: ${playerWins} / Computer: ${computerWins}`;
  }
}

function Game() {
  // round
  let computerChoice = getComputerChoice();
  let playerChoice = this.id;
  playRound(computerChoice, playerChoice);

  if (winner === 'player') {
    playerWins += 1;
  } else if (winner === 'computer') {
    computerWins += 1;
  }

  // win
  if (playerWins === 5) {
    restartGame();
    counter.textContent = 'Player Wins!';
  } 
  if (computerWins === 5) {
    restartGame();
    counter.textContent = 'Computer Wins!';
  }

  // display
  displayResult(computerChoice, playerChoice, winner);
}

function restartGame() {
  winner = null;
  computerChoice = 0;
  playerChoice = 0;
  playerWins = 0;
  computerWins = 0;
  roundInfo.textContent = 'Choose rock, paper or scissors';
//  counter.textContent = '';
}

// event listeners:
 
buttons.forEach((button) => {
  button.addEventListener("click", Game)
})

