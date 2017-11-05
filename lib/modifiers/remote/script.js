let names;
let script = '';

const getBaseRemoteScript = () => (`INIT
SKILL:%${names.damageSkillVarName}

EVENTS

EVENT ${names.bridgeEventName}
VARS
  CHARACTER:_Source
  CHARACTER:_Target
  INT:_Level
  INT:_IsSingleTarget
  FLOAT3:_ExplodeLoc
  FLOAT: _ExplodeY
  FIXEDSTRING:_Skill

ON
  OnCharacterCharacterEvent(_Source, _Target, "${names.bridgeEventName}")
ACTIONS
  IF "c1&c2&c3&c4&c5"
  GetVar(_Skill, _Source, "${names.skillVarName}")
  GetVar(_IsSingleTarget, _Source, "${names.isSingleTargetVarName}")
  GetLevelOverrideCurrent(_Source, _Level)
  GetPosition(_Target, _ExplodeLoc)
  GetY(_ExplodeLoc, _ExplodeY)
THEN
  CallFunction(_Skill)
  IF "c1"
    IsEqual(_IsSingleTarget, 1)
  THEN
    Add(_ExplodeY, 2.75)
    SetY(_ExplodeLoc, _ExplodeY)
  ExplodeAt(_ExplodeLoc, ${names.damageSkillVarName}, _Level, _Source)
  ENDIF
ENDIF
  `);

function addRemoteToScript(name) {
  script += (`
EVENT ${name}
ON
  OnFunction("${name}")
ACTIONS
  Set(%${names.damageSkillVarName}, ${name})
  `);
}

function getRemoteScript() {
  return script;
}

function init(varNames) {
  names = varNames;
  script = getBaseRemoteScript();
}


module.exports = {
  init,
  addRemoteToScript,
  getRemoteScript,
};
