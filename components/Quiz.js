import { getElementById } from "../utils/domUtils.js";
import { getData } from "../services/api.js";
import { showQuestion, nextQuestion } from "./Question.js";

let filmList = [];
let difficultyType = "";

// DOM elements
const startButton = getElementById("fetchDataButton");
const quizContainer = getElementById("quiz-container");
const select = getElementById("select-section");

select.addEventListener("change", function () {
  const selectItem = getElementById("difficulty-select");
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
