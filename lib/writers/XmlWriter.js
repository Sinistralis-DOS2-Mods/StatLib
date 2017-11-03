const fs = require('fs');
const xml2js = require('xml2js');

const { createStatObject } = require('./templates/statObject');
const { modStatsPath } = require('../config');
const { getStatFile, parseXml, fileToXml, writeFile } = require('./util');

async function save(data) {
  let filePath = getStatFile(data.dataType, modStatsPath);

  if (!fs.existsSync(filePath)) {
    filePath = `./lib/templates/${data.dataType}.xml`;
  }

  const xml = await fileToXml(filePath);
  const xmlJson = await parseXml(xml);
  let index;

  if (!xmlJson.stats['stat_objects'][0]['stat_object']) {
    xmlJson.stats['stat_objects'][0] = {
      ['stat_object']: []
    };
  }

  xmlJson.stats['stat_objects'][0]['stat_object'] = xmlJson.stats['stat_objects'][0]['stat_object'].filter(statObject => {
    let isGenerated = false;

    statObject.fields[0].field.some(field => {
      if (field['$'].name === 'Name')
      {
        isGenerated = field['$'].value.includes('GENERATED_');
        return true;
      }
      return false;
    });
    
    return !isGenerated;
  });

  index = xmlJson.stats['stat_objects'][0]['stat_object'].length;

  data.statObjects.forEach(statObject => {
    xmlJson.stats['stat_objects'][0]['stat_object'].push(createStatObject(statObject, index));
    index++;
  });

  const builder = new xml2js.Builder();
  const dataToWrite = builder.buildObject(xmlJson);

  await writeFile(getStatFile(data.dataType, modStatsPath), dataToWrite);
}

module.exports = save;
