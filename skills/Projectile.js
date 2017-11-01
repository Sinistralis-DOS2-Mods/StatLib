const WEAPON_MODIFIERS = require('../lib/const/weaponModifiers');
const { PROJECTILE_NAMES } = require('../lib/fields/skillFields');

const skills = [
  {
    [PROJECTILE_NAMES.USING]: "Ricochet",
    [PROJECTILE_NAMES.NAME]: "Ricochet",
    [PROJECTILE_NAMES.DAMAGEMULTIPLIER]: 100,
    weaponModifiers:[WEAPON_MODIFIERS.BOW, WEAPON_MODIFIERS.CROSSBOW],
  }
];

module.exports = skills;