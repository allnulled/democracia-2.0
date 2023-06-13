module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de datos para «seleccionar_dato»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de datos para «seleccionar_dato» permite filtros con «=» como operador", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const id_de_insercion_2 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_2");
            const id_de_insercion_3 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_3");
            const id_de_insercion_4 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_4");
            const respuesta_1 = await axios.post(ruta_de_app("/datos/seleccionar/dato"), {
                tabla: "Pruebas_para_tests",
                filtro: [["id", "=", id_de_insercion_2, "valor"]],
                pagina: 1,
                elementos: 20,
                orden: [["nombre"], ["id"]]
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "datos", "seleccion"], seleccion => Array.isArray(seleccion));
        });

        subtest("Servicio de datos para «seleccionar_dato» permite filtros con «in» como operador", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const id_de_insercion_2 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_2");
            const id_de_insercion_3 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_3");
            const id_de_insercion_4 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_4");
            const respuesta_1 = await axios.post(ruta_de_app("/datos/seleccionar/dato"), {
                tabla: "Pruebas_para_tests",
                filtro: [["id", "in", [id_de_insercion_2, id_de_insercion_3, id_de_insercion_4], "valor"]],
                pagina: 1,
                elementos: 20,
                orden: [["nombre"], ["id"]]
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "datos", "seleccion"], seleccion => Array.isArray(seleccion));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}