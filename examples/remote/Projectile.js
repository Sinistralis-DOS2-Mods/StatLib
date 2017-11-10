const { PROJECTILE_NAMES } = require('../lib/definitions/skillFields');
const { DAMAGE_TYPE, DEATH_TYPE, SKILL_ABILITY } = require('../lib/definitions/enums');

const skills = [
  {
    [PROJECTILE_NAMES.NAME]: 'PyroclasticRock',
    [PROJECTILE_NAMES.USING]: 'PyroclasticRock',
    [PROJECTILE_NAMES.COOLDOWN]: '2',    
    [PROJECTILE_NAMES.DAMAGE_MULTIPLIER]: 65,
    [PROJECTILE_NAMES.DAMAGE_RANGE]: 10,
    [PROJECTILE_NAMES.DESCRIPTION]: 'Lob a giant rock filled with sticky oil that will deal [1] and physical damage on landing creating a pool of oil, slowing enemies trapped within.',
    [PROJECTILE_NAMES.STATS_DESCRIPTION_PARAMS]: 'Damage',
    remote: {
      [PROJECTILE_NAMES.ABILITY]: SKILL_ABILITY.EARTH,
      [PROJECTILE_NAMES.DAMAGE_MULTIPLIER]: 65,
      [PROJECTILE_NAMES.DAMAGE_RANGE]: 10,
      [PROJECTILE_NAMES.DAMAGE_TYPE]: DAMAGE_TYPE.PHYSICAL,
      [PROJECTILE_NAMES.DEATH_TYPE]: DEATH_TYPE.PHYSICAL,
      [PROJECTILE_NAMES.EXPLODE_RADIUS]: 0,
      [PROJECTILE_NAMES.TEMPLATE]: '71251b25-90b3-4332-afce-d9fcb6d88381',
    }
  }
];

module.exports = skills;
