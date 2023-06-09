module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «actualizar_permiso»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de autorización para «actualizar_permiso» puede recuperar «id» a partir de «nombre»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_permiso_segun_nombre"), { nombre: "permiso_0_para_test" });
            metadatos.id_permiso = respuesta_1.data.respuesta.datos.permiso.id;
        });

        subtest("Servicio de autorización para «actualizar_permiso» exige «id_permiso»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/actualizar_permiso"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «actualizar_permiso» exige «dato»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/actualizar_permiso"), { id_permiso: metadatos.id_permiso });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «actualizar_permiso» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/actualizar_permiso"), {
                id_permiso: metadatos.id_permiso,
                dato: {
                    detalles: "Detalles cambiados"
                }
            });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}