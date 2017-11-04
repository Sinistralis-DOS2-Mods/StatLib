function onStat({ stat }) {
  delete stat.weaponModifiers;

  return stat;
}

module.exports = onStat;
