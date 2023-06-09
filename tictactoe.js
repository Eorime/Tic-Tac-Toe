const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let boarded = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let currentPlayer = 1;
const THE_CIRCLE = "o";
const THE_X = "x";
const restartButton = document.getElementById("restart");
const restartButton2 = document.getElementById("restart2");
const allBoxes = document.querySelectorAll("[data-box]");
let circleTurn;

// Runs through the entire array and applies the event listener to every single box
allBoxes.forEach((box) => {
  box.addEventListener("click", clicked, { once: true });
});

function clicked(event) {
  let currentBox = event.target;
  const currentType = circleTurn ? THE_CIRCLE : THE_X;
  placeMark(currentBox, currentType);
  let currentBoxIndex = Number(currentBox.classList[1]) - 1;
  boarded[currentBoxIndex] = currentPlayer;
  switchPlayer();

  if (checkWin()) {
    winscreen.style.display = "flex";
  } else if (checkDraw()) {
    drawscreen.style.display = "flex";
  }

  function placeMark() {
    currentBox.classList.add(currentType);
  }

  function switchPlayer() {
    circleTurn = !circleTurn;
    if (currentPlayer == 1) {
      currentPlayer = 2;
    } else if (currentPlayer == 2) {
      currentPlayer = 1;
    }
  }
}

const winscreen = document.getElementById("win-screen");
const drawscreen = document.getElementById("draw-screen");

//Checks for the win, looping the win combination array and checking
// if the current state of the board matches any of the index
function checkWin() {
  for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
    let currentCondition = WIN_COMBINATIONS[i];
    if (
      boarded[currentCondition[0]] != 0 &&
      boarded[currentCondition[0]] == boarded[currentCondition[1]] &&
      boarded[currentCondition[1]] == boarded[currentCondition[2]]
    )
      return true;
  }
  return false;
}

function checkDraw() {
  for (let i = 0; i < boarded.length; i++) {
    if (boarded[i] == 0) {
      return false;
    }
  }
  return true;
}

restartButton.addEventListener("click", function () {
  winscreen.style.display = "none";
  boarded = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  currentPlayer = 1;
  allBoxes.forEach((box) => {
    box.classList.remove(THE_CIRCLE);
    box.classList.remove(THE_X);
  });
  allBoxes.forEach((box) => {
    box.addEventListener("click", clicked, { once: true });
  });
});

restartButton2.addEventListener("click", function () {
  drawscreen.style.display = "none";
  boarded = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  currentPlayer = 1;
  allBoxes.forEach((box) => {
    box.classList.remove(THE_CIRCLE);
    box.classList.remove(THE_X);
  });
  allBoxes.forEach((box) => {
    box.addEventListener("click", clicked, { once: true });
  });
});
