const skills = require('../definitions/skillFields');
const stats = require('../definitions/statFields');
const statuses = require('../definitions/statusFields');
const pre = require('./pre');
const build = require('./build');
const write = require('./write');
const { namespace } = require('../../config');

const scriptExtensions = {};

const statQueue = [];
const finalStats = {};

/**
 * Returns a string denoting a namespaced name. Should be used for anything dealing with individual stats that are not being pulled
 * from the list of registered common stats.
 * @param {string} name - The name to format
 */
function getNamespacedName(name) {
  return `GENERATED_${namespace}_${name}`;
}

function addExtension(name, functions) {
  if (!scriptExtensions[name]) {
    scriptExtensions[name] = {};
  }

  scriptExtensions[name] = functions;
}

function addCommonStat(type, statFields) {
  statFields.isCommon = true;

  addStat(type, statFields);
}

function addStat(type, statFields) {
  if (skills.IS_TYPE(type) || stats.IS_TYPE(type) || statuses.IS_TYPE(type)) {

    statQueue.push({ 
      type,
      statFields 
    });

    return statFields; 
  } else {
    throw new Error(`Attempted to add invalid stat to queue. Stat is ${type}:${JSON.stringify(statFields)}`);
  }
}

async function run() {
  // Run onLoad for extensions and modifiers
  pre({
    scriptExtensions,
    addExtension,
    addStat: addCommonStat,
  });

  // Build skills
  build({
    addStat,
    statQueue,
    finalStats,
    scriptExtensions,
    getNamespacedName
  });

  // Write everything to disk
  await write({
    getNamespacedName,
    finalStats,
  });
}

module.exports = run;
