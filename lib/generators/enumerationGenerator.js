const os = require('os');

const { enumerationsDefinitionsAbsolutePath } = require('../../config');
const { parseXml, fileToXml, writeFile, formatEnumValue } = require('../util');

const { EOL } = os;

async function generate() {
  const xml = await fileToXml(enumerationsDefinitionsAbsolutePath);
  const xmlJson = await parseXml(xml);
  let contents = '';
  let fileExports = `module.exports = {${EOL}`;

  xmlJson.root.enumerations[0].enumeration.forEach(statEnum => {
    const varName = formatEnumValue(statEnum['$'].name);
    contents += `const ${varName} = {${EOL}`;
		
    statEnum.items[0].item.forEach(item => {
      contents += `\t['${formatEnumValue(item['$'].value)}']: ${item['$'].index},${EOL}`;			
    });

    fileExports += `\t${varName},${EOL}`;
    contents += `};${EOL}${EOL}`;
  });

  fileExports += `};${EOL}`;

  contents += fileExports;

  await writeFile('./lib/definitions/enums.js', contents);
}

module.exports = generate;
