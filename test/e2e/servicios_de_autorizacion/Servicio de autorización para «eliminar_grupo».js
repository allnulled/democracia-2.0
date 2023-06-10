module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «eliminar_grupo»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de autorización para «eliminar_grupo» puede recuperar «id» a partir de «nombre»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_grupo_segun_nombre"), { token_de_sesion, nombre: "grupo_0_para_test" });
            metadatos.id_grupo = respuesta_1.data.respuesta.datos.grupo.id;
        });

        subtest("Servicio de autorización para «eliminar_grupo» exige «id_grupo»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/eliminar_grupo"), { token_de_sesion });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «eliminar_grupo» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/eliminar_grupo"), { token_de_sesion, id_grupo: metadatos.id_grupo });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        subtest("Servicio de autorización para «eliminar_grupo» deja 1 usuario para tests en la base de datos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_grupo"), {
                token_de_sesion,
                nombre: "grupo_1_para_test",
                detalles: "Grupo inventado para tests 1.",
            });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}