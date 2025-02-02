let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const resultMessage = document.getElementById('resultMessage');

    if (userGuess == randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the correct number!';
        resultMessage.style.color = 'green';
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'Too high! Try again.';
        resultMessage.style.color = 'red';
    } else {
        resultMessage.textContent = 'Too low! Try again.';
        resultMessage.style.color = 'red';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guessInput').value = '';
    document.getElementById('resultMessage').textContent = '';
}
