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
  const { getStatName } = utils;

  if (stat.statFields.hybrid) {
    hybridUsed = true;
    
    const statusName = `${unformattedHybridStatusPrefix}${stat.statFields.Name}`;

    // Load the hybrid effect
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
    stat.statFields.SkillProperties += `${getStatName(statusName)},100,-1;`;

    // Include the Hybrid Effect in the Script lookup
    addRemoteToScript(getStatName(stat.statFields.hybrid.Name));

    // Link the Status and Projectile in the DB
    addHybridToDB(getStatName(statusName), getStatName(stat.statFields.hybrid.Name));

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
