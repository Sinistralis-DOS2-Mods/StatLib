const SKILL_FIELD_NAMES = {
  'NAME':'Name',
  'USING':'Using',
  'SKILLTYPE':'SkillType',
  'LEVEL':'Level',
  'FORGAMEMASTER':'ForGameMaster',
  'ISENEMYSKILL':'IsEnemySkill',
  'ABILITY':'Ability',
  'TIER':'Tier',
  'REQUIREMENT':'Requirement',
  'ACTIONPOINTS':'ActionPoints',
  'COOLDOWN':'Cooldown',
  'AIFLAGS':'AIFlags',
  'DAMAGE':'Damage',
  'DAMAGEMULTIPLIER':'Damage Multiplier',
  'DAMAGERANGE':'Damage Range',
  'DAMAGETYPE':'DamageType',
  'SKILLPROPERTIES':'SkillProperties',
  'TARGETRADIUS':'TargetRadius',
  'ADDRANGEFROMABILITY':'AddRangeFromAbility',
  'AREARADIUS':'AreaRadius',
  'DEATHTYPE':'DeathType',
  'EXPLODERADIUS':'ExplodeRadius',
  'CANTARGETCHARACTERS':'CanTargetCharacters',
  'CANTARGETITEMS':'CanTargetItems',
  'CANTARGETTERRAIN':'CanTargetTerrain',
  'FORCETARGET':'ForceTarget',
  'AMOUNTOFTARGETS':'AmountOfTargets',
  'AUTOAIM':'AutoAim',
  'TARGETCONDITIONS':'TargetConditions',
  'FORKINGCONDITIONS':'ForkingConditions',
  'USECHARACTERSTATS':'UseCharacterStats',
  'USEWEAPONDAMAGE':'UseWeaponDamage',
  'USEWEAPONPROPERTIES':'UseWeaponProperties',
  'PROJECTILECOUNT':'ProjectileCount',
  'PROJECTILEDELAY':'ProjectileDelay',
  'ANGLE':'Angle',
  'TEMPLATE':'Template',
  'IGNOREVISIONBLOCK':'IgnoreVisionBlock',
  'TEMPLATECHECK':'TemplateCheck',
  'CHANCETOPIERCE':'ChanceToPierce',
  'MAXPIERCECOUNT':'MaxPierceCount',
  'MAXFORKCOUNT':'MaxForkCount',
  'FORKLEVELS':'ForkLevels',
  'FORKCHANCE':'ForkChance',
  'ICON':'Icon',
  'DISPLAYNAME':'DisplayName',
  'DESCRIPTION':'Description',
  'STATSDESCRIPTION':'StatsDescription',
  'STATSDESCRIPTIONPARAMS':'StatsDescriptionParams',
  'PREPAREANIMATIONINIT':'PrepareAnimationInit',
  'PREPAREANIMATIONLOOP':'PrepareAnimationLoop',
  'PREPAREEFFECT':'PrepareEffect',
  'CASTANIMATION':'CastAnimation',
  'CASTANIMATIONCHECK':'CastAnimationCheck',
  'CASTTEXTEVENT':'CastTextEvent',
  'CASTEFFECT':'CastEffect',
  'PREVIEWEFFECT':'PreviewEffect',
  'REQUIREMENTS':'Requirements',
  'MEMORIZATIONREQUIREMENTS':'MemorizationRequirements',
  'MEMORYCOST':'Memory Cost',
  'MAGICCOST':'Magic Cost',
  'DIVIDEDAMAGE':'DivideDamage',
  'PROJECTILETERRAINOFFSET':'ProjectileTerrainOffset',
  'MOVINGOBJECT':'MovingObject',
  'PROJECTILETYPE':'ProjectileType',
  'OVERRIDEMINAP':'OverrideMinAP',
  'STEALTH':'Stealth',
  'STEALTHDAMAGEMULTIPLIER':'Stealth Damage Multiplier',
  'DISTANCEDAMAGEMULTIPLIER':'Distance Damage Multiplier',
  'HEIGHTOFFSET':'HeightOffset',
  'SPAWNOBJECT':'SpawnObject',
  'SPAWNEFFECT':'SpawnEffect',
  'SPAWNFXOVERRIDESIMPACTFX':'SpawnFXOverridesImpactFX',
  'SPAWNLIFETIME':'SpawnLifetime',
  'AICALCULATIONSKILLOVERRIDE':'AiCalculationSkillOverride',
  'ADDWEAPONRANGE':'AddWeaponRange',
  'ISMELEE':'IsMelee',
  'AOECONDITIONS':'AoEConditions',
  'FXSCALE':'FXScale',
  'CASTSELFANIMATION':'CastSelfAnimation',
  'WEAPONBONES':'WeaponBones',
  'TARGETEFFECT':'TargetEffect',
  'TARGETGROUNDEFFECT':'TargetGroundEffect',
  'POSITIONEFFECT':'PositionEffect',
  'BEAMEFFECT':'BeamEffect',
  'SKILLEFFECT':'SkillEffect',
  'CLEANSESTATUSES':'CleanseStatuses',
  'STATUSCLEARCHANCE':'StatusClearChance',
  'AUTOCAST':'Autocast',
  'RANGE':'Range',
  'SURFACETYPE':'SurfaceType',
  'IGNORECURSED':'IgnoreCursed',
  'SURFACELIFETIME':'SurfaceLifetime',
  'SURFACESTATUSCHANCE':'SurfaceStatusChance',
  'SURFACEGROWSTEP':'SurfaceGrowStep',
  'SURFACEGROWINTERVAL':'SurfaceGrowInterval',
  'CASTEFFECTTEXTEVENT':'CastEffectTextEvent',
  'PUSHDISTANCE':'PushDistance',
  'BACKSTART':'BackStart',
  'FRONTOFFSET':'FrontOffset',
  'LIFETIME':'Lifetime',
  'AURASELF':'AuraSelf',
  'AURAALLIES':'AuraAllies',
  'AURANEUTRALS':'AuraNeutrals',
  'AURAENEMIES':'AuraEnemies',
  'AURAITEMS':'AuraItems',
  'DOMEEFFECT':'DomeEffect',
  'HITRADIUS':'HitRadius',
  'DAMAGEONJUMP':'Damage On Jump',
  'DAMAGEONLANDING':'Damage On Landing',
  'TELEPORTTEXTEVENT':'TeleportTextEvent',
  'LANDINGEFFECT':'LandingEffect',
  'MAXATTACKS':'MaxAttacks',
  'NEXTATTACKCHANCE':'NextAttackChance',
  'NEXTATTACKCHANCEDIVIDER':'NextAttackChanceDivider',
  'ENDPOSRADIUS':'EndPosRadius',
  'JUMPDELAY':'JumpDelay',
  'PREPAREEFFECTBONE':'PrepareEffectBone',
  'MALEIMPACTEFFECTS':'MaleImpactEffects',
  'FEMALEIMPACTEFFECTS':'FemaleImpactEffects',
  'REAPPEAREFFECT':'ReappearEffect',
  'REAPPEAREFFECTTEXTEVENT':'ReappearEffectTextEvent',
  'SURFACERADIUS':'SurfaceRadius',
  'MAXDISTANCE':'MaxDistance',
  'OFFSET':'Offset',
  'HEIGHT':'Height',
  'TRAVELSPEED':'TravelSpeed',
  'FLYEFFECT':'FlyEffect',
  'IMPACTEFFECT':'ImpactEffect',
  'SKILLBOOK':'Skillbook',
  'STRIKECOUNT':'StrikeCount',
  'STRIKEDELAY':'StrikeDelay',
  'OVERRIDESKILLLEVEL':'OverrideSkillLevel',
  'TARGETPROJECTILES':'TargetProjectiles',
  'SINGLESOURCE':'SingleSource',
  'DISTRIBUTION':'Distribution',
  'SHUFFLE':'Shuffle',
  'PREVIEWSTRIKEHITS':'PreviewStrikeHits',
  'TOTALSURFACECELLS':'TotalSurfaceCells',
  'SURFACEMINSPAWNRADIUS':'SurfaceMinSpawnRadius',
  'SHOCKWAVEDURATION':'ShockWaveDuration',
  'MINSURFACES':'MinSurfaces',
  'MAXSURFACES':'MaxSurfaces',
  'RAINEFFECT':'RainEffect',
  'ATMOSPHERE':'Atmosphere',
  'CONSEQUENCESSTARTTIME':'ConsequencesStartTime',
  'CONSEQUENCESDURATION':'ConsequencesDuration',
  'CONTINUEONKILL':'ContinueOnKill',
  'CONTINUEEFFECT':'ContinueEffect',
  'TARGETCASTEFFECT':'TargetCastEffect',
  'TARGETHITEFFECT':'TargetHitEffect',
  'STARTTEXTEVENT':'StartTextEvent',
  'STOPTEXTEVENT':'StopTextEvent',
  'HITEFFECT':'HitEffect',
  'PUSHPULLEFFECT':'PushPullEffect',
  'MINHITSPERTURN':'MinHitsPerTurn',
  'MAXHITSPERTURN':'MaxHitsPerTurn',
  'HITDELAY':'HitDelay',
  'STORMEFFECT':'StormEffect',
  'PROJECTILESKILLS':'ProjectileSkills',
  'SUMMONLEVEL':'SummonLevel',
  'TEMPLATEADVANCED':'TemplateAdvanced',
  'TEMPLATEOVERRIDE':'TemplateOverride',
  'TOTEM':'Totem',
  'LINKTELEPORTS':'LinkTeleports',
  'SUMMONCOUNT':'SummonCount',
  'ACCELERATION':'Acceleration',
  'TELEPORTDELAY':'TeleportDelay',
  'TELEPORTSELF':'TeleportSelf',
  'TELEPORTSURFACE':'TeleportSurface',
  'SELECTEDCHARACTEREFFECT':'SelectedCharacterEffect',
  'SELECTEDOBJECTEFFECT':'SelectedObjectEffect',
  'SELECTEDPOSITIONEFFECT':'SelectedPositionEffect',
  'DISAPPEAREFFECT':'DisappearEffect',
  'FORCEMOVE':'ForceMove',
  'RANDOMPOINTS':'RandomPoints',
  'POINTSMAXOFFSET':'PointsMaxOffset',
  'GROWSPEED':'GrowSpeed',
  'GROWTIMEOUT':'GrowTimeout',
  'SOURCETARGETEFFECT':'SourceTargetEffect',
  'TARGETTARGETEFFECT':'TargetTargetEffect',
  'TEMPLATE1':'Template1',
  'TEMPLATE2':'Template2',
  'TEMPLATE3':'Template3',
  'SHAPE':'Shape',
  'BASE':'Base'
};

const PROJECTILE_NAMES = {

  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Value must be one of the values from the ABILITY enum. You can import this via const { ABILITY } = require('./lib/definitions/enums');
	*/
  'ADDRANGEFROMABILITY': 'AddRangeFromAbility',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'EXPLODERADIUS': 'ExplodeRadius',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETCHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETTERRAIN': 'CanTargetTerrain',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCETARGET': 'ForceTarget',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AMOUNTOFTARGETS': 'AmountOfTargets',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'AUTOAIM': 'AutoAim',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'FORKINGCONDITIONS': 'ForkingConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USECHARACTERSTATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONDAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONPROPERTIES': 'UseWeaponProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PROJECTILECOUNT': 'ProjectileCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PROJECTILEDELAY': 'ProjectileDelay',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ANGLE': 'Angle',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE': 'Template',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'IGNOREVISIONBLOCK': 'IgnoreVisionBlock',
  /**
	* Value must be one of the values from the CASTCHECKTYPE enum. You can import this via const { CASTCHECKTYPE } = require('./lib/definitions/enums');
	*/
  'TEMPLATECHECK': 'TemplateCheck',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CHANCETOPIERCE': 'ChanceToPierce',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAXPIERCECOUNT': 'MaxPierceCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAXFORKCOUNT': 'MaxForkCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FORKLEVELS': 'ForkLevels',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FORKCHANCE': 'ForkChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Value must be one of the values from the CASTCHECKTYPE enum. You can import this via const { CASTCHECKTYPE } = require('./lib/definitions/enums');
	*/
  'CASTANIMATIONCHECK': 'CastAnimationCheck',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEWEFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DIVIDEDAMAGE': 'DivideDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'PROJECTILETERRAINOFFSET': 'ProjectileTerrainOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MOVINGOBJECT': 'MovingObject',
  /**
	* Value must be one of the values from the PROJECTILETYPE enum. You can import this via const { PROJECTILETYPE } = require('./lib/definitions/enums');
	*/
  'PROJECTILETYPE': 'ProjectileType',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'OVERRIDEMINAP': 'OverrideMinAP',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STEALTHDAMAGEMULTIPLIER': 'Stealth Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DISTANCEDAMAGEMULTIPLIER': 'Distance Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEIGHTOFFSET': 'HeightOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SPAWNOBJECT': 'SpawnObject',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SPAWNEFFECT': 'SpawnEffect',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SPAWNFXOVERRIDESIMPACTFX': 'SpawnFXOverridesImpactFX',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SPAWNLIFETIME': 'SpawnLifetime',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AICALCULATIONSKILLOVERRIDE': 'AiCalculationSkillOverride',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ADDWEAPONRANGE': 'AddWeaponRange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISMELEE': 'IsMelee',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETCHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETTERRAIN': 'CanTargetTerrain',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AOECONDITIONS': 'AoEConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USECHARACTERSTATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONDAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONPROPERTIES': 'UseWeaponProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTSELFANIMATION': 'CastSelfAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEWEFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONBONES': 'WeaponBones',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETEFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETGROUNDEFFECT': 'TargetGroundEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'POSITIONEFFECT': 'PositionEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'BEAMEFFECT': 'BeamEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLEFFECT': 'SkillEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CLEANSESTATUSES': 'CleanseStatuses',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STATUSCLEARCHANCE': 'StatusClearChance',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'AUTOCAST': 'Autocast',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'IGNOREVISIONBLOCK': 'IgnoreVisionBlock',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STEALTHDAMAGEMULTIPLIER': 'Stealth Damage Multiplier',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'OVERRIDEMINAP': 'OverrideMinAP',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AMOUNTOFTARGETS': 'AmountOfTargets',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AICALCULATIONSKILLOVERRIDE': 'AiCalculationSkillOverride',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RANGE': 'Range',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ANGLE': 'Angle',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Value must be one of the values from the SURFACETYPE enum. You can import this via const { SURFACETYPE } = require('./lib/definitions/enums');
	*/
  'SURFACETYPE': 'SurfaceType',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'IGNORECURSED': 'IgnoreCursed',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACELIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACESTATUSCHANCE': 'SurfaceStatusChance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWSTEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWINTERVAL': 'SurfaceGrowInterval',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONDAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONPROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETCHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETITEMS': 'CanTargetItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PUSHDISTANCE': 'PushDistance',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'BACKSTART': 'BackStart',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FRONTOFFSET': 'FrontOffset',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'OVERRIDEMINAP': 'OverrideMinAP',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURASELF': 'AuraSelf',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAALLIES': 'AuraAllies',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURANEUTRALS': 'AuraNeutrals',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAENEMIES': 'AuraEnemies',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAITEMS': 'AuraItems',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USECHARACTERSTATS': 'UseCharacterStats',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETEFFECT': 'TargetEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DOMEEFFECT': 'DomeEffect',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HITRADIUS': 'HitRadius',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DAMAGEONJUMP': 'Damage On Jump',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DAMAGEONLANDING': 'Damage On Landing',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TELEPORTTEXTEVENT': 'TeleportTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEWEFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'LANDINGEFFECT': 'LandingEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAXATTACKS': 'MaxAttacks',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'NEXTATTACKCHANCE': 'NextAttackChance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'NEXTATTACKCHANCEDIVIDER': 'NextAttackChanceDivider',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ENDPOSRADIUS': 'EndPosRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'JUMPDELAY': 'JumpDelay',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONDAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONPROPERTIES': 'UseWeaponProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECTBONE': 'PrepareEffectBone',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MALEIMPACTEFFECTS': 'MaleImpactEffects',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'FEMALEIMPACTEFFECTS': 'FemaleImpactEffects',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REAPPEAREFFECT': 'ReappearEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REAPPEAREFFECTTEXTEVENT': 'ReappearEffectTextEvent',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'OVERRIDEMINAP': 'OverrideMinAP',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the SURFACETYPE enum. You can import this via const { SURFACETYPE } = require('./lib/definitions/enums');
	*/
  'SURFACETYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACERADIUS': 'SurfaceRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACELIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACESTATUSCHANCE': 'SurfaceStatusChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAXDISTANCE': 'MaxDistance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'OFFSET': 'Offset',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HITRADIUS': 'HitRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEIGHT': 'Height',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TRAVELSPEED': 'TravelSpeed',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETEFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'FLYEFFECT': 'FlyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'IMPACTEFFECT': 'ImpactEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLBOOK': 'Skillbook',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Value must be one of the values from the ABILITY enum. You can import this via const { ABILITY } = require('./lib/definitions/enums');
	*/
  'ADDRANGEFROMABILITY': 'AddRangeFromAbility',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'EXPLODERADIUS': 'ExplodeRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STRIKECOUNT': 'StrikeCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STRIKEDELAY': 'StrikeDelay',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETCHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETTERRAIN': 'CanTargetTerrain',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCETARGET': 'ForceTarget',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'OVERRIDESKILLLEVEL': 'OverrideSkillLevel',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USECHARACTERSTATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONDAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONPROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'TARGETPROJECTILES': 'TargetProjectiles',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PROJECTILECOUNT': 'ProjectileCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PROJECTILEDELAY': 'ProjectileDelay',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ANGLE': 'Angle',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEIGHT': 'Height',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SINGLESOURCE': 'SingleSource',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE': 'Template',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAXFORKCOUNT': 'MaxForkCount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FORKLEVELS': 'ForkLevels',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FORKCHANCE': 'ForkChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEWEFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Value must be one of the values from the PROJECTILETYPE enum. You can import this via const { PROJECTILETYPE } = require('./lib/definitions/enums');
	*/
  'PROJECTILETYPE': 'ProjectileType',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Value must be one of the values from the PROJECTILEDISTRIBUTION enum. You can import this via const { PROJECTILEDISTRIBUTION } = require('./lib/definitions/enums');
	*/
  'DISTRIBUTION': 'Distribution',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SHUFFLE': 'Shuffle',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'PREVIEWSTRIKEHITS': 'PreviewStrikeHits',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TOTALSURFACECELLS': 'TotalSurfaceCells',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'OVERRIDESKILLLEVEL': 'OverrideSkillLevel',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEMINSPAWNRADIUS': 'SurfaceMinSpawnRadius',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SHOCKWAVEDURATION': 'ShockWaveDuration',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MINSURFACES': 'MinSurfaces',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAXSURFACES': 'MaxSurfaces',
  /**
	* Value must be one of the values from the SURFACETYPE enum. You can import this via const { SURFACETYPE } = require('./lib/definitions/enums');
	*/
  'SURFACETYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWSTEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWINTERVAL': 'SurfaceGrowInterval',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACELIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACESTATUSCHANCE': 'SurfaceStatusChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'LANDINGEFFECT': 'LandingEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLBOOK': 'Skillbook',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Value must be one of the values from the SURFACETYPE enum. You can import this via const { SURFACETYPE } = require('./lib/definitions/enums');
	*/
  'SURFACETYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACELIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACESTATUSCHANCE': 'SurfaceStatusChance',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USECHARACTERSTATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONDAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONPROPERTIES': 'UseWeaponProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TOTALSURFACECELLS': 'TotalSurfaceCells',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWSTEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWINTERVAL': 'SurfaceGrowInterval',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETEFFECT': 'TargetEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RAINEFFECT': 'RainEffect',
  /**
	* Value must be one of the values from the ATMOSPHERETYPE enum. You can import this via const { ATMOSPHERETYPE } = require('./lib/definitions/enums');
	*/
  'ATMOSPHERE': 'Atmosphere',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CONSEQUENCESSTARTTIME': 'ConsequencesStartTime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CONSEQUENCESDURATION': 'ConsequencesDuration',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HITRADIUS': 'HitRadius',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETCHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETTERRAIN': 'CanTargetTerrain',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USECHARACTERSTATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONDAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONPROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CONTINUEONKILL': 'ContinueOnKill',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CONTINUEEFFECT': 'ContinueEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONBONES': 'WeaponBones',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETEFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCASTEFFECT': 'TargetCastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETHITEFFECT': 'TargetHitEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STARTTEXTEVENT': 'StartTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STOPTEXTEVENT': 'StopTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'OVERRIDEMINAP': 'OverrideMinAP',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ADDWEAPONRANGE': 'AddWeaponRange',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AOECONDITIONS': 'AoEConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USECHARACTERSTATS': 'UseCharacterStats',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONDAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONPROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'AUTOCAST': 'Autocast',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'HITEFFECT': 'HitEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONBONES': 'WeaponBones',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CLEANSESTATUSES': 'CleanseStatuses',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STATUSCLEARCHANCE': 'StatusClearChance',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PUSHDISTANCE': 'PushDistance',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETCHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETITEMS': 'CanTargetItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PUSHPULLEFFECT': 'PushPullEffect',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'IGNOREVISIONBLOCK': 'IgnoreVisionBlock',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AICALCULATIONSKILLOVERRIDE': 'AiCalculationSkillOverride',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'OVERRIDESKILLLEVEL': 'OverrideSkillLevel',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HITRADIUS': 'HitRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MINHITSPERTURN': 'MinHitsPerTurn',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAXHITSPERTURN': 'MaxHitsPerTurn',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HITDELAY': 'HitDelay',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETEFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STORMEFFECT': 'StormEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'IMPACTEFFECT': 'ImpactEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLBOOK': 'Skillbook',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PROJECTILESKILLS': 'ProjectileSkills',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SUMMONLEVEL': 'SummonLevel',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AOECONDITIONS': 'AoEConditions',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATE': 'Template',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATEADVANCED': 'TemplateAdvanced',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TEMPLATEOVERRIDE': 'TemplateOverride',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'TOTEM': 'Totem',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LINKTELEPORTS': 'LinkTeleports',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SUMMONCOUNT': 'SummonCount',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCASTEFFECT': 'TargetCastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETEFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLBOOK': 'Skillbook',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AICALCULATIONSKILLOVERRIDE': 'AiCalculationSkillOverride',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AREARADIUS': 'AreaRadius',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HITRADIUS': 'HitRadius',
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
  'TELEPORTDELAY': 'TeleportDelay',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'TELEPORTSELF': 'TeleportSelf',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'TELEPORTSURFACE': 'TeleportSurface',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETCHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETITEMS': 'CanTargetItems',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETTERRAIN': 'CanTargetTerrain',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEWEFFECT': 'PreviewEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SELECTEDCHARACTEREFFECT': 'SelectedCharacterEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SELECTEDOBJECTEFFECT': 'SelectedObjectEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SELECTEDPOSITIONEFFECT': 'SelectedPositionEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DISAPPEAREFFECT': 'DisappearEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REAPPEAREFFECT': 'ReappearEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'IMPACTEFFECT': 'ImpactEffect',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'IGNOREVISIONBLOCK': 'IgnoreVisionBlock',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEMOVE': 'ForceMove',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'OVERRIDESKILLLEVEL': 'OverrideSkillLevel',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HITRADIUS': 'HitRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RANDOMPOINTS': 'RandomPoints',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Value must be one of the values from the SURFACETYPE enum. You can import this via const { SURFACETYPE } = require('./lib/definitions/enums');
	*/
  'SURFACETYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACERADIUS': 'SurfaceRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACELIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACESTATUSCHANCE': 'SurfaceStatusChance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'POINTSMAXOFFSET': 'PointsMaxOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETEFFECT': 'TargetEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CLEANSESTATUSES': 'CleanseStatuses',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STATUSCLEARCHANCE': 'StatusClearChance',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TARGETRADIUS': 'TargetRadius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAXDISTANCE': 'MaxDistance',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFETIME': 'Lifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'GROWSPEED': 'GrowSpeed',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'GROWTIMEOUT': 'GrowTimeout',
  /**
	* Value must be one of the values from the SURFACETYPE enum. You can import this via const { SURFACETYPE } = require('./lib/definitions/enums');
	*/
  'SURFACETYPE': 'SurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TOTALSURFACECELLS': 'TotalSurfaceCells',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWSTEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWINTERVAL': 'SurfaceGrowInterval',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACELIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACESTATUSCHANCE': 'SurfaceStatusChance',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOURCETARGETEFFECT': 'SourceTargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETTARGETEFFECT': 'TargetTargetEffect',
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
  'SPAWNEFFECT': 'SpawnEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREVIEWEFFECT': 'PreviewEffect',
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
  'SKILLTYPE': 'SkillType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEVEL': 'Level',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISENEMYSKILL': 'IsEnemySkill',
  /**
	* Value must be one of the values from the SKILLABILITY enum. You can import this via const { SKILLABILITY } = require('./lib/definitions/enums');
	*/
  'ABILITY': 'Ability',
  /**
	* Value must be one of the values from the SKILLTIER enum. You can import this via const { SKILLTIER } = require('./lib/definitions/enums');
	*/
  'TIER': 'Tier',
  /**
	* Value must be one of the values from the SKILLREQUIREMENT enum. You can import this via const { SKILLREQUIREMENT } = require('./lib/definitions/enums');
	*/
  'REQUIREMENT': 'Requirement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTIONPOINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'COOLDOWN': 'Cooldown',
  /**
	* Value must be one of the values from the AIFLAGS enum. You can import this via const { AIFLAGS } = require('./lib/definitions/enums');
	*/
  'AIFLAGS': 'AIFlags',
  /**
	* Value must be one of the values from the DAMAGESOURCETYPE enum. You can import this via const { DAMAGESOURCETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGE': 'Damage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGEMULTIPLIER': 'Damage Multiplier',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGERANGE': 'Damage Range',
  /**
	* Value must be one of the values from the DAMAGETYPE enum. You can import this via const { DAMAGETYPE } = require('./lib/definitions/enums');
	*/
  'DAMAGETYPE': 'DamageType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLPROPERTIES': 'SkillProperties',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Value must be one of the values from the SURFACETYPE enum. You can import this via const { SURFACETYPE } = require('./lib/definitions/enums');
	*/
  'SURFACETYPE': 'SurfaceType',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'IGNORECURSED': 'IgnoreCursed',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACELIFETIME': 'SurfaceLifetime',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACESTATUSCHANCE': 'SurfaceStatusChance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWSTEP': 'SurfaceGrowStep',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SURFACEGROWINTERVAL': 'SurfaceGrowInterval',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONDAMAGE': 'UseWeaponDamage',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'USEWEAPONPROPERTIES': 'UseWeaponProperties',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETCHARACTERS': 'CanTargetCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'CANTARGETITEMS': 'CanTargetItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTION': 'StatsDescription',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSDESCRIPTIONPARAMS': 'StatsDescriptionParams',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FXSCALE': 'FXScale',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONINIT': 'PrepareAnimationInit',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREANIMATIONLOOP': 'PrepareAnimationLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PREPAREEFFECT': 'PrepareEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTANIMATION': 'CastAnimation',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTTEXTEVENT': 'CastTextEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECT': 'CastEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'CASTEFFECTTEXTEVENT': 'CastEffectTextEvent',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MEMORYCOST': 'Memory Cost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGICCOST': 'Magic Cost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REQUIREMENTS': 'Requirements',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MEMORIZATIONREQUIREMENTS': 'MemorizationRequirements',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PUSHDISTANCE': 'PushDistance',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'STEALTH': 'Stealth',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SHAPE': 'Shape',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'BACKSTART': 'BackStart',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FRONTOFFSET': 'FrontOffset',
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
