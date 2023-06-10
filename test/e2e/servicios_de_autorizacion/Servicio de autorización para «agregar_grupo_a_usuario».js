module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «agregar_grupo_a_usuario»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de autorización para «agregar_grupo_a_usuario» puede recuperar «id» a partir de «nombre»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_grupo_segun_nombre"), { nombre: "grupo_1_para_test" });
            const respuesta_2 = await axios.post(ruta_de_app("/auth/seleccionar_usuario_segun_nombre"), { nombre: "usuario_1_para_test" });
            console.log(respuesta_1.data);
            console.log(respuesta_2.data);
            metadatos.id_grupo = respuesta_1.data.respuesta.datos.grupo.id;
            metadatos.id_usuario = respuesta_2.data.respuesta.datos.usuario.id;
        });

        subtest("Servicio de autorización para «agregar_grupo_a_usuario» exige «id_grupo» e «id_usuario»", async function () {
            const { id_grupo, id_usuario } = metadatos;
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_grupo_a_usuario"), {});
            const respuesta_2 = await axios.post(ruta_de_app("/auth/agregar_grupo_a_usuario"), { id_usuario });
            const respuesta_3 = await axios.post(ruta_de_app("/auth/agregar_grupo_a_usuario"), { id_grupo });
            console.log(respuesta_1.data);
            console.log(respuesta_2.data);
            console.log(respuesta_3.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
            revisor_de_objeto(respuesta_2, ["data", "respuesta"], respuesta => ("error" in respuesta));
            revisor_de_objeto(respuesta_3, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «agregar_grupo_a_usuario» al final acepta los parámetros correctos", async function () {
            const { id_grupo, id_usuario } = metadatos;
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_grupo_a_usuario"), { id_grupo, id_usuario });
            console.log(respuesta_1.data);
             revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}