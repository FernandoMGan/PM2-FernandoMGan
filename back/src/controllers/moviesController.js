// Importa el módulo `moviesService.js`
const moviesService = require('../services/moviesServices.js');

// Define el controlador moviesController
const moviesController = async (req, res) => {
    // Redirige a la raíz de la aplicación
    res.json(moviesService);
};

// Exporta el controlador
module.exports = { moviesController };
