//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    
    // test code
    // let testBlock = new Block([15, 15]);
    // let grid = document.querySelector("#board");
    // grid.appendChild(testBlock.block);

    // console.log("Slide left to right");
    // testBlock.slideHorizontal([15, 375])


    // testBlock.slideVertical([375, 375]);
    
});

