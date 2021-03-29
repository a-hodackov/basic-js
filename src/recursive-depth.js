const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, arrDepth = 1) {
    return arr.some((item) => Array.isArray(item))
      ? this.calculateDepth(arr.flat(), ++arrDepth)
      : arrDepth;
  }
};
