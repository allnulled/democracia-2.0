module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «seleccionar_permiso_de_grupo»", { debuga: 0 });

        subtest("Servicio de autorización para «seleccionar_permiso_de_grupo» exige «id_permiso» o «id_grupo»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_permiso_de_grupo"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «seleccionar_permiso_de_grupo» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_permiso_de_grupo"), { id_permiso: 1 });
            const respuesta_2 = await axios.post(ruta_de_app("/auth/seleccionar_permiso_de_grupo"), { id_grupo: 1 });
            const respuesta_3 = await axios.post(ruta_de_app("/auth/seleccionar_permiso_de_grupo"), { id_permiso: 1, id_grupo: 1 });
            console.log(respuesta_1.data);
            console.log(respuesta_2.data);
            console.log(respuesta_3.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_2, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_3, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}