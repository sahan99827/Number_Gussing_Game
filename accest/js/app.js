let randomNum = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 3;

function checkGuess() {
  const userGuess = Number(document.getElementById("userGuess").value);
  const result = document.getElementById("result");

  // Input validation
  if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a valid number between 1 and 10.",
      position: "top-end",
      timer: 2000,
      showConfirmButton: false,
    });
    return;
  }

  attempts++;

  // Correct guess
  if (userGuess === randomNum) {
    result.textContent = "🎉 Congratulations! You guessed the correct number!";
    result.style.color = "green";
    disableGame();
  }
  // Wrong guess but still have attempts left
  else if (attempts < maxAttempts) {
    if (userGuess < randomNum) {
      result.textContent = `Too low! You have ${
        maxAttempts - attempts
      } attempt(s) left.`;
    } else {
      result.textContent = `Too high! You have ${
        maxAttempts - attempts
      } attempt(s) left.`;
    }
    result.style.color = "orange";
  }
  // Out of attempts
  else {
    result.textContent = `❌ Sorry, you've used all ${maxAttempts} attempts. The correct number was ${randomNum}.`;
    result.style.color = "red";
    disableGame();
  }
}

function disableGame() {
  document.getElementById("userGuess").disabled = true;
  document.querySelector("button").disabled = true;

  setTimeout(() => {
    if (
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to play again?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, play again!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: "top-end",
            title: "Game Reset!",
            text: "Starting a new game.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
    ) {
      resetGame();
    }
  }, 1000);
}

function resetGame() {
  randomNum = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  document.getElementById("userGuess").disabled = false;
  document.querySelector("button").disabled = false;
  document.getElementById("userGuess").value = "";
  document.getElementById("result").textContent = "";
}
