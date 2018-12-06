/* eslint import/no-commonjs: [2, { allowRequire: true, allowPrimitiveModules: true }] */
const _ = require('lodash');
const numberData = require('./digit-map');

function ocr(sequences) {
  if (!(sequences instanceof Array)) {
    throw new Error('Data is not an array');
  }

  return _.chain(sequences)
    .chunk(108)
    .map(sequence => {
      const chunkSequence = _.chain(sequence)
        .chunk(3)
        .chunk(9)
        .value();

      return _.zip(...chunkSequence).map(digit =>
        _.chain(digit)
          .flatten()
          .dropRight(3)
          .join('')
          .value()
      );
    })
    .map(sequence =>
      sequence
        .map(digit => (digit in numberData ? numberData[digit] : '?'))
        .reverse()
    )
    .value();
}

module.exports = ocr;
