const path = require('path');

const enums = require('../definitions/enums');
const skills = require('../definitions/skillFields');
const stats = require('../definitions/statFields');
const statuses = require('../definitions/statusFields');
const { requireDirectory } = require('../util');
const { statModifiers } = require('../../config');

const Stats = requireDirectory(path.resolve(__dirname, '../../stats'));
const { IS_TYPE: isSkillType, SKILL_FIELDS } = skills;
const { IS_TYPE: isStatusType, STATUS_FIELDS } = statuses;
const { IS_TYPE: isStatType, STAT_FIELDS } = stats;


function build({ addStat, finalStats, statQueue, scriptExtensions, getNamespacedName }) {
  for (const [type, value] of Object.entries(Stats)) {
    finalStats[type] = [];
    value.forEach(statFields => statQueue.push({type, statFields}));
  }
  
  while (statQueue.length > 0) {
    const finalStat = {
      isSubstat: false,
      fields: [],
    };
    let stat = statQueue.pop();
    let statType = stat.type;
  
    statModifiers.forEach(statModifier => {
      stat = statModifier.onStat({ stat, addStat, scriptExtensions, utils: { getNamespacedName, enums, skills, stats, statuses } });
    });

    if (!stat.statFields.isCommon) {
      stat.statFields.Name = getNamespacedName(stat.statFields.Name);
    } else {
      delete stat.statFields.isCommon;
    }

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
      
      finalStat.fields.push(field);
    }

    finalStats[statType].push(finalStat);
  }
}

module.exports = build;
