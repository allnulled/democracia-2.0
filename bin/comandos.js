module.exports = function (fichero_de_comando = __dirname + "/comandos") {
    const path = require("path");
    let empezaron_los_parametros = false;
    let ultimo_parametro = "_";
    const reductor_de_parametros_a_comando = function (out, item, index) {
        if (path.basename(item) === "democracia20.bin.js" && index < 3) {
            return out;
        }
        if (path.basename(item) === "democracia20" && index < 3) {
            return out;
        }
        if (path.basename(item) === "node" && index < 2) {
            return out;
        }
        const empieza_con_guion = item.startsWith("-");
        if (empieza_con_guion) {
            empezaron_los_parametros = true;
        }
        if (empezaron_los_parametros) {
            if (empieza_con_guion) {
                ultimo_parametro = item;
                if (!Array.isArray(out.parametros[ultimo_parametro])) {
                    out.parametros[ultimo_parametro] = [];
                }
            } else {
                out.parametros[ultimo_parametro].push(item);
            }
            return out;
        }
        out.comando.push(item);
        return out;
    };
    const parametros_de_comando = process.argv.reduce(reductor_de_parametros_a_comando, { comando: [], parametros: {} });
    const fichero = path.resolve(fichero_de_comando, parametros_de_comando.comando.join("/"), "index.js");
    return Object.assign({}, parametros_de_comando, { fichero });
};