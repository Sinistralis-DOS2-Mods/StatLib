StatLib for Divinity Original Sin 2
=======
StatLib is meant as a tool to help generate permutations of an ability. Divinity's engine does not allow for dynamic attributes on skill data. This means you cannot have stats like -Cooldown, +AP, +Range, etc. What you can do, is have many permutations of an ability, and on spell cast of a "Root" skill, cancel it and cast the permutation instead. This leads to having to manage an exponential number of skills, which is what this project is meant to solve. It will generate all permutations and script required, so you can focus on balancing the core ability and itemizing gear.

## How to Install
- Download [NodeJS](https://nodejs.org/en/) to run the project. Node 8.0.0 or higher is required. 
- I highly recommend using [VSCode](https://code.visualstudio.com). It has an integrated terminal, and autocomplete with documentation for ENUMs.
- Download folder, open a terminal in the root directory, and run 'npm install'
- Open config.js and change the gameAbsolutePath and modId fields. Also recommended you change the namespace.
- That's it!

## How to Use
- The project will contain ready-made templates for you to reference, and each type of skill/status will be pre-made for you. 
- See examples for more detailed usage examples. I will include some examples from Ascension once I get that far.
- When you are ready to export your skills to the Editor, open a terminal and type 'npm run build'. This will automatically generate all skills and place them in the editor.
- After building your skills, you will still need to do the following:
  - Import Gamescripts with the Resource Manager in the Editor
  - Add Gamescripts to your project via Project > Settings
  - Re-build your Story
  - Rebuild each skill category that you added skills to. You can do this by adding a skill, saving, and then removing the skill.
- As the project matures, the above will slowly be phased out with the exception of Rebuilding the Story. I don't think I can automate that step.

## Features
- Contains equivalent features to the stat editor for skill, status, potion, and stats generation.
- Supports advanced skill creation that you can't perform in the editor thanks to the Modifier system.
- Creating statuses, potions, and weapons attached to skills is now super simple thanks to the [associate](MODIFIERSLIST#associate) module.
- Attach remote damage effects to your skills, allowing you to create hybrid scaling skills, multi-elemental type skills, and more thanks to the [remote](MODIFIERSLIST#remote) module.
- Extendable! See the Modifier and Extension sections below.

## What are Modifiers?
You can think of Modifiers like an Assembly Line. Each stat you make is is put through this assembly line, and each Modifier inspects it. Depending on what each Modifier is meant to do, it can react to specific keywords in a skill description, which in turn can cause it to create script or even additional stats in response to yours, which are themselves sent through the Assembly Line.

This means that each feature added by a Modifier can be nested within other Modifiers! Still doesn't make sense? Don't worry! This project details what each Modifier is capable of doing, and provides examples within the application to get your start. Click [here](MODIFIERSLIST.md) for a list of currently supported Modifiers to get started.

## How to create your own Modifier for the Skill Generator
Want a behavior that currently isn't supported? Don't fret, the Skill Generator is built to be extended! You can create your own Modifier and add it to the Skill Generator, or you can submit it for a PR to be added to the official list.

To see how to build your own Modifier, click [here](MODIFIERS.md) for a complete rundown of the Modifier API and coding conventions.

## What are Extensions?
In addition to Modifiers, the Skill Generator now supports Script Extensions. Modifiers can make use of Script Extensions to allow advanced skill creation without the need to script.

## How to create your own Extension for the Skill Generator
Similar to Modifiers, Extensions can be plugged into the Skill Generator, which will expose them to every modifier. This allows you to treat Extensions as a type of "library" from which any modifier can draw from.

To see how to build your own Extension, click [here](EXTENSIONS.md) for a complete rundown of the Extension API and coding conventions.

## Coming Soon
- Hotswapping
  - This allows you to define a skill that will change behavior based on the presence of an exclusive status.
- Foci
  - This allows you to define small permutations of a skill that change how it functions slightly, like with AP, Cooldown, Radius, Damage, or other such property changes. Foci will be keyed off statuses as well, and will use the most potent one available. Usage will be as simple as adding a generated status onto an item template or a boost template.
- Mutations
  - These are heavily scripted modifiers that completely change how a skill functions, such as causing it to do hybrid damage, fork, etc. Again, this should only require you to add a status to an item to support.
- Elevate
  - These skills will perform custom effects depending on the height difference. You will be able to specify ranges ( >3, <-2, -2 - 3) as well.

## Contributing to this project

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
