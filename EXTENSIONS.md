# Extension Documentation

This page documents the Extension API incase you want to contribute your own custom behavior, or create your own.

## How Extensions Work

Extensions are initialized before any stat processing begins, even before Modifiers have onLoad called. During this time, you will want to declare your Extension and Modifiers naming conventions and export that as a function so Modifiers can access your common naming conventions.

Extensions can be broken out into two categories, Libraries and Dictionaries. This is more of a pattern I have seen emerage and isn't strictly enforced in any fashion.

Libraries are common sections of code that don't deal with any namespaced data. These are made to overwrite one another, like above, as only one of each need to exist in any combination of mods. Typically this is just a static file that needs declared and exported, never modified.

Dictionaries are the opposite. They typically expose functions into Modifications. When called, these functions will take data and append script to the file. I call these Dictionaries because the most common use-case for this scenario is building a Dictionary of skill lookups for Horus or DB lookups for Osiris.


## Rules of an Extension

- Extensions may export any of the following properties
   - **name**: Required if you export scripts. Use this to identify your modification. This will likely get other uses in the future for determining build errors and such.
  - getLibs: Fired after stat processing. Use this function to export any code that does not depend on the stat of an ability. If multiple mods ran your code, getLibs should always return the exact same result. Nothing in this script should be namespaced by project. This function should return an object containing a script key and a story key. If you do not need both, you can omit it.
  - getScripts: Fired after stat processing. Use this function to export any non-static piece of code. This function should return an object containing a script key and a story key. If you do not need both, you can omit it.

- Extensions may throw exceptions to halt building. If you do this, it is recommended you at least throw the name of the extensions, if not more information, to help with debugging.



## Extensions API

**API Parameters**

```javascript
let myCoolUtility = '';

function myCoolExtension(skillName) {
  //Do Stuff
}

/**
 * @param {function} addExtension(name, {functionName:function}) - To expose functions into modifiers, call this function exactly once. Pass in a name and an object containing a set of functionName:function declarations. These will be exposed to each modifier.
 * @param {Object} utils - A grouping of utility functions to help you author extensions.
 * @param {function} utils.getCommonName - Formats the string passed in with a common name so that multiple mods using the SkillGenerator will overwrite the file. Use this to help with naming fields in your libs.
 * @param {object} utils.enums - Contains objects describing every ENUM in the game. See https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/enums.js for details.
 * @param {object} utils.skills - Contains objects describing every skill type in the game and it's XML configuration. See https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/skills.js for details.
 * @param {object} utils.statuses - Contains objects describing every status type in the game and it's XML configuration. See https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/statuses.js for details.
 * @param {object} utils.stats - Contains objects describing every stat type in the game and it's XML configuration. See https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/blob/master/lib/definitions/stats.js for details.
*/
function onLoad({ addExtension, utils }) {
  const { getCommonName } = utils;
  
  myCoolUtility = getCommonName('UTILITY_STATUS');

  addExtension('myExtensionName', {
   myCoolExtension,
  });
}
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

**getScripts**

You do not need to set both if you only need one.

```javascript
function getScripts() {
  const scripts = {};
  
  scripts.script = getDictScript();
  scripts.story = getDictStory();

  return scripts;
}
```


**name**

```javascript
module.exports = {
  name: 'MyExtensionName',
}
```


## Examples

If you want to see some examples of how to make extensions, feel free to check the officially supported extensions located with this project. You can find them [here](https://github.com/Sinistralis-DOS2-Mods/SkillGenerator/tree/master/lib/extensions).
