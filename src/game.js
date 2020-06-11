let Board = require("./board"); 
let Block = require('./block');

class Game {
  constructor() {
    this.board = new Board();
    this.setUpBoard();
    this.setUpBlockContainer();
    this.setUpScore();
  }


  setUpScore() {
    const points = document.createElement("p");
    points.id = "score";
    points.innerHTML = 0;
    document.getElementById("total-points-div").appendChild(points);
  }


  setUpBoard() {  
    const grid = document.createElement("div");
    grid.id = "grid-container";

    for (let i = 0; i < this.board.grid.length; i++) {
      let row = document.createElement("div");
      row.className = `row row-${i}`;

      for (let j = 0; j < this.board.grid[i].length; j++) {
        let square = document.createElement("div");
        square.className = `square square-${i}-${j}`;
        row.appendChild(square);
      }
      
      grid.appendChild(row);
    }

    document.getElementById("board").appendChild(grid);
  }

  setUpBlockContainer() {
    const blockContainer = document.createElement('div');
    blockContainer.id = "block-container";
    document.getElementById("board").appendChild(blockContainer);

    this.addNewBlock();
    this.addNewBlock();

  }

  addNewBlock() {
    let blockContainer = document.getElementById('block-container');
    let randRow = Math.floor(Math.random() * 5);
    let randCol = Math.floor(Math.random() * 5);
    let added = false;
    if (this.board.numberOfEmptyPos() > 0) {
      while (!added){
        if (this.board.isEmptyPos([randRow, randCol])) {
          let newBlock = new Block([randRow, randCol], 5);
          this.board.grid[randRow][randCol] = newBlock;
          blockContainer.appendChild(newBlock.block);
          added = true;
        } else {
          randRow = Math.floor(Math.random() * 5);
          randCol = Math.floor(Math.random() * 5);
        }
      }
    } else {
      this.gameOver();
    }
  }

  /// test functions for future development
  testGameOver(row, col, number) {
    let blockContainer = document.getElementById('block-container');
    let newBlock = new Block([row, col], number);
    this.board.grid[row][col] = newBlock;
    blockContainer.appendChild(newBlock.block);
  }

  buildTest(data){
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        this.testGameOver(row, col, data[row][col]);
      }
    }
  }

  gameOver() {
    let gameOverCover = document.createElement('div');
    gameOverCover.id = "game-over-cover";

    this.gameOverSetupAttr(gameOverCover, "p", "over-cover-title", "Game over!");

    let board = document.getElementById('board');
    board.appendChild(gameOverCover);
  }

  gameOverSetupAttr(cover, tagType, idName, desc) {
    let element = document.createElement(tagType);
    element.id = idName;
    element.innerHTML = desc;
    cover.appendChild(element);
  }

  // works if setUpScore is invoked, since score p-tag exists
  updateScore() {
    let newScore = this.board.currentScore();
    document.getElementById('score').innerHTML = newScore;
  }

  updateBoardMovementLeftUp(direction) {
    for (let row = 0; row < this.board.grid.length; row++) {
      for (let col = 0; col < this.board.grid[row].length; col++) {

        let blk = this.board.grid[row][col];
        if (blk !== null) {
          switch(direction) {
            case "up":
              this.mergeBlockUp(blk.positionClass);
              this.updateClassPosition(blk, 1, 
                this.board.lastEmptyPosUp(blk.positionClass)
              );
              this.updateScore();
              break;
            case "left":
              this.mergeBlockLeft(blk.positionClass);
              this.updateClassPosition(blk, 2, 
                this.board.lastEmptyPosLeft(blk.positionClass)
              );
              this.updateScore();
              break;
          }
        }

      }
    }
  }

  updateBoardMovementRightDown(direction) {
    for (let row = this.board.grid.length - 1; row >= 0; row--) {
      for (let col = this.board.grid[row].length - 1; col >= 0; col--) {
        let blk = this.board.grid[row][col];
        if (blk !== null) {
          switch (direction) {
            case "right":
              this.mergeBlockRight(blk.positionClass);
              this.updateClassPosition(blk, 2,
                this.board.lastEmptyPosRight(blk.positionClass)
              );
              this.updateScore();
              break
            case "down":
              this.mergeBlockDown(blk.positionClass);
              this.updateClassPosition(blk, 1,
                this.board.lastEmptyPosDown(blk.positionClass)
              );
              this.updateScore();
              break;
          }
        }

      }
    }
  }

  updateClassPosition(blk, indexToChange, number) {
    let parseClass = blk.positionClass.split("-");

    let oldX = parseClass[1];
    let oldY = parseClass[2];

    parseClass[indexToChange] = number.toString();

    let newX = parseClass[1];
    let newY = parseClass[2];

    parseClass = parseClass.join("-");

    this.updateGridPosition(oldX, oldY, newX, newY);

    blk.block.className = "";
    blk.block.classList.add(parseClass);
    blk.positionClass = parseClass;
  }

  updateGridPosition(oldX, oldY, newX, newY) {
    let block = this.board.grid[oldX][oldY];
    this.board.grid[oldX][oldY] = null;
    this.board.grid[newX][newY] = block;
  }

  //merging

  mergeBlockRight(posClass) {
    //find the closest block
    let pos = posClass.split("-");
    let currentRow = parseInt(pos[1]);
    let col = parseInt(pos[2]);
    let currentBlock = this.board.grid[currentRow][col];

    let oldCol = col;
    let oldRow = currentRow;
    col = col + 1;
    let nextBlock = null;

    while (col < this.board.grid[currentRow].length) {
      if (this.board.grid[currentRow][col] === null) {
        col++;
      } else {
        nextBlock = this.board.grid[currentRow][col];
        break;
      }
    }

    this.merging(nextBlock, currentBlock, oldRow, oldCol, currentRow, col);
  }

  mergeBlockLeft(posClass) {
    //find the closest block
    let pos = posClass.split("-");
    let currentRow = parseInt(pos[1]);
    let col = parseInt(pos[2]);
    let currentBlock = this.board.grid[currentRow][col];

    let oldCol = col;
    let oldRow = currentRow;
    col = col - 1;
    let nextBlock = null;

    while (col >= 0) {
      if (this.board.grid[currentRow][col] === null) {
        col--;
      } else {
        nextBlock = this.board.grid[currentRow][col];
        break;
      }
    }

    this.merging(nextBlock, currentBlock, oldRow, oldCol, currentRow, col);
  }

  mergeBlockUp(posClass) {
    //find the closest block
    let pos = posClass.split("-");
    let row = parseInt(pos[1]);
    let currentCol = parseInt(pos[2]);
    let currentBlock = this.board.grid[row][currentCol];

    let oldCol = currentCol;
    let oldRow = row;
    row = row - 1;
    let nextBlock = null;


    while (row >= 0) {
      if (this.board.grid[row][currentCol] === null) {
        row--;
      } else {
        nextBlock = this.board.grid[row][currentCol];
        break;
      }
    }

    this.merging(nextBlock, currentBlock, oldRow, oldCol, row, currentCol);
  }

  mergeBlockDown(posClass) {
    //find the closest block
    let pos = posClass.split("-");
    let row = parseInt(pos[1]);
    let currentCol = parseInt(pos[2]);
    let currentBlock = this.board.grid[row][currentCol];

    let oldCol = currentCol;
    let oldRow = row;
    row = row + 1;
    let nextBlock = null;


    while (row < this.board.grid.length) {
      if (this.board.grid[row][currentCol] === null) {
        row++;
      } else {
        nextBlock = this.board.grid[row][currentCol];
        break;
      }
    }

    this.merging(nextBlock, currentBlock, oldRow, oldCol, row, currentCol);
  }

  merging (nextBlock, currBlock, oldRow, oldCol, currRow, currCol) {
    if (nextBlock !== null && currBlock.number === nextBlock.number) {
      // delete current block
      let currentNextBlockNumber = nextBlock.number;

      currBlock.block.remove();
      this.board.grid[oldRow][oldCol] = null;

      nextBlock.block.remove();
      this.board.grid[currRow][currCol] = null;

      // add new block in place of old one
      let upgradedBlock = new Block([currRow, currCol], currentNextBlockNumber * 2);
      this.board.grid[currRow][currCol] = upgradedBlock;

      let blockContainer = document.getElementById('block-container');
      blockContainer.appendChild(upgradedBlock.block);
    }
  }


}

module.exports = Game;