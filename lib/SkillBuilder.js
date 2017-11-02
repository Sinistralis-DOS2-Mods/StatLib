const saveStats = require('./XmlWriter');
//const saveScript = require('./HorusWriter');
//const saveStory = require('./OsirisWriter');

const { SKILL_TYPES } = require('./const/skillTypes');
const Cone = require('../skills/Cone');
const Dome = require('../skills/Dome');
const Jump = require('../skills/Jump');
const Multistrike = require('../skills/Multistrike');
const Path = require('../skills/Path');
const Projectile = require('../skills/Projectile');
const ProjectileStrike = require('../skills/ProjectileStrike');
const Quake = require('../skills/Quake');
const Rain = require('../skills/Rain');
const Rush = require('../skills/Rush');
const Shout = require('../skills/Shout');
const Storm = require('../skills/Storm');
const Summon = require('../skills/Summon');
const Target = require('../skills/Target');
const Teleportation = require('../skills/Teleportation');
const Tornado = require('../skills/Tornado');
const Wall = require('../skills/Wall');
const Zone = require('../skills/Zone');

const field = require('./modifiers/field');
const weapon = require('./modifiers/weapon');
const foci = require('./modifiers/foci');

const Skills = {
  [SKILL_TYPES.CONE]: Cone,
  [SKILL_TYPES.DOME]: Dome,
  [SKILL_TYPES.JUMP]: Jump,
  [SKILL_TYPES.MULTISTRIKE]: Multistrike,
  [SKILL_TYPES.PATH]: Path,
  [SKILL_TYPES.PROJECTILE]: Projectile,
  [SKILL_TYPES.PROJECTILESTRIKE]: ProjectileStrike,
  [SKILL_TYPES.QUAKE]: Quake,
  [SKILL_TYPES.RAIN]: Rain,
  [SKILL_TYPES.RUSH]: Rush,
  [SKILL_TYPES.SHOUT]: Shout,
  [SKILL_TYPES.STORM]: Storm,
  [SKILL_TYPES.SUMMON]: Summon,
  [SKILL_TYPES.TARGET]: Target,
  [SKILL_TYPES.TELEPORTATION]: Teleportation,
  [SKILL_TYPES.TORNADO]: Tornado,
  [SKILL_TYPES.WALL]: Wall,
  [SKILL_TYPES.ZONE]: Zone,
};

async function run() {
  for (const [key, value] of Object.entries(Skills)) {
    await saveStats(field(key, weapon(foci(value))));
  }

  //await saveScript();
  //await saveStory();
}

run()
  .catch(err => console.error(err));
