const CustomError = require("../extensions/custom-error");
const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

class VigenereCipheringMachine {
  constructor(isReverse = true) {
    this.isReverse = !isReverse;
  }

  encrypt(message, key) {
    let encryptedMessage = [];
    let index = 0;
    encryptedMessage = message
      .toLowerCase()
      .split("")
      .map((symbol) => {
        if (/[A-Za-z]/.test(symbol)) {
          let symbolNumber = ALPHABET.indexOf(symbol);

          let keyNumber = ALPHABET.indexOf(
            key[index % key.length].toLowerCase()
          );
          index++;
          return ALPHABET[(symbolNumber + keyNumber) % 26];
        } else {
          return symbol;
        }
      })
      .join("")
      .toUpperCase();
    return this.isReverse
      ? encryptedMessage.split("").reverse().join("")
      : encryptedMessage;
  }

  decrypt(message, key) {
    let decryptedMessage = [];
    let index = 0;
    decryptedMessage = message
      .toLowerCase()
      .split("")
      .map((symbol) => {
        if (/[A-Za-z]/.test(symbol)) {
          let symbolNumber = ALPHABET.indexOf(symbol);
          let keyNumber = ALPHABET.indexOf(
            key[index % key.length].toLowerCase()
          );
          index++;
          return ALPHABET[(26 + symbolNumber - keyNumber) % 26];
        } else {
          return symbol;
        }
      })
      .join("")
      .toUpperCase();
    return this.isReverse
      ? decryptedMessage.split("").reverse().join("")
      : decryptedMessage;
  }
}

module.exports = VigenereCipheringMachine;
