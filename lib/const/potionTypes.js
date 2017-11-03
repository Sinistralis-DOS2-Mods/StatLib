const POTION = 'Potion';

const POTION_TYPES = {
  POTION,
};

const types = Object.values(POTION_TYPES);

function isPotionType(value) {
  return types.includes(value);
}

module.exports = {
  POTION_TYPES,
  isPotionType,
};
