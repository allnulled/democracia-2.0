module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «agregar_permiso_a_permiso»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de autorización para «agregar_permiso_a_grupo» puede recuperar «id» a partir de «nombre»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_permiso_segun_nombre"), { token_de_sesion, nombre: "permiso_1_para_test" });
            const respuesta_2 = await axios.post(ruta_de_app("/auth/seleccionar_grupo_segun_nombre"), { token_de_sesion, nombre: "grupo_1_para_test" });
            console.log(respuesta_1.data);
            console.log(respuesta_2.data);
            metadatos.id_permiso = respuesta_1.data.respuesta.datos.permiso.id;
            metadatos.id_grupo = respuesta_2.data.respuesta.datos.grupo.id;
        });

        subtest("Servicio de autorización para «agregar_permiso_a_grupo» exige «id_permiso» e «id_grupo»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const { id_permiso, id_grupo } = metadatos;
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_permiso_a_grupo"), { token_de_sesion });
            const respuesta_2 = await axios.post(ruta_de_app("/auth/agregar_permiso_a_grupo"), { token_de_sesion,  id_grupo });
            const respuesta_3 = await axios.post(ruta_de_app("/auth/agregar_permiso_a_grupo"), { token_de_sesion,  id_permiso });
            console.log(respuesta_1.data);
            console.log(respuesta_2.data);
            console.log(respuesta_3.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
            revisor_de_objeto(respuesta_2, ["data", "respuesta"], respuesta => ("error" in respuesta));
            revisor_de_objeto(respuesta_3, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «agregar_permiso_a_grupo» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const { id_permiso, id_grupo } = metadatos;
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_permiso_a_grupo"), { token_de_sesion, id_permiso, id_grupo });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}