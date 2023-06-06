module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «entrar_como_administrador»", { debuga: 0 });

        subtest("Servicio de autorización para «entrar_como_administrador» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/entrar"), {
                nombre: "administrador",
                contrasenya: "admin-admin-no-mucho"
            });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            const token_de_sesion = respuesta_1.data.respuesta.datos.sesion_activa.token_de_sesion;
            utilidades_de_test.agregar_dato("token_de_sesion_de_administrador", token_de_sesion);
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}