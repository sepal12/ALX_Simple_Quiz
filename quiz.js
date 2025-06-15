function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";
    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";
    if (selectedOption) {
        userAnswer = selectedOption.value;
    }
    // Compare and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);