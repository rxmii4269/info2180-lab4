"use strict";

window.onload = function() {
  let squares = this.document.querySelectorAll("#board > div");
  squares.forEach(function(elem) {
    elem.setAttribute("class", "square");
  });

  let divs = document.querySelectorAll(".square");
  this.Object.entries(divs).map(object => {
    object[1].addEventListener("click", function() {
      var myArray = ["O", "X"];
      var rand = myArray[Math.floor(Math.random() * myArray.length)];
      if (rand === "O") {
        this.classList.add("O");
        this.classList.remove("X");
        this.innerHTML = "O";
      } else if (rand === "X") {
        this.classList.add("X");
        this.classList.remove("O");
        this.innerHTML = "X";
      }
      let status = document.querySelector("#status");
      if (
        divs[0].innerHTML === "X" &&
        divs[1].innerHTML === "X" &&
        divs[2].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        console.log("You win! 012");
      } else if (
        divs[3].innerHTML === "X" &&
        divs[4].innerHTML === "X" &&
        divs[5].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        console.log("You Win! 345");
      } else if (
        divs[6].innerHTML === "X" &&
        divs[7].innerHTML === "X" &&
        divs[8].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        console.log("You win! 678");
      } else if (
        divs[0].innerHTML === "X" &&
        divs[3].innerHTML === "X" &&
        divs[6].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        console.log("You win 036");
      } else if (
        divs[1].innerHTML === "X" &&
        divs[4].innerHTML === "X" &&
        divs[7].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        console.log("You win 147");
      } else if (
        divs[2].innerHTML === "X" &&
        divs[5].innerHTML === "X" &&
        divs[8].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        console.log("You win 258");
      } else if (
        divs[0].innerHTML === "X" &&
        divs[4].innerHTML === "X" &&
        divs[8].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        console.log("You win 048");
      } else if (
        divs[2].innerHTML === "X" &&
        divs[4].innerHTML === "X" &&
        divs[6].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        console.log("You win 046");
      } else if (
        divs[0].innerHTML === "O" &&
        divs[1].innerHTML === "O" &&
        divs[2].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        console.log("You win O012");
      } else if (
        divs[3].innerHTML === "O" &&
        divs[4].innerHTML === "O" &&
        divs[5].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        console.log("You Win! O345");
      } else if (
        divs[6].innerHTML === "O" &&
        divs[7].innerHTML === "O" &&
        divs[8].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        console.log("You win! O678");
      } else if (
        divs[0].innerHTML === "O" &&
        divs[3].innerHTML === "O" &&
        divs[6].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        console.log("You win O036");
      } else if (
        divs[1].innerHTML === "O" &&
        divs[4].innerHTML === "O" &&
        divs[7].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        console.log("You win O147");
      } else if (
        divs[2].innerHTML === "O" &&
        divs[5].innerHTML === "O" &&
        divs[8].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        console.log("You win O258");
      } else if (
        divs[0].innerHTML === "O" &&
        divs[4].innerHTML === "O" &&
        divs[8].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        console.log("You win O048");
      } else if (
        divs[2].innerHTML === "O" &&
        divs[4].innerHTML === "O" &&
        divs[6].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        console.log("You win O046");
      }
    });
    object[1].addEventListener("mouseover", function() {
      this.classList.add("hover");
    });
    object[1].addEventListener("mouseout", function() {
      this.classList.remove("hover");
    });
  });
};
