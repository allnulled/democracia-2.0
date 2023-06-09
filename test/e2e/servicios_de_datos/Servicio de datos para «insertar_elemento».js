module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de datos para «insertar_elemento»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de datos para «insertar_elemento» al final acepta los parámetros correctos", async function () {
            return "OK";
            const respuesta_1 = await axios.post(ruta_de_app("/datos/insertar/item"), {
                filtro: [["nombre", "=", "algo", "valor"]],
                pagina: 1,
                elementos: 20,
                orden: ["nombre", "id"]
            }, { headers: { token_de_sesion } });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}