module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «confirmarse»", { debuga: 0 });

        subtest("Servicio de autorización para «confirmarse» exige un «token_de_confirmacion»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/confirmarse"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «token_de_confirmacion» es un texto [error: el parámetro «token_de_confirmacion» debe ser un texto «al confirmarse»]");
        });

        subtest("Servicio de autorización para «confirmarse» exige un «token_de_confirmacion» que esté registrado", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/confirmarse"), { token_de_confirmacion: "sKNCYDHDsErIIZvFWKluMBDCFUXsGJcjaDoOZZxOwgBvRXjyuAPFZuqujBGYPSEZLXyOdyGZaXXiqkiABBSURVSCoynvGDWkQWCH" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "El «token_de_confirmacion» proporcionado no está registrado en la base de datos");
        });

        subtest("Servicio de autorización para «confirmarse» al final acepta los parámetros correctos", async function () {
            const { token_de_confirmacion } = utilidades_de_test.obtener_dato("usuario_1_para_test_e2e");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/confirmarse"), { token_de_confirmacion });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "datos", "usuario_confirmado"], true);
        });

        await iniciar();
        
    } catch(error) {
        throw error;
    }
}