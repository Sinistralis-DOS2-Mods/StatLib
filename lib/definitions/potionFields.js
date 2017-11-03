const POTION_FIELD_NAMES = {
  'NAME':'Name',
  'USING':'Using',
  'ROOT_TEMPLATE':'RootTemplate',
  'ACTPART':'Act part',
  'COMBO_CATEGORY':'ComboCategory',
  'VALUE':'Value',
  'DURATION':'Duration',
  'DAMAGE':'Damage',
  'DAMAGE_MULTIPLIER':'Damage Multiplier',
  'DAMAGE_RANGE':'Damage Range',
  'DAMAGE_TYPE':'DamageType',
  'EXTRA_PROPERTIES':'ExtraProperties',
  'UNKNOWN_BEFORE_CONSUME':'UnknownBeforeConsume',
  'AI_CALCULATION_STATS_OVERRIDE':'AiCalculationStatsOverride',
  'ACT':'Act',
  'ACTSTRENGTH':'Act strength',
  'STACK_ID':'StackId',
  'AURA_RADIUS':'AuraRadius',
  'AURA_SELF':'AuraSelf',
  'AURA_ALLIES':'AuraAllies',
  'AURA_NEUTRALS':'AuraNeutrals',
  'AURA_ENEMIES':'AuraEnemies',
  'AURA_ITEMS':'AuraItems',
  'AURA_FX':'AuraFX',
  'WEIGHT':'Weight',
  'STRENGTH':'Strength',
  'FINESSE':'Finesse',
  'INTELLIGENCE':'Intelligence',
  'CONSTITUTION':'Constitution',
  'MEMORY':'Memory',
  'WITS':'Wits',
  'SINGLE_HANDED':'SingleHanded',
  'TWO_HANDED':'TwoHanded',
  'RANGED':'Ranged',
  'DUAL_WIELDING':'DualWielding',
  'PHYSICAL_ARMOR_MASTERY':'PhysicalArmorMastery',
  'MAGIC_ARMOR_MASTERY':'MagicArmorMastery',
  'VITALITY_MASTERY':'VitalityMastery',
  'PAIN_REFLECTION':'PainReflection',
  'WARRIOR_LORE':'WarriorLore',
  'RANGER_LORE':'RangerLore',
  'ROGUE_LORE':'RogueLore',
  'SOURCERY':'Sourcery',
  'TELEKINESIS':'Telekinesis',
  'FIRE_SPECIALIST':'FireSpecialist',
  'WATER_SPECIALIST':'WaterSpecialist',
  'AIR_SPECIALIST':'AirSpecialist',
  'EARTH_SPECIALIST':'EarthSpecialist',
  'NECROMANCY':'Necromancy',
  'POLYMORPH':'Polymorph',
  'SUMMONING':'Summoning',
  'SNEAKING':'Sneaking',
  'THIEVERY':'Thievery',
  'LOREMASTER':'Loremaster',
  'REPAIR':'Repair',
  'BARTER':'Barter',
  'PERSUASION':'Persuasion',
  'LEADERSHIP':'Leadership',
  'LUCK':'Luck',
  'FIRE_RESISTANCE':'FireResistance',
  'EARTH_RESISTANCE':'EarthResistance',
  'WATER_RESISTANCE':'WaterResistance',
  'AIR_RESISTANCE':'AirResistance',
  'POISON_RESISTANCE':'PoisonResistance',
  'PIERCING_RESISTANCE':'PiercingResistance',
  'PHYSICAL_RESISTANCE':'PhysicalResistance',
  'SIGHT':'Sight',
  'HEARING':'Hearing',
  'INITIATIVE':'Initiative',
  'MOVEMENT':'Movement',
  'MOVEMENT_SPEED_BOOST':'MovementSpeedBoost',
  'VITALITY':'Vitality',
  'VITALITY_BOOST':'VitalityBoost',
  'VITALITY_PERCENTAGE':'VitalityPercentage',
  'CHANCE_TO_HIT_BOOST':'ChanceToHitBoost',
  'ACCURACY_BOOST':'AccuracyBoost',
  'DODGE_BOOST':'DodgeBoost',
  'DAMAGE_BOOST':'DamageBoost',
  'RANGE_BOOST':'RangeBoost',
  'APCOST_BOOST':'APCostBoost',
  'SPCOST_BOOST':'SPCostBoost',
  'APMAXIMUM':'APMaximum',
  'APSTART':'APStart',
  'APRECOVERY':'APRecovery',
  'CRITICAL_CHANCE':'CriticalChance',
  'GAIN':'Gain',
  'ARMOR':'Armor',
  'ARMOR_BOOST':'ArmorBoost',
  'MAGIC_ARMOR':'MagicArmor',
  'MAGIC_ARMOR_BOOST':'MagicArmorBoost',
  'USE_APCOST':'UseAPCost',
  'REFLECTION':'Reflection',
  'LIFE_STEAL':'LifeSteal',
  'ACTION_POINTS':'ActionPoints',
  'MAGIC_POINTS':'MagicPoints',
  'BLOOD_SURFACE_TYPE':'BloodSurfaceType',
  'MAX_SUMMONS':'MaxSummons',
  'ADD_TO_BOTTOM_BAR':'AddToBottomBar',
  'BOOST_CONDITIONS':'BoostConditions',
  'FLAGS':'Flags',
  'BONUS_WEAPON':'BonusWeapon',
  'STATUS_EFFECT':'StatusEffect',
  'STATUS_ICON':'StatusIcon',
  'STATUS_MATERIAL':'StatusMaterial',
  'SAVING_THROW':'SavingThrow',
  'INVENTORY_TAB':'InventoryTab',
  'IS_FOOD':'IsFood',
  'SUMMON_LIFELINK_MODIFIER':'SummonLifelinkModifier',
  'IGNORED_BY_AI':'IgnoredByAI',
  'RUNE_LEVEL':'RuneLevel',
  'RUNE_EFFECT_WEAPON':'RuneEffectWeapon',
  'RUNE_EFFECT_UPPERBODY':'RuneEffectUpperbody',
  'RUNE_EFFECT_AMULET':'RuneEffectAmulet',
  'OBJECT_CATEGORY':'ObjectCategory',
  'MIN_AMOUNT':'MinAmount',
  'MAX_AMOUNT':'MaxAmount',
  'PRIORITY':'Priority',
  'UNIQUE':'Unique',
  'MIN_LEVEL':'MinLevel',
  'MAX_LEVEL':'MaxLevel',
  'COMMENT':'Comment'
};

const POTION_NAMES = {
  /**
	* Must be a string and unique against all other Name fields in a Skill Type. An error will be thrown when building if this is violated.
	*/
  'NAME': 'Name',
  /**
	* Must be the un-typed named of an ability. Ex. 'Ricochet.'
	*/
  'USING': 'Using',
  /**
	* Must be a uuid of an existing root template in the editor.
	*/
  'ROOT_TEMPLATE': 'RootTemplate',
  /**
	* Value must be one of the values from the ACT_PART enum. You can import this via const { ACT_PART } = require('./lib/definitions/enums');
	*/
  'ACTPART': 'Act part',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'COMBO_CATEGORY': 'ComboCategory',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'VALUE': 'Value',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DURATION': 'Duration',
  /**
	* Value must be one of the values from the QUALIFIER enum. You can import this via const { QUALIFIER } = require('./lib/definitions/enums');
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
  'EXTRA_PROPERTIES': 'ExtraProperties',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'UNKNOWN_BEFORE_CONSUME': 'UnknownBeforeConsume',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'AI_CALCULATION_STATS_OVERRIDE': 'AiCalculationStatsOverride',
  /**
	* Value must be one of the values from the ACT enum. You can import this via const { ACT } = require('./lib/definitions/enums');
	*/
  'ACT': 'Act',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'ACTSTRENGTH': 'Act strength',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STACK_ID': 'StackId',
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
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'WEIGHT': 'Weight',
  /**
	* Value must be one of the values from the PENALTY_PRECISE_QUALIFIER enum. You can import this via const { PENALTY_PRECISE_QUALIFIER } = require('./lib/definitions/enums');
	*/
  'STRENGTH': 'Strength',
  /**
	* Value must be one of the values from the PENALTY_PRECISE_QUALIFIER enum. You can import this via const { PENALTY_PRECISE_QUALIFIER } = require('./lib/definitions/enums');
	*/
  'FINESSE': 'Finesse',
  /**
	* Value must be one of the values from the PENALTY_PRECISE_QUALIFIER enum. You can import this via const { PENALTY_PRECISE_QUALIFIER } = require('./lib/definitions/enums');
	*/
  'INTELLIGENCE': 'Intelligence',
  /**
	* Value must be one of the values from the PENALTY_PRECISE_QUALIFIER enum. You can import this via const { PENALTY_PRECISE_QUALIFIER } = require('./lib/definitions/enums');
	*/
  'CONSTITUTION': 'Constitution',
  /**
	* Value must be one of the values from the PENALTY_PRECISE_QUALIFIER enum. You can import this via const { PENALTY_PRECISE_QUALIFIER } = require('./lib/definitions/enums');
	*/
  'MEMORY': 'Memory',
  /**
	* Value must be one of the values from the PENALTY_PRECISE_QUALIFIER enum. You can import this via const { PENALTY_PRECISE_QUALIFIER } = require('./lib/definitions/enums');
	*/
  'WITS': 'Wits',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SINGLE_HANDED': 'SingleHanded',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TWO_HANDED': 'TwoHanded',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RANGED': 'Ranged',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DUAL_WIELDING': 'DualWielding',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'PHYSICAL_ARMOR_MASTERY': 'PhysicalArmorMastery',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'MAGIC_ARMOR_MASTERY': 'MagicArmorMastery',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'VITALITY_MASTERY': 'VitalityMastery',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PAIN_REFLECTION': 'PainReflection',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'WARRIOR_LORE': 'WarriorLore',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RANGER_LORE': 'RangerLore',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ROGUE_LORE': 'RogueLore',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SOURCERY': 'Sourcery',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'TELEKINESIS': 'Telekinesis',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FIRE_SPECIALIST': 'FireSpecialist',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'WATER_SPECIALIST': 'WaterSpecialist',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AIR_SPECIALIST': 'AirSpecialist',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'EARTH_SPECIALIST': 'EarthSpecialist',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'NECROMANCY': 'Necromancy',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'POLYMORPH': 'Polymorph',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SUMMONING': 'Summoning',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SNEAKING': 'Sneaking',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'THIEVERY': 'Thievery',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LOREMASTER': 'Loremaster',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'REPAIR': 'Repair',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'BARTER': 'Barter',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PERSUASION': 'Persuasion',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LEADERSHIP': 'Leadership',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LUCK': 'Luck',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'FIRE_RESISTANCE': 'FireResistance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'EARTH_RESISTANCE': 'EarthResistance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'WATER_RESISTANCE': 'WaterResistance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'AIR_RESISTANCE': 'AirResistance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'POISON_RESISTANCE': 'PoisonResistance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PIERCING_RESISTANCE': 'PiercingResistance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PHYSICAL_RESISTANCE': 'PhysicalResistance',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SIGHT': 'Sight',
  /**
	* Value must be one of the values from the PENALTY_QUALIFIER enum. You can import this via const { PENALTY_QUALIFIER } = require('./lib/definitions/enums');
	*/
  'HEARING': 'Hearing',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'INITIATIVE': 'Initiative',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MOVEMENT': 'Movement',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MOVEMENT_SPEED_BOOST': 'MovementSpeedBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'VITALITY': 'Vitality',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'VITALITY_BOOST': 'VitalityBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'VITALITY_PERCENTAGE': 'VitalityPercentage',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CHANCE_TO_HIT_BOOST': 'ChanceToHitBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACCURACY_BOOST': 'AccuracyBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DODGE_BOOST': 'DodgeBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'DAMAGE_BOOST': 'DamageBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RANGE_BOOST': 'RangeBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'APCOST_BOOST': 'APCostBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SPCOST_BOOST': 'SPCostBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'APMAXIMUM': 'APMaximum',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'APSTART': 'APStart',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'APRECOVERY': 'APRecovery',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'CRITICAL_CHANCE': 'CriticalChance',
  /**
	* Value must be one of the values from the BIG_QUALIFIER enum. You can import this via const { BIG_QUALIFIER } = require('./lib/definitions/enums');
	*/
  'GAIN': 'Gain',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ARMOR': 'Armor',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ARMOR_BOOST': 'ArmorBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_ARMOR': 'MagicArmor',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_ARMOR_BOOST': 'MagicArmorBoost',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'USE_APCOST': 'UseAPCost',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'REFLECTION': 'Reflection',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'LIFE_STEAL': 'LifeSteal',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'ACTION_POINTS': 'ActionPoints',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAGIC_POINTS': 'MagicPoints',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'BLOOD_SURFACE_TYPE': 'BloodSurfaceType',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_SUMMONS': 'MaxSummons',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'ADD_TO_BOTTOM_BAR': 'AddToBottomBar',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'BOOST_CONDITIONS': 'BoostConditions',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'FLAGS': 'Flags',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'BONUS_WEAPON': 'BonusWeapon',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_EFFECT': 'StatusEffect',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_ICON': 'StatusIcon',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'STATUS_MATERIAL': 'StatusMaterial',
  /**
	* Value must be one of the values from the SAVING_THROW enum. You can import this via const { SAVING_THROW } = require('./lib/definitions/enums');
	*/
  'SAVING_THROW': 'SavingThrow',
  /**
	* Value must be one of the values from the INVENTORY_TABS enum. You can import this via const { INVENTORY_TABS } = require('./lib/definitions/enums');
	*/
  'INVENTORY_TAB': 'InventoryTab',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IS_FOOD': 'IsFood',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'SUMMON_LIFELINK_MODIFIER': 'SummonLifelinkModifier',
  /**
	* Value must be one of the values from the YES_NO enum. You can import this via const { YES_NO } = require('./lib/definitions/enums');
	*/
  'IGNORED_BY_AI': 'IgnoredByAI',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'RUNE_LEVEL': 'RuneLevel',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RUNE_EFFECT_WEAPON': 'RuneEffectWeapon',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RUNE_EFFECT_UPPERBODY': 'RuneEffectUpperbody',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'RUNE_EFFECT_AMULET': 'RuneEffectAmulet',
  /**
	* Can be any string value. Ex. 'SomeValue'
	*/
  'OBJECT_CATEGORY': 'ObjectCategory',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MIN_AMOUNT': 'MinAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_AMOUNT': 'MaxAmount',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'PRIORITY': 'Priority',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'UNIQUE': 'Unique',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MIN_LEVEL': 'MinLevel',
  /**
	* Must be a string representation of an integer. This is not currently validated. Ex. '12'
	*/
  'MAX_LEVEL': 'MaxLevel',
  /**
	* You can put any string value in here for reference later.
	*/
  'COMMENT': 'Comment',
};

const POTION_FIELDS = {
  'Name': (value) => ({ name: 'Name', type: 'NameStatObjectFieldDefinition', value}),
  'Using': (value) => ({ name: 'Using', type: 'BaseClassStatObjectFieldDefinition', value}),
  'RootTemplate': (value) => ({ name: 'RootTemplate', type: 'RootTemplateStatObjectFieldDefinition', value}),
  'Act part': (value) => ({ name: 'Act part', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'ActPart'}),
  'ComboCategory': (value) => ({ name: 'ComboCategory', type: 'StringStatObjectFieldDefinition', value}),
  'Value': (value) => ({ name: 'Value', type: 'IntegerStatObjectFieldDefinition', value}),
  'Duration': (value) => ({ name: 'Duration', type: 'IntegerStatObjectFieldDefinition', value}),
  'Damage': (value) => ({ name: 'Damage', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Qualifier'}),
  'Damage Multiplier': (value) => ({ name: 'Damage Multiplier', type: 'IntegerStatObjectFieldDefinition', value}),
  'Damage Range': (value) => ({ name: 'Damage Range', type: 'IntegerStatObjectFieldDefinition', value}),
  'DamageType': (value) => ({ name: 'DamageType', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Damage Type'}),
  'ExtraProperties': (value) => ({ name: 'ExtraProperties', type: 'StringStatObjectFieldDefinition', value}),
  'UnknownBeforeConsume': (value) => ({ name: 'UnknownBeforeConsume', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'AiCalculationStatsOverride': (value) => ({ name: 'AiCalculationStatsOverride', type: 'StringStatObjectFieldDefinition', value}),
  'Act': (value) => ({ name: 'Act', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Act'}),
  'Act strength': (value) => ({ name: 'Act strength', type: 'StringStatObjectFieldDefinition', value}),
  'StackId': (value) => ({ name: 'StackId', type: 'StringStatObjectFieldDefinition', value}),
  'AuraRadius': (value) => ({ name: 'AuraRadius', type: 'IntegerStatObjectFieldDefinition', value}),
  'AuraSelf': (value) => ({ name: 'AuraSelf', type: 'StringStatObjectFieldDefinition', value}),
  'AuraAllies': (value) => ({ name: 'AuraAllies', type: 'StringStatObjectFieldDefinition', value}),
  'AuraNeutrals': (value) => ({ name: 'AuraNeutrals', type: 'StringStatObjectFieldDefinition', value}),
  'AuraEnemies': (value) => ({ name: 'AuraEnemies', type: 'StringStatObjectFieldDefinition', value}),
  'AuraItems': (value) => ({ name: 'AuraItems', type: 'StringStatObjectFieldDefinition', value}),
  'AuraFX': (value) => ({ name: 'AuraFX', type: 'StringStatObjectFieldDefinition', value}),
  'Weight': (value) => ({ name: 'Weight', type: 'IntegerStatObjectFieldDefinition', value}),
  'Strength': (value) => ({ name: 'Strength', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Penalty PreciseQualifier'}),
  'Finesse': (value) => ({ name: 'Finesse', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Penalty PreciseQualifier'}),
  'Intelligence': (value) => ({ name: 'Intelligence', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Penalty PreciseQualifier'}),
  'Constitution': (value) => ({ name: 'Constitution', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Penalty PreciseQualifier'}),
  'Memory': (value) => ({ name: 'Memory', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Penalty PreciseQualifier'}),
  'Wits': (value) => ({ name: 'Wits', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Penalty PreciseQualifier'}),
  'SingleHanded': (value) => ({ name: 'SingleHanded', type: 'IntegerStatObjectFieldDefinition', value}),
  'TwoHanded': (value) => ({ name: 'TwoHanded', type: 'IntegerStatObjectFieldDefinition', value}),
  'Ranged': (value) => ({ name: 'Ranged', type: 'IntegerStatObjectFieldDefinition', value}),
  'DualWielding': (value) => ({ name: 'DualWielding', type: 'IntegerStatObjectFieldDefinition', value}),
  'PhysicalArmorMastery': (value) => ({ name: 'PhysicalArmorMastery', type: 'StringStatObjectFieldDefinition', value}),
  'MagicArmorMastery': (value) => ({ name: 'MagicArmorMastery', type: 'StringStatObjectFieldDefinition', value}),
  'VitalityMastery': (value) => ({ name: 'VitalityMastery', type: 'StringStatObjectFieldDefinition', value}),
  'PainReflection': (value) => ({ name: 'PainReflection', type: 'IntegerStatObjectFieldDefinition', value}),
  'WarriorLore': (value) => ({ name: 'WarriorLore', type: 'IntegerStatObjectFieldDefinition', value}),
  'RangerLore': (value) => ({ name: 'RangerLore', type: 'IntegerStatObjectFieldDefinition', value}),
  'RogueLore': (value) => ({ name: 'RogueLore', type: 'IntegerStatObjectFieldDefinition', value}),
  'Sourcery': (value) => ({ name: 'Sourcery', type: 'IntegerStatObjectFieldDefinition', value}),
  'Telekinesis': (value) => ({ name: 'Telekinesis', type: 'IntegerStatObjectFieldDefinition', value}),
  'FireSpecialist': (value) => ({ name: 'FireSpecialist', type: 'IntegerStatObjectFieldDefinition', value}),
  'WaterSpecialist': (value) => ({ name: 'WaterSpecialist', type: 'IntegerStatObjectFieldDefinition', value}),
  'AirSpecialist': (value) => ({ name: 'AirSpecialist', type: 'IntegerStatObjectFieldDefinition', value}),
  'EarthSpecialist': (value) => ({ name: 'EarthSpecialist', type: 'IntegerStatObjectFieldDefinition', value}),
  'Necromancy': (value) => ({ name: 'Necromancy', type: 'IntegerStatObjectFieldDefinition', value}),
  'Polymorph': (value) => ({ name: 'Polymorph', type: 'IntegerStatObjectFieldDefinition', value}),
  'Summoning': (value) => ({ name: 'Summoning', type: 'IntegerStatObjectFieldDefinition', value}),
  'Sneaking': (value) => ({ name: 'Sneaking', type: 'IntegerStatObjectFieldDefinition', value}),
  'Thievery': (value) => ({ name: 'Thievery', type: 'IntegerStatObjectFieldDefinition', value}),
  'Loremaster': (value) => ({ name: 'Loremaster', type: 'IntegerStatObjectFieldDefinition', value}),
  'Repair': (value) => ({ name: 'Repair', type: 'IntegerStatObjectFieldDefinition', value}),
  'Barter': (value) => ({ name: 'Barter', type: 'IntegerStatObjectFieldDefinition', value}),
  'Persuasion': (value) => ({ name: 'Persuasion', type: 'IntegerStatObjectFieldDefinition', value}),
  'Leadership': (value) => ({ name: 'Leadership', type: 'IntegerStatObjectFieldDefinition', value}),
  'Luck': (value) => ({ name: 'Luck', type: 'IntegerStatObjectFieldDefinition', value}),
  'FireResistance': (value) => ({ name: 'FireResistance', type: 'IntegerStatObjectFieldDefinition', value}),
  'EarthResistance': (value) => ({ name: 'EarthResistance', type: 'IntegerStatObjectFieldDefinition', value}),
  'WaterResistance': (value) => ({ name: 'WaterResistance', type: 'IntegerStatObjectFieldDefinition', value}),
  'AirResistance': (value) => ({ name: 'AirResistance', type: 'IntegerStatObjectFieldDefinition', value}),
  'PoisonResistance': (value) => ({ name: 'PoisonResistance', type: 'IntegerStatObjectFieldDefinition', value}),
  'PiercingResistance': (value) => ({ name: 'PiercingResistance', type: 'IntegerStatObjectFieldDefinition', value}),
  'PhysicalResistance': (value) => ({ name: 'PhysicalResistance', type: 'IntegerStatObjectFieldDefinition', value}),
  'Sight': (value) => ({ name: 'Sight', type: 'IntegerStatObjectFieldDefinition', value}),
  'Hearing': (value) => ({ name: 'Hearing', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'Penalty Qualifier'}),
  'Initiative': (value) => ({ name: 'Initiative', type: 'IntegerStatObjectFieldDefinition', value}),
  'Movement': (value) => ({ name: 'Movement', type: 'IntegerStatObjectFieldDefinition', value}),
  'MovementSpeedBoost': (value) => ({ name: 'MovementSpeedBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'Vitality': (value) => ({ name: 'Vitality', type: 'IntegerStatObjectFieldDefinition', value}),
  'VitalityBoost': (value) => ({ name: 'VitalityBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'VitalityPercentage': (value) => ({ name: 'VitalityPercentage', type: 'IntegerStatObjectFieldDefinition', value}),
  'ChanceToHitBoost': (value) => ({ name: 'ChanceToHitBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'AccuracyBoost': (value) => ({ name: 'AccuracyBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'DodgeBoost': (value) => ({ name: 'DodgeBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'DamageBoost': (value) => ({ name: 'DamageBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'RangeBoost': (value) => ({ name: 'RangeBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'APCostBoost': (value) => ({ name: 'APCostBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'SPCostBoost': (value) => ({ name: 'SPCostBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'APMaximum': (value) => ({ name: 'APMaximum', type: 'IntegerStatObjectFieldDefinition', value}),
  'APStart': (value) => ({ name: 'APStart', type: 'IntegerStatObjectFieldDefinition', value}),
  'APRecovery': (value) => ({ name: 'APRecovery', type: 'IntegerStatObjectFieldDefinition', value}),
  'CriticalChance': (value) => ({ name: 'CriticalChance', type: 'IntegerStatObjectFieldDefinition', value}),
  'Gain': (value) => ({ name: 'Gain', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'BigQualifier'}),
  'Armor': (value) => ({ name: 'Armor', type: 'IntegerStatObjectFieldDefinition', value}),
  'ArmorBoost': (value) => ({ name: 'ArmorBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'MagicArmor': (value) => ({ name: 'MagicArmor', type: 'IntegerStatObjectFieldDefinition', value}),
  'MagicArmorBoost': (value) => ({ name: 'MagicArmorBoost', type: 'IntegerStatObjectFieldDefinition', value}),
  'UseAPCost': (value) => ({ name: 'UseAPCost', type: 'IntegerStatObjectFieldDefinition', value}),
  'Reflection': (value) => ({ name: 'Reflection', type: 'StringStatObjectFieldDefinition', value}),
  'LifeSteal': (value) => ({ name: 'LifeSteal', type: 'IntegerStatObjectFieldDefinition', value}),
  'ActionPoints': (value) => ({ name: 'ActionPoints', type: 'IntegerStatObjectFieldDefinition', value}),
  'MagicPoints': (value) => ({ name: 'MagicPoints', type: 'IntegerStatObjectFieldDefinition', value}),
  'BloodSurfaceType': (value) => ({ name: 'BloodSurfaceType', type: 'StringStatObjectFieldDefinition', value}),
  'MaxSummons': (value) => ({ name: 'MaxSummons', type: 'IntegerStatObjectFieldDefinition', value}),
  'AddToBottomBar': (value) => ({ name: 'AddToBottomBar', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'BoostConditions': (value) => ({ name: 'BoostConditions', type: 'StringStatObjectFieldDefinition', value}),
  'Flags': (value) => ({ name: 'Flags', type: 'StringStatObjectFieldDefinition', value}),
  'BonusWeapon': (value) => ({ name: 'BonusWeapon', type: 'StringStatObjectFieldDefinition', value}),
  'StatusEffect': (value) => ({ name: 'StatusEffect', type: 'StringStatObjectFieldDefinition', value}),
  'StatusIcon': (value) => ({ name: 'StatusIcon', type: 'StringStatObjectFieldDefinition', value}),
  'StatusMaterial': (value) => ({ name: 'StatusMaterial', type: 'StringStatObjectFieldDefinition', value}),
  'SavingThrow': (value) => ({ name: 'SavingThrow', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'SavingThrow'}),
  'InventoryTab': (value) => ({ name: 'InventoryTab', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'InventoryTabs'}),
  'IsFood': (value) => ({ name: 'IsFood', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'SummonLifelinkModifier': (value) => ({ name: 'SummonLifelinkModifier', type: 'IntegerStatObjectFieldDefinition', value}),
  'IgnoredByAI': (value) => ({ name: 'IgnoredByAI', type: 'EnumerationStatObjectFieldDefinition', value, 'enumeration_type_name': 'YesNo'}),
  'RuneLevel': (value) => ({ name: 'RuneLevel', type: 'IntegerStatObjectFieldDefinition', value}),
  'RuneEffectWeapon': (value) => ({ name: 'RuneEffectWeapon', type: 'StringStatObjectFieldDefinition', value}),
  'RuneEffectUpperbody': (value) => ({ name: 'RuneEffectUpperbody', type: 'StringStatObjectFieldDefinition', value}),
  'RuneEffectAmulet': (value) => ({ name: 'RuneEffectAmulet', type: 'StringStatObjectFieldDefinition', value}),
  'ObjectCategory': (value) => ({ name: 'ObjectCategory', type: 'StringStatObjectFieldDefinition', value}),
  'MinAmount': (value) => ({ name: 'MinAmount', type: 'IntegerStatObjectFieldDefinition', value}),
  'MaxAmount': (value) => ({ name: 'MaxAmount', type: 'IntegerStatObjectFieldDefinition', value}),
  'Priority': (value) => ({ name: 'Priority', type: 'IntegerStatObjectFieldDefinition', value}),
  'Unique': (value) => ({ name: 'Unique', type: 'IntegerStatObjectFieldDefinition', value}),
  'MinLevel': (value) => ({ name: 'MinLevel', type: 'IntegerStatObjectFieldDefinition', value}),
  'MaxLevel': (value) => ({ name: 'MaxLevel', type: 'IntegerStatObjectFieldDefinition', value}),
  'Comment': (value) => ({ name: 'Comment', type: 'CommentStatObjectFieldDefinition', value}),
};

module.exports = {
  POTION_FIELD_NAMES,
  POTION_FIELDS,
  POTION_NAMES,    
};
