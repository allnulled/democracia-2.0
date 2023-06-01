const configuraciones_de_app = require(__dirname + "/../../src/autoapi/02.configuraciones/configuraciones.json");

module.exports = {
    axios: require("axios"),
    chai: require("chai"),
    configuraciones_de_app,
    configuraciones_de_test: {
        /**
         * 
         * @TOFIX !!
         * 
         * Si pones esta variable en 'false', los tests se cierran al acabar.
         * Si pones esta variable en 'true', los tests NO SE CIERRAN al acabar.
         * ¿Pooooooooooooooooooooooor?
         * 
         */
        salida_comun: true,
    },
    ruta_de_app: function(ruta) {
        const protocolo = configuraciones_de_app.APLICACION_PROTOCOLO;
        const host = configuraciones_de_app.APLICACION_HOST;
        const puerto = configuraciones_de_app.APLICACION_PUERTO;
        return `${protocolo}://${host}:${puerto}/${ruta.replace(/^\//g, "")}`;
    },
    tester: require(__dirname + "/../tester.js")
};