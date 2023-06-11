module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «seleccionar_permiso»", { debuga: 0 });

        subtest("Servicio de autorización para «seleccionar_permiso» exige «id_permiso»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_permiso"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «seleccionar_permiso» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_permiso"), { id_permiso: 1 });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}