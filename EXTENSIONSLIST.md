# List of Official Extensions
The extensions listed below are enabled by default in the config file, and you can expect their presence in any extensions you write. If you feel there should be other common utilities declared by default, feel free to submit a PR to the Core extension, or you can submit your own extension for consideration into the official list.


# core
  Currently this exposes a common potion object to be used on Statuses not meant to have display information.

# remote
## Skill Support
  Generates the common code used for simulating remote effects and building dictionaries for skill lookups related to remote effects.

  Exposes 2 functions into the modification pipeline.

  ```javascript
    /**
     * @param {string} status - The name of a status to watch for to trigger a remote effect. This status will be removed upon application.
     * @param {string} remote - The name of a projectile skill to explode at the target. Specifying an explode radius > 0 will cause this effect to become an AE effect.
    */
    addRemote(status, remote)
  ```

## Status Support

  **Under Development**

  This will soon support being attached to a STATUS, which will cause it to trigger a remote effect onTurn.

## Multihit Support

  **Under Development**

  This will allow you to specify scaling effects based on the number of times a skill has hit a single target, or the number of times the skill deals damage in general. Useful for fan skills like Ice Fan, or chain skills like Chain Lightning.




# onTurn
  **Under Development**
  This will be a utility library to allow you to register events to be fired onTurn based on the presence of a status. Turns will trigger every 6 seconds out of combat, or every turn in combat.
