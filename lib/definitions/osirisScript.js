function osirisScriptDefinition(INITSECTION, KBSECTION, EXITSECTION) {
  return (
    `
    Version 1
    SubGoalCombiner SGC_AND
    INITSECTION
    ${INITSECTION}
    KBSECTION
    ${KBSECTION}
    EXITSECTION
    ${EXITSECTION}
    ENDEXITSECTION
  ` 
  );
}

module.exports = osirisScriptDefinition;
