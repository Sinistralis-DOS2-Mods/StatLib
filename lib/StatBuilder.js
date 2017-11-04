const path = require('path');

const saveStats = require('./writers/XmlWriter');
//const saveScript = require('./writers/HorusWriter');
//const saveStory = require('./writers/OsirisWriter');
const { requireDirectory } = require('./util');
const { statModifiers, namespace } = require('../config');
const Stats = requireDirectory(path.resolve(__dirname, './../stats'));

// Inject these utilities into the modifiers so external projects can have consistent and useful nomenclature.
const enums = require('./definitions/enums');
const skills = require('./definitions/skillFields');
const stats = require('./definitions/statFields');
const statuses = require('./definitions/statusFields');

const statQueue = [];

const finalStats = {};

function getStatName(name) {
  return `GENERATED_${namespace}_${name}`;
}

function addStat(type, statFields) {
  if (skills.IS_TYPE(type) || stats.IS_TYPE(type) || statuses.IS_TYPE(type)) {
    statQueue.push({ 
      type,
      statFields 
    });
  }
}

async function run() {
  // Split everything up into {type, {stats}} so we can process each stat individually in isolation. We also initialize our final hash table since we will be iterating our types anyway.
  for (const [type, value] of Object.entries(Stats)) {
    finalStats[type] = [];
    value.forEach(statFields => statQueue.push({type, statFields}));
  }
  
  /*
    Stats can pass additional stats onto the queue. Still unsure of how to handle scripting
  */
  while (statQueue.length > 0) {
    let stat = statQueue.pop();
    let statType = stat.type;
  
    statModifiers.forEach(statModifier => {
      stat = statModifier({ stat, addStat, utils: { getStatName, enums, skills, stats, statuses } });
    });

    finalStats[statType].push(stat);
  }

  for (const [type, stats] of Object.entries(finalStats)) {
    await saveStats({
      dataType: type,
      statObjects: stats,
    });
  }
      
  //await saveScript();
  //await saveStory();
}

run()
  .catch(err => console.error(err));
