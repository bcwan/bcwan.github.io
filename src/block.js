const COLORS_BY_NUMBER = {
  5: "#DDEFE9",
  10: "#CEE2DC",
  20: "#A4DECB",
  40: "#97D297",
  80: "#78BBFFAD",
  160: "#449FFBA1",
  320: "#D5F181",
  640: "#C1FF00"
};

class Block {
  // pass in coordinates of block on grid
  constructor(pos, number) {
    this.number = number;
    this.color = COLORS_BY_NUMBER[this.number];
    this.textColor = "#000000";
    this.block = document.createElement("div");
    this.row = pos[0];
    this.column = pos[1];
    this.positionClass = `grid-${pos[0]}-${pos[1]}`;
    this.createBlock();
  }


  createBlock() {
    this.block.id = "block";
    this.block.style.backgroundColor = this.color;
    this.block.classList.add(this.positionClass);
    this.block.appendChild(this.createBlockNumber(this.number));

  }

  createBlockNumber(number) {
    let blockNum = document.createElement("p");
    blockNum.id = "block-num";

    blockNum.innerHTML = number;
    blockNum.textColor = this.textColor;

    return blockNum;
  }

}

module.exports = Block;