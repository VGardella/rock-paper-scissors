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

