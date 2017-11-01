Skill Generator for Divinity Original Sin 2
=======
The Skill Generator is meant as a tool to help generate permutations of an ability. Divinity's engine does not allow for dynamic attributes on skill data. This means you cannot have stats like -Cooldown, +AP, +Range, etc. What you can do, is have many permutations of an ability, and on spell cast of a "Root" skill, cancel it and cast the permutation instead. This leads to having to manage an exponential number of skills, which is what this project is meant to solve. It will generate all permutations and script required, so you can focus on balancing the core ability and itemizing gear.

Currently, it only equals the editor in capability. Weapon Modifiers are next, which will allow a skill to be swapped out for another based on Equipped Weapon.

## How to Use
Usage should be simple. You need [Node 8.0.0](https://nodejs.org/en/) or later to run the project. Upon downloading it, you will need to open config.js and point it to the mod folder you wish to generate to. I also recommend you change the namespace so your skills don't clash with other mods. Do not worry about changing the definitionAbsolutePath, that is only needed for generating the files located in lib/fields. Unless Larian releases new features to the editor and I fail to update the project, this should never be needed, but has been included just incase.

You will find a list of JS files under the Skill directory. This is where you define skills. You can import helper methods if your editor supports intellisense which will make figuring out what fields are available easier (see Projectile.js for an example). All you need to define is the column and value (Ex. Name: 'Ricochet'), the app will handle everything else.

There will be a list of custom fields coming soon, such as foci, weaponModifiers, baseModifiers (for AP/Cooldown changes, these will require an unlearn and relearn call), and more. This will also generate Osiris and Horus scripts, when implemented, to support the custom attributes.

Currently, it will spit out files into a test directory. This will soon be updated to put them in the actual mod directory. I still want to test this some more before I do so.

To build stat files, run the command 'npm run build'.

## Contributing to this project

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
