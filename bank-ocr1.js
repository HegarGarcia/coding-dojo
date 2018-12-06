const _ = require("lodash");
const numberData = require("./numberMap");

function ocr(inputSequence) {
  let digitsSegments = _.chunk(inputSequence, 3).reverse();
  digitsSegments.splice(0, 9);
  digitsSegments = digitsSegments.reverse();

  const digits = [];
  const size = digitsSegments.length / 3;

  for (let i = 0; i < size; i++) {
    const firstLine = digitsSegments[i];
    const secondLine = digitsSegments[i + size];
    const thirdLine = digitsSegments[i + size * 2];

    digits.push([...firstLine, ...secondLine, ...thirdLine]);
  }

  const output = [];

  digits.forEach(digit => {
    let digitString = digit.join("");
    output.push(numberData[digitString]);
  });

  return output.reverse();
}

module.exports = ocr;
