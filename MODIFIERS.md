# Modifiers API

```javascript
function Modifier({ stat, addStat, utils }) {

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
```

## utils
This is an object that contains a plethora of utility methods and data:
- namespace
  - The specified namespace for a project
- [skills](https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/skillFields.js)
- [stats](https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/statFields.js)
- [statuses](https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/statusFields.js)

Below is an example of easily referencing some of these fields:

```javascript
  const { namespace, skills, stats, statuses } = utils;
  const { IS_TYPE: isSkillType, SKILL_FIELDS } = skills;
  const { IS_TYPE: isStatusType, STATUS_FIELDS } = statuses;
  const { IS_TYPE: isStatType, STAT_FIELDS } = stats;
```

Use these methods to help determine what kind of skill you are dealing with, or to create your own in response to custom fields!

## addStat(type, stat)
This will add a stat to the queue of type 'type'. For example:
```javascript
function Modifier({ stat, addStat, utils }) {
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

function validatorModifier({ stat }) {
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

module.exports = validatorModifier;

```

A format modifier
```javascript
function format({ stat, utils }) {
  const { namespace, skills, stats, statuses } = utils;
  const { IS_TYPE: isSkillType, SKILL_FIELDS } = skills;
  const { IS_TYPE: isStatusType, STATUS_FIELDS } = statuses;
  const { IS_TYPE: isStatType, STAT_FIELDS } = stats;

  const newDefinition = {
    isSubstat: false,
    fields: [],
  };

  stat.statFields.Name = `GENERATED_${namespace}_${stat.statFields.Name}`;

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

module.exports = format;

```

##Coming Soon
- Osiris Support
- Object Script Support
- 