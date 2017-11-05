# Modifiers API

```javascript
function onStat({ stat, addStat, utils }) {

console.log(stat); 
/*
  {
    type: 'Projectile',
    statFields: {
      Name: 'MySkillName',
      'Damage Multiplier': '120',
    },
  };
*/ 

  return stat;
}

module.exports = onStat;
```

## utils
This is an object that contains a plethora of utility methods and data:
- getStatName(name)
  - Takes an arbitrary stat name and returns the proper name. Ex. GENERATED\_ASC\_Ricochet
- [skills](https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/skillFields.js)
- [stats](https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/statFields.js)
- [statuses](https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/statusFields.js)

Below is an example of easily referencing some of these fields:

```javascript
  const { getStatName, skills, stats, statuses } = utils;
  const { IS_TYPE: isSkillType, SKILL_FIELDS } = skills;
  const { IS_TYPE: isStatusType, STATUS_FIELDS } = statuses;
  const { IS_TYPE: isStatType, STAT_FIELDS } = stats;
```

Use these methods to help determine what kind of skill you are dealing with, or to create your own in response to custom fields!

## addStat(type, statFields)
This will add a stat to the queue of type 'type'. addStat will filter invalid entries for you as well, which makes it very useful for iterating over nested structures which may have stat nested with other non-stat properties.

For example:
```javascript
function onStat({ stat, addStat, utils }) {
  const { skills } = utils;
  const { PROJECTILE_FIELDS } = skills;

  if (myStat.statFields.someField) {
    const myStat = {
      [PROJECTILE_FIELDS.NAME]: 'MySkillName',
      [PROJECTILE_FIELDS.DAMAGE_MODIFIER]: '120',
    };

    addStat('Projectile', myStat);

    delete myStat.statFields.someField;
  }

  return stat;
}

module.exports = onStat;
```

## Conventions
- Modifiers may request custom fields be added to the stat object, but **MUST REMOVE** these fields when returning the stat object for further processing. This can be done via `delete stat.statFields.customField` or by creating a new object without the field and returning it.
- Modifiers are expected to return the stat object, regardless of what else they do.
- Modifiers are expected to not mutate or change the stat object in any way beyond acting on it's custom fields. The exception to this rule is the format modifier, which comes last and formats data to be written to disk.
- Modifiers are expected to export only the modifier function. 
- Modifiers may throw Exceptions to halt building

## Examples

A modifier that validates skills
```javascript
const listing = {};

function onStat({ stat }) {
  function checkValid() {
    if (!stat.statFields.Name) {
      throw new Error(`Encountered unnammed stat of type ${stat.type} and fields ${JSON.stringify(stat.statFields)}`);
    }
  
    return stat;
  }
  
  function checkUnique() {
    const fullName = `${stat.type}_${stat.statFields.Name}`;
  
    if (listing[fullName]) {
      throw new Error(`Encountered non-unique stat with name ${fullName}`);
    }
  
    listing[fullName] = 1;
  
    return stat;
  }

  checkValid(checkUnique());

  return stat;
}

module.exports = onStat;

```







A format modifier
```javascript
function onStat({ stat, utils }) {
  const { getStatName, skills, stats, statuses } = utils;
  const { IS_TYPE: isSkillType, SKILL_FIELDS } = skills;
  const { IS_TYPE: isStatusType, STATUS_FIELDS } = statuses;
  const { IS_TYPE: isStatType, STAT_FIELDS } = stats;

  const newDefinition = {
    isSubstat: false,
    fields: [],
  };

  stat.statFields.Name = getStatName(stat.statFields.Name);

  if (isSkillType(stat.type) && !stat.statFields.SkillType) {
    stat.statFields.SkillType = stat.type;
  // For some reason, in this one instance Status is not included when describing a Status.
  } else if (isStatusType(stat.type) && !stat.statFields.Type) {
    const statusType = stat.type.split('_');
    statusType.splice(0,1);
    stat.statFields.Type = statusType.join('_');
  }

  for (const [key, value] of Object.entries(stat.statFields)) {
    let field;
    
    if (isSkillType(stat.type)) {
      field = SKILL_FIELDS[key](value);
    } else if (isStatusType(stat.type)) {
      field = STATUS_FIELDS[key](value);
    } else if (isStatType(stat.type)) {
      field = STAT_FIELDS[key](value);        
    } else {
      throw new Error(`Unknown stat type being processed. Stat is ${JSON.stringify(stat)}. Expected type 'skill', 'status', or 'stat'`);
    }
    
    newDefinition.fields.push(field);
  }

  return newDefinition;
}

module.exports = onStat;

```






Here is one a bit more advanced and interesting. It specifies a custom property called 'associate'. Any skill that declares associate can then go on to declare a status, potion, and optionally a weapon. The modifier will then link all these skills together for you.

```javascript
function onStat({ stat, addStat, utils }) {
  const { getStatName, skills, stats, statuses } = utils;
  const { IS_TYPE: isSkillType, SHOUT_NAMES } = skills;
  const { STATUS_CONSUME_NAMES } = statuses;
  const { POTION_NAMES, WEAPON_NAMES } = stats;

  if (isSkillType(stat.type) && stat.statFields.associate) {
    const statusName = stat.statFields.associate.Status_CONSUME ? stat.statFields.associate.Status_CONSUME[STATUS_CONSUME_NAMES.NAME] : null;
    const potionName = stat.statFields.associate.Potion ? stat.statFields.associate.Potion[POTION_NAMES.NAME] : null;
    const weaponName = stat.statFields.associate.Weapon ? stat.statFields.associate.Weapon[WEAPON_NAMES.NAME] : null;
    const turns = stat.statFields.associate.turns;
    const chance = stat.statFields.associate.chance;

    if (!statusName) {
      throw new Error(`Detected association without Status_CONSUME! Stat is ${JSON.stringify(stat)}`);
    }

    if (!potionName) {
      throw new Error(`Detected association without Potion! Stat is ${JSON.stringify(stat)}`);
    }

    if (stat.statFields[SHOUT_NAMES.SKILL_PROPERTIES]) {
      stat.statFields[SHOUT_NAMES.SKILL_PROPERTIES] = '';
    }
    stat.statFields[SHOUT_NAMES.SKILL_PROPERTIES] += `${getStatName(statusName)},${chance},${turns};`;

    stat.statFields.associate.Status_CONSUME[STATUS_CONSUME_NAMES.STATS_ID] = `${getStatName(potionName)}`;

    if (weaponName) {
      stat.statFields.associate.Potion[POTION_NAMES.BONUS_WEAPON] = `${getStatName(weaponName)}`;      
    }

    for (let [associateType, associateFields] of Object.entries(stat.statFields.associate)) {
      addStat(associateType, associateFields);
    }

    delete stat.statFields.associate;
  }

  return stat;
}

module.exports = onStat;

```

You can then use it like this:

```javascript
const { SHOUT_NAMES } = require('../lib/definitions/skillFields');
const { STATUS_CONSUME_NAMES } = require('../lib/definitions/statusFields');
const { POTION_NAMES, WEAPON_NAMES } = require('../lib/definitions/statFields');
const { DAMAGE_TYPE } = require('../lib/definitions/enums');

const skills = [
  {
    [SHOUT_NAMES.NAME]: 'FrostCoating',
    [SHOUT_NAMES.USING]: 'VenomCoating',
    'associate': {
      turns: 2,
      chance: 100,
      Status_CONSUME: {
        [STATUS_CONSUME_NAMES.NAME]: 'FROST_COATING',
        [STATUS_CONSUME_NAMES.USING]: 'VENOM_COATING',
      },
      Potion: {
        [POTION_NAMES.NAME]: 'Stats_FrostCoating',
        [POTION_NAMES.USING]: 'Stats_VenomCoating',
      },
      Weapon: {
        [WEAPON_NAMES.NAME]: 'Status_FrostCoating',
        [WEAPON_NAMES.USING]: 'Status_VenomCoating',
        [WEAPON_NAMES.DAMAGE_TYPE]: DAMAGE_TYPE.WATER,
      },
    },
  }
];

module.exports = skills;

```

## Coming Soon
- Osiris Support
- Object Script Support
