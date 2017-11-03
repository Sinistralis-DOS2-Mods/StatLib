const STATUS_FIELD_NAMES = {
  'NAME':'Name',
  'USING':'Using',
  'TYPE':'Type',
  'FOR_GAME_MASTER':'ForGameMaster',
  'INITIATE_COMBAT':'InitiateCombat',
  'BRING_INTO_COMBAT':'BringIntoCombat',
  'DISPLAY_NAME':'DisplayName',
  'DESCRIPTION':'Description',
  'DESCRIPTION_PARAMS':'DescriptionParams',
  'ICON':'Icon',
  'FORMAT_COLOR':'FormatColor',
  'FORCE_OVERHEAD':'ForceOverhead',
  'APPLY_EFFECT':'ApplyEffect',
  'STATUS_EFFECT':'StatusEffect',
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS':'StatusEffectOverrideForItems',
  'STATUS_EFFECT_ON_TURN':'StatusEffectOnTurn',
  'MATERIAL_TYPE':'MaterialType',
  'MATERIAL':'Material',
  'MATERIAL_APPLY_BODY':'MaterialApplyBody',
  'MATERIAL_APPLY_ARMOR':'MaterialApplyArmor',
  'MATERIAL_APPLY_WEAPON':'MaterialApplyWeapon',
  'MATERIAL_APPLY_NORMAL_MAP':'MaterialApplyNormalMap',
  'MATERIAL_FADE_AMOUNT':'MaterialFadeAmount',
  'MATERIAL_OVERLAY_OFFSET':'MaterialOverlayOffset',
  'MATERIAL_PARAMETERS':'MaterialParameters',
  'SOUND_START':'SoundStart',
  'SOUND_LOOP':'SoundLoop',
  'SOUND_STOP':'SoundStop',
  'SAVING_THROW':'SavingThrow',
  'IMMUNE_FLAG':'ImmuneFlag',
  'IS_CHANNELED':'IsChanneled',
  'STATS_ID':'StatsId',
  'STACK_ID':'StackId',
  'STACK_PRIORITY':'StackPriority',
  'AURA_RADIUS':'AuraRadius',
  'AURA_SELF':'AuraSelf',
  'AURA_ALLIES':'AuraAllies',
  'AURA_NEUTRALS':'AuraNeutrals',
  'AURA_ENEMIES':'AuraEnemies',
  'AURA_ITEMS':'AuraItems',
  'AURA_FX':'AuraFX',
  'SURFACE_CHANGE':'SurfaceChange',
  'IS_INVULNERABLE':'IsInvulnerable',
  'LOSE_CONTROL':'LoseControl',
  'SKILLS':'Skills',
  'ITEMS':'Items',
  'WEAPON_OVERRIDE':'WeaponOverride',
  'RESET_COOLDOWNS':'ResetCooldowns',
  'RESET_ONCE_PER_COMBAT':'ResetOncePerCombat',
  'SCALE_WITH_VITALITY':'ScaleWithVitality',
  'TARGET_EFFECT':'TargetEffect',
  'PROJECTILE':'Projectile',
  'RADIUS':'Radius',
  'CHARGES':'Charges',
  'DEFEND_TARGET_POSITION':'DefendTargetPosition',
  'TARGET_CONDITIONS':'TargetConditions',
  'IS_RESISTING_DEATH':'IsResistingDeath',
  'DESCRIPTION_CASTER':'DescriptionCaster',
  'DESCRIPTION_TARGET':'DescriptionTarget',
  'WIN_BOOST':'WinBoost',
  'LOSE_BOOST':'LoseBoost',
  'LEAVE_ACTION':'LeaveAction',
  'DIE_ACTION':'DieAction',
  'DAMAGE_EVENT':'DamageEvent',
  'DAMAGE_STATS':'DamageStats',
  'DEATH_TYPE':'DeathType',
  'DAMAGE_CHARACTERS':'DamageCharacters',
  'DAMAGE_ITEMS':'DamageItems',
  'DAMAGE_TORCHES':'DamageTorches',
  'PERMANENT_ON_TORCH':'PermanentOnTorch',
  'SPAWN_BLOOD':'SpawnBlood',
  'BEAM_EFFECT':'BeamEffect',
  'PLAYER_SAME_PARTY':'PlayerSameParty',
  'PLAYER_HAS_TAG':'PlayerHasTag',
  'PEACE_ONLY':'PeaceOnly',
  'ONLY_WHILE_MOVING':'OnlyWhileMoving',
  'HEAL_STAT':'HealStat',
  'HEAL_TYPE':'HealType',
  'HEAL_VALUE':'HealValue',
  'ABSORB_SURFACE_TYPE':'AbsorbSurfaceType',
  'ABSORB_SURFACE_RANGE':'AbsorbSurfaceRange',
  'BONUS_FROM_ABILITY':'BonusFromAbility',
  'HEAL_EFFECT_ID':'HealEffectId',
  'VAMPIRISM_TYPE':'VampirismType',
  'NECROMANTIC':'Necromantic',
  'HEALING_EVENT':'HealingEvent',
  'SKIP_INITIAL_EFFECT':'SkipInitialEffect',
  'HEAL_MULTIPLIER':'HealMultiplier',
  'FREEZE_TIME':'FreezeTime',
  'APPLY_STATUS_ON_TICK':'ApplyStatusOnTick',
  'INSTANT':'Instant',
  'FREEZE_COOLDOWNS':'FreezeCooldowns',
  'POLYMORPH_RESULT':'PolymorphResult',
  'DISABLE_INTERACTIONS':'DisableInteractions',
  'AI_CALCULATION_SKILL_OVERRIDE':'AiCalculationSkillOverride',
  'TOGGLE':'Toggle',
  'RETAIN_SKILLS':'RetainSkills'
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
  'WEAPON_OVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESET_COOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'RESET_ONCE_PER_COMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SCALE_WITH_VITALITY': 'ScaleWithVitality',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_EFFECT': 'TargetEffect',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DEFEND_TARGET_POSITION': 'DefendTargetPosition',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'TARGET_CONDITIONS': 'TargetConditions',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_CASTER': 'DescriptionCaster',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_TARGET': 'DescriptionTarget',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'WIN_BOOST': 'WinBoost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'LOSE_BOOST': 'LoseBoost',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
  'WEAPON_OVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESET_COOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'RESET_ONCE_PER_COMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SCALE_WITH_VITALITY': 'ScaleWithVitality',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'LEAVE_ACTION': 'LeaveAction',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DIE_ACTION': 'DieAction',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the STATUS_EVENT enum. You can import this via const { STATUS_EVENT } = require('./lib/definitions/enums');
	*/
  'DAMAGE_EVENT': 'DamageEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DAMAGE_STATS': 'DamageStats',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DAMAGE_CHARACTERS': 'DamageCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DAMAGE_ITEMS': 'DamageItems',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TORCHES': 'DamageTorches',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'PERMANENT_ON_TORCH': 'PermanentOnTorch',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SPAWN_BLOOD': 'SpawnBlood',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SCALE_WITH_VITALITY': 'ScaleWithVitality',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the STATUS_EVENT enum. You can import this via const { STATUS_EVENT } = require('./lib/definitions/enums');
	*/
  'DAMAGE_EVENT': 'DamageEvent',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DAMAGE_STATS': 'DamageStats',
  /**
	* Value must be one of the values from the DEATH_TYPE enum. You can import this via const { DEATH_TYPE } = require('./lib/definitions/enums');
	*/
  'DEATH_TYPE': 'DeathType',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DAMAGE_CHARACTERS': 'DamageCharacters',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DAMAGE_ITEMS': 'DamageItems',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DAMAGE_TORCHES': 'DamageTorches',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'PERMANENT_ON_TORCH': 'PermanentOnTorch',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SPAWN_BLOOD': 'SpawnBlood',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
  'WEAPON_OVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESET_COOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'RESET_ONCE_PER_COMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SCALE_WITH_VITALITY': 'ScaleWithVitality',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'BEAM_EFFECT': 'BeamEffect',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'PLAYER_SAME_PARTY': 'PlayerSameParty',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PLAYER_HAS_TAG': 'PlayerHasTag',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'PEACE_ONLY': 'PeaceOnly',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
  'WEAPON_OVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESET_COOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'RESET_ONCE_PER_COMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SCALE_WITH_VITALITY': 'ScaleWithVitality',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ITEMS': 'Items',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'ONLY_WHILE_MOVING': 'OnlyWhileMoving',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the STATUS_HEAL_TYPE enum. You can import this via const { STATUS_HEAL_TYPE } = require('./lib/definitions/enums');
	*/
  'HEAL_STAT': 'HealStat',
  /**
	* Value must be one of the values from the HEAL_VALUE_TYPE enum. You can import this via const { HEAL_VALUE_TYPE } = require('./lib/definitions/enums');
	*/
  'HEAL_TYPE': 'HealType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEAL_VALUE': 'HealValue',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ABSORB_SURFACE_TYPE': 'AbsorbSurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ABSORB_SURFACE_RANGE': 'AbsorbSurfaceRange',
  /**
	* Value must be one of the values from the ABILITY enum. You can import this via const { ABILITY } = require('./lib/definitions/enums');
	*/
  'BONUS_FROM_ABILITY': 'BonusFromAbility',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'HEAL_EFFECT_ID': 'HealEffectId',
  /**
	* Value must be one of the values from the VAMPIRISM_TYPE enum. You can import this via const { VAMPIRISM_TYPE } = require('./lib/definitions/enums');
	*/
  'VAMPIRISM_TYPE': 'VampirismType',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the STATUS_EVENT enum. You can import this via const { STATUS_EVENT } = require('./lib/definitions/enums');
	*/
  'HEALING_EVENT': 'HealingEvent',
  /**
	* Value must be one of the values from the STATUS_HEAL_TYPE enum. You can import this via const { STATUS_HEAL_TYPE } = require('./lib/definitions/enums');
	*/
  'HEAL_STAT': 'HealStat',
  /**
	* Value must be one of the values from the HEAL_VALUE_TYPE enum. You can import this via const { HEAL_VALUE_TYPE } = require('./lib/definitions/enums');
	*/
  'HEAL_TYPE': 'HealType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEAL_VALUE': 'HealValue',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SKIP_INITIAL_EFFECT': 'SkipInitialEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ABSORB_SURFACE_TYPE': 'AbsorbSurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ABSORB_SURFACE_RANGE': 'AbsorbSurfaceRange',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'HEAL_EFFECT_ID': 'HealEffectId',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'BEAM_EFFECT': 'BeamEffect',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'HEAL_MULTIPLIER': 'HealMultiplier',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FREEZE_TIME': 'FreezeTime',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_STATUS_ON_TICK': 'ApplyStatusOnTick',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
  'WEAPON_OVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESET_COOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'RESET_ONCE_PER_COMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SCALE_WITH_VITALITY': 'ScaleWithVitality',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
  'WEAPON_OVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESET_COOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'RESET_ONCE_PER_COMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SCALE_WITH_VITALITY': 'ScaleWithVitality',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FREEZE_COOLDOWNS': 'FreezeCooldowns',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SKILLS': 'Skills',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'POLYMORPH_RESULT': 'PolymorphResult',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'DISABLE_INTERACTIONS': 'DisableInteractions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AI_CALCULATION_SKILL_OVERRIDE': 'AiCalculationSkillOverride',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'TOGGLE': 'Toggle',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RETAIN_SKILLS': 'RetainSkills',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
  'WEAPON_OVERRIDE': 'WeaponOverride',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RESET_COOLDOWNS': 'ResetCooldowns',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'RESET_ONCE_PER_COMBAT': 'ResetOncePerCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'SCALE_WITH_VITALITY': 'ScaleWithVitality',
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
  'TARGET_CONDITIONS': 'TargetConditions',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_RESISTING_DEATH': 'IsResistingDeath',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'LOSE_CONTROL': 'LoseControl',
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
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FOR_GAME_MASTER': 'ForGameMaster',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'INITIATE_COMBAT': 'InitiateCombat',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'BRING_INTO_COMBAT': 'BringIntoCombat',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DISPLAY_NAME': 'DisplayName',
  /**
	* This field can be replaced by a translation key in the Translated String Editor. Otherwise, just fill the value with a normal string. Ex. 'SomeValue'
	*/
  'DESCRIPTION': 'Description',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'DESCRIPTION_PARAMS': 'DescriptionParams',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ICON': 'Icon',
  /**
	* Value must be one of the values from the FORMAT_STRING_COLOR enum. You can import this via const { FORMAT_STRING_COLOR } = require('./lib/definitions/enums');
	*/
  'FORMAT_COLOR': 'FormatColor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'FORCE_OVERHEAD': 'ForceOverhead',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'APPLY_EFFECT': 'ApplyEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_OVERRIDE_FOR_ITEMS': 'StatusEffectOverrideForItems',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT_ON_TURN': 'StatusEffectOnTurn',
  /**
	* Value must be one of the values from the MATERIAL_TYPE enum. You can import this via const { MATERIAL_TYPE } = require('./lib/definitions/enums');
	*/
  'MATERIAL_TYPE': 'MaterialType',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL': 'Material',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_BODY': 'MaterialApplyBody',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_ARMOR': 'MaterialApplyArmor',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_WEAPON': 'MaterialApplyWeapon',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'MATERIAL_APPLY_NORMAL_MAP': 'MaterialApplyNormalMap',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_FADE_AMOUNT': 'MaterialFadeAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MATERIAL_OVERLAY_OFFSET': 'MaterialOverlayOffset',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MATERIAL_PARAMETERS': 'MaterialParameters',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_START': 'SoundStart',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_LOOP': 'SoundLoop',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SOUND_STOP': 'SoundStop',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the ATTRIBUTE_FLAG enum. You can import this via const { ATTRIBUTE_FLAG } = require('./lib/definitions/enums');
	*/
  'IMMUNE_FLAG': 'ImmuneFlag',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_CHANNELED': 'IsChanneled',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATS_ID': 'StatsId',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'STACK_PRIORITY': 'StackPriority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AURA_RADIUS': 'AuraRadius',
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
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AURA_FX': 'AuraFX',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'SURFACE_CHANGE': 'SurfaceChange',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_INVULNERABLE': 'IsInvulnerable',
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
