let bubbles = document.getElementById("pbtm");
let timer = document.querySelector("#timer");
let hitVal = document.querySelector("#hitVal");
let scoreVal = document.querySelector("#scoreval");
let clutter = "";
let score = 0;
let hitrn = 0;

function showBubbles() {
  clutter = "";
  for (let i = 1; i <= 50; i++) {
    let rdn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rdn}</div>`;
  }
  bubbles.innerHTML = clutter;
}

//  function run timer
let InitialTimer = 60;
function runTimer() {
  const timerInt = setInterval(() => {
    if (InitialTimer >= 0) {
      timer.textContent = InitialTimer;
      InitialTimer--;
    } else {
      bubbles.innerHTML = `<h1>Game Over</h1>`;
      clearInterval(timerInt);
    }
  }, 1000);
}

// function git value
function hitValue() {
  hitrn = Math.floor(Math.random() * 10);
  hitVal.textContent = hitrn;
}

// function increase score
function increaseScore() {
  score += 10;
  scoreVal.textContent = score;
}

bubbles.addEventListener("click", (e) => {
  let clickedNumber = Number(e.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    showBubbles();
    hitValue();
  }
});
hitValue();
runTimer();
showBubbles();
