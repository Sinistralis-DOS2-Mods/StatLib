const fieldGenerator = require('./fieldGenerator');
const enumerationGenerator = require('./enumerationGenerator');

fieldGenerator()
	.then(() => console.log('Fields generated successfully'))
	.catch(err => console.error(err));

enumerationGenerator()
	.then(() => console.log('Enumerations generated successfully'))
	.catch(err => console.error(err));
