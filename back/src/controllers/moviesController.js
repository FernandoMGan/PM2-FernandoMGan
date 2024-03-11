// Importa el módulo `moviesService.js`
const moviesService = require('../services/moviesServices.js');

const getMovies = async (req, res) => {
    try {
        const movies = await moviesService.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addMovie = async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        console.log('Body contiene :>> ',req.body);
        const newMovie = await moviesService.addMovie({ title, year, director, duration, genre, rate, poster });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getMovies, addMovie };