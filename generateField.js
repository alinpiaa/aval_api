const createCell = require('./controllers/cells/createCell');

module.exports = function generateField() {
  let promises = [];

  for (let x=0; x<80; x++) {
    for (let y=0; y<80; y++) {
      promises.push(() => createCell(x, y));
    }
  }

  return run(promises);
}

function run(promises) {
  return Promise.all(promises.map(func => func()))
    .then(() => console.info('Field created!'))
    .catch(err => console.error(err));
}