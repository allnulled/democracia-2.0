// En one-liner:
// (function(timeout = 0) {const process = require("process");const tipos_de_memoria = Object.entries(process.memoryUsage());let mensaje = "";mensaje += `  ✔✔✔ Diagnóstico de uso de memoria:`;for (const [tipo, valor] of tipos_de_memoria) {mensaje += `\n✔ Memoria «${tipo}» ocupando «${valor / 1000000}« megabytes.`;}return new Promise(ok => {console.log(mensaje);setTimeout(() => {ok(tipos_de_memoria);}, timeout);});})();

module.exports = function(timeout = 0) {
    const process = require("process");
    const tipos_de_memoria = Object.entries(process.memoryUsage());
    let mensaje = "";
    mensaje += `  ✔✔✔ Diagnóstico de uso de memoria:`;
    for (const [tipo, valor] of tipos_de_memoria) {
        mensaje += `\n    ✔ Memoria «${tipo}» ocupando «${valor / 1000000}« megabytes.`;
    }
    return new Promise(ok => {
        console.log(mensaje);
        setTimeout(() => {
            ok(tipos_de_memoria);
        }, timeout);
    });
};

