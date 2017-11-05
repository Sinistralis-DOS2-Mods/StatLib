function onStat({ stat, addStat, utils }) {
  const { getStatName, skills, stats, statuses } = utils;
  const { IS_TYPE: isSkillType, SHOUT_NAMES } = skills;
  const { STATUS_CONSUME_NAMES } = statuses;
  const { POTION_NAMES, WEAPON_NAMES } = stats;

  if (isSkillType(stat.type) && stat.statFields.associate) {
    const statusName = stat.statFields.associate.Status_CONSUME ? stat.statFields.associate.Status_CONSUME[STATUS_CONSUME_NAMES.NAME] : null;
    const potionName = stat.statFields.associate.Potion ? stat.statFields.associate.Potion[POTION_NAMES.NAME] : null;
    const weaponName = stat.statFields.associate.Weapon ? stat.statFields.associate.Weapon[WEAPON_NAMES.NAME] : null;
    const turns = stat.statFields.associate.turns;
    const chance = stat.statFields.associate.chance;

    if (!statusName) {
      throw new Error(`Detected association without Status_CONSUME! Stat is ${JSON.stringify(stat)}`);
    }

    if (!potionName) {
      throw new Error(`Detected association without Potion! Stat is ${JSON.stringify(stat)}`);
    }

    if (stat.statFields[SHOUT_NAMES.SKILL_PROPERTIES]) {
      stat.statFields[SHOUT_NAMES.SKILL_PROPERTIES] = '';
    }
    stat.statFields[SHOUT_NAMES.SKILL_PROPERTIES] += `${getStatName(statusName)},${chance},${turns};`;

    stat.statFields.associate.Status_CONSUME[STATUS_CONSUME_NAMES.STATS_ID] = `${getStatName(potionName)}`;

    if (weaponName) {
      stat.statFields.associate.Potion[POTION_NAMES.BONUS_WEAPON] = `${getStatName(weaponName)}`;      
    }

    for (let [associateType, associateFields] of Object.entries(stat.statFields.associate)) {
      addStat(associateType, associateFields);
    }

    delete stat.statFields.associate;
  }

  return stat;
}


module.exports = {
  onStat,
};
