const createCell = require('../../controllers/cells/createCell');
const { MAX_RAW_INDEX, MAX_COLUMN_INDEX } = require('../../constants');

// TODO: to extract to helper
function run(promises) {
  return Promise.all(promises.map(func => func()))
    .then(() => console.info('Field created!'))
    .catch(err => console.error(err));
}

module.exports = function generateField() {
  let promises = [];

  for (let x=0; x<=MAX_RAW_INDEX; x++) {
    for (let y=0; y<=MAX_COLUMN_INDEX; y++) {
      promises.push(() => createCell(x, y));
    }
  }

  return run(promises);
};