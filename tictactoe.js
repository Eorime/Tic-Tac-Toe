const allBoxes = document.querySelectorAll("[data-box]");

allBoxes.forEach((box) => {
  box.addEventListener("click", clicked, { once: true });
});

function switchPlayer() {}

function clicked(event) {
  console.log(event);
  //mark
  //check win
  //check draw
  //switch
}
