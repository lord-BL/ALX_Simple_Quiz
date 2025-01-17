function checkAnswer() {
  let correctAnswer = "4";
  let selectedOption = document.querySelector('input[name="quiz"]:checked');
  let userAnswer = selectedOption.value;
  if (userAnswer === correctAnswer) {
    let feedback = document.getElementById("feedback");
    feedback.textContent = "Correct! Well done.";
  } else {
    let feedback = document.getElementById("feedback");
    feedback.textContent = "That's incorrect. Try again!";
  }
}
let submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);
