const updateCell = require('../../controllers/cells/updateCell');
const getRandomCellCoords = require('../math/getRandomCellCoords');

function generateOne(){
  const coords = getRandomCellCoords();
  return updateCell(coords, { food: true });
}

// TODO: implement
// function generateMany(){
// }

module.exports = generateOne;