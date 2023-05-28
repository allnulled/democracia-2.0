const configuraciones_de_app = require(__dirname + "/../../src/autoapi/02.configuraciones/configuraciones.json");

module.exports = {
    axios: require("axios"),
    chai: require("chai"),
    configuraciones_de_app,
    ruta_de_app: function(ruta) {
        const protocolo = configuraciones_de_app.APLICACION_PROTOCOLO;
        const host = configuraciones_de_app.APLICACION_HOST;
        const puerto = configuraciones_de_app.APLICACION_PUERTO;
        return `${protocolo}://${host}:${puerto}/${ruta.replace(/^\//g, "")}`;
    }
};