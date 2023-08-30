// varialbles

let playerChoice = 0;
let winner = 0;
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll(".choice");
const reset = document.getElementById('reset');
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
    roundInfo.textContent = `Your choice: ${playerChoice}; Computer\'s choice: ${computerChoice}. You won!`;
    counter.textContent = `Player: ${playerWins} / Computer: ${computerWins}`;
  } else if (winner === 'computer') {
    roundInfo.textContent = `Your choice: ${playerChoice}; Computer\'s choice: ${computerChoice}. You lost!`;
    counter.textContent = `Player: ${playerWins} / Computer: ${computerWins}`;
  }
}

function Game() {
  removeStyles();
  
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
    addStyles();
    roundInfo.textContent = 'Player Wins!';
    counter.textContent = '';
    restartGame();
  } 
  if (computerWins === 5) {
    addStyles();
    roundInfo.textContent = 'Computer Wins!';
    counter.textContent = '';
    restartGame();
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
}

function addStyles() {
  roundInfo.style.fontSize = '30px';
  roundInfo.classList.add('blink');
  counter.style.display = 'none';
}

function removeStyles() {
  roundInfo.style.fontSize = '20px';
  counter.style.display = 'block';
  roundInfo.classList.remove('blink');
}

// event listeners:
 
buttons.forEach((button) => {
  button.addEventListener("click", Game)
})

reset.addEventListener("click", () => {
  removeStyles();
  restartGame();
  roundInfo.textContent = 'Choose rock, paper or scissors.';
  counter.textContent = '';
})

