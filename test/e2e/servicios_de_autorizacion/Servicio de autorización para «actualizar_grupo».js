module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «actualizar_grupo»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de autorización para «actualizar_grupo» puede recuperar «id» a partir de «nombre»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_grupo_segun_nombre"), { nombre: "grupo_0_para_test" });
            metadatos.id_grupo = respuesta_1.data.respuesta.datos.grupo.id;
        });

        subtest("Servicio de autorización para «actualizar_grupo» exige «id_grupo»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/actualizar_grupo"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «actualizar_grupo» exige «dato»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/actualizar_grupo"), { id_grupo: metadatos.id_grupo });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «actualizar_grupo» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/actualizar_grupo"), { id_grupo: metadatos.id_grupo, dato: {
                detalles: "Detalles cambiados"
            } });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}