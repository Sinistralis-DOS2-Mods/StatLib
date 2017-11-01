const fs = require('fs');
const util = require('util');
const xml2js = require('xml2js');

const { createStatObject } = require('./statObject');
const { modAbsolutePath } = require('../config');
const { getStatFile, parseXml, fileToXml, writeFile } = require('./util');

/*
{
  dataType: Projectile,
  statObjects: [
  {
    isSubstat: false,
    fields: [
      {
       name,
       type,
       value,
       enumeration_type_name,
      },
      {
       name,
       type,
       value,
       enumeration_type_name,
      },
    ],
  },
  {
    isSubstat: false,
    fields: [
      {
        name,
        type,
        value,
        enumeration_type_name,
      },
      {
        name,
        type,
        value,
        enumeration_type_name,
      },
    ],
  }],
},
*/
async function save(data) {
  let filePath = getStatFile(data.dataType, modAbsolutePath);

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
    return !statObject.fields[0].field[0]['$'].value.includes('GENERATED_');
  });

  index = xmlJson.stats['stat_objects'][0]['stat_object'].length;

  data.statObjects.forEach(statObject => {
    xmlJson.stats['stat_objects'][0]['stat_object'].push(createStatObject(statObject, index));
    index++;
  });

  const builder = new xml2js.Builder();
  const dataToWrite = builder.buildObject(xmlJson);

  await writeFile(`test/${data.dataType}.stats`, dataToWrite);

  //console.log(result.stats['stat_objects']['stat_object'][0].fields.field[0]['$'].value);
}

module.exports = save;