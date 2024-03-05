const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Pasando solicitud por el midelware de morgan
app.use(morgan("dev"));     // Registro dev
app.use(cors());            // Se abre para recibir conexiones
app.use(express.json());    // Convierte json a Java scripts

// Middelware propio
app.use((req,res,next)=> {
    console.log('Estamos pasando por mi propio middelware ');
    next();
});

app.use(router);

module.exports = app ;