const { SKILL_FIELDS } = require('../definitions/skillFields');
const { namespace } = require('../../config');

function fieldModifier(key, data) {
  const newData = [];

  data.forEach(field => {
    const newField = {
      isSubstat: false,
      fields: [],
    };

    if (field.Name) {
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
