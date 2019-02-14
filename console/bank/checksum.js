/* eslint import/no-commonjs: [2, { allowRequire: true, allowPrimitiveModules: true }] */

function getChecksum(sequences = [[]]) {
  return sequences.map(sequence => {
    const checksum =
      sequence
        .reverse()
        .reduce((acc, digit, index) => acc * digit + (2 + index), 1) % 11;

    const accountNumber = sequence.join('');

    return checksum > 0
      ? `${accountNumber}  ERR`
      : accountNumber.match(/[?]/g)
      ? `${accountNumber}  ILL`
      : accountNumber;
  }).reduce((acc, sequence) => acc + sequence + '\n', '');
}

module.exports = getChecksum;
