function onStat({ stat, utils }) {
  const { skills, stats, statuses } = utils;
  const { IS_TYPE: isSkillType, SKILL_FIELDS } = skills;
  const { IS_TYPE: isStatusType, STATUS_FIELDS } = statuses;
  const { IS_TYPE: isStatType, STAT_FIELDS } = stats;

  const newDefinition = {
    isSubstat: false,
    fields: [],
  };

  if (isSkillType(stat.type) && !stat.statFields.SkillType) {
    stat.statFields.SkillType = stat.type;
  // For some reason in this one instance, Statuses are not prefixed with STATUS so we have to remove it.
  } else if (isStatusType(stat.type) && !stat.statFields.Type) {
    const statusType = stat.type.split('_');
    statusType.splice(0,1);
    stat.statFields.Type = statusType.join('_');
  }

  //TODO Move this to the XML writer. 
  for (const [key, value] of Object.entries(stat.statFields)) {
    let field;
    
    if (isSkillType(stat.type)) {
      field = SKILL_FIELDS[key](value);
    } else if (isStatusType(stat.type)) {
      field = STATUS_FIELDS[key](value);
    } else if (isStatType(stat.type)) {
      field = STAT_FIELDS[key](value);        
    } else {
      throw new Error(`Unknown stat type being processed. Stat is ${JSON.stringify(stat)}. Expected type 'skill', 'status', or 'stat'`);
    }
    
    newDefinition.fields.push(field);
  }

  return newDefinition;
}

module.exports = {
  onStat,
};
