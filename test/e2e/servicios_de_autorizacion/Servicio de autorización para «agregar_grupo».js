module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «agregar_grupo»", { debuga: 0 });

        subtest("Servicio de autorización para «agregar_grupo» exige un «nombre» y unos «detalles»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_grupo"), {
                token_de_sesion,
                // nombre: "grupo_0_para_test",
                detalles: "Grupo inventado para tests 0.",
            });
            const respuesta_2 = await axios.post(ruta_de_app("/auth/agregar_grupo"), {
                token_de_sesion,
                nombre: "grupo_0_para_test",
                // detalles: "Grupo inventado para tests 0.",
            });
            console.log(respuesta_1.data);
            console.log(respuesta_2.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => "error" in respuesta);
            revisor_de_objeto(respuesta_2, ["data", "respuesta"], respuesta => "error" in respuesta);
        });

        subtest("Servicio de autorización para «agregar_grupo» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_grupo"), {
                token_de_sesion,
                nombre: "grupo_0_para_test",
                detalles: "Grupo inventado para tests 0.",
            });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}