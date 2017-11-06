let statNames;
let varNames;

function getCoreStory() {
  return (`Version 1
  SubGoalCombiner SGC_AND
  INITSECTION
  KBSECTION
PROC
  PROC_GENERATED_ASC_REMOTE_HYBRID_SINGLE((CHARACTERGUID)_Source, (CHARACTERGUID)_Target, (STRING)_Status)
AND
  StringContains(_Status, "_SINGLE_", 1)
THEN
  SetVarInteger(_Source, "${varNames.isSingleTargetVarName}", 1);

PROC
  PROC_GENERATED_ASC_REMOTE_HYBRID_AE((CHARACTERGUID)_Source, (CHARACTERGUID)_Target, (STRING)_Status)
AND
  StringContains(_Status, "_SINGLE_", 0)
THEN
  SetVarInteger(_Source, "${varNames.isSingleTargetVarName}", 0);

IF
  CharacterStatusApplied(_Target, _Status, (CHARACTERGUID)_Source)
AND
  StringContains(_Status, "${statNames.unformattedHybridStatusPrefix}", 1)
THEN
  PROC_GENERATED_ASC_REMOTE_HYBRID_SINGLE(_Source, _Target, _Status);
  PROC_GENERATED_ASC_REMOTE_HYBRID_AE(_Source, _Target, _Status);
  SetVarString(_Source, "${varNames.statusVarName}", _Status);
  CharacterCharacterSetEvent(_Source, _Target, "${varNames.bridgeEventName}");
  RemoveStatus(_Target, _Status);

  EXITSECTION
  
  ENDEXITSECTION
  `);
}

function getRemoteStory() {
  return '';
}

function init(_statNames, _varNames) {
  statNames = _statNames;
  varNames = _varNames;
}


module.exports = {
  init,
  getRemoteStory,
  getCoreStory,
};
