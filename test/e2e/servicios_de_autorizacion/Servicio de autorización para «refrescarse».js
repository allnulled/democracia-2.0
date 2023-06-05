module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «refrescarse»", { debuga: 0 });

        subtest("Servicio de autorización para «refrescarse» exige un «token_de_sesion»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/refrescarse"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «token_de_sesion» es un texto [error: el parámetro «token_de_sesion» debe ser un texto al «refrescarse»]");
        });

        subtest("Servicio de autorización para «refrescarse» exige una «token_de_sesion» existente", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/refrescarse"), { token_de_sesion: "xxx" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "El «token_de_sesion» referido no está registrado en la base de datos al «refrescarse»");
        });

        subtest("Servicio de autorización para «refrescarse» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_activa_1");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/refrescarse"), { token_de_sesion });
            console.log(respuesta_1.data);
            const token_de_sesion_2 = respuesta_1.data.respuesta.datos.token_de_sesion;
            utilidades_de_test.agregar_dato("token_de_sesion_activa_2", token_de_sesion_2);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

        // @TODO...
    } catch (error) {
        throw error;
    }
}