// functions
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(computerChoice, playerChoice) {
  //results
  if (computerChoice === playerChoice) {
      roundInfo.textContent = `You and the computer choose ${computerChoice}; Is\'s a tie!`;
      return winner = 0;
  } 
  else if (computerChoice === 'Rock' && playerChoice === 'Scissors' ||
  computerChoice === 'Paper' && playerChoice === 'Rock' ||
  computerChoice === 'Scissors' && playerChoice === 'Paper') {
      roundInfo.textContent = `Computer\'s choice: ${computerChoice}. Your choice: ${playerChoice}; You lost!`;
      return winner = 'computer';
  } 
  else {
      roundInfo.textContent = `Computer\'s choice: ${computerChoice}. Your choice: ${playerChoice}; You won!`;
      return winner = 'player';
  }
}


// game

let playerChoice = 0;
let winner = 0;
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll("button");
const results = document.getElementById('results');
results.style.cssText = 'border: 2px solid black; height: 100px; width: 300px; margin: 30px';

const roundInfo = document.getElementById('round-info');
const counter = document.getElementById('counter')


buttons.forEach((button) => {
  button.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let playerChoice = this.id.charAt(0).toUpperCase() + this.id.slice(1).toLowerCase();
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
  });
  });

