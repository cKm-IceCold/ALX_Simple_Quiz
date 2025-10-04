// Step 1: Define the function
function checkAnswer() {
  // Step 2: Correct answer
  const correctAnswer = "4";

  // Step 3: Get user's selected answer
  const userChoice = document.querySelector('input[name="quiz"]:checked');
  
  // Handle case when no option is selected
  if (!userChoice) {
    document.getElementById("feedback").textContent = "Please select an answer before submitting!";
    return;
  }

  const userAnswer = userChoice.value;

  // Step 4: Compare user’s answer with correct answer
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Step 5: Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
