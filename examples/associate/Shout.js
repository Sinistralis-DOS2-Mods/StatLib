const { SHOUT_NAMES } = require('../lib/definitions/skillFields');
const { STATUS_CONSUME_NAMES } = require('../lib/definitions/statusFields');
const { POTION_NAMES, WEAPON_NAMES } = require('../lib/definitions/statFields');
const { DAMAGE_TYPE } = require('../lib/definitions/enums');

const skills = [
  {
    [SHOUT_NAMES.NAME]: 'FrostCoating',
    [SHOUT_NAMES.USING]: 'VenomCoating',
    'associate': {
      turns: 2,
      chance: 100,
      Status_CONSUME: {
        [STATUS_CONSUME_NAMES.NAME]: 'FROST_COATING',
        [STATUS_CONSUME_NAMES.USING]: 'VENOM_COATING',
      },
      Potion: {
        [POTION_NAMES.NAME]: 'Stats_FrostCoating',
        [POTION_NAMES.USING]: 'Stats_VenomCoating',
      },
      Weapon: {
        [WEAPON_NAMES.NAME]: 'Status_FrostCoating',
        [WEAPON_NAMES.USING]: 'Status_VenomCoating',
        [WEAPON_NAMES.DAMAGE_TYPE]: DAMAGE_TYPE.WATER,
      },
    },
  }
];

module.exports = skills;
