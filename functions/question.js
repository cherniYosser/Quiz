import { stopTimer, startTimer } from "./quiz.js";
import { handleAnswerSelection } from "./answer.js";
import { updateProgressBar } from "./answer.js";

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;
let score = 0;

export function nextQuestion(filmList) {
  stopTimer();
  currentQuestionIndex++;

  if (currentQuestionIndex < filmList.length) {
    showQuestion(filmList);
  } else {
    const progressBar = document.getElementById("progress-bar");
    progressBar.classList.add("hidden");
    questionElement.innerHTML = `Quiz finished! Your final score is: ${score}/${filmList.length}`;

    answersElement.innerHTML = "";
    document.getElementById("timer").classList.add("hidden");
    nextButton.classList.add("hidden");
  }
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
      handleAnswerSelection(currentQuestion.correct_answer, score);
    });
  });
  startTimer();
  updateProgressBar(filmList, currentQuestionIndex);
}
