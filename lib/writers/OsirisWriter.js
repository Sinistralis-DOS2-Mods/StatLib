const { modStoryPath } = require('../../config');
const { writeFile } = require('../util');
const { resolve } = require('path');

async function saveStory(stories) {
  for (const [filename, contents] of Object.entries(stories)) {
    if (contents !== '') {      
      await writeFile(resolve(modStoryPath, `${filename}.txt`), contents);    
    }
  }
}

module.exports = saveStory;
