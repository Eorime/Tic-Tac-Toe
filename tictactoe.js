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

//Variables for the O and X pseudo elements
const THE_CIRCLE = "o";
const THE_X = "x";
const allBoxes = document.querySelectorAll("[data-box]");
let circleTurn;

allBoxes.forEach((box) => {
  box.addEventListener("click", clicked, { once: true });
});

function switchPlayer() {}

function clicked(event) {
  let currentBox = event.target;
  const currentType = circleTurn ? THE_CIRCLE : THE_X;
  placeMark(currentBox, currentType);
  switchPlayer();
  //check win
  //check draw

  //Places the mark in the box based on the current type
  function placeMark() {
    currentBox.classList.add(currentType);
  }
  //This function switches a player
  function switchPlayer() {
    circleTurn = !circleTurn;
  }
}
