/* eslint 
  import/no-nodejs-modules: ["error", {"allow": ["fs", "util", "path"]}] 
  import/no-commonjs: [2, { allowRequire: true, allowPrimitiveModules: true }] 
*/
const fs = require('fs');
const { promisify } = require('util');
const { join } = require('path');
const exists = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function importFile(path) {
  if (!path) {
    console.error('No file path provided');
    return;
  }
  const filePath = join(__dirname, path);
  const fileExists = await exists(filePath).catch(e => {
    throw e;
  });

  if (!fileExists) {
    console.error('File does not exists');
    return;
  }

  const fileBuffer = await readFile(filePath, { encoding: 'utf8' });
  return Array.from(fileBuffer).filter(char => char !== '\n');
}

async function exportFile(path, data) {
  await writeFile(path, data).catch(e => console.log(e));
}

module.exports = { importFile, exportFile };
