/*
 * The directory to your Divinity Original Sin 2 directory and Mod ID.
 * If you are planning to use this tool, change these to fit your installation.
 */
const gameAbsolutePath = 'D:\\Steam\\steamapps\\common\\Divinity Original Sin 2';
const modId = 'Ascension_280a8cf2-98e4-44da-8908-23d451c52ece';

const config = {
  /*
   * The namespace to prefix everything with to prevent mod conflicts.
   * Highly recommend changing this to something that fits your mod. I use ASC for Ascension, as an example.
  */
  namespace: 'ASC',

  modStatsPath: `${gameAbsolutePath}\\Data\\Editor\\Mods\\${modId}\\Stats`,
  modScriptsPath: `${gameAbsolutePath}\\Data\\Public\\${modId}\\Scripts`,
  modStoryPath: `${gameAbsolutePath}\\Data\\Mods\\${modId}\\Story\\RawFiles\\Goals`,

  // Used to generate definitions, don't worry about these.
  definitionsAbsolutePath: 'D:\\Steam\\steamapps\\common\\Divinity Original Sin 2\\Data\\Editor\\Mods\\Definitions_28958617-d15c-4153-92ba-628aa68afb84\\Stats',
  enumerationsDefinitionsAbsolutePath: 'D:\\Steam\\steamapps\\common\\Divinity Original Sin 2\\Data\\Editor\\Config\\Stats\\Enumerations.xml'
};

module.exports = config;
