module.exports = async function (utilidades_de_test) {
    try {
        
        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «registrarse»", { debuga: 0 });

        subtest("Servicio de autorización para «registrarse» exige un «nombre»", async function() {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), {});
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «nombre» es un texto [error: el parámetro «nombre» debe ser un texto al «registrarse»]");
        });
        
        subtest("Servicio de autorización para «registrarse» exige un «nombre» con más de 1 caracter", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "0" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «nombre» tiene longitud mayor que «1» [error: el parámetro «nombre» debe tener más de 1 caracter al «registrarse»]");
        });

        subtest("Servicio de autorización para «registrarse» exige una «contraseña»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «contrasenya» es un texto [error: el parámetro «contrasenya» debe ser un texto al «registrarse»]");
        });

        subtest("Servicio de autorización para «registrarse» exige una «contraseña» con más de 5 caracteres", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00", contrasenya: "00000" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «contrasenya» tiene longitud mayor que «5» [error: el parámetro «contrasenya» debe tener más de 5 caracteres al «registrarse»]");
        });
        
        subtest("Servicio de autorización para «registrarse» exige un «correo»", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00", contrasenya: "000000" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «correo» es un texto [error: el parámetro «correo» debe ser un texto al «registrarse»]");
        });
        
        subtest("Servicio de autorización para «registrarse» exige un «correo» con más de 5 caracteres", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00", contrasenya: "000000", correo: "0@0.0" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «correo» tiene longitud mayor que «5» [error: el parámetro «correo» debe tener más de 5 caracteres al «registrarse»]");
        });

        subtest("Servicio de autorización para «registrarse» exige un «otros» que sea jsonable", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00", contrasenya: "000000", correo: "00@00.00", otros: "#" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "error"], "Comprueba que «otros» es jsonable [error: el parámetro «otros» debe ser un jsonable al «registrarse»]");
        });

        subtest("Servicio de autorización para «registrarse» al final acepta los parámetros correctos", async function () {
            const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00", contrasenya: "000000", correo: "00@00.00", otros: "{}" });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            revisor_de_objeto(respuesta_1, ["data", "respuesta", "datos", "token_de_confirmacion"], token => (typeof token === "string") && (token.length === 100));
            utilidades_de_test.agregar_dato("usuario_1_para_test_e2e", {
                nombre: "00",
                contrasenya: "000000",
                correo: "00@00.00",
                token_de_confirmacion: respuesta_1.data.respuesta.datos.token_de_confirmacion
            });
        });
        
        await iniciar();

    } catch (error) {
        throw error;
    }
}