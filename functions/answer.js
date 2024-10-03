export function handleAnswerSelection(correctAnswer, score) {
  nextButton.disabled = false;
  nextButton.classList.remove("disabled");
  const checkboxes = document.querySelectorAll('input[name="answer"]');

  checkboxes.forEach((checkbox) => {
    const label = document.querySelector(`label[for="${checkbox.id}"]`);

    checkbox.disabled = true;
    label.classList.add("disabled");

    if (checkbox.value === correctAnswer) {
      label.classList.add("correct");
      score++;
    } else if (checkbox.checked) {
      label.classList.add("incorrect");
    }
  });
}

export function updateProgressBar(filmList, currentQuestionIndex) {
  const progress = document.getElementById("progress");

  const res = ((currentQuestionIndex + 1) / filmList.length) * 100;
  progress.style.width = `${res}%`;
  progress.innerText = `${Math.round(res)}%`;
}
