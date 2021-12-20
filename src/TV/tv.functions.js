const TV_Series = require("./tv.model");
const mongoose = require("mongoose");

exports.find_series = async (tvObj) => {
  try {
    await TV_Series.findOne({tvObj})
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.addSeries = async (tvObj) => {
  try {
    const newSeries = new TV_Series(tvObj);
    await newSeries.save();
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.add_Multiple_Movies = async (tvObj) => {
  try {
    const newSeries = new TV_Series(tvObj);
    await newSeries.insertMany(tvObj);
    await newSeries.save();
    mongoose.disconnect();
    console.log("Working");
  } catch (error) {
    console.log(error);
  }
};

exports.updateSeries = async (tvObj) => {
  try {
    await TV_Series.updateOne({tvObj});
    console.log('updated');
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.removeSeries = async (tvObj) => {
  try {
    await TV_Series.remove({tvObj});
    mongoose.disconnect();
    console.log('removed');
  } catch (error) {
    console.log(error);
  }
};