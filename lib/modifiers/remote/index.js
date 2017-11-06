const { getRemoteScript, getCoreScript, addHybridToScript, init: initScript } = require('./script');
const { getRemoteStory, getCoreStory, init: initStory } = require('./story');

const statNames = {
  unformattedHybridStatusPrefix: 'REMOTE_HYBRID_',
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
  Skills:
    hybrid: {
      // Define 2nd projectile skill
      // generate stat.statFields.Name status and apply to skill
      // osiris looks for stat application, removes it, deals damage
    },
    multi: {
      timeToClear: int,
      effects: [

      ]
    }

  Status:
    DoT: {
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

  if (stat.statFields.hybrid) {
    let isSingleTarget;

    if (stat.statFields.hybrid.ExplodeRadius === 0) {
      stat.statFields.hybrid.ExplodeRadius = 1;
      isSingleTarget = 1;
    } else {
      isSingleTarget = 0;
    }

    let statusName = `${statNames.unformattedHybridStatusPrefix}${isSingleTarget ? 'SINGLE_' : ''}${stat.statFields.Name.toUpperCase()}`;    

    // Load the hybrid effect and some defaults
    stat.statFields.hybrid.Name = `${statNames.unformattedHybridStatusPrefix}${stat.statFields.Name}`;
    stat.statFields.hybrid.ForGameMaster = stat.statFields.hybrid.ForGameMaster || YES_NO.NO;
    stat.statFields.hybrid.ActionPoints = stat.statFields.hybrid.ActionPoints || '0';
    stat.statFields.hybrid.Cooldown = stat.statFields.hybrid.Cooldown || '0';
    stat.statFields.hybrid.TargetRadius = stat.statFields.hybrid.TargetRadius || '30';
    stat.statFields.hybrid[PROJECTILE_NAMES.CAN_TARGET_CHARACTERS] = stat.statFields.hybrid[PROJECTILE_NAMES.CAN_TARGET_CHARACTERS] || YES_NO.YES;
    stat.statFields.hybrid[PROJECTILE_NAMES.CAN_TARGET_TERRAIN] = stat.statFields.hybrid[PROJECTILE_NAMES.CAN_TARGET_TERRAIN] || YES_NO.YES;
    stat.statFields.hybrid[PROJECTILE_NAMES.CAN_TARGET_ITEMS] = stat.statFields.hybrid[PROJECTILE_NAMES.CAN_TARGET_ITEMS] || YES_NO.YES;
    stat.statFields.hybrid[PROJECTILE_NAMES.FORCE_TARGET] = stat.statFields.hybrid[PROJECTILE_NAMES.FORCE_TARGET] || YES_NO.NO;
    stat.statFields.hybrid[PROJECTILE_NAMES.USE_CHARACTER_STATS] = stat.statFields.hybrid[PROJECTILE_NAMES.USE_CHARACTER_STATS] || YES_NO.NO;
    stat.statFields.hybrid[PROJECTILE_NAMES.USE_WEAPON_DAMAGE] = stat.statFields.hybrid[PROJECTILE_NAMES.USE_WEAPON_DAMAGE] || YES_NO.NO;
    stat.statFields.hybrid[PROJECTILE_NAMES.USE_WEAPON_PROPERTIES] = stat.statFields.hybrid[PROJECTILE_NAMES.USE_WEAPON_PROPERTIES] || YES_NO.NO;
    stat.statFields.hybrid[PROJECTILE_NAMES.PROJECTILE_COUNT] = stat.statFields.hybrid[PROJECTILE_NAMES.PROJECTILE_COUNT] || '1';
    stat.statFields.hybrid[PROJECTILE_NAMES.PROJECTILE_DELAY] = stat.statFields.hybrid[PROJECTILE_NAMES.PROJECTILE_DELAY] || '0';
    stat.statFields.hybrid[PROJECTILE_NAMES.AI_FLAGS] = stat.statFields.hybrid[PROJECTILE_NAMES.AI_FLAGS] || AI_FLAGS.CAN_NOT_USE;

    addStat('Projectile', stat.statFields.hybrid);

    // Create the Status that will be used to link the Hybrid Effect with the Skill
    addStat('Status_CONSUME', {
      Name: statusName,
      StatsId: getStatName('REMOTE_NoStats'),
      StackId: getStatName(`REMOTE_Stack_${stat.statFields.Name}`),
      ForGameMaster: '0',
      DisplayName: 'Hybrid Damage'
    });

    // Include the Status in the main skill
    stat.statFields.SkillProperties = stat.statFields.SkillProperties || '';
    stat.statFields.SkillProperties += `${getStatName(statusName)},100,-1;`;

    // Include the Hybrid Effect in the Script lookup
    addHybridToScript(getStatName(statusName), getStatName(stat.statFields.hybrid.Name));

    delete stat.statFields.hybrid;
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
