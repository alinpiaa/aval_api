const updateCell = require('../../controllers/cells/base/updateCell');
const getRandomCellCoords = require('../math/getRandomCellCoords');
const { MAX_FOOD_INDEX } = require('../../constants');

function run(promises) {
  return Promise.all(promises.map(func => func()))
    .then(() => console.info('All food generated!'))
    .catch(err => console.error(err));
}

// TODO: to fix unpredictable amount in case of random coords duplication
function generateOneFood() {
  const coords = getRandomCellCoords();
  return updateCell(coords, { food: true });
}

function generateAllFood() {
  let promises = [];

  for (let i=0; i<=MAX_FOOD_INDEX; i++) {
    promises.push(() => generateOneFood());
  }

  return run(promises);
}

module.exports = {
  generateOneFood,
  generateAllFood,
};