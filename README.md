Skill Generator for Divinity Original Sin 2
=======
The Skill Generator is meant as a tool to help generate permutations of an ability. Divinity's engine does not allow for dynamic attributes on skill data. This means you cannot have stats like -Cooldown, +AP, +Range, etc. What you can do, is have many permutations of an ability, and on spell cast of a "Root" skill, cancel it and cast the permutation instead. This leads to having to manage an exponential number of skills, which is what this project is meant to solve. It will generate all permutations and script required, so you can focus on balancing the core ability and itemizing gear.

Currently, it only equals the editor in capability. Weapon Modifiers are next, which will allow a skill to be swapped out for another based on Equipped Weapon.

## How to Install
- Download [NodeJS](https://nodejs.org/en/) to run the project. Node 8.0.0 or higher is required. 
- I highly recommend using [VSCode](https://code.visualstudio.com). It has an integrated terminal, and autocomplete with documentation for ENUMs.
- Download folder, open a terminal in the root directory, and run 'npm install'
- Open config.js and change the gameAbsolutePath and modId fields. Also recommended you change the namespace.
- That's it!

## How to Use
- The project will contain ready-made templates for you to copy and paste. You can find these templates under the skillExamples directory. These templates should be pasted into the skills directory. It is not recommended to edit these templates as they will update with new examples as the project is updated.
- See skillExamples/Projectile.js for more detailed usage examples.
- When you are ready to export your skills to the Editor, open a terminal and type 'npm run build'. This will automatically generate all skills and place them in the editor.
- Currently you will need to trigger a skill build from within the Editor. This involves making a skill and saving. I will be cleaning this workflow up at a later date.

## Features
- Robust documentation that tells you when to use ENUMs, you don't have to cross-reference the Editor. This makes this tool a far preferable skill editor once you get familiar with it as you can mass edit skills far more easily.
- Contains equivalent features to the stat editor as far as skill generation goes. Status generation is pretty much finished but not fully implemented yet.

## Coming Soon
- Hotswapping
  - This allows you to define a skill that will change behavior based on the presence of an exclusive status.
- Foci
  - This allows you to define small permutations of a skill that change how it functions slightly, like with AP, Cooldown, Radius, Damage, or other such property changes. Foci will be keyed off statuses as well, and will use the most potent one available. Usage will be as simple as adding a generated status onto an item template or a boost template.
- Mutations
  - These are heavily scripted modifiers that completely change how a skill functions, such as causing it to do hybrid damage, fork, etc. Again, this should only require you to add a status to an item to support.

## Contributing to this project

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
