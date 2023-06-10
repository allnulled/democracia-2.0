module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «eliminar_permiso»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de autorización para «eliminar_permiso» puede recuperar «id» a partir de «nombre»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_permiso_segun_nombre"), { nombre: "permiso_0_para_test" });
            metadatos.id_permiso = respuesta_1.data.respuesta.datos.permiso.id;
        });

        subtest("Servicio de autorización para «eliminar_permiso» exige «id_permiso»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/eliminar_permiso"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «eliminar_permiso» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/eliminar_permiso"), { id_permiso: metadatos.id_permiso });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        subtest("Servicio de autorización para «eliminar_permiso» deja 1 usuario para tests en la base de datos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/agregar_permiso"), {
                nombre: "permiso_1_para_test",
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