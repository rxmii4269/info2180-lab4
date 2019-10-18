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
        this.innerHTML = "O";
      } else if (rand === "X") {
        this.classList.add("X");
        this.innerHTML = "X";
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
