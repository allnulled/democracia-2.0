module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «agregar_permiso»", { debuga: 0 });

        subtest("Servicio de autorización para «agregar_permiso» exige un «nombre» y unos «detalles»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_permiso"), {
                // nombre: "permiso_0_para_test",
                detalles: "Permiso inventado para tests 0.",
            });
            const respuesta_2 = await axios.post(ruta_de_app("/auth/agregar_permiso"), {
                nombre: "permiso_0_para_test",
                // detalles: "Permiso inventado para tests 0.",
            });
            console.log(respuesta_1.data);
            console.log(respuesta_2.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => "error" in respuesta);
            revisor_de_objeto(respuesta_2, ["data", "respuesta"], respuesta => "error" in respuesta);
        });

        subtest("Servicio de autorización para «agregar_permiso» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_permiso"), {
                nombre: "permiso_0_para_test",
                detalles: "Permiso inventado para tests 1.",
            });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}