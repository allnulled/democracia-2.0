module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «salir»", { debuga: 0 });

        subtest("Servicio de autorización para «salir» exige un «token_de_sesion»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/salir"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «token_de_sesion» es un texto [error: el parámetro «token_de_sesion» debe ser un texto al «salir»]");
        });

        subtest("Servicio de autorización para «salir» exige una «token_de_sesion» existente", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/salir"), { token_de_sesion: "xxx" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "El «token_de_sesion» referido no está registrado en la base de datos al «salir»");
        });

        subtest("Servicio de autorización para «salir» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_activa_2");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/salir"), { token_de_sesion });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();
        
    } catch (error) {
        throw error;
    }
}