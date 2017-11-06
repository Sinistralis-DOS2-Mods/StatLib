const { modStoryPath } = require('../../config');
const { writeFile, ensureDirectoryExistence } = require('../util');
const { resolve } = require('path');

async function saveStory(stories) {
  for (const [filename, contents] of Object.entries(stories)) {
    if (contents !== '') {      
      const finalFile = resolve(modStoryPath, `${filename}.txt`);
      
      ensureDirectoryExistence(finalFile);
      await writeFile(finalFile, contents);    
    }
  }
}

module.exports = saveStory;
