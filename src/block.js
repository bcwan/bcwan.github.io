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
  constructor(pos) {
    this.number = 5;
    this.color = "#C1FF00";//COLORS_BY_NUMBER[this.number];
    this.textColor = "#000000";
    this.block = document.createElement("div");
    this.createBlock(pos);
  }


  updateNumber() {
    this.number *= 2;
    if (COLORS_BY_NUMBER[this.number]) {
      this.color = COLORS_BY_NUMBER[this.number];
    }
  }

  createBlock(pos) {
    this.block.id = "block";
    this.block.style.backgroundColor = this.color;

    this.block.appendChild(this.createBlockNumber(this.number));
    
    this.block.style.top = `${pos[0]}px`;
    this.block.style.left = `${pos[1]}px`;

    this.block.setAttribute("top", `${pos[0]}`);
    this.block.setAttribute("left", `${pos[1]}`);

  }

  createBlockNumber(number) {
    let blockNum = document.createElement("p");
    blockNum.id = "block-num";

    blockNum.innerHTML = number;
    blockNum.textColor = this.textColor;

    return blockNum;
  }

  slideHorizontal(pos) {
    let newPos = `${pos[0]}`;
    let oldPosAttr = this.block.getAttribute("top");
    if (newPos !== oldPosAttr) {
      throw `: x-axis positions do not match: newPosition: ${newPos}, oldPosition: ${oldPosAttr} `;
    }

    let translateX = pos[1] - this.block.getAttribute("left");
    debugger;
    this.block.style.transform = `translateX(${translateX}px)`;

  }



  slideVertical(pos) {
    let newPos = `${pos[1]}`;
    let oldPosAttr = this.block.getAttribute("left");
    if (newPos !== oldPosAttr) {
      throw `: y-axis positions do not match: destPosition: ${newPos}, oldPosition: ${oldPosAttr} `;
    }
  
    let translateY = pos[0] - this.block.getAttribute("top");
    this.block.style.transform = `translateY(${translateY}px)`;

  }

}

module.exports = Block;