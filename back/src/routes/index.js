// Aqui vamos a definir las rutas a traves

// Tengo definida la solicitud a GET /users => controlador

const { Router } = require('express');
const { hellowWorldController, usersController, clientsController, suppliersController, 
    itemsController, depositsController } = require('../controllers/index.js')
const { getMovies, createMovie } = require('../controllers/moviesController.js');

const router = Router();

// Users, Clients, Suppliers, Items, Deposits,

router.get('/', hellowWorldController);

router.get('/users', usersController);

router.get('/clients', clientsController);

router.get('/suppliers', suppliersController);

router.get('/items', itemsController);

router.get('/deposits', depositsController);

// Routas para Bpo mis pelis

router.get('/movies', getMovies);
router.post('/movies', createMovie);

module.exports = router;