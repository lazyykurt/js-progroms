"use strict";

const randomNumber = function () {
  // random float number from 0 to 19, plus 1, that be 1 to 20
  let floatRandomNumber = Math.random() * 19 + 1;
  // Math.floor() function, transform to integer
  return Math.floor(floatRandomNumber);
};

// -----------------
// TEST randomNumber() FUNCTION
// -----------------

// test the random number from 1 to 20
// console.log(randomNumber());

document.querySelector(".guess").value = 17;

console.log(document.querySelector(".guess").value);
