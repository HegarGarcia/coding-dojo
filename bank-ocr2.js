const fs = require("fs");
const _ = require("lodash");
const ocr = require("./bank-ocr1");

const file = fs.readFileSync("use_case_1_in.txt", { encoding: "utf8" });
const fileArray = Array.from(file).filter(char => char !== "\n");
const sequenceArray = _.chunk(fileArray, 108);

for (const sequence of sequenceArray) {
  const accountNumber = ocr(sequence);
  console.log(accountNumber);
  const isValidAccountNumber = getChecksum(accountNumber);
  
  const account = accountNumber.join("");

  if (isValidAccountNumber === 0) {
    console.log(`It's a valid account number ${account}`);
  } else {
    console.log(`It's not a valid account number ${account}`);
  }
}

function getChecksum(accountNumber = []) {
  const positions = accountNumber.reverse();
  return positions.reduce((acc, digit, index) => {
    return acc * digit + (2 + index)
  }, 1) % 11;
}
