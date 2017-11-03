const SKILL_FIELD_NAMES = {
  'NAME':'Name',
  'USING':'Using',
  'SKILL_TYPE':'SkillType',
  'LEVEL':'Level',
  'FOR_GAME_MASTER':'ForGameMaster',
  'IS_ENEMY_SKILL':'IsEnemySkill',
  'ABILITY':'Ability',
  'TIER':'Tier',
  'REQUIREMENT':'Requirement',
  'ACTION_POINTS':'ActionPoints',
  'COOLDOWN':'Cooldown',
  'AI_FLAGS':'AIFlags',
  'DAMAGE':'Damage',
  'DAMAGE_MULTIPLIER':'Damage Multiplier',
  'DAMAGE_RANGE':'Damage Range',
  'DAMAGE_TYPE':'DamageType',
  'SKILL_PROPERTIES':'SkillProperties',
  'TARGET_RADIUS':'TargetRadius',
  'ADD_RANGE_FROM_ABILITY':'AddRangeFromAbility',
  'AREA_RADIUS':'AreaRadius',
  'DEATH_TYPE':'DeathType',
  'EXPLODE_RADIUS':'ExplodeRadius',
  'CAN_TARGET_CHARACTERS':'CanTargetCharacters',
  'CAN_TARGET_ITEMS':'CanTargetItems',
  'CAN_TARGET_TERRAIN':'CanTargetTerrain',
  'FORCE_TARGET':'ForceTarget',
  'AMOUNT_OF_TARGETS':'AmountOfTargets',
  'AUTO_AIM':'AutoAim',
  'TARGET_CONDITIONS':'TargetConditions',
  'FORKING_CONDITIONS':'ForkingConditions',
  'USE_CHARACTER_STATS':'UseCharacterStats',
  'USE_WEAPON_DAMAGE':'UseWeaponDamage',
  'USE_WEAPON_PROPERTIES':'UseWeaponProperties',
  'PROJECTILE_COUNT':'ProjectileCount',
  'PROJECTILE_DELAY':'ProjectileDelay',
  'ANGLE':'Angle',
  'TEMPLATE':'Template',
  'IGNORE_VISION_BLOCK':'IgnoreVisionBlock',
  'TEMPLATE_CHECK':'TemplateCheck',
  'CHANCE_TO_PIERCE':'ChanceToPierce',
  'MAX_PIERCE_COUNT':'MaxPierceCount',
  'MAX_FORK_COUNT':'MaxForkCount',
  'FORK_LEVELS':'ForkLevels',
  'FORK_CHANCE':'ForkChance',
  'ICON':'Icon',
  'DISPLAY_NAME':'DisplayName',
  'DESCRIPTION':'Description',
  'STATS_DESCRIPTION':'StatsDescription',
  'STATS_DESCRIPTION_PARAMS':'StatsDescriptionParams',
  'PREPARE_ANIMATION_INIT':'PrepareAnimationInit',
  'PREPARE_ANIMATION_LOOP':'PrepareAnimationLoop',
  'PREPARE_EFFECT':'PrepareEffect',
  'CAST_ANIMATION':'CastAnimation',
  'CAST_ANIMATION_CHECK':'CastAnimationCheck',
  'CAST_TEXT_EVENT':'CastTextEvent',
  'CAST_EFFECT':'CastEffect',
  'PREVIEW_EFFECT':'PreviewEffect',
  'REQUIREMENTS':'Requirements',
  'MEMORIZATION_REQUIREMENTS':'MemorizationRequirements',
  'MEMORY_COST':'Memory Cost',
  'MAGIC_COST':'Magic Cost',
  'DIVIDE_DAMAGE':'DivideDamage',
  'PROJECTILE_TERRAIN_OFFSET':'ProjectileTerrainOffset',
  'MOVING_OBJECT':'MovingObject',
  'PROJECTILE_TYPE':'ProjectileType',
  'OVERRIDE_MIN_AP':'OverrideMinAP',
  'STEALTH':'Stealth',
  'STEALTH_DAMAGE_MULTIPLIER':'Stealth Damage Multiplier',
  'DISTANCE_DAMAGE_MULTIPLIER':'Distance Damage Multiplier',
  'HEIGHT_OFFSET':'HeightOffset',
  'SPAWN_OBJECT':'SpawnObject',
  'SPAWN_EFFECT':'SpawnEffect',
  'SPAWN_FX_OVERRIDES_IMPACT_FX':'SpawnFXOverridesImpactFX',
  'SPAWN_LIFETIME':'SpawnLifetime',
  'AI_CALCULATION_SKILL_OVERRIDE':'AiCalculationSkillOverride',
  'ADD_WEAPON_RANGE':'AddWeaponRange',
  'IS_MELEE':'IsMelee',
  'AOE_CONDITIONS':'AoEConditions',
  'FX_SCALE':'FXScale',
  'CAST_SELF_ANIMATION':'CastSelfAnimation',
  'WEAPON_BONES':'WeaponBones',
  'TARGET_EFFECT':'TargetEffect',
  'TARGET_GROUND_EFFECT':'TargetGroundEffect',
  'POSITION_EFFECT':'PositionEffect',
  'BEAM_EFFECT':'BeamEffect',
  'SKILL_EFFECT':'SkillEffect',
  'CLEANSE_STATUSES':'CleanseStatuses',
  'STATUS_CLEAR_CHANCE':'StatusClearChance',
  'AUTOCAST':'Autocast',
  'RANGE':'Range',
  'SURFACE_TYPE':'SurfaceType',
  'IGNORE_CURSED':'IgnoreCursed',
  'SURFACE_LIFETIME':'SurfaceLifetime',
  'SURFACE_STATUS_CHANCE':'SurfaceStatusChance',
  'SURFACE_GROW_STEP':'SurfaceGrowStep',
  'SURFACE_GROW_INTERVAL':'SurfaceGrowInterval',
  'CAST_EFFECT_TEXT_EVENT':'CastEffectTextEvent',
  'PUSH_DISTANCE':'PushDistance',
  'BACK_START':'BackStart',
  'FRONT_OFFSET':'FrontOffset',
  'LIFETIME':'Lifetime',
  'AURA_SELF':'AuraSelf',
  'AURA_ALLIES':'AuraAllies',
  'AURA_NEUTRALS':'AuraNeutrals',
  'AURA_ENEMIES':'AuraEnemies',
  'AURA_ITEMS':'AuraItems',
  'DOME_EFFECT':'DomeEffect',
  'HIT_RADIUS':'HitRadius',
  'DAMAGE_ON_JUMP':'Damage On Jump',
  'DAMAGE_ON_LANDING':'Damage On Landing',
  'TELEPORT_TEXT_EVENT':'TeleportTextEvent',
  'LANDING_EFFECT':'LandingEffect',
  'MAX_ATTACKS':'MaxAttacks',
  'NEXT_ATTACK_CHANCE':'NextAttackChance',
  'NEXT_ATTACK_CHANCE_DIVIDER':'NextAttackChanceDivider',
  'END_POS_RADIUS':'EndPosRadius',
  'JUMP_DELAY':'JumpDelay',
  'PREPARE_EFFECT_BONE':'PrepareEffectBone',
  'MALE_IMPACT_EFFECTS':'MaleImpactEffects',
  'FEMALE_IMPACT_EFFECTS':'FemaleImpactEffects',
  'REAPPEAR_EFFECT':'ReappearEffect',
  'REAPPEAR_EFFECT_TEXT_EVENT':'ReappearEffectTextEvent',
  'SURFACE_RADIUS':'SurfaceRadius',
  'MAX_DISTANCE':'MaxDistance',
  'OFFSET':'Offset',
  'HEIGHT':'Height',
  'TRAVEL_SPEED':'TravelSpeed',
  'FLY_EFFECT':'FlyEffect',
  'IMPACT_EFFECT':'ImpactEffect',
  'SKILLBOOK':'Skillbook',
  'STRIKE_COUNT':'StrikeCount',
  'STRIKE_DELAY':'StrikeDelay',
  'OVERRIDE_SKILL_LEVEL':'OverrideSkillLevel',
  'TARGET_PROJECTILES':'TargetProjectiles',
  'SINGLE_SOURCE':'SingleSource',
  'DISTRIBUTION':'Distribution',
  'SHUFFLE':'Shuffle',
  'PREVIEW_STRIKE_HITS':'PreviewStrikeHits',
  'TOTAL_SURFACE_CELLS':'TotalSurfaceCells',
  'SURFACE_MIN_SPAWN_RADIUS':'SurfaceMinSpawnRadius',
  'SHOCK_WAVE_DURATION':'ShockWaveDuration',
  'MIN_SURFACES':'MinSurfaces',
  'MAX_SURFACES':'MaxSurfaces',
  'RAIN_EFFECT':'RainEffect',
  'ATMOSPHERE':'Atmosphere',
  'CONSEQUENCES_START_TIME':'ConsequencesStartTime',
  'CONSEQUENCES_DURATION':'ConsequencesDuration',
  'CONTINUE_ON_KILL':'ContinueOnKill',
  'CONTINUE_EFFECT':'ContinueEffect',
  'TARGET_CAST_EFFECT':'TargetCastEffect',
  'TARGET_HIT_EFFECT':'TargetHitEffect',
  'START_TEXT_EVENT':'StartTextEvent',
  'STOP_TEXT_EVENT':'StopTextEvent',
  'HIT_EFFECT':'HitEffect',
  'PUSH_PULL_EFFECT':'PushPullEffect',
  'MIN_HITS_PER_TURN':'MinHitsPerTurn',
  'MAX_HITS_PER_TURN':'MaxHitsPerTurn',
  'HIT_DELAY':'HitDelay',
  'STORM_EFFECT':'StormEffect',
  'PROJECTILE_SKILLS':'ProjectileSkills',
  'SUMMON_LEVEL':'SummonLevel',
  'TEMPLATE_ADVANCED':'TemplateAdvanced',
  'TEMPLATE_OVERRIDE':'TemplateOverride',
  'TOTEM':'Totem',
  'LINK_TELEPORTS':'LinkTeleports',
  'SUMMON_COUNT':'SummonCount',
  'ACCELERATION':'Acceleration',
  'TELEPORT_DELAY':'TeleportDelay',
  'TELEPORT_SELF':'TeleportSelf',
  'TELEPORT_SURFACE':'TeleportSurface',
  'SELECTED_CHARACTER_EFFECT':'SelectedCharacterEffect',
  'SELECTED_OBJECT_EFFECT':'SelectedObjectEffect',
  'SELECTED_POSITION_EFFECT':'SelectedPositionEffect',
  'DISAPPEAR_EFFECT':'DisappearEffect',
  'FORCE_MOVE':'ForceMove',
  'RANDOM_POINTS':'RandomPoints',
  'POINTS_MAX_OFFSET':'PointsMaxOffset',
  'GROW_SPEED':'GrowSpeed',
  'GROW_TIMEOUT':'GrowTimeout',
  'SOURCE_TARGET_EFFECT':'SourceTargetEffect',
  'TARGET_TARGET_EFFECT':'TargetTargetEffect',
  'TEMPLATE1':'Template1',
  'TEMPLATE2':'Template2',
  'TEMPLATE3':'Template3',
  'SHAPE':'Shape',
  'BASE':'Base'
};

const PROJECTILE_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Value must be one of the values from the ABILITY enum. You can import this via const { ABILITY } = require('./lib/definitions/enums');
	*/
  'ADD_RANGE_FROM_ABILITY': 'AddRangeFromAbility',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'EXPLODE_RADIUS': 'ExplodeRadius',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_CHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_ITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_TERRAIN': 'CanTargetTerrain',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_TARGET': 'ForceTarget',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AMOUNT_OF_TARGETS': 'AmountOfTargets',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'AUTO_AIM': 'AutoAim',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'FORKING_CONDITIONS': 'ForkingConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_CHARACTER_STATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_DAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_PROPERTIES': 'UseWeaponProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PROJECTILE_COUNT': 'ProjectileCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PROJECTILE_DELAY': 'ProjectileDelay',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ANGLE': 'Angle',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE': 'Template',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IGNORE_VISION_BLOCK': 'IgnoreVisionBlock',
  /**
	* Value must be one of the values from the CAST_CHECK_TYPE enum. You can import this via const { CAST_CHECK_TYPE } = require('./lib/definitions/enums');
	*/
  'TEMPLATE_CHECK': 'TemplateCheck',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CHANCE_TO_PIERCE': 'ChanceToPierce',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_PIERCE_COUNT': 'MaxPierceCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_FORK_COUNT': 'MaxForkCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FORK_LEVELS': 'ForkLevels',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FORK_CHANCE': 'ForkChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Value must be one of the values from the CAST_CHECK_TYPE enum. You can import this via const { CAST_CHECK_TYPE } = require('./lib/definitions/enums');
	*/
  'CAST_ANIMATION_CHECK': 'CastAnimationCheck',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEW_EFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DIVIDE_DAMAGE': 'DivideDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'PROJECTILE_TERRAIN_OFFSET': 'ProjectileTerrainOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MOVING_OBJECT': 'MovingObject',
  /**
	* Value must be one of the values from the PROJECTILE_TYPE enum. You can import this via const { PROJECTILE_TYPE } = require('./lib/definitions/enums');
	*/
  'PROJECTILE_TYPE': 'ProjectileType',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'OVERRIDE_MIN_AP': 'OverrideMinAP',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STEALTH_DAMAGE_MULTIPLIER': 'Stealth Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DISTANCE_DAMAGE_MULTIPLIER': 'Distance Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEIGHT_OFFSET': 'HeightOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SPAWN_OBJECT': 'SpawnObject',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SPAWN_EFFECT': 'SpawnEffect',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SPAWN_FX_OVERRIDES_IMPACT_FX': 'SpawnFXOverridesImpactFX',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SPAWN_LIFETIME': 'SpawnLifetime',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AI_CALCULATION_SKILL_OVERRIDE': 'AiCalculationSkillOverride',
};

const TARGET_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'ADD_WEAPON_RANGE': 'AddWeaponRange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_MELEE': 'IsMelee',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_CHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_ITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_TERRAIN': 'CanTargetTerrain',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AOE_CONDITIONS': 'AoEConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_CHARACTER_STATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_DAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_PROPERTIES': 'UseWeaponProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_SELF_ANIMATION': 'CastSelfAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEW_EFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPON_BONES': 'WeaponBones',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_EFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_GROUND_EFFECT': 'TargetGroundEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'POSITION_EFFECT': 'PositionEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'BEAM_EFFECT': 'BeamEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_EFFECT': 'SkillEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CLEANSE_STATUSES': 'CleanseStatuses',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STATUS_CLEAR_CHANCE': 'StatusClearChance',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'AUTOCAST': 'Autocast',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IGNORE_VISION_BLOCK': 'IgnoreVisionBlock',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STEALTH_DAMAGE_MULTIPLIER': 'Stealth Damage Multiplier',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'OVERRIDE_MIN_AP': 'OverrideMinAP',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AMOUNT_OF_TARGETS': 'AmountOfTargets',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AI_CALCULATION_SKILL_OVERRIDE': 'AiCalculationSkillOverride',
};

const CONE_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RANGE': 'Range',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ANGLE': 'Angle',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Value must be one of the values from the SURFACE_TYPE enum. You can import this via const { SURFACE_TYPE } = require('./lib/definitions/enums');
	*/
  'SURFACE_TYPE': 'SurfaceType',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IGNORE_CURSED': 'IgnoreCursed',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_LIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_STATUS_CHANCE': 'SurfaceStatusChance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_STEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_INTERVAL': 'SurfaceGrowInterval',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_DAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_PROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_CHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_ITEMS': 'CanTargetItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PUSH_DISTANCE': 'PushDistance',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'BACK_START': 'BackStart',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FRONT_OFFSET': 'FrontOffset',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'OVERRIDE_MIN_AP': 'OverrideMinAP',
};

const DOME_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_SELF': 'AuraSelf',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_ALLIES': 'AuraAllies',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_NEUTRALS': 'AuraNeutrals',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_ENEMIES': 'AuraEnemies',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_ITEMS': 'AuraItems',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_CHARACTER_STATS': 'UseCharacterStats',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_EFFECT': 'TargetEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DOME_EFFECT': 'DomeEffect',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
};

const JUMP_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HIT_RADIUS': 'HitRadius',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DAMAGE_ON_JUMP': 'Damage On Jump',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DAMAGE_ON_LANDING': 'Damage On Landing',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TELEPORT_TEXT_EVENT': 'TeleportTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEW_EFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'LANDING_EFFECT': 'LandingEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
};

const MULTISTRIKE_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_ATTACKS': 'MaxAttacks',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'NEXT_ATTACK_CHANCE': 'NextAttackChance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'NEXT_ATTACK_CHANCE_DIVIDER': 'NextAttackChanceDivider',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'END_POS_RADIUS': 'EndPosRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'JUMP_DELAY': 'JumpDelay',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_DAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_PROPERTIES': 'UseWeaponProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT_BONE': 'PrepareEffectBone',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MALE_IMPACT_EFFECTS': 'MaleImpactEffects',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'FEMALE_IMPACT_EFFECTS': 'FemaleImpactEffects',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REAPPEAR_EFFECT': 'ReappearEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REAPPEAR_EFFECT_TEXT_EVENT': 'ReappearEffectTextEvent',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'OVERRIDE_MIN_AP': 'OverrideMinAP',
};

const PATH_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the SURFACE_TYPE enum. You can import this via const { SURFACE_TYPE } = require('./lib/definitions/enums');
	*/
  'SURFACE_TYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_RADIUS': 'SurfaceRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_LIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_STATUS_CHANCE': 'SurfaceStatusChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_DISTANCE': 'MaxDistance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'OFFSET': 'Offset',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HIT_RADIUS': 'HitRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEIGHT': 'Height',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TRAVEL_SPEED': 'TravelSpeed',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_EFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'FLY_EFFECT': 'FlyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'IMPACT_EFFECT': 'ImpactEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLBOOK': 'Skillbook',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
};

const PROJECTILESTRIKE_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Value must be one of the values from the ABILITY enum. You can import this via const { ABILITY } = require('./lib/definitions/enums');
	*/
  'ADD_RANGE_FROM_ABILITY': 'AddRangeFromAbility',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'EXPLODE_RADIUS': 'ExplodeRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STRIKE_COUNT': 'StrikeCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STRIKE_DELAY': 'StrikeDelay',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_CHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_ITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_TERRAIN': 'CanTargetTerrain',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_TARGET': 'ForceTarget',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'OVERRIDE_SKILL_LEVEL': 'OverrideSkillLevel',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_CHARACTER_STATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_DAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_PROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'TARGET_PROJECTILES': 'TargetProjectiles',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PROJECTILE_COUNT': 'ProjectileCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PROJECTILE_DELAY': 'ProjectileDelay',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ANGLE': 'Angle',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEIGHT': 'Height',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SINGLE_SOURCE': 'SingleSource',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE': 'Template',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_FORK_COUNT': 'MaxForkCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FORK_LEVELS': 'ForkLevels',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FORK_CHANCE': 'ForkChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEW_EFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Value must be one of the values from the PROJECTILE_TYPE enum. You can import this via const { PROJECTILE_TYPE } = require('./lib/definitions/enums');
	*/
  'PROJECTILE_TYPE': 'ProjectileType',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Value must be one of the values from the PROJECTILE_DISTRIBUTION enum. You can import this via const { PROJECTILE_DISTRIBUTION } = require('./lib/definitions/enums');
	*/
  'DISTRIBUTION': 'Distribution',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SHUFFLE': 'Shuffle',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'PREVIEW_STRIKE_HITS': 'PreviewStrikeHits',
};

const QUAKE_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TOTAL_SURFACE_CELLS': 'TotalSurfaceCells',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'OVERRIDE_SKILL_LEVEL': 'OverrideSkillLevel',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_MIN_SPAWN_RADIUS': 'SurfaceMinSpawnRadius',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SHOCK_WAVE_DURATION': 'ShockWaveDuration',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MIN_SURFACES': 'MinSurfaces',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_SURFACES': 'MaxSurfaces',
  /**
	* Value must be one of the values from the SURFACE_TYPE enum. You can import this via const { SURFACE_TYPE } = require('./lib/definitions/enums');
	*/
  'SURFACE_TYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_STEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_INTERVAL': 'SurfaceGrowInterval',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_LIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_STATUS_CHANCE': 'SurfaceStatusChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'LANDING_EFFECT': 'LandingEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLBOOK': 'Skillbook',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
};

const RAIN_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Value must be one of the values from the SURFACE_TYPE enum. You can import this via const { SURFACE_TYPE } = require('./lib/definitions/enums');
	*/
  'SURFACE_TYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_LIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_STATUS_CHANCE': 'SurfaceStatusChance',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_CHARACTER_STATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_DAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_PROPERTIES': 'UseWeaponProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TOTAL_SURFACE_CELLS': 'TotalSurfaceCells',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_STEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_INTERVAL': 'SurfaceGrowInterval',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_EFFECT': 'TargetEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RAIN_EFFECT': 'RainEffect',
  /**
	* Value must be one of the values from the ATMOSPHERE_TYPE enum. You can import this via const { ATMOSPHERE_TYPE } = require('./lib/definitions/enums');
	*/
  'ATMOSPHERE': 'Atmosphere',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CONSEQUENCES_START_TIME': 'ConsequencesStartTime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CONSEQUENCES_DURATION': 'ConsequencesDuration',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
};

const RUSH_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HIT_RADIUS': 'HitRadius',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_CHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_ITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_TERRAIN': 'CanTargetTerrain',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_CHARACTER_STATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_DAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_PROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CONTINUE_ON_KILL': 'ContinueOnKill',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CONTINUE_EFFECT': 'ContinueEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPON_BONES': 'WeaponBones',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_EFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CAST_EFFECT': 'TargetCastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_HIT_EFFECT': 'TargetHitEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'START_TEXT_EVENT': 'StartTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STOP_TEXT_EVENT': 'StopTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'OVERRIDE_MIN_AP': 'OverrideMinAP',
};

const SHOUT_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'ADD_WEAPON_RANGE': 'AddWeaponRange',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AOE_CONDITIONS': 'AoEConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_CHARACTER_STATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_DAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_PROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'AUTOCAST': 'Autocast',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'HIT_EFFECT': 'HitEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPON_BONES': 'WeaponBones',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CLEANSE_STATUSES': 'CleanseStatuses',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STATUS_CLEAR_CHANCE': 'StatusClearChance',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PUSH_DISTANCE': 'PushDistance',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_CHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_ITEMS': 'CanTargetItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PUSH_PULL_EFFECT': 'PushPullEffect',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IGNORE_VISION_BLOCK': 'IgnoreVisionBlock',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AI_CALCULATION_SKILL_OVERRIDE': 'AiCalculationSkillOverride',
};

const STORM_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'OVERRIDE_SKILL_LEVEL': 'OverrideSkillLevel',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HIT_RADIUS': 'HitRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MIN_HITS_PER_TURN': 'MinHitsPerTurn',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_HITS_PER_TURN': 'MaxHitsPerTurn',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HIT_DELAY': 'HitDelay',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_EFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STORM_EFFECT': 'StormEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'IMPACT_EFFECT': 'ImpactEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLBOOK': 'Skillbook',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PROJECTILE_SKILLS': 'ProjectileSkills',
};

const SUMMON_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SUMMON_LEVEL': 'SummonLevel',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AOE_CONDITIONS': 'AoEConditions',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE': 'Template',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE_ADVANCED': 'TemplateAdvanced',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE_OVERRIDE': 'TemplateOverride',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'TOTEM': 'Totem',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LINK_TELEPORTS': 'LinkTeleports',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SUMMON_COUNT': 'SummonCount',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CAST_EFFECT': 'TargetCastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_EFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLBOOK': 'Skillbook',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AI_CALCULATION_SKILL_OVERRIDE': 'AiCalculationSkillOverride',
};

const TELEPORTATION_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREA_RADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HIT_RADIUS': 'HitRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEIGHT': 'Height',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACCELERATION': 'Acceleration',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TELEPORT_DELAY': 'TeleportDelay',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'TELEPORT_SELF': 'TeleportSelf',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'TELEPORT_SURFACE': 'TeleportSurface',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_CHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_ITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_TERRAIN': 'CanTargetTerrain',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEW_EFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SELECTED_CHARACTER_EFFECT': 'SelectedCharacterEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SELECTED_OBJECT_EFFECT': 'SelectedObjectEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SELECTED_POSITION_EFFECT': 'SelectedPositionEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DISAPPEAR_EFFECT': 'DisappearEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REAPPEAR_EFFECT': 'ReappearEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'IMPACT_EFFECT': 'ImpactEffect',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IGNORE_VISION_BLOCK': 'IgnoreVisionBlock',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_MOVE': 'ForceMove',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'OVERRIDE_SKILL_LEVEL': 'OverrideSkillLevel',
};

const TORNADO_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HIT_RADIUS': 'HitRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RANDOM_POINTS': 'RandomPoints',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Value must be one of the values from the SURFACE_TYPE enum. You can import this via const { SURFACE_TYPE } = require('./lib/definitions/enums');
	*/
  'SURFACE_TYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_RADIUS': 'SurfaceRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_LIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_STATUS_CHANCE': 'SurfaceStatusChance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'POINTS_MAX_OFFSET': 'PointsMaxOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_EFFECT': 'TargetEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CLEANSE_STATUSES': 'CleanseStatuses',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STATUS_CLEAR_CHANCE': 'StatusClearChance',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
};

const WALL_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGET_RADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_DISTANCE': 'MaxDistance',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'GROW_SPEED': 'GrowSpeed',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'GROW_TIMEOUT': 'GrowTimeout',
  /**
	* Value must be one of the values from the SURFACE_TYPE enum. You can import this via const { SURFACE_TYPE } = require('./lib/definitions/enums');
	*/
  'SURFACE_TYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TOTAL_SURFACE_CELLS': 'TotalSurfaceCells',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_STEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_INTERVAL': 'SurfaceGrowInterval',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_LIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_STATUS_CHANCE': 'SurfaceStatusChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOURCE_TARGET_EFFECT': 'SourceTargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_TARGET_EFFECT': 'TargetTargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE1': 'Template1',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE2': 'Template2',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE3': 'Template3',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SPAWN_EFFECT': 'SpawnEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEW_EFFECT': 'PreviewEffect',
};

const ZONE_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_TYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_ENEMY_SKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILL_ABILITY enum. You can import this via const { SKILL_ABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILL_TIER enum. You can import this via const { SKILL_TIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILL_REQUIREMENT enum. You can import this via const { SKILL_REQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AI_FLAGS enum. You can import this via const { AI_FLAGS } = require('./lib/definitions/enums');
	*/
  'AI_FLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGE_SOURCE_TYPE enum. You can import this via const { DAMAGE_SOURCE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_MULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_RANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGE_TYPE enum. You can import this via const { DAMAGE_TYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILL_PROPERTIES': 'SkillProperties',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Value must be one of the values from the SURFACE_TYPE enum. You can import this via const { SURFACE_TYPE } = require('./lib/definitions/enums');
	*/
  'SURFACE_TYPE': 'SurfaceType',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IGNORE_CURSED': 'IgnoreCursed',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_LIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_STATUS_CHANCE': 'SurfaceStatusChance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_STEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACE_GROW_INTERVAL': 'SurfaceGrowInterval',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_DAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'USE_WEAPON_PROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_CHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'CAN_TARGET_ITEMS': 'CanTargetItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_DESCRIPTION_PARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FX_SCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_INIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_ANIMATION_LOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPARE_EFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_ANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_TEXT_EVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CAST_EFFECT_TEXT_EVENT': 'CastEffectTextEvent',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORY_COST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_COST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATION_REQUIREMENTS': 'MemorizationRequirements',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PUSH_DISTANCE': 'PushDistance',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SHAPE': 'Shape',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'BACK_START': 'BackStart',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FRONT_OFFSET': 'FrontOffset',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RANGE': 'Range',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'BASE': 'Base',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ANGLE': 'Angle',
};

const SKILL_FIELDS = {
  'Name': (value) => ({ name: 'Name', type: 'NameStatObjectFieldDefinition', value}),
  'Using': (value) => ({ name: 'Using', type: 'BaseClassStatObjectFieldDefinition', value}),
  'SkillType': (value) => ({ name: 'SkillType', type: 'StringStatObjectFieldDefinition', value}),
  'Level': (value) => ({ name: 'Level', type: 'IntegerStatObjectFieldDefinition', value}),
  'ForGameMaster': (value) => ({ name: 'ForGameMaster', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'IsEnemySkill': (value) => ({ name: 'IsEnemySkill', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'Ability': (value) => ({ name: 'Ability', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'SkillAbility'}),
  'Tier': (value) => ({ name: 'Tier', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'SkillTier'}),
  'Requirement': (value) => ({ name: 'Requirement', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'SkillRequirement'}),
  'ActionPoints': (value) => ({ name: 'ActionPoints', type: 'IntegerStatObjectFieldDefinition', value}),
  'Cooldown': (value) => ({ name: 'Cooldown', type: 'IntegerStatObjectFieldDefinition', value}),
  'AIFlags': (value) => ({ name: 'AIFlags', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'AIFlags'}),
  'Damage': (value) => ({ name: 'Damage', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'DamageSourceType'}),
  'Damage Multiplier': (value) => ({ name: 'Damage Multiplier', type: 'IntegerStatObjectFieldDefinition', value}),
  'Damage Range': (value) => ({ name: 'Damage Range', type: 'IntegerStatObjectFieldDefinition', value}),
  'DamageType': (value) => ({ name: 'DamageType', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Damage Type'}),
  'SkillProperties': (value) => ({ name: 'SkillProperties', type: 'StringStatObjectFieldDefinition', value}),
  'TargetRadius': (value) => ({ name: 'TargetRadius', type: 'IntegerStatObjectFieldDefinition', value}),
  'AddRangeFromAbility': (value) => ({ name: 'AddRangeFromAbility', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Ability'}),
  'AreaRadius': (value) => ({ name: 'AreaRadius', type: 'IntegerStatObjectFieldDefinition', value}),
  'DeathType': (value) => ({ name: 'DeathType', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Death Type'}),
  'ExplodeRadius': (value) => ({ name: 'ExplodeRadius', type: 'IntegerStatObjectFieldDefinition', value}),
  'CanTargetCharacters': (value) => ({ name: 'CanTargetCharacters', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'CanTargetItems': (value) => ({ name: 'CanTargetItems', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'CanTargetTerrain': (value) => ({ name: 'CanTargetTerrain', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'ForceTarget': (value) => ({ name: 'ForceTarget', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'AmountOfTargets': (value) => ({ name: 'AmountOfTargets', type: 'IntegerStatObjectFieldDefinition', value}),
  'AutoAim': (value) => ({ name: 'AutoAim', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'TargetConditions': (value) => ({ name: 'TargetConditions', type: 'StringStatObjectFieldDefinition', value}),
  'ForkingConditions': (value) => ({ name: 'ForkingConditions', type: 'StringStatObjectFieldDefinition', value}),
  'UseCharacterStats': (value) => ({ name: 'UseCharacterStats', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'UseWeaponDamage': (value) => ({ name: 'UseWeaponDamage', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'UseWeaponProperties': (value) => ({ name: 'UseWeaponProperties', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'ProjectileCount': (value) => ({ name: 'ProjectileCount', type: 'IntegerStatObjectFieldDefinition', value}),
  'ProjectileDelay': (value) => ({ name: 'ProjectileDelay', type: 'IntegerStatObjectFieldDefinition', value}),
  'Angle': (value) => ({ name: 'Angle', type: 'IntegerStatObjectFieldDefinition', value}),
  'Template': (value) => ({ name: 'Template', type: 'StringStatObjectFieldDefinition', value}),
  'IgnoreVisionBlock': (value) => ({ name: 'IgnoreVisionBlock', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'TemplateCheck': (value) => ({ name: 'TemplateCheck', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'CastCheckType'}),
  'ChanceToPierce': (value) => ({ name: 'ChanceToPierce', type: 'IntegerStatObjectFieldDefinition', value}),
  'MaxPierceCount': (value) => ({ name: 'MaxPierceCount', type: 'IntegerStatObjectFieldDefinition', value}),
  'MaxForkCount': (value) => ({ name: 'MaxForkCount', type: 'IntegerStatObjectFieldDefinition', value}),
  'ForkLevels': (value) => ({ name: 'ForkLevels', type: 'IntegerStatObjectFieldDefinition', value}),
  'ForkChance': (value) => ({ name: 'ForkChance', type: 'IntegerStatObjectFieldDefinition', value}),
  'Icon': (value) => ({ name: 'Icon', type: 'StringStatObjectFieldDefinition', value}),
  'DisplayName': (value) => ({ name: 'DisplayName', type: 'TranslatedStringStatObjectFieldDefinition', value}),
  'Description': (value) => ({ name: 'Description', type: 'TranslatedStringStatObjectFieldDefinition', value}),
  'StatsDescription': (value) => ({ name: 'StatsDescription', type: 'TranslatedStringStatObjectFieldDefinition', value}),
  'StatsDescriptionParams': (value) => ({ name: 'StatsDescriptionParams', type: 'StringStatObjectFieldDefinition', value}),
  'PrepareAnimationInit': (value) => ({ name: 'PrepareAnimationInit', type: 'StringStatObjectFieldDefinition', value}),
  'PrepareAnimationLoop': (value) => ({ name: 'PrepareAnimationLoop', type: 'StringStatObjectFieldDefinition', value}),
  'PrepareEffect': (value) => ({ name: 'PrepareEffect', type: 'StringStatObjectFieldDefinition', value}),
  'CastAnimation': (value) => ({ name: 'CastAnimation', type: 'StringStatObjectFieldDefinition', value}),
  'CastAnimationCheck': (value) => ({ name: 'CastAnimationCheck', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'CastCheckType'}),
  'CastTextEvent': (value) => ({ name: 'CastTextEvent', type: 'StringStatObjectFieldDefinition', value}),
  'CastEffect': (value) => ({ name: 'CastEffect', type: 'StringStatObjectFieldDefinition', value}),
  'PreviewEffect': (value) => ({ name: 'PreviewEffect', type: 'StringStatObjectFieldDefinition', value}),
  'Requirements': (value) => ({ name: 'Requirements', type: 'StringStatObjectFieldDefinition', value}),
  'MemorizationRequirements': (value) => ({ name: 'MemorizationRequirements', type: 'StringStatObjectFieldDefinition', value}),
  'Memory Cost': (value) => ({ name: 'Memory Cost', type: 'IntegerStatObjectFieldDefinition', value}),
  'Magic Cost': (value) => ({ name: 'Magic Cost', type: 'IntegerStatObjectFieldDefinition', value}),
  'DivideDamage': (value) => ({ name: 'DivideDamage', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'ProjectileTerrainOffset': (value) => ({ name: 'ProjectileTerrainOffset', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'MovingObject': (value) => ({ name: 'MovingObject', type: 'StringStatObjectFieldDefinition', value}),
  'ProjectileType': (value) => ({ name: 'ProjectileType', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'ProjectileType'}),
  'OverrideMinAP': (value) => ({ name: 'OverrideMinAP', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'Stealth': (value) => ({ name: 'Stealth', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'Stealth Damage Multiplier': (value) => ({ name: 'Stealth Damage Multiplier', type: 'IntegerStatObjectFieldDefinition', value}),
  'Distance Damage Multiplier': (value) => ({ name: 'Distance Damage Multiplier', type: 'IntegerStatObjectFieldDefinition', value}),
  'HeightOffset': (value) => ({ name: 'HeightOffset', type: 'IntegerStatObjectFieldDefinition', value}),
  'SpawnObject': (value) => ({ name: 'SpawnObject', type: 'StringStatObjectFieldDefinition', value}),
  'SpawnEffect': (value) => ({ name: 'SpawnEffect', type: 'StringStatObjectFieldDefinition', value}),
  'SpawnFXOverridesImpactFX': (value) => ({ name: 'SpawnFXOverridesImpactFX', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'SpawnLifetime': (value) => ({ name: 'SpawnLifetime', type: 'IntegerStatObjectFieldDefinition', value}),
  'AiCalculationSkillOverride': (value) => ({ name: 'AiCalculationSkillOverride', type: 'StringStatObjectFieldDefinition', value}),
  'AddWeaponRange': (value) => ({ name: 'AddWeaponRange', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'IsMelee': (value) => ({ name: 'IsMelee', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'AoEConditions': (value) => ({ name: 'AoEConditions', type: 'StringStatObjectFieldDefinition', value}),
  'FXScale': (value) => ({ name: 'FXScale', type: 'IntegerStatObjectFieldDefinition', value}),
  'CastSelfAnimation': (value) => ({ name: 'CastSelfAnimation', type: 'StringStatObjectFieldDefinition', value}),
  'WeaponBones': (value) => ({ name: 'WeaponBones', type: 'StringStatObjectFieldDefinition', value}),
  'TargetEffect': (value) => ({ name: 'TargetEffect', type: 'StringStatObjectFieldDefinition', value}),
  'TargetGroundEffect': (value) => ({ name: 'TargetGroundEffect', type: 'StringStatObjectFieldDefinition', value}),
  'PositionEffect': (value) => ({ name: 'PositionEffect', type: 'StringStatObjectFieldDefinition', value}),
  'BeamEffect': (value) => ({ name: 'BeamEffect', type: 'StringStatObjectFieldDefinition', value}),
  'SkillEffect': (value) => ({ name: 'SkillEffect', type: 'StringStatObjectFieldDefinition', value}),
  'CleanseStatuses': (value) => ({ name: 'CleanseStatuses', type: 'StringStatObjectFieldDefinition', value}),
  'StatusClearChance': (value) => ({ name: 'StatusClearChance', type: 'IntegerStatObjectFieldDefinition', value}),
  'Autocast': (value) => ({ name: 'Autocast', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'Range': (value) => ({ name: 'Range', type: 'IntegerStatObjectFieldDefinition', value}),
  'SurfaceType': (value) => ({ name: 'SurfaceType', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Surface Type'}),
  'IgnoreCursed': (value) => ({ name: 'IgnoreCursed', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'SurfaceLifetime': (value) => ({ name: 'SurfaceLifetime', type: 'IntegerStatObjectFieldDefinition', value}),
  'SurfaceStatusChance': (value) => ({ name: 'SurfaceStatusChance', type: 'IntegerStatObjectFieldDefinition', value}),
  'SurfaceGrowStep': (value) => ({ name: 'SurfaceGrowStep', type: 'IntegerStatObjectFieldDefinition', value}),
  'SurfaceGrowInterval': (value) => ({ name: 'SurfaceGrowInterval', type: 'IntegerStatObjectFieldDefinition', value}),
  'CastEffectTextEvent': (value) => ({ name: 'CastEffectTextEvent', type: 'StringStatObjectFieldDefinition', value}),
  'PushDistance': (value) => ({ name: 'PushDistance', type: 'IntegerStatObjectFieldDefinition', value}),
  'BackStart': (value) => ({ name: 'BackStart', type: 'IntegerStatObjectFieldDefinition', value}),
  'FrontOffset': (value) => ({ name: 'FrontOffset', type: 'IntegerStatObjectFieldDefinition', value}),
  'Lifetime': (value) => ({ name: 'Lifetime', type: 'IntegerStatObjectFieldDefinition', value}),
  'AuraSelf': (value) => ({ name: 'AuraSelf', type: 'StringStatObjectFieldDefinition', value}),
  'AuraAllies': (value) => ({ name: 'AuraAllies', type: 'StringStatObjectFieldDefinition', value}),
  'AuraNeutrals': (value) => ({ name: 'AuraNeutrals', type: 'StringStatObjectFieldDefinition', value}),
  'AuraEnemies': (value) => ({ name: 'AuraEnemies', type: 'StringStatObjectFieldDefinition', value}),
  'AuraItems': (value) => ({ name: 'AuraItems', type: 'StringStatObjectFieldDefinition', value}),
  'DomeEffect': (value) => ({ name: 'DomeEffect', type: 'StringStatObjectFieldDefinition', value}),
  'HitRadius': (value) => ({ name: 'HitRadius', type: 'IntegerStatObjectFieldDefinition', value}),
  'Damage On Jump': (value) => ({ name: 'Damage On Jump', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'Damage On Landing': (value) => ({ name: 'Damage On Landing', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'TeleportTextEvent': (value) => ({ name: 'TeleportTextEvent', type: 'StringStatObjectFieldDefinition', value}),
  'LandingEffect': (value) => ({ name: 'LandingEffect', type: 'StringStatObjectFieldDefinition', value}),
  'MaxAttacks': (value) => ({ name: 'MaxAttacks', type: 'IntegerStatObjectFieldDefinition', value}),
  'NextAttackChance': (value) => ({ name: 'NextAttackChance', type: 'IntegerStatObjectFieldDefinition', value}),
  'NextAttackChanceDivider': (value) => ({ name: 'NextAttackChanceDivider', type: 'IntegerStatObjectFieldDefinition', value}),
  'EndPosRadius': (value) => ({ name: 'EndPosRadius', type: 'IntegerStatObjectFieldDefinition', value}),
  'JumpDelay': (value) => ({ name: 'JumpDelay', type: 'IntegerStatObjectFieldDefinition', value}),
  'PrepareEffectBone': (value) => ({ name: 'PrepareEffectBone', type: 'StringStatObjectFieldDefinition', value}),
  'MaleImpactEffects': (value) => ({ name: 'MaleImpactEffects', type: 'StringStatObjectFieldDefinition', value}),
  'FemaleImpactEffects': (value) => ({ name: 'FemaleImpactEffects', type: 'StringStatObjectFieldDefinition', value}),
  'ReappearEffect': (value) => ({ name: 'ReappearEffect', type: 'StringStatObjectFieldDefinition', value}),
  'ReappearEffectTextEvent': (value) => ({ name: 'ReappearEffectTextEvent', type: 'StringStatObjectFieldDefinition', value}),
  'SurfaceRadius': (value) => ({ name: 'SurfaceRadius', type: 'IntegerStatObjectFieldDefinition', value}),
  'MaxDistance': (value) => ({ name: 'MaxDistance', type: 'IntegerStatObjectFieldDefinition', value}),
  'Offset': (value) => ({ name: 'Offset', type: 'IntegerStatObjectFieldDefinition', value}),
  'Height': (value) => ({ name: 'Height', type: 'IntegerStatObjectFieldDefinition', value}),
  'TravelSpeed': (value) => ({ name: 'TravelSpeed', type: 'IntegerStatObjectFieldDefinition', value}),
  'FlyEffect': (value) => ({ name: 'FlyEffect', type: 'StringStatObjectFieldDefinition', value}),
  'ImpactEffect': (value) => ({ name: 'ImpactEffect', type: 'StringStatObjectFieldDefinition', value}),
  'Skillbook': (value) => ({ name: 'Skillbook', type: 'StringStatObjectFieldDefinition', value}),
  'StrikeCount': (value) => ({ name: 'StrikeCount', type: 'IntegerStatObjectFieldDefinition', value}),
  'StrikeDelay': (value) => ({ name: 'StrikeDelay', type: 'IntegerStatObjectFieldDefinition', value}),
  'OverrideSkillLevel': (value) => ({ name: 'OverrideSkillLevel', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'TargetProjectiles': (value) => ({ name: 'TargetProjectiles', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'SingleSource': (value) => ({ name: 'SingleSource', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'Distribution': (value) => ({ name: 'Distribution', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'ProjectileDistribution'}),
  'Shuffle': (value) => ({ name: 'Shuffle', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'PreviewStrikeHits': (value) => ({ name: 'PreviewStrikeHits', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'TotalSurfaceCells': (value) => ({ name: 'TotalSurfaceCells', type: 'IntegerStatObjectFieldDefinition', value}),
  'SurfaceMinSpawnRadius': (value) => ({ name: 'SurfaceMinSpawnRadius', type: 'IntegerStatObjectFieldDefinition', value}),
  'ShockWaveDuration': (value) => ({ name: 'ShockWaveDuration', type: 'IntegerStatObjectFieldDefinition', value}),
  'MinSurfaces': (value) => ({ name: 'MinSurfaces', type: 'IntegerStatObjectFieldDefinition', value}),
  'MaxSurfaces': (value) => ({ name: 'MaxSurfaces', type: 'IntegerStatObjectFieldDefinition', value}),
  'RainEffect': (value) => ({ name: 'RainEffect', type: 'StringStatObjectFieldDefinition', value}),
  'Atmosphere': (value) => ({ name: 'Atmosphere', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'AtmosphereType'}),
  'ConsequencesStartTime': (value) => ({ name: 'ConsequencesStartTime', type: 'IntegerStatObjectFieldDefinition', value}),
  'ConsequencesDuration': (value) => ({ name: 'ConsequencesDuration', type: 'IntegerStatObjectFieldDefinition', value}),
  'ContinueOnKill': (value) => ({ name: 'ContinueOnKill', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'ContinueEffect': (value) => ({ name: 'ContinueEffect', type: 'StringStatObjectFieldDefinition', value}),
  'TargetCastEffect': (value) => ({ name: 'TargetCastEffect', type: 'StringStatObjectFieldDefinition', value}),
  'TargetHitEffect': (value) => ({ name: 'TargetHitEffect', type: 'StringStatObjectFieldDefinition', value}),
  'StartTextEvent': (value) => ({ name: 'StartTextEvent', type: 'StringStatObjectFieldDefinition', value}),
  'StopTextEvent': (value) => ({ name: 'StopTextEvent', type: 'StringStatObjectFieldDefinition', value}),
  'HitEffect': (value) => ({ name: 'HitEffect', type: 'StringStatObjectFieldDefinition', value}),
  'PushPullEffect': (value) => ({ name: 'PushPullEffect', type: 'StringStatObjectFieldDefinition', value}),
  'MinHitsPerTurn': (value) => ({ name: 'MinHitsPerTurn', type: 'IntegerStatObjectFieldDefinition', value}),
  'MaxHitsPerTurn': (value) => ({ name: 'MaxHitsPerTurn', type: 'IntegerStatObjectFieldDefinition', value}),
  'HitDelay': (value) => ({ name: 'HitDelay', type: 'IntegerStatObjectFieldDefinition', value}),
  'StormEffect': (value) => ({ name: 'StormEffect', type: 'StringStatObjectFieldDefinition', value}),
  'ProjectileSkills': (value) => ({ name: 'ProjectileSkills', type: 'StringStatObjectFieldDefinition', value}),
  'SummonLevel': (value) => ({ name: 'SummonLevel', type: 'IntegerStatObjectFieldDefinition', value}),
  'TemplateAdvanced': (value) => ({ name: 'TemplateAdvanced', type: 'StringStatObjectFieldDefinition', value}),
  'TemplateOverride': (value) => ({ name: 'TemplateOverride', type: 'StringStatObjectFieldDefinition', value}),
  'Totem': (value) => ({ name: 'Totem', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'LinkTeleports': (value) => ({ name: 'LinkTeleports', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'SummonCount': (value) => ({ name: 'SummonCount', type: 'IntegerStatObjectFieldDefinition', value}),
  'Acceleration': (value) => ({ name: 'Acceleration', type: 'IntegerStatObjectFieldDefinition', value}),
  'TeleportDelay': (value) => ({ name: 'TeleportDelay', type: 'IntegerStatObjectFieldDefinition', value}),
  'TeleportSelf': (value) => ({ name: 'TeleportSelf', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'TeleportSurface': (value) => ({ name: 'TeleportSurface', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'SelectedCharacterEffect': (value) => ({ name: 'SelectedCharacterEffect', type: 'StringStatObjectFieldDefinition', value}),
  'SelectedObjectEffect': (value) => ({ name: 'SelectedObjectEffect', type: 'StringStatObjectFieldDefinition', value}),
  'SelectedPositionEffect': (value) => ({ name: 'SelectedPositionEffect', type: 'StringStatObjectFieldDefinition', value}),
  'DisappearEffect': (value) => ({ name: 'DisappearEffect', type: 'StringStatObjectFieldDefinition', value}),
  'ForceMove': (value) => ({ name: 'ForceMove', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'RandomPoints': (value) => ({ name: 'RandomPoints', type: 'IntegerStatObjectFieldDefinition', value}),
  'PointsMaxOffset': (value) => ({ name: 'PointsMaxOffset', type: 'IntegerStatObjectFieldDefinition', value}),
  'GrowSpeed': (value) => ({ name: 'GrowSpeed', type: 'IntegerStatObjectFieldDefinition', value}),
  'GrowTimeout': (value) => ({ name: 'GrowTimeout', type: 'IntegerStatObjectFieldDefinition', value}),
  'SourceTargetEffect': (value) => ({ name: 'SourceTargetEffect', type: 'StringStatObjectFieldDefinition', value}),
  'TargetTargetEffect': (value) => ({ name: 'TargetTargetEffect', type: 'StringStatObjectFieldDefinition', value}),
  'Template1': (value) => ({ name: 'Template1', type: 'StringStatObjectFieldDefinition', value}),
  'Template2': (value) => ({ name: 'Template2', type: 'StringStatObjectFieldDefinition', value}),
  'Template3': (value) => ({ name: 'Template3', type: 'StringStatObjectFieldDefinition', value}),
  'Shape': (value) => ({ name: 'Shape', type: 'StringStatObjectFieldDefinition', value}),
  'Base': (value) => ({ name: 'Base', type: 'IntegerStatObjectFieldDefinition', value}),
};

module.exports = {
  SKILL_FIELD_NAMES,
  SKILL_FIELDS,
  PROJECTILE_NAMES,
  TARGET_NAMES,
  CONE_NAMES,
  DOME_NAMES,
  JUMP_NAMES,
  MULTISTRIKE_NAMES,
  PATH_NAMES,
  PROJECTILESTRIKE_NAMES,
  QUAKE_NAMES,
  RAIN_NAMES,
  RUSH_NAMES,
  SHOUT_NAMES,
  STORM_NAMES,
  SUMMON_NAMES,
  TELEPORTATION_NAMES,
  TORNADO_NAMES,
  WALL_NAMES,
  ZONE_NAMES,    
};
