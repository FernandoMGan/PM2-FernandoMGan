const mongoose = require('mongoose');

// console.log('Param Mongose ( estoy en dbCon.js)', process.env.MONGO_URI);

const dbCon = async () => {
    try {
        // Realiza conexion a base de datos
        await mongoose.connect(
            process.env.BD_URI
            );
    } catch (error) {
        console.log('Error de conexion en BD Mongo');        
    }
};

module.exports = dbCon;