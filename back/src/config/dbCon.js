const mongoose = require('mongoose');

const dbCon = async () => {
    // Realiza conexion a base de datos
    await mongoose.connect(
        'mongodb+srv://fmgsch:pweRPrhK5TBhnP7T@bpochange.del6rll.mongodb.net/BpoTickets?'
        );
};

module.exports = dbCon;