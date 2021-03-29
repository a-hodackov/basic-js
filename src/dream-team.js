const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
  if (!Array.isArray(team)) {
    return false;
  }
  let result = [];
  for (let i = 0; i < team.length; i++) {
    if (typeof team[i] == "string") {
      result.push(team[i].trim()[0].toUpperCase());
    }
  }
  return result.sort().join("");
};
