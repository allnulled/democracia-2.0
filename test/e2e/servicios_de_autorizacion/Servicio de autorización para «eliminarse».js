module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «eliminarse»", { debuga: 0 });

        subtest("Servicio de autorización para «eliminarse» exige «entrar» previamente al sistema de sesiones", async function () {
            const { nombre, contrasenya } = utilidades_de_test.obtener_dato("usuario_1_para_test_e2e");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/entrar"), { nombre, contrasenya });
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            const token_de_sesion = respuesta_1.data.respuesta.datos.autentificacion.sesion.token_de_sesion;
            utilidades_de_test.agregar_dato("token_de_sesion_activa_3", token_de_sesion);
        });

        subtest("Servicio de autorización para «eliminarse» exige un «token_de_sesion»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/eliminarse"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «token_de_sesion» es un texto [error: el parámetro «token_de_sesion» debe ser un texto al «eliminarse»]");
        });

        subtest("Servicio de autorización para «eliminarse» exige una «token_de_sesion» existente", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/eliminarse"), { token_de_sesion: "xxx" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "El «token_de_sesion» referido no está registrado en la base de datos al «eliminarse»");
        });

        subtest("Servicio de autorización para «eliminarse» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_activa_3");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/eliminarse"), { token_de_sesion });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}