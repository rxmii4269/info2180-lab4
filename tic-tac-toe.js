"use strict;"

window.addEventListener('load',function(){
    let squares = this.document.querySelectorAll('#board > div')

    squares.forEach(function(elem){
        elem.setAttribute('class','square')
    });

    this.console.log(squares);
});

