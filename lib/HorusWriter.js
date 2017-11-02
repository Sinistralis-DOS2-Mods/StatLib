const { modScriptsPath, namespace } = require('../config');
const { writeFile } = require('./util');
const { resolve } = require('path');

const contents = ('//test');


async function test() {
  const fileName = resolve(modScriptsPath, `${namespace}_Test.gamescript`);  
  await writeFile(fileName, contents);
}

module.exports = test;
