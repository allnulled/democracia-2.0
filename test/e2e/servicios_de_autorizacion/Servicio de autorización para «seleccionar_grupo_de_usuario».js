module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «seleccionar_grupo_de_usuario»", { debuga: 0 });

        subtest("Servicio de autorización para «seleccionar_grupo_de_usuario» exige «id_grupo» o «id_usuario»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_grupo_de_usuario"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «seleccionar_grupo_de_usuario» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_grupo_de_usuario"), { id_grupo: 1 });
            const respuesta_2 = await axios.post(ruta_de_app("/auth/seleccionar_grupo_de_usuario"), { id_usuario: 1 });
            const respuesta_3 = await axios.post(ruta_de_app("/auth/seleccionar_grupo_de_usuario"), { id_grupo: 1, id_usuario: 1 });
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