module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «entrar»", { debuga: 0 });

        subtest("Servicio de autorización para «entrar» exige un «nombre» o un «correo»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/entrar"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «nombre» o «correo» es un texto [error: el parámetro «nombre» o «correo» debe ser un texto al «entrar»]");
        });

        subtest("Servicio de autorización para «entrar» exige una «contrasenya»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/entrar"), { nombre: "xxx" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «contrasenya» es un texto [error: el parámetro «contrasenya» debe ser un texto al «entrar»]");
        });

        subtest("Servicio de autorización para «entrar» exige un «usuario referido» existente", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/entrar"), { nombre: "xxx", contrasenya: "xxx.xxx" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "El «usuario» referido con la «contrasenya» especificada no está registrado en la base de datos al «entrar»");
        });

        subtest("Servicio de autorización para «entrar» al final acepta los parámetros correctos", async function () {
            const { nombre, contrasenya } = utilidades_de_test.obtener_dato("usuario_1_para_test_e2e");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/entrar"), { nombre, contrasenya });
            console.log(respuesta_1.data.respuesta.datos);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            const token_de_sesion = respuesta_1.data.respuesta.datos.autentificacion.sesion.token_de_sesion;
            utilidades_de_test.agregar_dato("token_de_sesion_activa_1", token_de_sesion);
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}