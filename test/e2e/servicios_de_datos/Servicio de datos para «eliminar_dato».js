module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de datos para «eliminar_dato»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de datos para «eliminar_dato» exige parámetros «tabla» e «id»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const id_de_insercion_1 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_1");
            const respuesta_1 = await axios.post(ruta_de_app("/datos/eliminar/dato"), {
                // tabla: "Pruebas_para_tests",
                id: id_de_insercion_1,
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de datos para «eliminar_dato» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const id_de_insercion_1 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_1");
            const respuesta_1 = await axios.post(ruta_de_app("/datos/eliminar/dato"), {
                tabla: "Pruebas_para_tests",
                id: id_de_insercion_1,
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "datos", "dato_eliminado"], dato_eliminado => dato_eliminado === true);
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}