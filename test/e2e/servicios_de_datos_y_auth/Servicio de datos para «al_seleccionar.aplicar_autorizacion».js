module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de datos para «al_insertar» + ", { debuga: 0 });
        const metadatos = {};

        subtest("Puede seleccionar pasando por el interceptor estipulado en el esquema", async function () {
            try {
                const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
                const respuesta_1 = await axios.post(ruta_de_app("/datos/seleccionar/dato"), {
                    tabla: "Pruebas_para_tests_2",
                }, { headers: { token_de_sesion } });
                console.log(respuesta_1.data);
                revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            } catch (error) {
                console.log(error);
                throw error;
            }
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}