# Modifiers Documentation

This page documents the Modifiers API incase you want to contribute your own custom behavior, or create your own.

## How Modifiers Work

Every stat is passed through a "pipeline". This pipeline is comprised of modifiers, and each modifier acts on each stat seperately. Modifiers are passed the stat, a function to push a new stat onto the queue, and a set of utility functions to help you determine what the stat is, how to name it properly, and to help you with defining property fields or enumerations.



## Rules of a Modifier

- Modifiers may export any of the following properties
  - **OnStat**: Fired whenever a stat is ready to be processed. Exporting this is required.
  - OnLoad: Fired before stat processing. Useful for initializing naming across multiple files when working with template strings.
  - getLibs: Fired after stat processing. Use this function to export any code that does not depend on the stat of an ability. If multiple mods ran your code, getLibs should always return the exact same result. Nothing in this script should be namespaced by project.
  - getDict: Fired after stat processing. Use this function to export any dictionary, or list-like, code that hooks into your lib scripts.
  - name: Required if you export dict scripts. Use this to identify your modification. This will likely get other uses in the future for determining build errors and such.

- Modifiers are always expected to return a stat object. This should almost always be the same one passed in. If you need to generate additional stat objects as a result of processing, use addStat.
- Modifiers may mutate the stat how the like, but it is recommended to be friendly about it. Try to only add onto, as opposed to overwriting, unless you have good reason. If you are expecting a custom property, ensure that the property is deleted from the object before returning the stat.
- Modifiers may throw Exceptions to halt building. They will be printed to the console.



## Modifiers API

**API Parameters**

```javascript
/**
 * @param {Object} stat - The stat being processed. This can be any skill, stat, or status that was defined by the user. It is recommended that the first action onStat takes is a check to see if the stat is relevant or not. If it isn't return immediately. 
 * @param {function} addStat - A function that pushes a new stat object onto the queue for processing. Since it is a new stat, it will eventually be handled by your function. As such, it is recommended you never add your own custom properties to stats created in this way. You can add custom properties from other modifications though. Just be careful about creating infinite loops.
 * @param {Object} utils - A grouping of utility functions to help you author modifications
 * @param {function} utils.getStatName -  Takes a string, and returns that string formated with the GENERATED tag and the namespace. This is typically used for fields like SkillProperties, WeaponBoost, etc. Do not use this on stat names, as the format modifier does this automatically for you. This will likely change in the future once I have a better idea of what conventions exist within this app and I can apply a bit of OOP to it.
 * @param {function} utils.getCommonName - Same as above, but formats it with a common name so that multiple mods using the SkillGenerator will overwrite the file. Use this to help with naming fields in your libs.
 * @param {object} utils.enums - Contains objects describing every ENUM in the game. See https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/enums.js for details.
 * @param {object} utils.skills - Contains objects describing every skill type in the game and it's XML configuration. See https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/skills.js for details.
 * @param {object} utils.statuses - Contains objects describing every status type in the game and it's XML configuration. See https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/statuses.js for details.
 * @param {object} utils.stats - Contains objects describing every stat type in the game and it's XML configuration. See https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/stats.js for details.
*/
```
**onLoad**

```javascript
function onLoad({ addStat, utils }) {
  //do init stuff here. Return isn't used
}
```


**onStat**

```javascript
function onStat({ stat, addStat, utils }) {
  const { getStatName, getCommonName, enums, skills, stats, statuses } = utils;
  const { YES_NO } = enums;
  const { IS_TYPE: isSkillType, SKILL_FIELDS } = skills;
  const { IS_TYPE: isStatusType, STATUS_FIELDS } = statuses;
  const { IS_TYPE: isStatType, STAT_FIELDS } = stats;

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


**getLibs**

You do not need to set both if you only need one.

```javascript
function getLibs() {
  const libs = {};

  libs.script = getCoreScript();
  libs.story = getCoreStory();

  return libs;
}
```

**getDict**

You do not need to set both if you only need one.

```javascript
function getDict() {
  const scripts = {};
  
  scripts.script = getDictScript();
  scripts.story = getDictStory();

  return scripts;
}
```


**name**

```javascript
module.exports = {
  name: 'MyModificationName',
}
```


## Examples

If you want to see some examples of how to make modifiers, feel free to check the officially supported modifiers located with this project. You can find them [here](https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/tree/master/lib/modifiers).