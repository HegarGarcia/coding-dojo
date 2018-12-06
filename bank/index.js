/* eslint import/no-commonjs: [2, { allowRequire: true }] */
const { importFile, exportFile } = require('./file')
const ocr = require('./ocr');
const validate = require('./checksum');
// const output = require('./output');

(async function() {
  const fileData = await importFile(process.argv[2]);
  const sequences = ocr(fileData);
  const validSequences = validate(sequences);
  console.log(validSequences)
  const fileName = process.argv[3] || 'result';
  exportFile(fileName, validSequences)
})();


