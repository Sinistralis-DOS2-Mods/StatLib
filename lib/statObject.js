/*
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
}
*/
function createStatObject(statObjectData, index) {
	const statObject = {
		fields: [{
			field: [],
		}],
		['$']: {
			index,
			['is_substat']: statObjectData.isSubstat,
		},
	};

	statObjectData.fields.forEach(field => {
		statObject.fields[0].field.push({
			['$']: field
		});
	});

	return statObject;
}

module.exports = {
	createStatObject,
};