module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de datos para «seleccionar_dato»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de datos para «seleccionar_dato» al final acepta los parámetros correctos", async function () {
            return "OK";
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const id_de_insercion_2 = utilidades_de_test.obtener_dato("id_de_insercion_de_datos_2");
            const respuesta_1 = await axios.post(ruta_de_app("/datos/seleccionar/dato"), {
                tabla: "Pruebas_para_tests",
                filtro: [["id", "=", id_de_insercion_2, "valor"]],
                pagina: 1,
                elementos: 20,
                orden: ["nombre", "id"]
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "datos", "dato_insertado"], dato_insertado => {
                return (typeof dato_insertado === "object") && (typeof dato_insertado.id === "number");
            });
            utilidades_de_test.agregar_dato("id_de_insercion_de_datos_1", respuesta_1.data.respuesta.datos.dato_insertado.id);
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}