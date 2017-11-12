# List of Official Modifiers
The modifers listed below are enabled by default and require no effort on your part to use, aside from following the APIs.

## remote (skills :heavy_check_mark: | statuses :x: (coming soon) | stats :x:)
The remote modifier assists with causing additional damage that is correctly attributed to the caster and is capable of scaling with primary attributes, skills, elevation, and critical hits. This can be used to give a spell elemental damage types, multiple scaling attributes, or bonus damage based on a criteria. To properly understand how this works, you have to think of the additional damage source as a projectile, because that's what it is. 

Currently, remote can only be added to skills. I am currently working on allowing it to be added to Statuses which will let you achieve proper DoT mechanics that scale properly, unlike the built in damage over time mechanics. I will also be adding mechanics to allow remote damage to change effect based on the number of times they hit a target, to allow diversity to be added to skills like Searing Dagger.

The following details how to add remote damage to an ability. Note that remote effects can have remote effect within themselves! These will chain correctly, so you can use nested remote effects to achieve effects like a fire/lightning/physical damage ability that scales with strength, finesse, and intelligence!

```javascript
const { PROJECTILE_NAMES } = require('../lib/definitions/skillFields');
const { DAMAGE_TYPE, DEATH_TYPE, SKILL_ABILITY } = require('../lib/definitions/enums');

const skills = [
  {
    [PROJECTILE_NAMES.NAME]: 'PyroclasticRock',
    [PROJECTILE_NAMES.USING]: 'PyroclasticRock',
    [PROJECTILE_NAMES.COOLDOWN]: '2',    
    [PROJECTILE_NAMES.DAMAGE_MULTIPLIER]: 65,
    [PROJECTILE_NAMES.DAMAGE_RANGE]: 10,
    [PROJECTILE_NAMES.DESCRIPTION]: 'Lob a giant rock filled with sticky oil that will deal [1] and physical damage on landing creating a pool of oil, slowing enemies trapped within.',
    [PROJECTILE_NAMES.STATS_DESCRIPTION_PARAMS]: 'Damage',
    remote: {
      [PROJECTILE_NAMES.ABILITY]: SKILL_ABILITY.EARTH,
      [PROJECTILE_NAMES.DAMAGE_MULTIPLIER]: 65,
      [PROJECTILE_NAMES.DAMAGE_RANGE]: 10,
      [PROJECTILE_NAMES.DAMAGE_TYPE]: DAMAGE_TYPE.PHYSICAL,
      [PROJECTILE_NAMES.DEATH_TYPE]: DEATH_TYPE.PHYSICAL,
      [PROJECTILE_NAMES.EXPLODE_RADIUS]: 0,
      [PROJECTILE_NAMES.TEMPLATE]: '71251b25-90b3-4332-afce-d9fcb6d88381',
    }
  }
];

module.exports = skills;

```


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


## default (skills :heavy_check_mark: | statuses :heavy_check_mark: | stats :heavy_check_mark:)
The default modifier helps by assigning common-sense defaults to fields. Currently it only handles the "Type" field of Statuses and Skills, so you don't need to worry about assigning those.
