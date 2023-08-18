require("nodelive").PREFERRED_EDITOR = "code";

module.exports = new Promise((ok, fail) => {
    try {
        const importar_directorio_recursivamente = require(__dirname + "/autoapi/02.utilidades/importar_directorio_recursivamente.js");
        const importacion_directorio = importar_directorio_recursivamente(__dirname + "/autoapi");
        importacion_directorio.then(ok).catch(fail);
    } catch(error) {
        return fail(error);
    }
});
