const Cell = require('../../../models/Cell');

module.exports = function updateCell(conds, doc) {
  return Cell.updateOne(conds, doc);
}