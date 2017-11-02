const os = require('os');

const { definitionsAbsolutePath } = require('../../config');
const { getStatFile, parseXml, fileToXml, writeFile, formatEnumValue } = require('../util');
const { SKILL_TYPES } = require('../const/skillTypes');
const { STATUS_TYPES } = require('../const/statusTypes');

const skillFiles = Object.values(SKILL_TYPES);
const statusFiles = Object.values(STATUS_TYPES);
const { EOL } = os;

let fieldNames = {};
let fieldNamesByCategory = '';
let fieldDefs = '';
let moduleExports = '';

const JSDoc = {
  'NameStatObjectFieldDefinition': () => `\t* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.${EOL}`,
  'BaseClassStatObjectFieldDefinition': () => `\t* Must be the un-typed named of an ability. Ex. 'Ricochet.'${EOL}`,
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

async function generate() {
  let fileContents = 'const SKILL_FIELD_NAMES = ';
  
  for (let skillFile of skillFiles) {
    await loadCategory(skillFile);
  }

  fileContents += JSON.stringify(fieldNames);
  
  fileContents = fileContents.replace(new RegExp(/{/, 'g'), `{${EOL}\t`);
  fileContents = fileContents.replace(new RegExp(/,/, 'g'), `,${EOL}\t`);
  fileContents = fileContents.replace(new RegExp(/}/, 'g'), `${EOL}};${EOL}${EOL}`);
  
  fileContents += fieldNamesByCategory;

  fileContents += `const SKILL_FIELDS = {${EOL}`;
  fileContents += fieldDefs;
  fileContents += `};${EOL}${EOL}`;

  fileContents += (
    `module.exports = {
  SKILL_FIELD_NAMES,      
  SKILL_FIELDS,${moduleExports}
};`
  );

  await writeFile('./lib/definitions/skillFields.js', fileContents);

  fieldNames = {};
  fieldNamesByCategory = '';
  fieldDefs = '';
  moduleExports = '';
  fileContents = 'const STATUS_FIELD_NAMES = ';
  for (let statusFile of statusFiles) {
    await loadCategory(statusFile);
  }

  fileContents += JSON.stringify(fieldNames);
  
  fileContents = fileContents.replace(new RegExp(/{/, 'g'), `{${EOL}\t`);
  fileContents = fileContents.replace(new RegExp(/,/, 'g'), `,${EOL}\t`);
  fileContents = fileContents.replace(new RegExp(/}/, 'g'), `${EOL}};${EOL}${EOL}`);

  fileContents += fieldNamesByCategory;  

  fileContents += `const STATUS_FIELDS = {${EOL}`;
  fileContents += fieldDefs;
  fileContents += `};${EOL}${EOL}`;

  fileContents += (
    `module.exports = {
  STATUS_FIELD_NAMES,      
  STATUS_FIELDS,${moduleExports}
};`
  );

  await writeFile('./lib/definitions/statusFields.js', fileContents);
}

module.exports = generate;
