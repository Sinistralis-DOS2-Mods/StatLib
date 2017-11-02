//const WEAPON_MODIFIERS = require('../lib/const/weaponModifiers');
const { PROJECTILE_NAMES } = require('../lib/definitions/skillFields');
const { SKILLREQUIREMENT } = require('../lib/definitions/enums');

const skills = [
  {
    [PROJECTILE_NAMES.NAME]: 'Ricochet',		
    [PROJECTILE_NAMES.USING]: 'Ricochet',
    [PROJECTILE_NAMES.DAMAGEMULTIPLIER]: 100,
    [PROJECTILE_NAMES.REQUIREMENT]: SKILLREQUIREMENT.RANGEDWEAPON,
  }
];

module.exports = skills;
