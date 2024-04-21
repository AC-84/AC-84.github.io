var answer = Math.floor(Math.random() * 100) + 1;
var guessInput = document.getElementById("guess");
var submitButton = document.getElementById("submit");
var resultDiv = document.getElementById("result");
var historyDiv = document.getElementById("history");
var numGuesses = 0;
var maxGuesses = 10;

function checkGuess() {
  var guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultDiv.textContent = "Please enter a valid number between 1 and 100.";
  } else {
    numGuesses++;
    if (guess === answer) {
      resultDiv.textContent = `Congratulations! You guessed the number in ${numGuesses} guesses.`;
      resultDiv.style.color = "#00FF00";
      guessInput.disabled = true;
      submitButton.disabled = true;
      resultDiv.textContent = "Too low. Guess again.";
      resultDiv.style.color = "white";
    } else {
      resultDiv.textContent = "Too high. Guess again.";
      resultDiv.style.color = "white";
    }
    var guessHistory = document.createElement("p");
    guessHistory.textContent = `${guess} (${numGuesses})`;
    historyDiv.appendChild(guessHistory);
    if (numGuesses === maxGuesses) {
      resultDiv.textContent = `Sorry, you ran out of guesses. The number was ${answer}.`;
      resultDiv.style.color = "#FF0000";
      guessInput.disabled = true;
      submitButton.disabled = true;
    }
  }
}

function newGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  guessInput.disabled = false;
  resultDiv.textContent = "";
  resultDiv.style.color = "white";
  historyDiv.innerHTML = "";
  numGuesses = 0;
  submitButton.disabled = false;
}

submitButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});