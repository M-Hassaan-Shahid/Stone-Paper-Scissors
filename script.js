let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];

}
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        
        console.log(`You win! Your score: ${userScore}, Computer score: ${compScore}`);
    } else {
        compScore++;
        console.log(`You lose! Your score: ${userScore}, Computer score: ${compScore}`);
    }
}

const playGame = (UserChoice) => {
    const compChoice = genCompChoice();
    if (UserChoice === compChoice) {
        console.log('It\'s a tie!');
    } else {
        let userWin = true;
        if (UserChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (UserChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        }
        else if (UserChoice === 'scissors') {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }



}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener('click', () => {
        const choiceId = choice.getAttribute('id');
        playGame(choiceId);
    });

})