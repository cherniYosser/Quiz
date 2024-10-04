import { getElementById } from "../utils/domUtils.js";
import { updateProgressBar } from "./progressBar.js";
import { startTimer, stopTimer } from "./timer.js";

const questionElement = getElementById("question");
const answersElement = getElementById("answers");
const nextButton = getElementById("nextButton");

let currentQuestionIndex = 0;
let score = 0;

export function handleAnswerSelection(correctAnswer) {
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

export function showQuestion(filmList) {
  nextButton.disabled = true;
  nextButton.classList.add("disabled");
  const currentQuestion = filmList[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  answersElement.innerHTML = "";
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);
  answers.forEach((answer) => {
    const answerOption = document.createElement("div");
    answerOption.innerHTML = `
              <input type="radio" name="answer" value="${answer}" id="${answer}">
              <label for="${answer}" class="answers-text">${answer}</label>
          `;
    answersElement.appendChild(answerOption);
  });
  const checkboxes = document.querySelectorAll('input[name="answer"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      handleAnswerSelection(currentQuestion.correct_answer);
    });
  });
  startTimer(filmList);
  updateProgressBar(filmList, currentQuestionIndex);
}

export function nextQuestion(filmList) {
  stopTimer();
  currentQuestionIndex++;

  if (currentQuestionIndex < filmList.length) {
    showQuestion(filmList);
  } else {
    const progressBar = getElementById("progress-bar");
    progressBar.classList.add("hidden");
    questionElement.innerHTML = `Quiz finished! Your final score is: ${score}/${filmList.length}`;

    answersElement.innerHTML = "";
    getElementById("timer").classList.add("hidden");
    nextButton.classList.add("hidden");
  }
}
