export function updateProgressBar(filmList, currentQuestionIndex) {
  const progress = document.getElementById("progress");

  const res = ((currentQuestionIndex + 1) / filmList.length) * 100;
  progress.style.width = `${res}%`;
  progress.innerText = `${Math.round(res)}%`;
}
