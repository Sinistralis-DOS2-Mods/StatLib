const { modScriptsPath } = require('../../config');
const { writeFile, ensureDirectoryExistence } = require('../util');
const { resolve } = require('path');

async function saveScripts(scripts) {
  for (const [filename, contents] of Object.entries(scripts)) {
    if (contents !== '') {
      const finalFile = resolve(modScriptsPath, `${filename}.gameScript`);

      ensureDirectoryExistence(finalFile);
      await writeFile(finalFile, contents);      
    }
  }
}

module.exports = saveScripts;
