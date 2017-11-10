const { getRemoteScript, getCoreScript, addRemoteToScript, init: initScript } = require('./script');
const { getRemoteStory, getCoreStory, init: initStory } = require('./story');

const statNames = {
  unformattedRemoteStatusPrefix: 'REMOTE_DAMAGE_',
  unformattedBlankPotionName: 'REMOTE_NoStats',
};

const varNames = {
  isSingleTargetVarName: 'REMOTE_IsSingleTarget',
  damageSkillVarName: 'REMOTE_DamageSkill',
  bridgeEventName: 'REMOTE_ApplyRemoteDamageFromSourceToTarget',
  statusVarName: 'REMOTE_Status',
};

function getLibs() {
  const libs = {};

  libs.script = getCoreScript();
  libs.story = getCoreStory();

  return libs;
}

function getDict() {
  const scripts = {};
  
  scripts.script = getRemoteScript();
  scripts.story = getRemoteStory();

  return scripts;
}

/*
  Status:
    remote: {
      master: {

      },
      slave: {

      },
      onTick: {

      }
    }
*/

function onLoad({addStat , utils}) {
  const { getCommonName, stats: stats } = utils;
  const { POTION_NAMES } = stats;

  for (let key of Object.keys(varNames)) {
    varNames[key] = getCommonName(varNames[key]);
  }

  initStory(statNames, varNames);  
  initScript(statNames, varNames);

  addStat('Potion', {
    [POTION_NAMES.NAME]: statNames.unformattedBlankPotionName,
  });
}

function onStat({ stat, addStat, utils }) {
  const { getStatName, skills, enums } = utils;
  const { PROJECTILE_NAMES } = skills;
  const { YES_NO, AI_FLAGS } = enums;

  if (stat.statFields.remote) {
    let isSingleTarget;

    if (stat.statFields.remote.ExplodeRadius === 0) {
      stat.statFields.remote.ExplodeRadius = 1;
      isSingleTarget = 1;
    } else {
      isSingleTarget = 0;
    }

    let statusName = `${statNames.unformattedRemoteStatusPrefix}${isSingleTarget ? 'SINGLE_' : ''}${stat.statFields.Name.toUpperCase()}`;    

    // Load the remote effect and some defaults
    stat.statFields.remote.Name = `${statNames.unformattedRemoteStatusPrefix}${stat.statFields.Name}`;
    stat.statFields.remote.ForGameMaster = stat.statFields.remote.ForGameMaster || YES_NO.NO;
    stat.statFields.remote.ActionPoints = stat.statFields.remote.ActionPoints || '0';
    stat.statFields.remote.Cooldown = stat.statFields.remote.Cooldown || '0';
    stat.statFields.remote.TargetRadius = stat.statFields.remote.TargetRadius || '30';
    stat.statFields.remote[PROJECTILE_NAMES.CAN_TARGET_CHARACTERS] = stat.statFields.remote[PROJECTILE_NAMES.CAN_TARGET_CHARACTERS] || YES_NO.YES;
    stat.statFields.remote[PROJECTILE_NAMES.CAN_TARGET_TERRAIN] = stat.statFields.remote[PROJECTILE_NAMES.CAN_TARGET_TERRAIN] || YES_NO.YES;
    stat.statFields.remote[PROJECTILE_NAMES.CAN_TARGET_ITEMS] = stat.statFields.remote[PROJECTILE_NAMES.CAN_TARGET_ITEMS] || YES_NO.YES;
    stat.statFields.remote[PROJECTILE_NAMES.FORCE_TARGET] = stat.statFields.remote[PROJECTILE_NAMES.FORCE_TARGET] || YES_NO.NO;
    stat.statFields.remote[PROJECTILE_NAMES.USE_CHARACTER_STATS] = stat.statFields.remote[PROJECTILE_NAMES.USE_CHARACTER_STATS] || YES_NO.NO;
    stat.statFields.remote[PROJECTILE_NAMES.USE_WEAPON_DAMAGE] = stat.statFields.remote[PROJECTILE_NAMES.USE_WEAPON_DAMAGE] || YES_NO.NO;
    stat.statFields.remote[PROJECTILE_NAMES.USE_WEAPON_PROPERTIES] = stat.statFields.remote[PROJECTILE_NAMES.USE_WEAPON_PROPERTIES] || YES_NO.NO;
    stat.statFields.remote[PROJECTILE_NAMES.PROJECTILE_COUNT] = stat.statFields.remote[PROJECTILE_NAMES.PROJECTILE_COUNT] || '1';
    stat.statFields.remote[PROJECTILE_NAMES.PROJECTILE_DELAY] = stat.statFields.remote[PROJECTILE_NAMES.PROJECTILE_DELAY] || '0';
    stat.statFields.remote[PROJECTILE_NAMES.AI_FLAGS] = stat.statFields.remote[PROJECTILE_NAMES.AI_FLAGS] || AI_FLAGS.CAN_NOT_USE;

    addStat('Projectile', stat.statFields.remote);

    // Create the Status that will be used to link the Remote Effect with the Skill
    addStat('Status_CONSUME', {
      Name: statusName,
      StatsId: getStatName('REMOTE_NoStats'),
      StackId: getStatName(`REMOTE_Stack_${stat.statFields.Name}`),
      ForGameMaster: '0',
      DisplayName: 'Remote Damage'
    });

    // Include the Status in the main skill
    stat.statFields.SkillProperties = stat.statFields.SkillProperties || '';
    stat.statFields.SkillProperties += `${getStatName(statusName)},100,-1;`;

    // Include the Remote Effect in the Script lookup
    addRemoteToScript(getStatName(statusName), getStatName(stat.statFields.remote.Name));

    delete stat.statFields.remote;
  } 
  
  if (stat.statFields.multi) {

    delete stat.statFields.multi;
  } 
  
  if (stat.statFields.DoT) {

    delete stat.statFields.DoT;
  }

  return stat;
}


module.exports = {
  onLoad,
  onStat,
  getLibs,
  getDict,
  name: 'Remote',
};
