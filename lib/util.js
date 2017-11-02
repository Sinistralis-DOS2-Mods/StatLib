const util = require('util');
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const { StringDecoder } = require('string_decoder');

const { isSkillType } = require('./const/skillTypes');
const { isStatusType } = require('./const/statusTypes');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

function getStatFile(dataType, basePath) {
  let directory = 'noDataType';

  if (isSkillType(dataType))
    directory = 'SkillData';
  if (isStatusType(dataType))
    directory = 'StatusData';

  return path.resolve(basePath, directory, `${dataType}.stats`);
}

async function fileToXml(filePath) {
  const stringDecoder = new StringDecoder();
  let data = await readFile(filePath);

  return stringDecoder.write(data);
}

async function parseXml(xml) {
  const parser = new xml2js.Parser();

  const parseString = util.promisify(parser.parseString);

  return await parseString(xml);
}

module.exports = {
  getStatFile,
  fileToXml,
  parseXml,
  readFile,
  writeFile,
};