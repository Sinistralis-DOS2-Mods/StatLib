// A listing of all fields available for STATUS_CONSUME. One of these exist for each respective status type.
const { STATUS_CONSUME_NAMES } = require('../lib/definitions/statusFields');

// A list of all enums available within the Editor. If you use the field name helpers listed above and you have VSCode or another editor that supports JSDoc,
// intellisense you will you the ENUM to import for a given field, if required.
const { YES_NO, SAVING_THROW } = require('../lib/definitions/enums');

const statuses = [
  {
    // Name will automatically be prepended by Namespace and a special GENERATED tag, so you can differentiate generated skills from non-generated ones.
    [STATUS_CONSUME_NAMES.NAME]: 'MyAwesomeStatus', // For example, this will end up being GENERATED_{NAMESPACE}_MyAwesomeStatus
    [STATUS_CONSUME_NAMES.BRING_INTO_COMBAT]: YES_NO.NO,
    [STATUS_CONSUME_NAMES.SAVING_THROW]: SAVING_THROW.STUNNED,
  }
];

module.exports = statuses;
