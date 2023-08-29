// varialbles

let playerChoice = 0;
let winner = 0;
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll("button");
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
  } else if (winner === 'player') {
    roundInfo.textContent = `Computer\'s choice: ${computerChoice}. Your choice: ${playerChoice}; You won!`;
  } else if (winner === 'computer') {
    roundInfo.textContent = `Computer\'s choice: ${computerChoice}. Your choice: ${playerChoice}; You lost!`;
  }
}


// event listeners:
 
buttons.forEach((button) => {
  button.addEventListener("click", function() {

    let computerChoice = getComputerChoice();
    let playerChoice = this.id;
    playRound(computerChoice, playerChoice);

    if (winner === 'player') {
      playerWins += 1;
    }

    if (winner === 'computer') {
      computerWins += 1;
    }

    counter.textContent = `Player: ${playerWins} / Computer: ${computerWins}`;

    if (playerWins === 5) {
      roundInfo.textContent = 'Player Wins!';
      playerWins = 0;
      computerWins = 0;
      counter.textContent = '';
    }

    else if (computerWins === 5) {
      roundInfo.textContent = 'Computer Wins!';
      playerWins = 0;
      computerWins = 0;
      counter.textContent = '';
    }

    displayResult(computerChoice, playerChoice, winner);
  
  });
});

