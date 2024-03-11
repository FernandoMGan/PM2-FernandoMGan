require('dotenv').config();

const app = require('./src/server');
const dbCon = require('./src/config/dbCon');


dbCon().then(
    res => {
        app.listen(process.env.APP_PORT, () => {
            console.log(`Servidor escuchando en el puerto :>> ${process.env.APP_PORT}, Base Conectada con Mongo DB en Uri :>> `, process.env.BD_URI);
        });
    }
);
