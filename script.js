let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreDisplay = document.querySelector('#user-score');
const compScoreDisplay = document.querySelector('#comp-score');
const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];

}
const showWinner = (userWin, UserChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        msg.innerHTML = `You win! ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
        console.log(`You win! Your score: ${userScore}, Computer score: ${compScore}`);
    } else {
        compScore++;    
        compScoreDisplay.innerHTML = compScore;
        msg.innerHTML = `You lose! ${compChoice} beats ${UserChoice}`;
        msg.style.backgroundColor = 'red';

        console.log(`You lose! Your score: ${userScore}, Computer score: ${compScore}`);
    }
}

const playGame = (UserChoice) => {
    const compChoice = genCompChoice();
    if (UserChoice === compChoice) {
        console.log('It\'s a tie!');
        msg.innerHTML = 'It\'s a tie!';
        msg.style.backgroundColor = '#edede9b3';

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
        showWinner(userWin, compChoice, UserChoice);
    }



}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener('click', () => {
        const choiceId = choice.getAttribute('id');
        playGame(choiceId);
    });

})