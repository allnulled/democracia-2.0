const configuraciones_de_app = require(__dirname + "/../../src/autoapi/02.configuraciones/configuraciones.json");
const utilidades_de_test_e2e = {
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
    datos_de_test: {},
    agregar_dato: function(id, dato) {
        if (id in utilidades_de_test_e2e.datos_de_test) {
            throw new Error(`El dato de tests e2e con id «${id}» ya fue agregado anteriormente`);
        }
        utilidades_de_test_e2e.datos_de_test[id] = dato;
    },
    obtener_dato: function(id) {
        return utilidades_de_test_e2e.datos_de_test[id];
    },
    ruta_de_app: function (ruta) {
        const protocolo = configuraciones_de_app.APLICACION_PROTOCOLO;
        const host = configuraciones_de_app.APLICACION_HOST;
        const puerto = configuraciones_de_app.APLICACION_PUERTO;
        return `${protocolo}://${host}:${puerto}/${ruta.replace(/^\//g, "")}`;
    },
    tester: require(__dirname + "/../tester.js"),
    revisor_de_objeto: require(__dirname + "/../revisor_de_objeto.js")
};


module.exports = utilidades_de_test_e2e;