/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const COLORS_BY_NUMBER = {\n  5: \"#DDEFE9\",\n  10: \"#CEE2DC\",\n  20: \"#A4DECB\",\n  40: \"#97D297\",\n  80: \"#78BBFFAD\",\n  160: \"#449FFBA1\",\n  320: \"#D5F181\",\n  640: \"#C1FF00\"\n};\n\nclass Block {\n  // pass in coordinates of block on grid\n  constructor(pos, number) {\n    this.number = number;\n    this.color = COLORS_BY_NUMBER[this.number];\n    this.textColor = \"#000000\";\n    this.block = document.createElement(\"div\");\n    this.row = pos[0];\n    this.column = pos[1];\n    this.positionClass = `grid-${pos[0]}-${pos[1]}`;\n    this.createBlock();\n  }\n\n\n  createBlock() {\n    this.block.id = \"block\";\n    this.block.style.backgroundColor = this.color;\n    this.block.classList.add(this.positionClass);\n    this.block.appendChild(this.createBlockNumber(this.number));\n\n  }\n\n  createBlockNumber(number) {\n    let blockNum = document.createElement(\"p\");\n    blockNum.id = \"block-num\";\n\n    blockNum.innerHTML = number;\n    blockNum.textColor = this.textColor;\n\n    return blockNum;\n  }\n\n}\n\nmodule.exports = Block;\n\n//# sourceURL=webpack:///./src/block.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  static makeGrid() {\n    const grid = [];\n    for (let i = 0; i < 5; i++) {\n      grid.push([]);\n      for (let j = 0; j < 5; j++) {\n        grid[i].push(null);\n      }\n    }\n    return grid;\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos))\n      throw `Invalid position x: ${pos[0]}, y: ${pos[1]}`;\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  static isValidPos(pos) {\n    return ((0 <= pos[0]) && (pos[0] < 5) && (0 <= pos[1]) && (pos[1] < 5));\n  }\n\n  currentScore() {\n    let score = 0;\n    for(let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid[i].length; j++) {\n        if (this.grid[i][j] !== null) {\n          score += this.grid[i][j];\n        }\n      }\n    }\n    return score;\n  }\n\n  clearBoard() {\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid[i].length; j++) {\n        if (this.grid[i][j] !== null) {\n          this.grid[i][j] = null;\n        }\n      }\n    }\n  }\n\n  lastEmptyPosUp(posClass) {\n    let pos = posClass.split(\"-\");\n    let row = parseInt(pos[1]);\n    let currentCol = parseInt(pos[2]);\n\n    row = row - 1;\n    while (row >= 0) {\n      if (this.grid[row][currentCol] === null) {\n        row--;\n      } else {\n        return row + 1;\n      }\n    }\n    return 0;\n  }\n\n  lastEmptyPosDown(posClass) {\n    let pos = posClass.split(\"-\");\n    let row = parseInt(pos[1]);\n    let currentCol = parseInt(pos[2]);\n\n    row = row + 1;\n    while (row <= this.grid.length - 1) {\n      if (this.grid[row][currentCol] === null) {\n        row++;\n      } else {\n        return row - 1;\n      }\n    }\n    return this.grid.length - 1;\n  }\n\n  lastEmptyPosLeft(posClass) {\n    let pos = posClass.split(\"-\");\n    let currentRow = parseInt(pos[1]);\n    let col = parseInt(pos[2]);\n    col = col - 1;\n    while (col >= 0) {\n      if (this.grid[currentRow][col] === null) {\n        col--;\n      } else {\n        return col + 1;\n      }\n    }\n    return 0;\n  }\n\n  lastEmptyPosRight(posClass) {\n    let pos = posClass.split(\"-\");\n    let currentRow = parseInt(pos[1]);\n    let col = parseInt(pos[2]);\n    \n    col = col + 1;\n    while (col <= this.grid[currentRow].length) {\n      if (this.grid[currentRow][col] === null) {\n        col++;\n      } else {\n        return col - 1;\n      }\n    }\n    return this.grid[currentRow].length - 1;\n  }\n\n}\n\n\n\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let Board = __webpack_require__(/*! ./board */ \"./src/board.js\"); \nlet Block = __webpack_require__(/*! ./block */ \"./src/block.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.setUpBoard();\n    this.setUpBlockContainer();\n  }\n\n  setUpBoard() {  \n    const grid = document.createElement(\"div\");\n    grid.id = \"grid-container\";\n\n    for (let i = 0; i < this.board.grid.length; i++) {\n      let row = document.createElement(\"div\");\n      row.className = `row row-${i}`;\n\n      for (let j = 0; j < this.board.grid[i].length; j++) {\n        let square = document.createElement(\"div\");\n        square.className = `square square-${i}-${j}`;\n        row.appendChild(square);\n      }\n      \n      grid.appendChild(row);\n    }\n\n    document.getElementById(\"board\").appendChild(grid);\n  }\n\n  setUpBlockContainer() {\n    const blockContainer = document.createElement('div');\n    blockContainer.id = \"block-container\";\n    document.getElementById(\"board\").appendChild(blockContainer);\n\n    this.addNewBlock();\n    this.addNewBlock();\n  }\n\n  addNewBlock () {\n    let blockContainer = document.getElementById('block-container');\n    let randRow = Math.floor(Math.random() * 5);\n    let randCol = Math.floor(Math.random() * 5);\n    let added = false;\n    while (!added){\n      if (this.board.isEmptyPos([randRow, randCol])) {\n        let newBlock = new Block([randRow, randCol], 5);\n        this.board.grid[randRow][randCol] = newBlock;\n        blockContainer.appendChild(newBlock.block);\n        added = true;\n      } else {\n        randRow = Math.floor(Math.random() * 5);\n        randCol = Math.floor(Math.random() * 5);\n      }\n    }\n  }\n\n  updateBoardMovementLeftUp(direction) {\n    for (let row = 0; row < this.board.grid.length; row++) {\n      for (let col = 0; col < this.board.grid[row].length; col++) {\n\n        let blk = this.board.grid[row][col];\n        if (blk !== null) {\n          switch(direction) {\n            case \"up\":\n              this.mergeBlockUp(blk.positionClass);\n              this.updateClassPosition(blk, 1, \n                this.board.lastEmptyPosUp(blk.positionClass)\n              );\n              break;\n            case \"left\":\n              this.mergeBlockLeft(blk.positionClass);\n              this.updateClassPosition(blk, 2, \n                this.board.lastEmptyPosLeft(blk.positionClass)\n              );\n              break;\n          }\n        }\n\n      }\n    }\n  }\n\n  updateBoardMovementRightDown(direction) {\n    for (let row = this.board.grid.length - 1; row >= 0; row--) {\n      for (let col = this.board.grid[row].length - 1; col >= 0; col--) {\n        let blk = this.board.grid[row][col];\n        if (blk !== null) {\n          switch (direction) {\n            case \"right\":\n              this.mergeBlockRight(blk.positionClass);\n              this.updateClassPosition(blk, 2,\n                this.board.lastEmptyPosRight(blk.positionClass)\n              );\n              break\n            case \"down\":\n              this.mergeBlockDown(blk.positionClass);\n              this.updateClassPosition(blk, 1,\n                this.board.lastEmptyPosDown(blk.positionClass)\n              );\n              break;\n          }\n        }\n\n      }\n    }\n  }\n\n  updateClassPosition(blk, indexToChange, number) {\n    let parseClass = blk.positionClass.split(\"-\");\n\n    let oldX = parseClass[1];\n    let oldY = parseClass[2];\n\n    parseClass[indexToChange] = number.toString();\n\n    let newX = parseClass[1];\n    let newY = parseClass[2];\n\n    parseClass = parseClass.join(\"-\");\n\n    this.updateGridPosition(oldX, oldY, newX, newY);\n\n    blk.block.className = \"\";\n    blk.block.classList.add(parseClass);\n    blk.positionClass = parseClass;\n  }\n\n  updateGridPosition(oldX, oldY, newX, newY) {\n    let block = this.board.grid[oldX][oldY];\n    this.board.grid[oldX][oldY] = null;\n    this.board.grid[newX][newY] = block;\n  }\n\n  //merging\n\n  mergeBlockRight(posClass) {\n    //find the closest block\n    let pos = posClass.split(\"-\");\n    let currentRow = parseInt(pos[1]);\n    let col = parseInt(pos[2]);\n    let currentBlock = this.board.grid[currentRow][col];\n\n    let oldCol = col;\n    let oldRow = currentRow;\n    col = col + 1;\n    let nextBlock = null;\n\n    while (col < this.board.grid[currentRow].length) {\n      if (this.board.grid[currentRow][col] === null) {\n        col++;\n      } else {\n        nextBlock = this.board.grid[currentRow][col];\n        break;\n      }\n    }\n\n    this.merging(nextBlock, currentBlock, oldRow, oldCol, currentRow, col);\n  }\n\n  mergeBlockLeft(posClass) {\n    //find the closest block\n    let pos = posClass.split(\"-\");\n    let currentRow = parseInt(pos[1]);\n    let col = parseInt(pos[2]);\n    let currentBlock = this.board.grid[currentRow][col];\n\n    let oldCol = col;\n    let oldRow = currentRow;\n    col = col - 1;\n    let nextBlock = null;\n\n    while (col >= 0) {\n      if (this.board.grid[currentRow][col] === null) {\n        col--;\n      } else {\n        nextBlock = this.board.grid[currentRow][col];\n        break;\n      }\n    }\n\n    this.merging(nextBlock, currentBlock, oldRow, oldCol, currentRow, col);\n  }\n\n  mergeBlockUp(posClass) {\n    //find the closest block\n    let pos = posClass.split(\"-\");\n    let row = parseInt(pos[1]);\n    let currentCol = parseInt(pos[2]);\n    let currentBlock = this.board.grid[row][currentCol];\n\n    let oldCol = currentCol;\n    let oldRow = row;\n    row = row - 1;\n    let nextBlock = null;\n\n\n    while (row >= 0) {\n      if (this.board.grid[row][currentCol] === null) {\n        row--;\n      } else {\n        nextBlock = this.board.grid[row][currentCol];\n        break;\n      }\n    }\n\n    this.merging(nextBlock, currentBlock, oldRow, oldCol, row, currentCol);\n  }\n\n  mergeBlockDown(posClass) {\n    //find the closest block\n    let pos = posClass.split(\"-\");\n    let row = parseInt(pos[1]);\n    let currentCol = parseInt(pos[2]);\n    let currentBlock = this.board.grid[row][currentCol];\n\n    let oldCol = currentCol;\n    let oldRow = row;\n    row = row + 1;\n    let nextBlock = null;\n\n\n    while (row < this.board.grid.length) {\n      if (this.board.grid[row][currentCol] === null) {\n        row++;\n      } else {\n        nextBlock = this.board.grid[row][currentCol];\n        break;\n      }\n    }\n\n    this.merging(nextBlock, currentBlock, oldRow, oldCol, row, currentCol);\n  }\n\n  merging (nextBlock, currBlock, oldRow, oldCol, currRow, currCol) {\n    if (nextBlock !== null && currBlock.number === nextBlock.number) {\n      // delete current block\n      let currentNextBlockNumber = nextBlock.number;\n\n      currBlock.block.remove();\n      this.board.grid[oldRow][oldCol] = null;\n\n      nextBlock.block.remove();\n      this.board.grid[currRow][currCol] = null;\n\n      // add new block in place of old one\n      let upgradedBlock = new Block([currRow, currCol], currentNextBlockNumber * 2);\n      this.board.grid[currRow][currCol] = upgradedBlock;\n\n      let blockContainer = document.getElementById('block-container');\n      blockContainer.appendChild(upgradedBlock.block);\n    }\n  }\n\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//console.log(\"Webpack is working!\");\nlet Game = __webpack_require__(/*! ./game */ \"./src/game.js\"); \nlet Block = __webpack_require__(/*! ./block */ \"./src/block.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    let game = new Game();\n\n    function onKeyPressed (event) {\n        \n        switch (event.which) {\n            case 37: \n                game.updateBoardMovementLeftUp(\"left\");\n                game.addNewBlock();\n                console.log(game.board.grid);\n                break;\n            case 39:  \n                game.updateBoardMovementRightDown(\"right\");\n                game.addNewBlock();\n                console.log(game.board.grid);\n                break;\n            case 38:  \n                game.updateBoardMovementLeftUp(\"up\");\n                game.addNewBlock();\n                console.log(game.board.grid);\n                break;\n            case 40: \n                game.updateBoardMovementRightDown(\"down\");\n                game.addNewBlock();\n                console.log(game.board.grid);\n                break;\n        }\n    }\n\n    function resetGame() {\n        document.getElementById('board').textContent = '';\n        game.board = null;\n        game = new Game();\n    }\n\n    // listening for arrow keys\n    window.onkeydown = onKeyPressed;\n\n    // reset game\n    let resetBtn = document.querySelector(\".restart-btn\");\n    resetBtn.onclick = () => {\n        resetGame();\n    };\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });