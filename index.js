function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playerSelection() {
    let selection = prompt('Choose rock, paper or scissors:');
    selection = selection.charAt(0).toUpperCase() + selection.slice(1);
    return selection
}

function playRound(computerChoice, playerChoice) {
    if (playerChoice === '') {
        console.log(`You have to choose an option!`);
    } else if (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
        console.log(`Chose one of the accepted options!`);
    } else if (computerChoice === playerChoice) {
        console.log(`You and the computer choose ${computerChoice}; Is\'s a tie!`);
    } else if (computerChoice === 'Rock' && playerChoice === 'Scissors' ||
    computerChoice === 'Paper' && playerChoice === 'Rock' ||
    computerChoice === 'Rock' && playerChoice === 'Scissors') {
        console.log(`Computer\'s choice: ${computerChoice} \n Your choice: ${playerChoice}; You lost!`);
    } else {
        console.log(`Computer\'s choice: ${computerChoice} \n Your choice: ${playerChoice}; You won!`);
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = playerSelection();
        console.log(playRound(computerChoice, playerChoice));
    }
}

game()