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

eval("const COLORS_BY_NUMBER = {\n  5: \"#DDEFE9\",\n  10: \"#CEE2DC\",\n  20: \"#A4DECB\",\n  40: \"#97D297\",\n  80: \"#78BBFFAD\",\n  160: \"#449FFBA1\",\n  320: \"#D5F181\",\n  640: \"#C1FF00\"\n};\n\nclass Block {\n  // pass in coordinates of block on grid\n  constructor(pos) {\n    this.number = 5;\n    this.color = \"#C1FF00\";//COLORS_BY_NUMBER[this.number];\n    this.textColor = \"#000000\";\n    this.block = document.createElement(\"div\");\n    this.createBlock(pos);\n  }\n\n\n  updateNumber() {\n    this.number *= 2;\n    if (COLORS_BY_NUMBER[this.number]) {\n      this.color = COLORS_BY_NUMBER[this.number];\n    }\n  }\n\n  createBlock(pos) {\n    this.block.id = \"block\";\n    this.block.style.backgroundColor = this.color;\n\n    this.block.appendChild(this.createBlockNumber(this.number));\n    \n    this.block.style.top = `${pos[0]}px`;\n    this.block.style.left = `${pos[1]}px`;\n\n    this.block.setAttribute(\"top\", `${pos[0]}`);\n    this.block.setAttribute(\"left\", `${pos[1]}`);\n\n  }\n\n  createBlockNumber(number) {\n    let blockNum = document.createElement(\"p\");\n    blockNum.id = \"block-num\";\n\n    blockNum.innerHTML = number;\n    blockNum.textColor = this.textColor;\n\n    return blockNum;\n  }\n\n  slideHorizontal(pos) {\n    let newPos = `${pos[0]}`;\n    let oldPosAttr = this.block.getAttribute(\"top\");\n    if (newPos !== oldPosAttr) {\n      throw `: x-axis positions do not match: newPosition: ${newPos}, oldPosition: ${oldPosAttr} `;\n    }\n\n    let translateX = pos[1] - this.block.getAttribute(\"left\");\n    debugger;\n    this.block.style.transform = `translateX(${translateX}px)`;\n\n  }\n\n\n\n  slideVertical(pos) {\n    let newPos = `${pos[1]}`;\n    let oldPosAttr = this.block.getAttribute(\"left\");\n    if (newPos !== oldPosAttr) {\n      throw `: y-axis positions do not match: destPosition: ${newPos}, oldPosition: ${oldPosAttr} `;\n    }\n  \n    let translateY = pos[0] - this.block.getAttribute(\"top\");\n    this.block.style.transform = `translateY(${translateY}px)`;\n\n  }\n\n}\n\nmodule.exports = Block;\n\n//# sourceURL=webpack:///./src/block.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const GRID_TO_ARRAY_COOR = {\n//   [0, 0]: { className: \"grid-0-0\" },\n//   [0, 1]: { className: \"grid-0-1\" },\n//   [0, 2]: { className: \"grid-0-2\" },\n//   [0, 3]: { className: \"grid-0-3\" },\n//   [0, 4]: { className: \"grid-0-4\" },\n//   [1, 0]: { className: \"grid-1-0\" },\n//   [1, 1]: { className: \"grid-1-1\" },\n//   [1, 2]: { className: \"grid-1-2\" },\n//   [1, 3]: { className: \"grid-1-3\" },\n//   [1, 4]: { className: \"grid-1-4\" },\n//   [2, 0]: { className: \"grid-2-0\" },\n//   [2, 1]: { className: \"grid-2-1\" },\n//   [2, 2]: { className: \"grid-2-2\" },\n//   [2, 3]: { className: \"grid-2-3\" },\n//   [2, 4]: { className: \"grid-2-4\" },\n//   [3, 0]: { className: \"grid-3-0\" },\n//   [3, 1]: { className: \"grid-3-1\" },\n//   [3, 2]: { className: \"grid-3-2\" },\n//   [3, 3]: { className: \"grid-3-3\" },\n//   [3, 4]: { className: \"grid-3-4\" },\n//   [4, 0]: { className: \"grid-4-0\" },\n//   [4, 1]: { className: \"grid-4-1\" },\n//   [4, 2]: { className: \"grid-4-2\" },\n//   [4, 3]: { className: \"grid-4-3\" },\n//   [4, 4]: { className: \"grid-4-4\" }\n// };\n\nclass Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  static makeGrid() {\n    const grid = [];\n    for (let i = 0; i < 5; i++) {\n      grid.push([]);\n      for (let j = 0; j < 5; j++) {\n        grid[i].push(null);\n      }\n    }\n    return grid;\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos))\n      throw `Invalid position x: ${pos[0]}, y: ${pos[1]}`;\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  static isValidPos(pos) {\n    return ((0 <= pos[0]) && (pos[0] < 5) && (0 <= pos[1]) && (pos[1] < 5));\n  }\n\n  currentScore() {\n    let score = 0;\n    for(let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid[i].length; j++) {\n        if (this.grid[i][j] !== null) {\n          score += this.grid[i][j];\n        }\n      }\n    }\n    return score;\n  }\n\n  clearBoard() {\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid[i].length; j++) {\n        if (this.grid[i][j] !== null) {\n          this.grid[i][j] = null;\n        }\n      }\n    }\n  }\n\n}\n\n\n\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let Board = __webpack_require__(/*! ./board */ \"./src/board.js\"); \nlet Block = __webpack_require__(/*! ./block */ \"./src/block.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.setUpBoard();\n    this.setUpBlockContainer();\n  }\n\n  setUpBoard() {  \n    const grid = document.createElement(\"div\");\n    grid.id = \"grid-container\";\n\n    for (let i = 0; i < this.board.grid.length; i++) {\n      let row = document.createElement(\"div\");\n      row.className = `row row-${i}`;\n\n      for (let j = 0; j < this.board.grid[i].length; j++) {\n        let square = document.createElement(\"div\");\n        square.className = `square square-${i}-${j}`;\n        row.appendChild(square);\n      }\n      \n      grid.appendChild(row);\n    }\n\n    document.getElementById(\"board\").appendChild(grid);\n  }\n\n  setUpBlockContainer() {\n    const blockContainer = document.createElement('div');\n    blockContainer.id = \"block-container\";\n    document.getElementById(\"board\").appendChild(blockContainer);\n  }\n\n  \n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//console.log(\"Webpack is working!\");\nlet Game = __webpack_require__(/*! ./game */ \"./src/game.js\"); \nlet Block = __webpack_require__(/*! ./block */ \"./src/block.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const game = new Game();\n    \n    // test code\n    // let testBlock = new Block([15, 15]);\n    // let grid = document.querySelector(\"#board\");\n    // grid.appendChild(testBlock.block);\n\n    // console.log(\"Slide left to right\");\n    // testBlock.slideHorizontal([15, 375])\n\n\n    // testBlock.slideVertical([375, 375]);\n    \n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });