"use strict";

window.onload = function() {
  let squares = this.document.querySelectorAll("#board > div");
  squares.forEach(function(elem) {
    elem.setAttribute("class", "square");
  });

  let divs = document.querySelectorAll(".square");
  let status = document.querySelector("#status");

  let reset = this.document.querySelector(".controls");
  reset.addEventListener("click", function() {
    status.removeChild(status.firstChild);
    status.innerHTML =
      "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");
    divs.forEach(function(el) {
      var rem = el.firstChild;
     
      try {
        el.removeChild(rem);
      } catch (error) {
        error
      }

      rem = el.lastChild;
     
    });
  });

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

      if (
        divs[0].innerHTML === "X" &&
        divs[1].innerHTML === "X" &&
        divs[2].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[3].innerHTML === "X" &&
        divs[4].innerHTML === "X" &&
        divs[5].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[6].innerHTML === "X" &&
        divs[7].innerHTML === "X" &&
        divs[8].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[0].innerHTML === "X" &&
        divs[3].innerHTML === "X" &&
        divs[6].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[1].innerHTML === "X" &&
        divs[4].innerHTML === "X" &&
        divs[7].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[2].innerHTML === "X" &&
        divs[5].innerHTML === "X" &&
        divs[8].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[0].innerHTML === "X" &&
        divs[4].innerHTML === "X" &&
        divs[8].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[2].innerHTML === "X" &&
        divs[4].innerHTML === "X" &&
        divs[6].innerHTML === "X"
      ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[0].innerHTML === "O" &&
        divs[1].innerHTML === "O" &&
        divs[2].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[3].innerHTML === "O" &&
        divs[4].innerHTML === "O" &&
        divs[5].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[6].innerHTML === "O" &&
        divs[7].innerHTML === "O" &&
        divs[8].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[0].innerHTML === "O" &&
        divs[3].innerHTML === "O" &&
        divs[6].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[1].innerHTML === "O" &&
        divs[4].innerHTML === "O" &&
        divs[7].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[2].innerHTML === "O" &&
        divs[5].innerHTML === "O" &&
        divs[8].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[0].innerHTML === "O" &&
        divs[4].innerHTML === "O" &&
        divs[8].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      } else if (
        divs[2].innerHTML === "O" &&
        divs[4].innerHTML === "O" &&
        divs[6].innerHTML === "O"
      ) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
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
