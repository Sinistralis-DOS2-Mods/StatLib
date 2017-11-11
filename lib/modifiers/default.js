function onStat({ stat, utils }) {
  const { skills, statuses } = utils;
  const { IS_TYPE: isSkillType } = skills;
  const { IS_TYPE: isStatusType } = statuses;

  if (isSkillType(stat.type) && !stat.statFields.SkillType) {
    stat.statFields.SkillType = stat.type;
  // For some reason in this one instance, Statuses are not prefixed with STATUS so we have to remove it.
  } else if (isStatusType(stat.type) && !stat.statFields.Type) {
    const statusType = stat.type.split('_');
    statusType.splice(0,1);
    stat.statFields.Type = statusType.join('_');
  }

  return stat;
}

module.exports = {
  onStat,
};
