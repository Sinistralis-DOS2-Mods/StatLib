const path = require('path');
const saveStats = require('./XmlWriter');
//const saveScript = require('./HorusWriter');
//const saveStory = require('./OsirisWriter');

const { requireDirectory } = require('./util');

const Skills = requireDirectory(path.resolve(__dirname, './../skills'));
const Statuses = requireDirectory(path.resolve(__dirname, './../statuses'));

const field = require('./modifiers/field');
const weapon = require('./modifiers/weapon');
const foci = require('./modifiers/foci');

async function run() {
  for (const [key, value] of Object.entries(Skills)) {
    if (Array.isArray(value) && value.length > 0) {
      await saveStats(field(key, weapon(foci(value))));
    }
  }

  for (const [key, value] of Object.entries(Statuses)) {
    if (Array.isArray(value) && value.length > 0) {
      await saveStats(field(key, value));
    }
  }

  //await saveScript();
  //await saveStory();
}

run()
  .catch(err => console.error(err));
