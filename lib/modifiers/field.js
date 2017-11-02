const { SKILL_FIELDS } = require('../definitions/skillFields');
const { namespace } = require('../../config');
/*
{
  dataType: 'Projectile',
  statObjects: [
  {
    isSubstat: false,
    fields: [
      {
        name,
        type,
        value,
        enumeration_type_name,
      },
      {
        name,
        type,
        value,
        enumeration_type_name,
      },
    ],
  },
  {
    isSubstat: false,
    fields: [
      {
        name,
        type,
        value,
        enumeration_type_name,
      },
      {
        name,
        type,
        value,
        enumeration_type_name,
      },
    ],
  }],
},

 {
 Using: "Ricochet",
 Name: "Ricochet",
 weaponModifiers:[WEAPON_MODIFIERS.BOW, WEAPON_MODIFIERS.CROSSBOW],
 }
*/

function fieldModifier(key, data) {
  const newData = [];

  data.forEach(field => {
    const newField = {
      isSubstat: false,
      fields: [],
    };

    if (field.Using) {
      newField.isSubstat = true;
    }

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
