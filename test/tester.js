const opciones_por_defecto = {
    interrumpe: 0,
    debuga: 0,
};
const tester = function (nombre_de_test = undefined, opciones_arg = {}) {
    const opciones = Object.assign({}, opciones_por_defecto, opciones_arg);
    if (nombre_de_test) {
        console.log(`    ✔ Iniciando conjunto de tests «${nombre_de_test}`);
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
            debuga(`    ✔ Añadido test: «${id}»`);
            subtests._pendientes.push({ id, test, indice: subtests.length + 1 });
        },
        iniciar: async function () {
            try {
                const fallos = [];
                for (let index = 0; index < subtests._pendientes.length; index++) {
                    const test_pendiente = subtests._pendientes[index];
                    debuga(`    ✔ Iniciando test: «${test_pendiente.id}»`);
                    try {
                        await test_pendiente.test();
                        console.log(`    ✔ Completado test: «${test_pendiente.id}»`);
                        subtests._completados.push(test_pendiente.id);
                    } catch (error) {
                        console.log(`   ✘ Falló test: «${test_pendiente.id}»`);
                        if (opciones.interrumpe) {
                            throw error;
                        } else {
                            fallos.push({ test: id, error });
                        }
                    }
                }
                if (fallos.length) {
                    let mensaje_de_error = "";
                    mensaje_de_error += `☢☢☢ Reporte de errores de tests ☢☢☢\n`;
                    mensaje_de_error += `Fallaron ${fallos.length} tests debido a los siguientes errores:\n`;
                    for (let index = 0; index < fallos.length; index++) {
                        const fallo = fallos[index];
                        const { indice, test, error } = fallo;
                        mensaje_de_error += `☢ Test ${indice} «${test}» falló por el siguiente error: ☢\n`;
                        mensaje_de_error += `☢ [${error.name}] ${error.message} [\n${error.stack.split(/\n  +/g)}\n]\n\n`;
                    }
                    mensaje_de_error += `☢☢☢ Fin de reporte de errores de tests ☢☢☢`;
                    throw new Error(mensaje_de_error);
                } else {
                    console.log(`    ✔ Completados correctamente todos los tests.`);
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