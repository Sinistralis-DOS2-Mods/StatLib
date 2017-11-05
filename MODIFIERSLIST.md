# List of Official Modifiers
The modifers listed below are enabled by default and require no effort on your part to use, aside from following the APIs.


## associate (skills :heavy_check_mark: | statuses :x: | stats :x:)
The associate modifier assists with combining statuses, potions, and weapon effects into skills. It is intended to be used for skills like Venom Coating or Regeneration where you will only be using a certain status/potion effect once for a single skill. It helps keep everything in one place and makes creating these effects incredibly easy! See below for detailed usage instructions.

```javascript
const skills = [
  {
    // Declare your skill definition. You don't need to specify a SkillProperties, it will be done for you! (If you need to specify other behavior, go for it! It won't be overridden). If you want to surface boost the status, just ensure the SURFACEBOOST declaration is at the end and has no space or semicolon at the end, like so:
    // SURFACEBOOST(WATER):
    [SHOUT_NAMES.NAME]: 'FrostCoating',
    [SHOUT_NAMES.USING]: 'VenomCoating',
    // Declare an associate property in any skill definition
    'associate': {
      // Declare how many turns the status will last for
      turns: 2,
      // Declare the chance the status will be applied when the skill is cast
      chance: 100,
      // Create a status definition. Don't bother with a statsId entry, it's done for you!
      Status_CONSUME: {
        [STATUS_CONSUME_NAMES.NAME]: 'FROST_COATING',
        [STATUS_CONSUME_NAMES.USING]: 'VENOM_COATING',
      },
      // Create a potion definition Don't bother with a bootWeapon entry, it's done for you!
      Potion: {
        [POTION_NAMES.NAME]: 'Stats_FrostCoating',
        [POTION_NAMES.USING]: 'Stats_VenomCoating',
      },
      // Create a weapon definition
      Weapon: {
        [WEAPON_NAMES.NAME]: 'Status_FrostCoating',
        [WEAPON_NAMES.USING]: 'Status_VenomCoating',
        [WEAPON_NAMES.DAMAGE_TYPE]: DAMAGE_TYPE.WATER,
      },
    },
  }
];
```


## validate (skills :heavy_check_mark: | statuses :heavy_check_mark: | stats :heavy_check_mark:)
The validate modifier offers no functionality, but instead helps ensure you create skills correctly. It looks for things like duplicate stat names, or invalid stat names, and notifies you of them.


## format (skills :heavy_check_mark: | statuses :heavy_check_mark: | stats :heavy_check_mark:)
The format modifier offers no functionality, but exists to help format data into an easily writable format for the application. It also ensures proper naming schema as well as ensuring skills and statuses are tagged with proper SkillTypes. The format modifier will be deprecated once I find the time to change how the XMLWriter works, but for now is unfortunately an exception to the rule of "Don't mutate stat objects".