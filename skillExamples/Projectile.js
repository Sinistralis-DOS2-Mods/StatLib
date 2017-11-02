// A listing of all fields available for Projectile. One of these exist for each respective skill type.
const { PROJECTILE_NAMES } = require('../lib/definitions/skillFields');

// A list of all enums available within the Editor. If you use the field name helpers listed above and you have VSCode or another editor that supports JSDoc,
// intellisense you will you the ENUM to import for a given field, if required.
const { SKILL_REQUIREMENT } = require('../lib/definitions/enums');

const skills = [
  {
    [PROJECTILE_NAMES.NAME]: 'Ricochet',		
    [PROJECTILE_NAMES.USING]: 'Ricochet',
    [PROJECTILE_NAMES.DAMAGE_MULTIPLIER]: 100,
    [PROJECTILE_NAMES.REQUIREMENT]: SKILL_REQUIREMENT.RANGED_WEAPON,
  }
];

module.exports = skills;
