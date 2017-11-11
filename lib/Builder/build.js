const path = require('path');

const enums = require('../definitions/enums');
const skills = require('../definitions/skillFields');
const stats = require('../definitions/statFields');
const statuses = require('../definitions/statusFields');
const { requireDirectory } = require('../util');
const { statModifiers } = require('../config');

const Stats = requireDirectory(path.resolve(__dirname, '../../stats'));

function build({ addStat, finalStats, statQueue, scriptExtensions, getNamespacedName }) {
  for (const [type, value] of Object.entries(Stats)) {
    finalStats[type] = [];
    value.forEach(statFields => statQueue.push({type, statFields}));
  }
  
  while (statQueue.length > 0) {
    let stat = statQueue.pop();
    let statType = stat.type;
  
    statModifiers.forEach(statModifier => {
      stat = statModifier.onStat({ stat, addStat, scriptExtensions, utils: { getNamespacedName, enums, skills, stats, statuses } });
    });

    if (!stat.statFields.isCommon) {
      stat.statFields.Name = getNamespacedName(stat.Name);
    } else {
      delete stat.statFields.isCommon;
    }

    finalStats[statType].push(stat);
  }
}

module.exports = build;
