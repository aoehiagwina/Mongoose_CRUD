const Movie = require("./movie.model");
const mongoose = require("mongoose");

exports.find_single = async (movieObj) => {
  try {
    await Movie.findOne({})
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.add_Multiple_Movies = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.insertMany([movieObj]);
    await newMovie.save();
    mongoose.disconnect();
    console.log("Working");
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (movieObj) => {
  try {
    await Movie.updateOne({movieObj});
    console.log('updated');
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.removeMovie = async (movieObj) => {
  try {
    await Movie.remove({movieObj});
    mongoose.disconnect();
    console.log('removed');
  } catch (error) {
    console.log(error);
  }
};

