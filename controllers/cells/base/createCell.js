const Cell = require('../../../models/Cell');

module.exports = function createCell(x, y) {
  let cell = new Cell({
    x,
    y,
  });

  return cell.save();
};