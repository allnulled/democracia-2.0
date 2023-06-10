module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «eliminar_usuario»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de autorización para «eliminar_usuario» puede recuperar «id» a partir de «nombre»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_usuario_segun_nombre"), { nombre: "usuario_0_para_test" });
            metadatos.id_usuario = respuesta_1.data.respuesta.datos.usuario.id;
        });

        subtest("Servicio de autorización para «eliminar_usuario» exige «id_usuario»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/eliminar_usuario"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «eliminar_usuario» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/eliminar_usuario"), { id_usuario: metadatos.id_usuario });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        subtest("Servicio de autorización para «eliminar_usuario» deja 1 usuario para tests en la base de datos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_usuario"), {
                nombre: "usuario_1_para_test",
                contrasenya: "admin-admin",
                correo: "usuario_1_para_test@test.org"
            });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}