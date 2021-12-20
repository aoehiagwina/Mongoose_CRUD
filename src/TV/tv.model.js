const mongoose = require("mongoose");

const tv_Schema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  actor: {
    type: String,
    default: "Not Specified",
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5,
  },
});

const TV_Series = mongoose.model("TV_series", tv_Schema);

module.exports = TV_Series;