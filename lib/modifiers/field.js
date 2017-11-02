const { SKILL_FIELDS } = require('../definitions/skillFields');
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
      newField.fields.push(SKILL_FIELDS[key](value));
    }

    newData.push(newField);
  });

  return {
    dataType: key,
    statObjects: newData,
  };
}

module.exports = fieldModifier;
