function playerSelection() {
  const buttons = document.querySelectorAll("button");
  let playerChoice = 0;
  function setPlayerChoice(choice) {
    console.log(choice);
    playerChoice = choice;
  }
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setPlayerChoice(button.id);
    });
  });
};

playerSelection();