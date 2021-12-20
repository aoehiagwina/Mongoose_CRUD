require("./db/connection");
const yargs = require("yargs");
const { addMovie } = require("./movie/movie.functions");
const { find_single } = require("./movie/movie.functions");
const { updateMovie } = require("./movie/movie.functions");
const { removeMovie } = require("./movie/movie.functions");
const { add_Multiple_Movies } = require("./movie/movie.functions");
const mongoose = require("mongoose");
const Movie = require("./movie/movie.model");
const TV_Series = require("./TV/tv.model");

const { addSeries, updateSeries, removeSeries } = require('./TV/tv.functions');
const { remove } = require("./movie/movie.model");

const app = async (args) => {
  try {
    if (args.add) {
      const movieObj = {
        title: args.title,
        actor: args.actor,
        rating: args.rating,
      };
      await addMovie(movieObj);
      //run add movie functionality, passing a movieObj
    }
    
    else if (args.add_series) {
      const tvObj = {
        title: args.title,
        actor: args.actor,
        rating: args.rating,
      };
      await addSeries(tvObj);}

    else if (args.add_more) {
      const movieObj1 = {
        title: args.title,
        actor: args.actor,
        rating: args.rating
      };
      const movieObj2 =
        {title: args.title,
        actor: args.actor,
        rating: args.rating
      };
      const movieObj3 = {
        title: args.title,
        actor: args.actor,
        rating: args.rating};
      await addMovie(movieObj1);
      await addMovie(movieObj2);
      await addMovie(movieObj3);
      //run add movie functionality, passing a movieObj
    } 

    else if (args.find) {
        const movieObj = {
            title: args.title}
        await find_single(movieObj)
        console.log(movieObj) }


    else if (args.find_series) {
      const tvObj = {
          title: args.title}
      await find_series(tvObj)
      console.log(tvObj) }
    

    else if (args.update) {
      const movieObj = {
        title: args.title,
        actor: args.actor,
        rating: args.rating,
      };
      await updateMovie(movieObj); 
      console.log('updated');
    }

    else if (args.update_series) {
      const tvObj = {
        title: args.title,
        actor: args.actor,
        rating: args.rating,
      };
      await updateSeries(tvObj); 
      console.log('updated');
    }
    
    else if (args.del) {
      const movieObj = {
          title: args.title}
      await removeMovie(movieObj)
      console.log(movieObj) }

    else if (args.del_series) {
      const tvObj = {
          title: args.title}
      await removeSeries(tvObj)
      console.log(tvObj) }
    
    else {
      console.log("Incorrect command");
      mongoose.disconnect();
    }
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};

app(yargs.argv);