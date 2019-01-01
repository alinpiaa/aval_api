const mongoose = require('../mongoose');

const Schema = mongoose.Schema;

const CellSchema = new Schema({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

CellSchema.path('x').validate(function (v) {
  return v >= 0 && v < 80;
});

module.exports = mongoose.model('Cell', CellSchema);
