const util = require('util');
const xml2js = require('xml2js');
const EOL = require('os').EOL;

const { definitionsAbsolutePath } = require('../../data/config');
const { getStatFile, parseXml, fileToXml, writeFile } = require('../util');
const { SKILL_TYPES } = require('../const/skillTypes');
const { STATUS_TYPES } = require('../const/statusTypes');

const skillFiles = Object.values(SKILL_TYPES);
const statusFiles = Object.values(STATUS_TYPES);

let fieldNames = {};
let fieldNamesByCategory = {};
let fieldDefs = "";

async function loadCategory(category) {
  const filePath = getStatFile(category, definitionsAbsolutePath);
  const xml = await fileToXml(filePath);
  const xmlJson = await parseXml(xml);
  fieldNamesByCategory[category] = {};

  xmlJson.stats['stat_objects'][0]['stat_object'][0].fields[0].field.forEach(field => {
    const name = field['$'].name;
    const varName = name.split(' ').join('').toUpperCase();

    fieldNamesByCategory[category][varName] = name;
    
    if (fieldNames[varName]) return;

    const type = field['$'].type;
    const enumeration = field['$']['enumeration_type_name'];
    let fieldDef = '';

    fieldNames[varName] = name;

    fieldDef += `\t'${name}': (value) => ({ name: '${name}', type: '${type}', value`;

    if (enumeration) {
      fieldDef += `, 'enumeration_type_name': '${enumeration}'`
    }

    fieldDef += `}),${EOL}`;

    fieldDefs += fieldDef;
  });
}

async function generate() {
  let fileContents = 'const SKILL_FIELD_NAMES = ';
  let formatString = '';
  let moduleExports = '';

  for (let skillFile of skillFiles) {
    await loadCategory(skillFile);
  }

  fileContents += JSON.stringify(fieldNames);

  fileContents = fileContents.replace(new RegExp(/{/, 'g'), `{${EOL}\t`);
  fileContents = fileContents.replace(new RegExp(/,/, 'g'), `,${EOL}\t`);
  fileContents = fileContents.replace(new RegExp(/}/, 'g'), `${EOL}};${EOL}${EOL}`);

  for (let [category, categoryFieldNames] of Object.entries(fieldNamesByCategory)) {
    let varName = `${category.toUpperCase()}_NAMES`;
    formatString = `const ${varName} = `;

    formatString += JSON.stringify(categoryFieldNames);

    formatString = formatString.replace(new RegExp(/{/, 'g'), `{${EOL}\t`);
    formatString = formatString.replace(new RegExp(/,/, 'g'), `,${EOL}\t`);
    formatString = formatString.replace(new RegExp(/}/, 'g'), `${EOL}};${EOL}${EOL}`);

    fileContents += formatString;
    moduleExports += `${EOL}  ${varName},`;
  }

  fileContents += `const SKILL_FIELDS = {${EOL}`;
  fileContents += fieldDefs;
  fileContents += `};${EOL}${EOL}`;

  fileContents += (
`module.exports = {
  SKILL_FIELD_NAMES,
  SKILL_FIELDS,${moduleExports}
};`
  );

  await writeFile('./lib/fields/skillFields.js', fileContents);

  fieldNames = {};
  fieldNamesByCategory = {};
  fieldDefs = "";
  moduleExports = "";
  fileContents = 'const STATUS_FIELD_NAMES = ';
  for (let statusFile of statusFiles) {
    await loadCategory(statusFile);
  }

  fileContents += JSON.stringify(fieldNames);

  fileContents = fileContents.replace(new RegExp(/{/, 'g'), `{${EOL}\t`);
  fileContents = fileContents.replace(new RegExp(/,/, 'g'), `,${EOL}\t`);
  fileContents = fileContents.replace(new RegExp(/}/, 'g'), `${EOL}};${EOL}${EOL}`);

  for (let [category, categoryFieldNames] of Object.entries(fieldNamesByCategory)) {
    let varName = `${category.toUpperCase()}_NAMES`;
    formatString = `const ${varName} = `;

    formatString += JSON.stringify(categoryFieldNames);

    formatString = formatString.replace(new RegExp(/{/, 'g'), `{${EOL}\t`);
    formatString = formatString.replace(new RegExp(/,/, 'g'), `,${EOL}\t`);
    formatString = formatString.replace(new RegExp(/}/, 'g'), `${EOL}};${EOL}${EOL}`);

    fileContents += formatString;
    moduleExports += `${EOL}  ${varName},`;
  }

  fileContents += `const STATUS_FIELDS = {${EOL}`;
  fileContents += fieldDefs;
  fileContents += `};${EOL}${EOL}`;

  fileContents += (
`module.exports = {
  STATUS_FIELD_NAMES,
  STATUS_FIELDS,${moduleExports}
};`
  );

  await writeFile('./lib/fields/statusFields.js', fileContents);
}

generate()
  .catch(err => console.error(err));
