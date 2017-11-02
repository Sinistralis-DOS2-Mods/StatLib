const fieldGenerator = require('./fieldGenerator');
const enumerationGenerator = require('./enumerationGenerator');

fieldGenerator()
	.catch(err => console.error(err))
	.then(() => console.log('Fields generated successfully'));

enumerationGenerator()
	.catch(err => console.error(err))
	.then(() => console.log('Enumerations generated successfully'));
