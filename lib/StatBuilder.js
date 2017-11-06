const path = require('path');

const saveStats = require('./writers/XmlWriter');
const saveScript = require('./writers/HorusWriter');
const saveStory = require('./writers/OsirisWriter');
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
const scripts = {};
const stories = {};

function getStatName(name) {
  return `GENERATED_${namespace}_${name}`;
}

function getCommonName(name) {
  return `SKILL_BUILDER_COMMON_LIB_${name}`;
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
  // Fire onLoad for stat modifiers so they can inject utility stats. Doing this before we load the statQueue up will make searching the stat queue much faster incase modifiers need to search it.
  statModifiers.forEach(statModifier => {
    if (statModifier.onLoad) {
      statModifier.onLoad({addStat, utils: { getStatName, getCommonName, enums, skills, stats, statuses } });      
    }
  });
  
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
      stat = statModifier.onStat({ stat, addStat, utils: { getStatName, getCommonName, enums, skills, stats, statuses } });
    });

    finalStats[statType].push(stat);
  }

  statModifiers.forEach(statModifier => {
    if (statModifier.getLibs) {
      let libs = {};
      libs = statModifier.getLibs();
      scripts[`SKILL_GENERATOR_COMMON_${statModifier.name}`] = libs.script;
      stories[`SKILL_GENERATOR_COMMON_${statModifier.name}`] = libs.story;   
    }

    if (statModifier.getDict) {
      let dict = {};
      dict = statModifier.getDict();
      scripts[getStatName(statModifier.name)] = dict.script;
      stories[getStatName(statModifier.name)] = dict.story; 
    }
  });

  for (const [type, stats] of Object.entries(finalStats)) {
    await saveStats({
      dataType: type,
      statObjects: stats,
    });

    await saveScript(scripts);
    await saveStory(stories);
  }
}

run()
  .catch(err => console.error(err));
