const os = require('os');

const { definitionsAbsolutePath } = require('../../config');
const { getStatFile, parseXml, fileToXml, writeFile, formatEnumValue } = require('../util');
const { SKILL_TYPES } = require('../const/skillTypes');
const { STATUS_TYPES } = require('../const/statusTypes');
const { STAT_TYPES } = require('../const/statTypes');

const skillFiles = Object.values(SKILL_TYPES);
const statusFiles = Object.values(STATUS_TYPES);
const statFiles = Object.values(STAT_TYPES);

const { EOL } = os;

let categoryNames = {};
let fieldNames = {};
let fieldNamesByCategory = '';
let fieldDefs = '';
let moduleExports = '';

const JSDoc = {
  'NameStatObjectFieldDefinition': () => `\t* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.${EOL}`,
  'BaseClassStatObjectFieldDefinition': () => `\t* Must be the un-typed named of an ability. Ex. 'Ricochet.'${EOL}`,
  'RootTemplateStatObjectFieldDefinition': () => `\t* Must be a uuid of an existing root template in the editor.${EOL}`,
  'CommentStatObjectFieldDefinition': () => `\t* You can put any string value in here for reference later.${EOL}`,
  'StringStatObjectFieldDefinition': () => `\t* Can be any string value. Ex. 'SomeValue'${EOL}`,
  'IntegerStatObjectFieldDefinition': () => `\t* Must be a string representation of an integer. This is not currently validated. Ex. '12'${EOL}`,
  'TranslatedStringStatObjectFieldDefinition': () => `\t* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'${EOL}`,
  'EnumerationStatObjectFieldDefinition': (statEnum) => {
    const varName = formatEnumValue(statEnum);
    return `\t* Value must be one of the values from the ${varName} enum. You can import this via const { ${varName} } = require('./lib/definitions/enums');${EOL}`;
  },
};

/**
  
  @param {*} category 
 */
async function loadCategory(category) {
  const filePath = getStatFile(category, definitionsAbsolutePath);
  const xml = await fileToXml(filePath);
  const xmlJson = await parseXml(xml);
  const categoryName = category.toUpperCase();
  categoryNames[category] = 1;
  fieldNamesByCategory += `const ${categoryName}_NAMES = {${EOL}`;

  xmlJson.stats['stat_objects'][0]['stat_object'][0].fields[0].field.forEach(field => {
    const name = field['$'].name;
    const varName = formatEnumValue(name);

    fieldNamesByCategory += `\t/**${EOL}`;
    fieldNamesByCategory += JSDoc[field['$'].type](field['$'].enumeration_type_name);
    fieldNamesByCategory += `\t*/${EOL}`;
    fieldNamesByCategory += `\t'${varName}': '${name}',${EOL}`;
    
    if (fieldNames[varName]) return;

    const type = field['$'].type;
    const enumeration = field['$']['enumeration_type_name'];
    let fieldDef = '';

    fieldNames[varName] = name;

    fieldDef += `\t'${name}': (value) => ({ name: '${name}', type: '${type}', value`;

    if (enumeration) {
      fieldDef += `, 'enumeration_type_name': '${enumeration}'`;
    }

    fieldDef += `}),${EOL}`;

    fieldDefs += fieldDef;
  });

  fieldNamesByCategory += `};${EOL}${EOL}`;
  moduleExports += `${EOL}  ${categoryName}_NAMES,`;
}

async function printDefinition(fieldType) {
  let fileContents = '';
  let fieldsDeclare = '';
  let directory = '';

  switch (fieldType) {
  case 'skillFields':
    fieldsDeclare = 'SKILL_FIELD';
    directory = './lib/definitions/skillFields.js';
    break;
  case 'statusFields':
    fieldsDeclare = 'STATUS_FIELD';
    directory = './lib/definitions/statusFields.js';
    break;
  case 'statFields':
    fieldsDeclare = 'STAT_FIELD';
    directory = './lib/definitions/statFields.js';
    break;
  }

  fileContents += 'const CATEGORY_NAMES = ';
  fileContents += JSON.stringify(categoryNames);

  fileContents += `const ${fieldsDeclare}_NAMES = `;
  fileContents += JSON.stringify(fieldNames);
  
  fileContents = fileContents.replace(/{/g, `{${EOL}\t`);
  fileContents = fileContents.replace(/,/g, `,${EOL}\t`);
  fileContents = fileContents.replace(/}/g, `${EOL}};${EOL}${EOL}`);
  
  fileContents += fieldNamesByCategory;

  fileContents += `const ${fieldsDeclare}S = {${EOL}`;
  fileContents += fieldDefs;
  fileContents += `};${EOL}${EOL}`;

  fileContents += `const IS_TYPE = (value) => CATEGORY_NAMES[value];${EOL}${EOL}`;

  fileContents += (
    `module.exports = {
  IS_TYPE,
  ${fieldsDeclare}_NAMES,
  ${fieldsDeclare}S,${moduleExports}    
}`
  );

  await writeFile(directory, fileContents);

  fieldNames = {};
  fieldNamesByCategory = '';
  fieldDefs = '';
  moduleExports = '';
  categoryNames = {};
}

async function generate() {
  for (let skillFile of skillFiles) {
    await loadCategory(skillFile);
  }

  await printDefinition('skillFields');

  for (let statusFile of statusFiles) {
    await loadCategory(statusFile);
  }

  await printDefinition('statusFields');

  for (let statFile of statFiles) {
    await loadCategory(statFile);
  }

  await printDefinition('statFields');
}

module.exports = generate;
