// Get DOM elements
const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset");
const newGameBtn = document.querySelector("#newBtn");
const msgContainer = document.querySelector(".msgContainer");
const msg = document.querySelector("#msg");

// Global variables
let flag = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Function to reset the game
function resetGame() {
  flag = true;
  enableBox();
  msgContainer.classList.add("hide");
}

// Event listener functions
function boxClickHandler() {
  if (flag === true) {
    this.innerHTML = "0";
    flag = false;
  } else {
    this.innerHTML = "X";
    flag = true;
  }
  this.disabled = true; // Disable box to prevent further changes
  checkWinner();
}

// Function to enable all boxes
function enableBox() {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
}

// Function to disable all boxes
function disableBox() {
  for (let box of boxes) {
    box.disabled = true;
  }
}

// Function to show winner message
function showWinner(winner) {
  msg.innerHTML = `Congratulations, the winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
}

// Function to check for a winner
function checkWinner() {
  for (let pattern of winPattern) {
    let position1 = boxes[pattern[0]].innerHTML;
    let position2 = boxes[pattern[1]].innerHTML;
    let position3 = boxes[pattern[2]].innerHTML;

    if (
      position1 === position2 &&
      position2 === position3 &&
      position1 !== ""
    ) {
      console.log("Winner:", position1);
      showWinner(position1);
      return; // Exit the function once a winner is found
    }
  }
}

// Event listeners
boxes.forEach(function (box) {
  box.addEventListener("click", boxClickHandler);
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
