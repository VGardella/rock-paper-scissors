function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(computerChoice, playerChoice) {
    
    //results
    const container = document.querySelector('body')

    if (document.getElementById('results')) {
        container.removeChild(results)
    };

    if (!document.getElementById('results')) {
        const results = document.createElement('div')
        results.setAttribute('id', 'results')
        results.style.cssText = 'border: 2px solid black; height: 100px; width: 200px; margin: 30px';
        container.appendChild(results);
    };
    
    if (computerChoice === playerChoice) {
        results.textContent = `You and the computer choose ${computerChoice}; Is\'s a tie!`;
    } 
    else if (computerChoice === 'Rock' && playerChoice === 'Scissors' ||
    computerChoice === 'Paper' && playerChoice === 'Rock' ||
    computerChoice === 'Scissors' && playerChoice === 'Paper') {
        results.textContent = `Computer\'s choice: ${computerChoice} \n Your choice: ${playerChoice}; You lost!`;
    } 
    else {
        results.textContent = `Computer\'s choice: ${computerChoice} \n Your choice: ${playerChoice}; You won!`;
    }
}


function game() {
    let computerChoice = getComputerChoice();

    //buttons and listeners
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {playRound(getComputerChoice(), 'Rock');});

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {playRound(getComputerChoice(), 'Paper');});

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {playRound(getComputerChoice(), 'Scissors');});
}

game()