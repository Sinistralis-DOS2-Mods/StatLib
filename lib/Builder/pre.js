const enums = require('../definitions/enums');
const skills = require('../definitions/skillFields');
const stats = require('../definitions/statFields');
const statuses = require('../definitions/statusFields');
const { statModifiers, scriptExtensions } = require('../config');

/**
 * Returns a string denoting a common name. Should be used for any library themed script that expects name-spaced modules to be fit into it.
 * Should also be used to register common utility stats that shouldn't need duplicated if multiple mods exist.
 * @param {string} name  - The name to format
 */
function getCommonName(name) {
  return `SKILL_BUILDER_COMMON_LIB_${name}`;
}

function run({ addExtension, scriptExtensions: commonScriptExtensions, addStat}) {
  scriptExtensions.forEach(scriptExtension => {
    if (!scriptExtension.name) {
      throw new Error('Encountered script extension without a name identifier! Script extensions need to be named!');
    }

    if (scriptExtension.onLoad) {
      scriptExtension.onLoad({ addExtension, utils: { getCommonName, enums, skills, stats, statuses } });
    }
  });

  statModifiers.forEach(statModifier => {
    if (statModifier.onLoad) {
      statModifier.onLoad({ addStat, scriptExtensions: commonScriptExtensions, utils: { getCommonName, enums, skills, stats, statuses } });      
    }
  });
}

module.exports = run;
