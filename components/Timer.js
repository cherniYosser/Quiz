import { nextQuestion } from "./Question.js";

let timer;
const timeLimit = 20;
let timeRemaining = timeLimit;
const timerElement = document.getElementById("time");

export function startTimer(filmList) {
  timeRemaining = timeLimit;
  timerElement.innerText = timeRemaining;

  timer = setInterval(() => {
    timeRemaining--;
    timerElement.innerText = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      nextQuestion(filmList);
    }
  }, 1000);
}

export function stopTimer() {
  clearInterval(timer);
}
