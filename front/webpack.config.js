module.exports = {
//mode: "development",  // Modo configurado como 'development' para la versión de desarrollo y codigo sin encriptar
mode: "production",   // Modo configurado como 'production' para la versión de producción y codigo mimificado / encriptado
entry: "./scripts/index.js",

    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    watch: true,
};