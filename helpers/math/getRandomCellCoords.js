const { MAX_RAW_INDEX, MAX_COLUMN_INDEX } = require('../../constants'); 

function getRandomIntWithin(min, max) {
  return Math.floor(Math.random() * (max + 1 - min));
}

module.exports = function getRandomCellCoords(xmin = 0, xmax = MAX_RAW_INDEX, ymin = 0, ymax = MAX_COLUMN_INDEX ) {
  return {
    x: getRandomIntWithin(xmin, xmax),
    y: getRandomIntWithin(ymin, ymax),
  };
};