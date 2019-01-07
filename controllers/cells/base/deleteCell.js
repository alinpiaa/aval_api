const Cell = require('../../../models/Cell');

module.exports = function deleteCell(conds) {
  return Cell.deleteOne(conds);
}