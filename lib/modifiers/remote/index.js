const { getRemoteScript, addRemoteToScript, init: initScript } = require('./script');
const { addHybridToDB, getRemoteStory, init: initStory } = require('./story');

const unformattedHybridStatusPrefix = 'REMOTE_HYBRID_';

const names = {
  skillVarName: 'REMOTE_Skill',
  isSingleTargetVarName: 'REMOTE_IsSingleTarget',
  damageSkillVarName: 'REMOTE_DamageSkill',
  bridgeEventName: 'REMOTE_ApplyRemoteDamageFromSourceToTarget',
  hybridDB: 'REMOTE_HYBRID',
  hybridStatusPrefix: unformattedHybridStatusPrefix,
};

let hybridUsed = false;
let multiUsed = false;
let DoTUsed = false;

function getScript() {
  if (hybridUsed || multiUsed || DoTUsed) {
    return getRemoteScript();
  }

  return '';
}

function getStory() {
  if (hybridUsed || multiUsed || DoTUsed) {
    return getRemoteStory();    
  }

  return '';
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
  const { getStatName, stats: stats } = utils;
  const { POTION_NAMES } = stats;

  for (let key of Object.keys(names)) {
    names[key] = getStatName(names[key]);
  }

  initStory(names);  
  initScript(names);

  addStat('Potion', {
    [POTION_NAMES.NAME]: 'REMOTE_NoStats',
  });
}

function onStat({ stat, addStat, utils }) {
  const { getStatName, skills, enums } = utils;
  const { PROJECTILE_NAMES } = skills;
  const { YES_NO, AI_FLAGS } = enums;

  if (stat.statFields.hybrid) {
    hybridUsed = true;
    
    const statusName = `${unformattedHybridStatusPrefix}${stat.statFields.Name.toUpperCase()}`;
    let isSingleTarget;

    // Load the hybrid effect and some defaults
    stat.statFields.hybrid.Name = `${unformattedHybridStatusPrefix}${stat.statFields.Name}`;
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

    if (stat.statFields.hybrid.ExplodeRadius === 0) {
      stat.statFields.hybrid.ExplodeRadius = 1;
      isSingleTarget = 1;
    } else {
      isSingleTarget = 0;
    }

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
    addRemoteToScript(getStatName(stat.statFields.hybrid.Name));

    // Link the Status and Projectile in the DB
    addHybridToDB(getStatName(statusName), getStatName(stat.statFields.hybrid.Name), isSingleTarget);

    delete stat.statFields.hybrid;
  } 
  
  if (stat.statFields.multi) {
    multiUsed = true;

    delete stat.statFields.multi;
  } 
  
  if (stat.statFields.DoT) {
    DoTUsed = true;

    delete stat.statFields.DoT;
  }

  return stat;
}


module.exports = {
  onLoad,
  onStat,
  getScript,
  getStory,
  name: 'Remote',
};
