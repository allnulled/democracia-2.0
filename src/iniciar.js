const despliegue = async function(democracia) {
    try {
        await democracia.utilidades.terminar_proceso_de_pid();
        await democracia.utilidades.inspeccionar_memoria(1000);
        await democracia.servidor.instancia.iniciar();
        await democracia.utilidades.actualizar_fichero_de_pid();
        await democracia.utilidades.log(`[*] «${democracia.configuraciones.instancia.valores.APLICACION_ID}» desplegó la aplicación correctamente en proceso «${process.pid}» y puerto «${democracia.configuraciones.instancia.valores.APLICACION_PUERTO}».`);
        await democracia.utilidades.inspeccionar_memoria(1000);
        return democracia;
    } catch(error) {
        throw error;
    }
};

const main = async function() {
    try {
        (function(timeout = 0) {const process = require("process");const tipos_de_memoria = Object.entries(process.memoryUsage());let mensaje = "";mensaje += `  ✔✔✔ Diagnóstico de uso de memoria:`;for (const [tipo, valor] of tipos_de_memoria) {mensaje += `\n    ✔ Memoria «${tipo}» ocupando «${valor / 1000000}« megabytes.`;}return new Promise(ok => {console.log(mensaje);setTimeout(() => {ok(tipos_de_memoria);}, timeout);});})();
        const democracia = await require(__dirname + "/democracia.js");
        return await despliegue(democracia);
    } catch(error) {
        console.log("Error al «src/iniciar.js»", error);
        console.log("El despliegue de la instancia de «Democracia 2.0» fue cancelado»");
    }
};

module.exports = main();