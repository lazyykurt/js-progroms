"use strict";

const getRandomNumber = function () {
  // random float number from 0 to 19, plus 1, that be 1 to 20
  let floatRandomNumber = Math.random() * 19 + 1;
  // Math.floor() function, transform to integer
  return Math.floor(floatRandomNumber);
};

// -----------------
// TEST randomNumber() FUNCTION
// -----------------
// console.log(randomNumber());

// document.querySelector(".guess").value = 17;
// console.log(document.querySelector(".guess").value);
var randomNumber = getRandomNumber();
var highestScore = parseInt(document.querySelector(".highscore").textContent);
var score = parseInt(document.querySelector(".score").textContent);
const defaultMessage = document.querySelector(".message").textContent;
const lowerMessage = "Lower than my number";
const higherMessage = "Higher than my number";
const wrongInputMessage = "Please input a number between 1 - 20";

// check button, and add click event, check user is win the game
const checkBtn = document.querySelector(".btn.check");
checkBtn.addEventListener("click", () => {
  // 1. get input value
  var inputValue = parseInt(document.querySelector(".guess").value);
  // cheat log
  console.log(
    "inputValue is ",
    inputValue,
    "type is ",
    typeof inputValue,
    "randomNumber is ",
    randomNumber,
    "type is ",
    typeof randomNumber
  );
  // 2. check is not a number? score-1 : next step;
  if (isNaN(inputValue)) {
    console.log("please reinput, score-1");
  } else {
    // 3. if is a number, is equal the correct number? win : score-1 lower or higher;
    if (randomNumber === inputValue) {
      console.log("correct, you score is ???, you highest score is ???");
    } else if (randomNumber > inputValue) {
      console.log("wrong, too low, score-1");
    } else {
      console.log("wrong, too high, score-1");
    }
  }
});

// again button, and add click event to replay the game
const againBtn = document.querySelector(".btn,again");
againBtn.addEventListener("click", () => {
  randomNumber = getRandomNumber();
  console.log("replay page, highest score is ");
});

