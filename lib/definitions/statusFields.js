const STATUS_FIELD_NAMES = {
  'NAME':'Name',
  'USING':'Using',
  'TYPE':'Type',
  'FORGAMEMASTER':'ForGameMaster',
  'INITIATECOMBAT':'InitiateCombat',
  'BRINGINTOCOMBAT':'BringIntoCombat',
  'DISPLAYNAME':'DisplayName',
  'DESCRIPTION':'Description',
  'DESCRIPTIONPARAMS':'DescriptionParams',
  'ICON':'Icon',
  'FORMATCOLOR':'FormatColor',
  'FORCEOVERHEAD':'ForceOverhead',
  'APPLYEFFECT':'ApplyEffect',
  'STATUSEFFECT':'StatusEffect',
  'STATUSEFFECTOVERRIDEFORITEMS':'StatusEffectOverrideForItems',
  'STATUSEFFECTONTURN':'StatusEffectOnTurn',
  'MATERIALTYPE':'MaterialType',
  'MATERIAL':'Material',
  'MATERIALAPPLYBODY':'MaterialApplyBody',
  'MATERIALAPPLYARMOR':'MaterialApplyArmor',
  'MATERIALAPPLYWEAPON':'MaterialApplyWeapon',
  'MATERIALAPPLYNORMALMAP':'MaterialApplyNormalMap',
  'MATERIALFADEAMOUNT':'MaterialFadeAmount',
  'MATERIALOVERLAYOFFSET':'MaterialOverlayOffset',
  'MATERIALPARAMETERS':'MaterialParameters',
  'SOUNDSTART':'SoundStart',
  'SOUNDLOOP':'SoundLoop',
  'SOUNDSTOP':'SoundStop',
  'SAVINGTHROW':'SavingThrow',
  'IMMUNEFLAG':'ImmuneFlag',
  'ISCHANNELED':'IsChanneled',
  'STATSID':'StatsId',
  'STACKID':'StackId',
  'STACKPRIORITY':'StackPriority',
  'AURARADIUS':'AuraRadius',
  'AURASELF':'AuraSelf',
  'AURAALLIES':'AuraAllies',
  'AURANEUTRALS':'AuraNeutrals',
  'AURAENEMIES':'AuraEnemies',
  'AURAITEMS':'AuraItems',
  'AURAFX':'AuraFX',
  'SURFACECHANGE':'SurfaceChange',
  'ISINVULNERABLE':'IsInvulnerable',
  'LOSECONTROL':'LoseControl',
  'SKILLS':'Skills',
  'ITEMS':'Items',
  'WEAPONOVERRIDE':'WeaponOverride',
  'RESETCOOLDOWNS':'ResetCooldowns',
  'RESETONCEPERCOMBAT':'ResetOncePerCombat',
  'SCALEWITHVITALITY':'ScaleWithVitality',
  'TARGETEFFECT':'TargetEffect',
  'PROJECTILE':'Projectile',
  'RADIUS':'Radius',
  'CHARGES':'Charges',
  'DEFENDTARGETPOSITION':'DefendTargetPosition',
  'TARGETCONDITIONS':'TargetConditions',
  'ISRESISTINGDEATH':'IsResistingDeath',
  'DESCRIPTIONCASTER':'DescriptionCaster',
  'DESCRIPTIONTARGET':'DescriptionTarget',
  'WINBOOST':'WinBoost',
  'LOSEBOOST':'LoseBoost',
  'LEAVEACTION':'LeaveAction',
  'DIEACTION':'DieAction',
  'DAMAGEEVENT':'DamageEvent',
  'DAMAGESTATS':'DamageStats',
  'DEATHTYPE':'DeathType',
  'DAMAGECHARACTERS':'DamageCharacters',
  'DAMAGEITEMS':'DamageItems',
  'DAMAGETORCHES':'DamageTorches',
  'PERMANENTONTORCH':'PermanentOnTorch',
  'SPAWNBLOOD':'SpawnBlood',
  'BEAMEFFECT':'BeamEffect',
  'PLAYERSAMEPARTY':'PlayerSameParty',
  'PLAYERHASTAG':'PlayerHasTag',
  'PEACEONLY':'PeaceOnly',
  'ONLYWHILEMOVING':'OnlyWhileMoving',
  'HEALSTAT':'HealStat',
  'HEALTYPE':'HealType',
  'HEALVALUE':'HealValue',
  'ABSORBSURFACETYPE':'AbsorbSurfaceType',
  'ABSORBSURFACERANGE':'AbsorbSurfaceRange',
  'BONUSFROMABILITY':'BonusFromAbility',
  'HEALEFFECTID':'HealEffectId',
  'VAMPIRISMTYPE':'VampirismType',
  'NECROMANTIC':'Necromantic',
  'HEALINGEVENT':'HealingEvent',
  'SKIPINITIALEFFECT':'SkipInitialEffect',
  'HEALMULTIPLIER':'HealMultiplier',
  'FREEZETIME':'FreezeTime',
  'APPLYSTATUSONTICK':'ApplyStatusOnTick',
  'INSTANT':'Instant',
  'FREEZECOOLDOWNS':'FreezeCooldowns',
  'POLYMORPHRESULT':'PolymorphResult',
  'DISABLEINTERACTIONS':'DisableInteractions',
  'AICALCULATIONSKILLOVERRIDE':'AiCalculationSkillOverride',
  'TOGGLE':'Toggle',
  'RETAINSKILLS':'RetainSkills'
};

const STATUS_ACTIVE_DEFENSE_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONOVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESETCOOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'RESETONCEPERCOMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SCALEWITHVITALITY': 'ScaleWithVitality',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETEFFECT': 'TargetEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PROJECTILE': 'Projectile',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RADIUS': 'Radius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CHARGES': 'Charges',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DEFENDTARGETPOSITION': 'DefendTargetPosition',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
};

const STATUS_BLIND_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
};

const STATUS_CHALLENGE_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONCASTER': 'DescriptionCaster',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONTARGET': 'DescriptionTarget',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WINBOOST': 'WinBoost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'LOSEBOOST': 'LoseBoost',
};

const STATUS_CHARMED_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
};

const STATUS_CONSUME_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONOVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESETCOOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'RESETONCEPERCOMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SCALEWITHVITALITY': 'ScaleWithVitality',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'LEAVEACTION': 'LeaveAction',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DIEACTION': 'DieAction',
};

const STATUS_DAMAGE_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the STATUSEVENT enum. You can import this via const { STATUSEVENT } = require('./lib/definitions/enums');
	*/
  'DAMAGEEVENT': 'DamageEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DAMAGESTATS': 'DamageStats',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DAMAGECHARACTERS': 'DamageCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DAMAGEITEMS': 'DamageItems',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DAMAGETORCHES': 'DamageTorches',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'PERMANENTONTORCH': 'PermanentOnTorch',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SPAWNBLOOD': 'SpawnBlood',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SCALEWITHVITALITY': 'ScaleWithVitality',
};

const STATUS_DAMAGE_ON_MOVE_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the STATUSEVENT enum. You can import this via const { STATUSEVENT } = require('./lib/definitions/enums');
	*/
  'DAMAGEEVENT': 'DamageEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DAMAGESTATS': 'DamageStats',
  /**
	* Value must be one of the values from the DEATHTYPE enum. You can import this via const { DEATHTYPE } = require('./lib/definitions/enums');
	*/
  'DEATHTYPE': 'DeathType',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DAMAGECHARACTERS': 'DamageCharacters',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DAMAGEITEMS': 'DamageItems',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DAMAGETORCHES': 'DamageTorches',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'PERMANENTONTORCH': 'PermanentOnTorch',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SPAWNBLOOD': 'SpawnBlood',
};

const STATUS_DEACTIVATED_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONOVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESETCOOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'RESETONCEPERCOMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SCALEWITHVITALITY': 'ScaleWithVitality',
};

const STATUS_DECAYING_TOUCH_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
};

const STATUS_DEMONIC_BARGAIN_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
};

const STATUS_DISARMED_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
};

const STATUS_EFFECT_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'BEAMEFFECT': 'BeamEffect',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'PLAYERSAMEPARTY': 'PlayerSameParty',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PLAYERHASTAG': 'PlayerHasTag',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'PEACEONLY': 'PeaceOnly',
};

const STATUS_EXTRA_TURN_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONOVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESETCOOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'RESETONCEPERCOMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SCALEWITHVITALITY': 'ScaleWithVitality',
};

const STATUS_FEAR_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
};

const STATUS_FLOATING_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ONLYWHILEMOVING': 'OnlyWhileMoving',
};

const STATUS_GUARDIAN_ANGEL_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
};

const STATUS_HEAL_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the STATUSHEALTYPE enum. You can import this via const { STATUSHEALTYPE } = require('./lib/definitions/enums');
	*/
  'HEALSTAT': 'HealStat',
  /**
	* Value must be one of the values from the HEALVALUETYPE enum. You can import this via const { HEALVALUETYPE } = require('./lib/definitions/enums');
	*/
  'HEALTYPE': 'HealType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEALVALUE': 'HealValue',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ABSORBSURFACETYPE': 'AbsorbSurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ABSORBSURFACERANGE': 'AbsorbSurfaceRange',
  /**
	* Value must be one of the values from the ABILITY enum. You can import this via const { ABILITY } = require('./lib/definitions/enums');
	*/
  'BONUSFROMABILITY': 'BonusFromAbility',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'HEALEFFECTID': 'HealEffectId',
  /**
	* Value must be one of the values from the VAMPIRISMTYPE enum. You can import this via const { VAMPIRISMTYPE } = require('./lib/definitions/enums');
	*/
  'VAMPIRISMTYPE': 'VampirismType',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'NECROMANTIC': 'Necromantic',
};

const STATUS_HEALING_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the STATUSEVENT enum. You can import this via const { STATUSEVENT } = require('./lib/definitions/enums');
	*/
  'HEALINGEVENT': 'HealingEvent',
  /**
	* Value must be one of the values from the STATUSHEALTYPE enum. You can import this via const { STATUSHEALTYPE } = require('./lib/definitions/enums');
	*/
  'HEALSTAT': 'HealStat',
  /**
	* Value must be one of the values from the HEALVALUETYPE enum. You can import this via const { HEALVALUETYPE } = require('./lib/definitions/enums');
	*/
  'HEALTYPE': 'HealType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEALVALUE': 'HealValue',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SKIPINITIALEFFECT': 'SkipInitialEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ABSORBSURFACETYPE': 'AbsorbSurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ABSORBSURFACERANGE': 'AbsorbSurfaceRange',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'HEALEFFECTID': 'HealEffectId',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'NECROMANTIC': 'Necromantic',
};

const STATUS_HEAL_SHARING_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
};

const STATUS_HEAL_SHARING_CASTER_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'BEAMEFFECT': 'BeamEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEALMULTIPLIER': 'HealMultiplier',
};

const STATUS_INCAPACITATED_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FREEZETIME': 'FreezeTime',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYSTATUSONTICK': 'ApplyStatusOnTick',
};

const STATUS_INVISIBLE_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONOVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESETCOOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'RESETONCEPERCOMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SCALEWITHVITALITY': 'ScaleWithVitality',
};

const STATUS_KNOCKED_DOWN_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INSTANT': 'Instant',
};

const STATUS_MUTED_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
};

const STATUS_PLAY_DEAD_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONOVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESETCOOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'RESETONCEPERCOMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SCALEWITHVITALITY': 'ScaleWithVitality',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FREEZECOOLDOWNS': 'FreezeCooldowns',
};

const STATUS_POLYMORPHED_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'POLYMORPHRESULT': 'PolymorphResult',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'DISABLEINTERACTIONS': 'DisableInteractions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AICALCULATIONSKILLOVERRIDE': 'AiCalculationSkillOverride',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'TOGGLE': 'Toggle',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RETAINSKILLS': 'RetainSkills',
};

const STATUS_SPARK_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WEAPONOVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESETCOOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'RESETONCEPERCOMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'SCALEWITHVITALITY': 'ScaleWithVitality',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PROJECTILE': 'Projectile',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RADIUS': 'Radius',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CHARGES': 'Charges',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGETCONDITIONS': 'TargetConditions',
};

const STATUS_STANCE_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISRESISTINGDEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'LOSECONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
};

const STATUS_THROWN_NAMES = {
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
  'TYPE': 'Type',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORGAMEMASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'INITIATECOMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'BRINGINTOCOMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAYNAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTIONPARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMATSTRINGCOLOR enum. You can import this via const { FORMATSTRINGCOLOR } = require('./lib/definitions/enums');
	*/
  'FORMATCOLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'FORCEOVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLYEFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTOVERRIDEFORITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUSEFFECTONTURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIALTYPE enum. You can import this via const { MATERIALTYPE } = require('./lib/definitions/enums');
	*/
  'MATERIALTYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYBODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYWEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'MATERIALAPPLYNORMALMAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALFADEAMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIALOVERLAYOFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIALPARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTART': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDLOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUNDSTOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVINGTHROW enum. You can import this via const { SAVINGTHROW } = require('./lib/definitions/enums');
	*/
  'SAVINGTHROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTEFLAG enum. You can import this via const { ATTRIBUTEFLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNEFLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISCHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATSID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACKID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACKPRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURARADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURAFX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACECHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YESNO enum. You can import this via const { YESNO } = require('./lib/definitions/enums');
	*/
  'ISINVULNERABLE': 'IsInvulnerable',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
};

const STATUS_FIELDS = {
  'Name': (value) => ({ name: 'Name', type: 'NameStatObjectFieldDefinition', value}),
  'Using': (value) => ({ name: 'Using', type: 'BaseClassStatObjectFieldDefinition', value}),
  'Type': (value) => ({ name: 'Type', type: 'StringStatObjectFieldDefinition', value}),
  'ForGameMaster': (value) => ({ name: 'ForGameMaster', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'InitiateCombat': (value) => ({ name: 'InitiateCombat', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'BringIntoCombat': (value) => ({ name: 'BringIntoCombat', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'DisplayName': (value) => ({ name: 'DisplayName', type: 'TranslatedStringStatObjectFieldDefinition', value}),
  'Description': (value) => ({ name: 'Description', type: 'TranslatedStringStatObjectFieldDefinition', value}),
  'DescriptionParams': (value) => ({ name: 'DescriptionParams', type: 'StringStatObjectFieldDefinition', value}),
  'Icon': (value) => ({ name: 'Icon', type: 'StringStatObjectFieldDefinition', value}),
  'FormatColor': (value) => ({ name: 'FormatColor', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'FormatStringColor'}),
  'ForceOverhead': (value) => ({ name: 'ForceOverhead', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'ApplyEffect': (value) => ({ name: 'ApplyEffect', type: 'StringStatObjectFieldDefinition', value}),
  'StatusEffect': (value) => ({ name: 'StatusEffect', type: 'StringStatObjectFieldDefinition', value}),
  'StatusEffectOverrideForItems': (value) => ({ name: 'StatusEffectOverrideForItems', type: 'StringStatObjectFieldDefinition', value}),
  'StatusEffectOnTurn': (value) => ({ name: 'StatusEffectOnTurn', type: 'StringStatObjectFieldDefinition', value}),
  'MaterialType': (value) => ({ name: 'MaterialType', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'MaterialType'}),
  'Material': (value) => ({ name: 'Material', type: 'StringStatObjectFieldDefinition', value}),
  'MaterialApplyBody': (value) => ({ name: 'MaterialApplyBody', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'MaterialApplyArmor': (value) => ({ name: 'MaterialApplyArmor', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'MaterialApplyWeapon': (value) => ({ name: 'MaterialApplyWeapon', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'MaterialApplyNormalMap': (value) => ({ name: 'MaterialApplyNormalMap', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'MaterialFadeAmount': (value) => ({ name: 'MaterialFadeAmount', type: 'IntegerStatObjectFieldDefinition', value}),
  'MaterialOverlayOffset': (value) => ({ name: 'MaterialOverlayOffset', type: 'IntegerStatObjectFieldDefinition', value}),
  'MaterialParameters': (value) => ({ name: 'MaterialParameters', type: 'StringStatObjectFieldDefinition', value}),
  'SoundStart': (value) => ({ name: 'SoundStart', type: 'StringStatObjectFieldDefinition', value}),
  'SoundLoop': (value) => ({ name: 'SoundLoop', type: 'StringStatObjectFieldDefinition', value}),
  'SoundStop': (value) => ({ name: 'SoundStop', type: 'StringStatObjectFieldDefinition', value}),
  'SavingThrow': (value) => ({ name: 'SavingThrow', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'SavingThrow'}),
  'ImmuneFlag': (value) => ({ name: 'ImmuneFlag', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'AttributeFlag'}),
  'IsChanneled': (value) => ({ name: 'IsChanneled', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'StatsId': (value) => ({ name: 'StatsId', type: 'StringStatObjectFieldDefinition', value}),
  'StackId': (value) => ({ name: 'StackId', type: 'StringStatObjectFieldDefinition', value}),
  'StackPriority': (value) => ({ name: 'StackPriority', type: 'IntegerStatObjectFieldDefinition', value}),
  'AuraRadius': (value) => ({ name: 'AuraRadius', type: 'IntegerStatObjectFieldDefinition', value}),
  'AuraSelf': (value) => ({ name: 'AuraSelf', type: 'StringStatObjectFieldDefinition', value}),
  'AuraAllies': (value) => ({ name: 'AuraAllies', type: 'StringStatObjectFieldDefinition', value}),
  'AuraNeutrals': (value) => ({ name: 'AuraNeutrals', type: 'StringStatObjectFieldDefinition', value}),
  'AuraEnemies': (value) => ({ name: 'AuraEnemies', type: 'StringStatObjectFieldDefinition', value}),
  'AuraItems': (value) => ({ name: 'AuraItems', type: 'StringStatObjectFieldDefinition', value}),
  'AuraFX': (value) => ({ name: 'AuraFX', type: 'StringStatObjectFieldDefinition', value}),
  'SurfaceChange': (value) => ({ name: 'SurfaceChange', type: 'StringStatObjectFieldDefinition', value}),
  'IsInvulnerable': (value) => ({ name: 'IsInvulnerable', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'LoseControl': (value) => ({ name: 'LoseControl', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'Skills': (value) => ({ name: 'Skills', type: 'StringStatObjectFieldDefinition', value}),
  'Items': (value) => ({ name: 'Items', type: 'StringStatObjectFieldDefinition', value}),
  'WeaponOverride': (value) => ({ name: 'WeaponOverride', type: 'StringStatObjectFieldDefinition', value}),
  'ResetCooldowns': (value) => ({ name: 'ResetCooldowns', type: 'StringStatObjectFieldDefinition', value}),
  'ResetOncePerCombat': (value) => ({ name: 'ResetOncePerCombat', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'ScaleWithVitality': (value) => ({ name: 'ScaleWithVitality', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'TargetEffect': (value) => ({ name: 'TargetEffect', type: 'StringStatObjectFieldDefinition', value}),
  'Projectile': (value) => ({ name: 'Projectile', type: 'StringStatObjectFieldDefinition', value}),
  'Radius': (value) => ({ name: 'Radius', type: 'IntegerStatObjectFieldDefinition', value}),
  'Charges': (value) => ({ name: 'Charges', type: 'IntegerStatObjectFieldDefinition', value}),
  'DefendTargetPosition': (value) => ({ name: 'DefendTargetPosition', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'TargetConditions': (value) => ({ name: 'TargetConditions', type: 'StringStatObjectFieldDefinition', value}),
  'IsResistingDeath': (value) => ({ name: 'IsResistingDeath', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'DescriptionCaster': (value) => ({ name: 'DescriptionCaster', type: 'StringStatObjectFieldDefinition', value}),
  'DescriptionTarget': (value) => ({ name: 'DescriptionTarget', type: 'StringStatObjectFieldDefinition', value}),
  'WinBoost': (value) => ({ name: 'WinBoost', type: 'StringStatObjectFieldDefinition', value}),
  'LoseBoost': (value) => ({ name: 'LoseBoost', type: 'StringStatObjectFieldDefinition', value}),
  'LeaveAction': (value) => ({ name: 'LeaveAction', type: 'StringStatObjectFieldDefinition', value}),
  'DieAction': (value) => ({ name: 'DieAction', type: 'StringStatObjectFieldDefinition', value}),
  'DamageEvent': (value) => ({ name: 'DamageEvent', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'StatusEvent'}),
  'DamageStats': (value) => ({ name: 'DamageStats', type: 'StringStatObjectFieldDefinition', value}),
  'DeathType': (value) => ({ name: 'DeathType', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Death Type'}),
  'DamageCharacters': (value) => ({ name: 'DamageCharacters', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'DamageItems': (value) => ({ name: 'DamageItems', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'DamageTorches': (value) => ({ name: 'DamageTorches', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'PermanentOnTorch': (value) => ({ name: 'PermanentOnTorch', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'SpawnBlood': (value) => ({ name: 'SpawnBlood', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'BeamEffect': (value) => ({ name: 'BeamEffect', type: 'StringStatObjectFieldDefinition', value}),
  'PlayerSameParty': (value) => ({ name: 'PlayerSameParty', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'PlayerHasTag': (value) => ({ name: 'PlayerHasTag', type: 'StringStatObjectFieldDefinition', value}),
  'PeaceOnly': (value) => ({ name: 'PeaceOnly', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'OnlyWhileMoving': (value) => ({ name: 'OnlyWhileMoving', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'HealStat': (value) => ({ name: 'HealStat', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'StatusHealType'}),
  'HealType': (value) => ({ name: 'HealType', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'HealValueType'}),
  'HealValue': (value) => ({ name: 'HealValue', type: 'IntegerStatObjectFieldDefinition', value}),
  'AbsorbSurfaceType': (value) => ({ name: 'AbsorbSurfaceType', type: 'StringStatObjectFieldDefinition', value}),
  'AbsorbSurfaceRange': (value) => ({ name: 'AbsorbSurfaceRange', type: 'IntegerStatObjectFieldDefinition', value}),
  'BonusFromAbility': (value) => ({ name: 'BonusFromAbility', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Ability'}),
  'HealEffectId': (value) => ({ name: 'HealEffectId', type: 'StringStatObjectFieldDefinition', value}),
  'VampirismType': (value) => ({ name: 'VampirismType', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'VampirismType'}),
  'Necromantic': (value) => ({ name: 'Necromantic', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'HealingEvent': (value) => ({ name: 'HealingEvent', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'StatusEvent'}),
  'SkipInitialEffect': (value) => ({ name: 'SkipInitialEffect', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'HealMultiplier': (value) => ({ name: 'HealMultiplier', type: 'IntegerStatObjectFieldDefinition', value}),
  'FreezeTime': (value) => ({ name: 'FreezeTime', type: 'IntegerStatObjectFieldDefinition', value}),
  'ApplyStatusOnTick': (value) => ({ name: 'ApplyStatusOnTick', type: 'StringStatObjectFieldDefinition', value}),
  'Instant': (value) => ({ name: 'Instant', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'FreezeCooldowns': (value) => ({ name: 'FreezeCooldowns', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'PolymorphResult': (value) => ({ name: 'PolymorphResult', type: 'StringStatObjectFieldDefinition', value}),
  'DisableInteractions': (value) => ({ name: 'DisableInteractions', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'AiCalculationSkillOverride': (value) => ({ name: 'AiCalculationSkillOverride', type: 'StringStatObjectFieldDefinition', value}),
  'Toggle': (value) => ({ name: 'Toggle', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'RetainSkills': (value) => ({ name: 'RetainSkills', type: 'StringStatObjectFieldDefinition', value}),
};

module.exports = {
  STATUS_FIELD_NAMES,      
  STATUS_FIELDS,
  STATUS_ACTIVE_DEFENSE_NAMES,
  STATUS_BLIND_NAMES,
  STATUS_CHALLENGE_NAMES,
  STATUS_CHARMED_NAMES,
  STATUS_CONSUME_NAMES,
  STATUS_DAMAGE_NAMES,
  STATUS_DAMAGE_ON_MOVE_NAMES,
  STATUS_DEACTIVATED_NAMES,
  STATUS_DECAYING_TOUCH_NAMES,
  STATUS_DEMONIC_BARGAIN_NAMES,
  STATUS_DISARMED_NAMES,
  STATUS_EFFECT_NAMES,
  STATUS_EXTRA_TURN_NAMES,
  STATUS_FEAR_NAMES,
  STATUS_FLOATING_NAMES,
  STATUS_GUARDIAN_ANGEL_NAMES,
  STATUS_HEAL_NAMES,
  STATUS_HEALING_NAMES,
  STATUS_HEAL_SHARING_NAMES,
  STATUS_HEAL_SHARING_CASTER_NAMES,
  STATUS_INCAPACITATED_NAMES,
  STATUS_INVISIBLE_NAMES,
  STATUS_KNOCKED_DOWN_NAMES,
  STATUS_MUTED_NAMES,
  STATUS_PLAY_DEAD_NAMES,
  STATUS_POLYMORPHED_NAMES,
  STATUS_SPARK_NAMES,
  STATUS_STANCE_NAMES,
  STATUS_THROWN_NAMES,
};
