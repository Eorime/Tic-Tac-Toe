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

// roca daechireba, shesabamis wevrs 1,2 dasvam
let currentPlayer = 1;

// get every element and compare the choices of the player
// store the x choices

//Variables for the O and X pseudo elements
const THE_CIRCLE = "o";
const THE_X = "x";
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
  console.log(boarded);
  switchPlayer();
  checkWin();
  //   checkDraw(); toca yvela sheivseba

  //Places the mark in the box based on the current type
  function placeMark() {
    currentBox.classList.add(currentType);
  }

  //This function switches the player
  function switchPlayer() {
    circleTurn = !circleTurn;
    if (currentPlayer == 1) {
      currentPlayer = 2;
    } else if (currentPlayer == 2) {
      currentPlayer = 1;
    }
  }
}

const screen = document.getElementById("win-screen");

//Checks for the win, looping the win combination array and checking
// if the current state of the board matches any of the index
function checkWin() {
  for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
    let currentCondition = WIN_COMBINATIONS[i];
    if (
      boarded[currentCondition[0]] != 0 &&
      boarded[currentCondition[0]] == boarded[currentCondition[1]] &&
      boarded[currentCondition[1]] == boarded[currentCondition[2]]
    ) {
      screen.style.display = "flex";
    }
  }
}

const restartButton = document.getElementById("restart");

restartButton.addEventListener("click", function () {
  screen.style.display = "none";
  boarded = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  currentPlayer = 1;
});
