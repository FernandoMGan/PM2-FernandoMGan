// En este modulo van a estar las funciones que establece la logica de negocio de cada una de las rutas

// Tengo definida la solicitud a GET /users => controlador


// vamos a ir a la base de datos a pedir la info de los usuarios 
//  y responder al cliente con la informacion obtenida

const hellowWorldController = (req, res) => {
    res
        .status(200)
        .send('Hola Soy el Servidor de Bpo Change, Estamos Recibiendo Solicitudes, Sos Bienvenido');
};

const usersController = (req, res) => {
    res
        .status(200)
        .send('Lista de usuarios del sistema');
};

const clientsController = (req, res) => {
    res
        .status(200)
        .send('Lista de clientes del sistema');
};

const suppliersController = (req, res) => {
    res
        .status(200)
        .send('Lista de proveedores del sistema');
};

const itemsController = (req, res) => {
    res
        .status(200)
        .send('Lista de articulos del sistema');
};

const depositsController = (req, res) => {
    res
        .status(200)
        .send('Lista de depositos del sistema');
};


// Index para Movies Pelis
const moviesController = (req, res) => {
    res
        .status(200)
        .send('Lista de peliculas para Bpo mis pelis');
};

module.exports = { hellowWorldController, usersController, clientsController, suppliersController, 
    itemsController, depositsController, moviesController };