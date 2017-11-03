const { SKILL_FIELDS } = require('../definitions/skillFields');
const { STATUS_FIELDS } = require('../definitions/statusFields');
const { namespace } = require('../../config');

function fieldModifier(key, data) {
  const newData = [];
  const nameList = {};
  
  data.forEach(field => {
    const newField = {
      isSubstat: false,
      fields: [],
    };

    if (field.Name) {
      if (nameList[field.Name]) {
        throw Error(`Duplicate skill name detected for Stat Type: ${key}. Name is: ${field.Name}`);
      }

      nameList[field.Name] = 1;
      field.Name = `GENERATED_${namespace}_${field.Name}`;
    }

    for (const [key, value] of Object.entries(field)) {
      let stat = SKILL_FIELDS[key] ? SKILL_FIELDS[key](value) : STATUS_FIELDS[key](value);
      newField.fields.push(stat);
    }

    newData.push(newField);
  });

  return {
    dataType: key,
    statObjects: newData,
  };
}

module.exports = fieldModifier;
