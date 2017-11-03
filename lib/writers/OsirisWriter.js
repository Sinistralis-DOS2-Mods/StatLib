const { modStoryPath, namespace } = require('../config');
const { writeFile } = require('./util');
const { resolve } = require('path');

const osirisScriptDefinition = require('./definitions/osirisScript');

const contents = osirisScriptDefinition('', '//test', '');

async function test() {
  await writeFile(resolve(modStoryPath, `${namespace}_Test.txt`), contents);
}

module.exports = test;
