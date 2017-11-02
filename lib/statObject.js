function createStatObject(statObjectData, index) {
  const statObject = {
    fields: [{
      field: [],
    }],
    ['$']: {
      index,
      ['is_substat']: false,
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