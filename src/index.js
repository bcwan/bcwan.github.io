//console.log("Webpack is working!");
let Game = require("./game"); 

document.addEventListener("DOMContentLoaded", function () {
    let game = new Game();
    
    function onKeyPressed (event) {

        let gameOverCovering = document.getElementById('game-over-cover');
        if (!gameOverCovering) {
            switch (event.which) {
                case 37: 
                    game.updateBoardMovementLeftUp("left");
                    game.addNewBlock();
                    console.log(game.board.grid);
                    break;
                case 39:  
                    game.updateBoardMovementRightDown("right");
                    game.addNewBlock();
                    console.log(game.board.grid);
                    break;
                case 38:  
                    game.updateBoardMovementLeftUp("up");
                    game.addNewBlock();
                    console.log(game.board.grid);
                    break;
                case 40: 
                    game.updateBoardMovementRightDown("down");
                    game.addNewBlock();
                    console.log(game.board.grid);
                    break;
            }
        }
    }

    function resetGame() {
        document.getElementById('board').textContent = '';
        document.getElementById('score').remove();
        game.board = null;
        game = new Game();
    }

    // listening for arrow keys
    window.onkeydown = onKeyPressed;

    // reset game
    let resetBtnOnPage = document.querySelector(".restart-btn-on-page");
    resetBtnOnPage.onclick = () => {
        resetGame();
    };

});

