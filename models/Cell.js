const mongoose = require('../mongoose');
const { MAX_RAW_INDEX, MAX_COLUMN_INDEX } = require('../constants');

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
  food: {
    type: Boolean,
    default: false,
  },
});

CellSchema.path('x').validate(function (v) {
  return v >= 0 && v <= MAX_RAW_INDEX;
});

CellSchema.path('y').validate(function (v) {
  return v >= 0 && v <= MAX_COLUMN_INDEX;
});

module.exports = mongoose.model('Cell', CellSchema);
