const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  answer: "",
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    typeof value !== "undefined"
      ? this.chain.push(`${value}`)
      : this.chain.push("( )");
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.answer = this.chain.join(" )~~( ");
    this.chain = [];
    return `( ${this.answer} )`;
  },
};

module.exports = chainMaker;
