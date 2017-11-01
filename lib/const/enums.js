const YES = "Yes";
const NO = "No";

const YES_NO = {
  YES,
  NO,
};

const NONE = "None";
const WARRIOR = "Warrior";
const RANGER = "Ranger";
const ROGUE = "Rogue";
const SOURCE = "Source";
const FIRE = "Fire";
const WATER = "Water";
const AIR = "Air";
const EARTH = "Earth";
const DEATH = "Death";
const SUMMONING = "Summoning";
const POLYMORPH = "Polymorph";
const KINETICS = "Kinetics";

const SKILL_ABILITY = {
  NONE,
  WARRIOR,
  RANGER,
  ROGUE,
  SOURCE,
  FIRE,
  WATER,
  AIR,
  EARTH,
  DEATH,
  SUMMONING,
  POLYMORPH,
  KINETICS
};

const NOVICE = "Novice";
const STARTER = "Starter";
const ADEPT = "Adept";
const MASTER = "Master";

const SKILL_TIER = {
  NONE,
  NOVICE,
  STARTER,
  ADEPT,
  MASTER,
};

const PHYSICAL = "Physical";
const PIERCING = "Piercing";
const CORROSIVE = "Corrosive";
const MAGIC = "Magic";
const CHAOS = "Chaos";
const POISON = "Poison";
const SHADOW = "Shadow";

const DAMAGE_TYPE = {
  NONE,
  PHYSICAL,
  PIERCING,
  CORROSIVE,
  MAGIC,
  CHAOS,
  FIRE,
  AIR,
  EARTH,
  WATER,
  POISON,
  SHADOW
};

const ARROW = "Arrow";
const DOT = "DoT";
const INCINERATE = "Incinerate";
const ACID = "Acid";
const ELECTROCUTION = "Electrocution";
const FROZEN_SHATTER = "FrozenShatter";
const PETRIFIED_SHATTER = "PetrifiedShatter";
const EXPLODE = "Explode";

const DEATH_TYPE = {
  NONE,
  PHYSICAL,
  PIERCING,
  ARROW,
  DOT,
  INCINERATE,
  ACID,
  ELECTROCUTION,
  FROZEN_SHATTER,
  PETRIFIED_SHATTER,
  EXPLODE,
};

const BASE_LEVEL_DAMAGE = "BaseLevelDamage";
const AVERAGE_LEVEL_DAMAGE = "AverageLevelDamage";
const MONSTER_WEAPON_DAMAGE = "MonsterWeaponDamage";
const SOURCE_MAXIMUM_VITALITY = "SourceMaximumVitality";
const SOURCE_MAXIMUM_MAGIC_ARMOR = "SourceMaximumMagicArmor";
const SOURCE_MAXIMUM_PHYSICAL_ARMOR = "SourceMaximumPhysicalArmor";
const SOURCE_CURRENT_VITALITY = "SourceCurrentVitality";
const SOURCE_CURRENT_MAGIC_ARMOR = "SourceCurrentMagicArmor";
const SOURCE_CURRENT_PHYSICAL_ARMOR = "SourceCurrentPhysicalArmor";
const SOURCE_SHIELD_PHYSICAL_ARMOR = "SourceShieldPhysicalArmor";
const TARGET_MAXIMUM_VITALITY = "TargetMaximumVitality";
const TARGET_MAXIMUM_MAGIC_ARMOR = "TargetMaximumMagicArmor";
const TARGET_MAXIMUM_PHYSICAL_ARMOR = "TargetMaximumPhysicalArmor";
const TARGET_CURRENT_VITALITY = "TargetCurrentVitality";
const TARGET_CURRENT_MAGIC_ARMOR = "TargetCurrentMagicArmor";
const TARGET_CURRENT_PHYSICAL_ARMOR = "TargetCurrentPhysicalArmor";

const DAMAGE_SOURCE_TYPE = {
  BASE_LEVEL_DAMAGE,
  AVERAGE_LEVEL_DAMAGE,
  MONSTER_WEAPON_DAMAGE,
  SOURCE_MAXIMUM_VITALITY,
  SOURCE_MAXIMUM_MAGIC_ARMOR,
  SOURCE_MAXIMUM_PHYSICAL_ARMOR,
  SOURCE_CURRENT_MAGIC_ARMOR,
  SOURCE_CURRENT_PHYSICAL_ARMOR,
  SOURCE_CURRENT_VITALITY,
  SOURCE_SHIELD_PHYSICAL_ARMOR,
  TARGET_CURRENT_MAGIC_ARMOR,
  TARGET_CURRENT_PHYSICAL_ARMOR,
  TARGET_CURRENT_VITALITY,
  TARGET_MAXIMUM_PHYSICAL_ARMOR,
  TARGET_MAXIMUM_VITALITY,
  TARGET_MAXIMUM_MAGIC_ARMOR,
};

const CAN_NOT_USE = "CanNotUse";
const IGNORE_SELF = "IgnoreSelf";
const IGNORE_DEBUFF = "IgnoreDebuff";
const IGNORE_BUFF = "IgnoreBuff";
const IGNORE_CONTROL = "IgnoreControl";
const CAN_NOT_TARGET_FROZEN = "CanNotTargetFrozen";
const STATUS_IS_SECONDARY = "StatusIsSecondary";

const AI_FLAGS = {
  CAN_NOT_TARGET_FROZEN,
  IGNORE_BUFF,
  IGNORE_CONTROL,
  IGNORE_DEBUFF,
  IGNORE_SELF,
  CAN_NOT_USE,
  STATUS_IS_SECONDARY,
};

const SKILL_REQUIREMENT = {

};

const CAST_CHECK_TYPE = {

};

const PROJECTILE_TYPE = {

};

const ABILITY = {

};

const SURFACE_TYPE = {

};

const ATMOSPHERE_TYPE = {

};

module.exports = {
  YES_NO,
  SKILL_ABILITY,
  SKILL_TIER,
  DAMAGE_TYPE,
  DEATH_TYPE,
  DAMAGE_SOURCE_TYPE,
  AI_FLAGS,
  SKILL_REQUIREMENT,
  CAST_CHECK_TYPE,
  PROJECTILE_TYPE,
  ABILITY,
  SURFACE_TYPE,
  ATMOSPHERE_TYPE,
};