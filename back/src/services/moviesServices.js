const {Movie} = require('../models/Movie.js');

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },
    createMovie: async (movieData) => {
        const newMovie = new Movie(movieData);
        await newMovie.save();
        return newMovie;
    },
};

