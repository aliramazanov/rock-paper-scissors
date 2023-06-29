let userScore = "0";
let computerScore = "0";

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const showResult_p = document.querySelector(".show-result > p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const heading_h1 = document.querySelector("h1");

function resetScores() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // console.log("Game has been reset.");
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function displayFix(lowerCase) {
  if (lowerCase === "rock") return "Rock";
  if (lowerCase === "paper") return "Paper";
  if (lowerCase === "scissors") return "Scissors";
}

function won(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  showResult_p.innerHTML =
    displayFix(userChoice) +
    " loses to " +
    displayFix(computerChoice) +
    ". You Lost!";
}

function lost(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  showResult_p.innerHTML =
    displayFix(userChoice) +
    " beats " +
    displayFix(computerChoice) +
    ". You Won!";
}

function tie(userChoice, computerChoice) {
  showResult_p.innerHTML =
    displayFix(userChoice) +
    " is equal to a " +
    displayFix(computerChoice) +
    ". It's a Tie!";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      // console.log("User Won!");
      won(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      // console.log("User Lost!");
      lost(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      // console.log("Tie!");
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    // console.log("You clicked on the rock!");
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    // console.log("You clicked on the paper!");
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    // console.log("You clicked on the scissors!");
    game("scissors");
  });

  heading_h1.addEventListener("click", function () {
    resetScores();
  });
}

main();