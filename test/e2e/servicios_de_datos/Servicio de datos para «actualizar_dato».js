module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de datos para «actualizar_dato»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de datos para «actualizar_dato» exige parámetros «tabla», «id» y «dato»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const id_de_insercion_1 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_1");
            const respuesta_1 = await axios.post(ruta_de_app("/datos/actualizar/dato"), {
                // tabla: "Pruebas_para_tests",
                id: id_de_insercion_1,
                dato: {
                    nombre: "Primer insert",
                    uuid: "tests.datos.servicio.insert.1",
                    detalles: "Primera inserción de ejemplo desde los tests de los servicios de datos"
                }
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            const respuesta_2 = await axios.post(ruta_de_app("/datos/actualizar/dato"), {
                tabla: "Pruebas_para_tests",
                id: id_de_insercion_1,
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

        subtest("Servicio de datos para «actualizar_dato» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const id_de_insercion_1 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_1");
            const respuesta_1 = await axios.post(ruta_de_app("/datos/actualizar/dato"), {
                tabla: "Pruebas_para_tests",
                id: id_de_insercion_1,
                dato: {
                    detalles: "Primera inserción de ejemplo desde los tests de los servicios de datos, pero actualizado."
                }
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "datos", "dato_actualizado"], dato_actualizado => {
                return (typeof dato_actualizado === "object");
            });
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}