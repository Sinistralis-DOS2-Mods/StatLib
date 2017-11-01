const PROJECTILE = "Projectile";
const TARGET = "Target";
const CONE = "Cone";
const DOME = "Dome";
const JUMP = "Jump";
const MULTISTRIKE = "Multistrike";
const PATH = "Path";
const PROJECTILESTRIKE = "ProjectileStrike";
const QUAKE = "Quake";
const RAIN = "Rain";
const RUSH = "Rush";
const SHOUT = "Shout";
const STORM = "Storm";
const SUMMON = "Summon";
const TELEPORTATION = "Teleportation";
const TORNADO = "Tornado";
const WALL = "Wall";
const ZONE = "Zone";

const SKILL_TYPES = {
  PROJECTILE,
  TARGET,
  CONE,
  DOME,
  JUMP,
  MULTISTRIKE,
  PATH,
  PROJECTILESTRIKE,
  QUAKE,
  RAIN,
  RUSH,
  SHOUT,
  STORM,
  SUMMON,
  TELEPORTATION,
  TORNADO,
  WALL,
  ZONE,
};

const types = Object.values(SKILL_TYPES);

function isSkillType(value) {
  return types.includes(value);
}

module.exports = {
  SKILL_TYPES,
  isSkillType,
  types,
};