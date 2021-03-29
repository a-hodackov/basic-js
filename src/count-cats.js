const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  const newMatrix = matrix.flat();
  for (let i in newMatrix) {
    if (newMatrix[i] == "^^") {
      result += 1;
    }
  }
  return result;
};
