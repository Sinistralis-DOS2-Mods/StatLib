const { modScriptsPath } = require('../../config');
const { writeFile } = require('../util');
const { resolve } = require('path');

async function saveScripts(scripts) {
  for (const [filename, contents] of Object.entries(scripts)) {
    if (contents !== '') {
      await writeFile(resolve(modScriptsPath, `${filename}.gameScript`), contents);      
    }
  }
}

module.exports = saveScripts;
