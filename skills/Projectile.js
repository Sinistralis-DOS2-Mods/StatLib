//const WEAPON_MODIFIERS = require('../lib/const/weaponModifiers');
const { PROJECTILE_NAMES } = require('../lib/definitions/skillFields');
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
