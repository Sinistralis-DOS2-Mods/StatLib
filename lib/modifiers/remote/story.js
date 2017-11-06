const { EOL } = require('os');

let names;
let hybridDB = '';

function getRemoteStory() {
  return (`Version 1
  SubGoalCombiner SGC_AND
  INITSECTION
  ${hybridDB}
  KBSECTION
  IF
    CharacterStatusApplied(_Target, _Status, (CHARACTERGUID)_Source)
  AND
    StringContains(_Status, "${names.hybridStatusPrefix}", 1)
  AND
    DB_${names.hybridDB}(_Status, _Skill, _IsSingleTarget)
  THEN
    SetVarInteger(_Source, "${names.isSingleTargetVarName}", _IsSingleTarget);
    SetVarFixedString(_Source, "${names.skillVarName}", _Skill);
    CharacterCharacterSetEvent(_Source, _Target, "${names.bridgeEventName}");
    RemoveStatus(_Target, _Status);
  EXITSECTION
  
  ENDEXITSECTION
  `);
}

function addHybridToDB(status, projectile, isSingleTarget) {
  hybridDB += `DB_${names.hybridDB}("${status}", "${projectile}", ${isSingleTarget});${EOL}`;
}

function init(varNames) {
  names = varNames;
}


module.exports = {
  init,
  addHybridToDB,
  getRemoteStory,
};
