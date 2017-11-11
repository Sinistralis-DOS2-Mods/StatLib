const { getScript, getCoreScript, addRemote, init: initScript } = require('./script');
const { getCoreStory, init: initStory } = require('./story');

const statNames = {
  remoteStatusPrefix: 'REMOTE_DAMAGE_',
  blankPotionName: 'REMOTE_NoStats',
};

const varNames = {
  isSingleTargetVarName: 'REMOTE_IsSingleTarget',
  damageSkillVarName: 'REMOTE_DamageSkill',
  bridgeEventName: 'REMOTE_ApplyRemoteDamageFromSourceToTarget',
  statusVarName: 'REMOTE_Status',
};

function getRemoteStatName(name) {
  return statNames[name];
}

function onLoad({ addExtension, getCommonName }) {
  for (let key of Object.keys(varNames)) {
    varNames[key] = getCommonName(varNames[key]);
  }

  addExtension('remote', {
    addRemote,
    getRemoteStatName,
  });

  initStory(statNames, varNames);  
  initScript(statNames, varNames);
}

function getLibs() {
  return {
    script: getCoreScript,
    story: getCoreStory,
  };
}

function getScripts() {
  return {
    script: getScript,
  };
}

module.exports = {
  onLoad,
  getLibs,
  getScripts,
  name: 'remote',
};
