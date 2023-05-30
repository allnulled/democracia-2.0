const opciones_por_defecto = {
    interrumpe: 0,
    debuga: 0,
};
const cli_color = require("cli-color");
const tester = function (nombre_de_test = undefined, opciones_arg = {}) {
    const opciones = Object.assign({}, opciones_por_defecto, opciones_arg);
    if (nombre_de_test) {
        console.log(cli_color.cyanBright(`    ✔ Iniciando conjunto de tests «${nombre_de_test}`));
    }
    const debuga = function (...args) {
        if (opciones.debuga) {
            console.log(...args);
        }
    };
    const subtests = [];
    Object.assign(subtests, {
        _pendientes: [],
        _completados: [],
        opciones,
        subtest: function (id, test) {
            debuga(cli_color.cyanBright(`    ✔ Añadido test: «${id}»`));
            subtests._pendientes.push({ id, test, indice: subtests.length + 1 });
        },
        iniciar: async function () {
            try {
                const fallos = [];
                for (let index = 0; index < subtests._pendientes.length; index++) {
                    const test_pendiente = subtests._pendientes[index];
                    debuga(cli_color.cyanBright(`    ✔ Iniciando test: «${test_pendiente.id}»`));
                    try {
                        const inicio_de_test = new Date();
                        await test_pendiente.test();
                        const final_de_test = new Date();
                        const segundos_de_test = (final_de_test - inicio_de_test) / 1000;
                        console.log("    " + cli_color.green(`✔ En «${segundos_de_test}» segundos se ha completado test «${test_pendiente.id}»`));
                        subtests._completados.push({ id: test_pendiente.id, tiempo: segundos_de_test });
                    } catch (error) {
                        console.log(`    ✘ Justo falló test: «${test_pendiente.id}»`);
                        if (opciones.interrumpe) {
                            throw error;
                        } else {
                            fallos.push({ test: id, error });
                        }
                    }
                }
                if (fallos.length) {
                    let mensaje_de_error = "";
                    mensaje_de_error += `  ☢☢☢ Reporte de errores de tests ☢☢☢\n`;
                    mensaje_de_error += `    ✘ Fallaron ${fallos.length} tests debido a los siguientes errores:\n`;
                    for (let index = 0; index < fallos.length; index++) {
                        const fallo = fallos[index];
                        const { indice, test, error } = fallo;
                        mensaje_de_error += `    ☢ Test ${indice} «${test}» falló por el siguiente error: ☢\n`;
                        mensaje_de_error += `    ☢ [${error.name}] ${error.message} [\n${error.stack.split(/\n  +/g)}\n]\n\n`;
                    }
                    mensaje_de_error += `☢☢☢ Fin de reporte de errores de tests ☢☢☢`;
                    console.log(cli_color.redBright(mensaje_de_error));
                    throw new Error(mensaje_de_error);
                } else {
                    console.log("  " + cli_color.greenBright.underline(`✔✔✔ Completados correctamente todos los tests.`));
                    for(let index = 0; index < subtests._completados.length; index++) {
                        const subtest_completado = subtests._completados[index];
                        const { id, tiempo } = subtest_completado;
                        console.log("    " + cli_color.greenBright.underline(`✔ Test «${id}» completado en «${tiempo}» segundos`));
                    }
                }
            } catch (error) {
                throw error;
            }
        }
    });
    return subtests;
};
tester.default = tester;
module.exports = tester;