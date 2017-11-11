const statNames = {
  remoteStatusPrefix: '',
  blankPotionName: '',
};

function onLoad({ addStat, scriptExtensions, utils}) {
  const { stats: stats } = utils;
  const { POTION_NAMES } = stats;
  const { remote } = scriptExtensions;
  
  statNames.remoteStatusPrefix = remote.getRemoteStatName('remoteStatusPrefix');
  statNames.blankPotionName = remote.getRemoteStatName('blankPotionName');

  addStat('Potion', {
    [POTION_NAMES.NAME]: statNames.blankPotionName,
  });
}

function onStat({ stat, addStat, scriptExtensions, utils }) {
  const { getNamespacedName, skills, enums } = utils;
  const { PROJECTILE_NAMES } = skills;
  const { YES_NO, AI_FLAGS } = enums;
  const { remote } = scriptExtensions;

  if (stat.statFields.remote) {
    let isSingleTarget;

    if (stat.statFields.remote.ExplodeRadius === 0) {
      stat.statFields.remote.ExplodeRadius = 1;
      isSingleTarget = 1;
    } else {
      isSingleTarget = 0;
    }

    let statusName = `${statNames.remoteStatusPrefix}${isSingleTarget ? 'SINGLE_' : ''}${stat.statFields.Name.toUpperCase()}`;    

    // Load the remote effect and some defaults
    stat.statFields.remote.Name = `${statNames.remoteStatusPrefix}${stat.statFields.Name}`;
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
      StatsId: getNamespacedName('REMOTE_NoStats'),
      StackId: getNamespacedName(`REMOTE_Stack_${stat.statFields.Name}`),
      ForGameMaster: '0',
      DisplayName: 'Remote Damage'
    });

    // Include the Status in the main skill
    stat.statFields.SkillProperties = stat.statFields.SkillProperties || '';
    stat.statFields.SkillProperties += `${getNamespacedName(statusName)},100,-1;`;

    // Include the Remote Effect in the Script lookup
    remote.addRemote(getNamespacedName(statusName), getNamespacedName(stat.statFields.remote.Name));

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
};
