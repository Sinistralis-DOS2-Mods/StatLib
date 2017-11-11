const saveStats = require('../writers/XmlWriter');
const saveScript = require('../writers/HorusWriter');
const saveStory = require('../writers/OsirisWriter');
const { scriptExtensions } = require('../../config');

const scripts = {};
const stories = {};

async function write({ getNamespacedName, finalStats }) {
  scriptExtensions.forEach(scriptExtension => {
    if (scriptExtension.name && scriptExtension.getLibs) {
      let libs = {};

      libs = scriptExtension.getLibs();
      scripts[`SKILL_GENERATOR_LIB_${scriptExtension.name}`] = libs.script || '';
      stories[`SKILL_GENERATOR_LIB_${scriptExtension.name}`] = libs.story || '';   
    }

    if (scriptExtension.name && scriptExtension.getScripts) {
      let dict = {};
      
      dict = scriptExtension.getScripts();
      scripts[getNamespacedName(scriptExtension.name)] = dict.script || '';
      stories[getNamespacedName(scriptExtension.name)] = dict.story || ''; 
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

module.exports = write;
