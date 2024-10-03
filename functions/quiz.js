import { getData } from "./useFetch.js";
import { showQuestion, nextQuestion } from "./question.js";

let filmList = [];
let timer;
const timeLimit = 20;
let timeRemaining = timeLimit;
let difficultyType = "";

// DOM elements
const startButton = document.getElementById("fetchDataButton");
const timerElement = document.getElementById("time");
const nextButton = document.getElementById("nextButton");
const quizContainer = document.getElementById("quiz-container");
const select = document.getElementById("select-section");

export function startTimer() {
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

$("select").on("change", function () {
  const selectItem = document.getElementById("difficulty-select");
  difficultyType = selectItem.options[selectItem.selectedIndex].value;
  startButton.classList.remove("disabled");
  startButton.disabled = false;
});

startButton.addEventListener("click", async () => {
  try {
    const response = await getData(difficultyType);
    filmList = response.results.map((elm) => ({ ...elm }));

    quizContainer.classList.remove("hidden");
    select.classList.add("hidden");
    startButton.classList.add("hidden");
    showQuestion(filmList);
  } catch (err) {
    console.log(err);
  }
});

nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  nextQuestion(filmList);
});
