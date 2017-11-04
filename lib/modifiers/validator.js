const listing = {};

function validatorModifier({ stat }) {
  function checkValid() {
    if (!stat.statFields.Name) {
      throw new Error(`Encountered unnammed stat of type ${stat.type} and fields ${JSON.stringify(stat.statFields)}`);
    }
  
    return stat;
  }
  
  function checkUnique() {
    const fullName = `${stat.type}_${stat.statFields.Name}`;
  
    if (listing[fullName]) {
      throw new Error(`Encountered non-unique stat with name ${fullName}`);
    }
  
    listing[fullName] = 1;
  
    return stat;
  }

  checkValid(checkUnique());

  return stat;
}

module.exports = validatorModifier;
