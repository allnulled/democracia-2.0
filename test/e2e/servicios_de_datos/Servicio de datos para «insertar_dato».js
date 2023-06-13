module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de datos para «insertar_dato»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de datos para «insertar_dato» exige parámetros «tabla» y «dato»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/datos/insertar/dato"), {
                // tabla: "Pruebas_para_tests",
                dato: {
                    nombre: "Primer insert",
                    uuid: "tests.datos.servicio.insert.1",
                    detalles: "Primera inserción de ejemplo desde los tests de los servicios de datos"
                }
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            const respuesta_2 = await axios.post(ruta_de_app("/datos/insertar/dato"), {
                tabla: "Pruebas_para_tests",
                // dato: {
                //     nombre: "Primer insert",
                //     uuid: "tests.datos.servicio.insert.1",
                //     detalles: "Primera inserción de ejemplo desde los tests de los servicios de datos"
                // }
            }, { headers: { token_de_sesion } });
            console.log(respuesta_2.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
            revisor_de_objeto(respuesta_2, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de datos para «insertar_dato» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/datos/insertar/dato"), {
                tabla: "Pruebas_para_tests",
                dato: {
                    nombre: "Primer insert",
                    uuid: "tests.datos.servicio.insert.1",
                    detalles: "Primera inserción de ejemplo desde los tests de los servicios de datos"
                }
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "datos", "insercion"], insercion => {
                return (typeof insercion === "object") && (typeof insercion.id === "number");
            });
            utilidades_de_test.agregar_dato("id_de_insercion_de_datos_1", respuesta_1.data.respuesta.datos.insercion.id);
        });

        subtest("Servicio de datos para «insertar_dato» crea otros registros para continuar los tests", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const datos = [{
                nombre: "Segundo insert",
                uuid: "tests.datos.servicio.insert.2",
                detalles: "Segunda inserción de ejemplo desde los tests de los servicios de datos"
            }, {
                nombre: "Tercer insert",
                uuid: "tests.datos.servicio.insert.3",
                detalles: "Tercera inserción de ejemplo desde los tests de los servicios de datos"
            }, {
                nombre: "Cuarto insert",
                uuid: "tests.datos.servicio.insert.4",
                detalles: "Cuarto inserción de ejemplo desde los tests de los servicios de datos"
            }, {
                nombre: "Quinto insert",
                uuid: "tests.datos.servicio.insert.5",
                detalles: "Quinto inserción de ejemplo desde los tests de los servicios de datos"
            }];
            for(let index = 0; index < datos.length; index++) {
                const dato = datos[index];
                const respuesta_1 = await axios.post(ruta_de_app("/datos/insertar/dato"), { tabla: "Pruebas_para_tests", dato }, { headers: { token_de_sesion } });
                console.log(respuesta_1.data);
                revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
                revisor_de_objeto(respuesta_1, ["data", "respuesta", "datos", "insercion"], insercion => {
                    return (typeof insercion === "object") && (typeof insercion.id === "number");
                });
                utilidades_de_test.agregar_dato("id_de_insercion_de_datos_" + (index + 2), respuesta_1.data.respuesta.datos.insercion.id);
            }
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}