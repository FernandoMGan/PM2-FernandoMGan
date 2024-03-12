// Importa el módulo `moviesService.js`
const moviesService = require('../services/moviesServices.js');

const getMovies = async (req, res) => {
    console.log('Get - Pasando por get en movies controler - Antes Try \n');
    try {
        const movies = await moviesService.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createMovie = async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const result = await moviesService.createMovie({title, year, director, duration, genre, rate, poster });
    res.status(201).json({
        message: "Se creo la pelicula completa",
        result
    });
};

module.exports = { getMovies, createMovie };