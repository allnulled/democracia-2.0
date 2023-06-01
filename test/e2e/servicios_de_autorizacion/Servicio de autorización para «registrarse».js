module.exports = async function (utilidades_de_test) {
    try {
        const { chai, axios, ruta_de_app, tester } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «registrarse»", { debuga: 0 });

        subtest("Servicio de autorización para «registrarse» exige un «nombre»", async function() {
            try {
                const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), {});
                throw new Error("Se debería haber avisado de un error aquí (12675612)");
            } catch(error) {
                // @OK
            }
        });
        
        subtest("Servicio de autorización para «registrarse» exige un nombre con más de 1 caracter", async function () {
            try {
                const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "0" });
                throw new Error("Se debería haber avisado de un error aquí (12374678612)");
            } catch (error) {
                // @OK
            }
        });

        subtest("Servicio de autorización para «registrarse» exige una contraseña", async function () {
            try {
                const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00" });
                throw new Error("Se debería haber avisado de un error aquí (519732695)");
            } catch (error) {
                // @OK
            }
        });

        subtest("Servicio de autorización para «registrarse» exige una contraseña con más de 5 caracteres", async function () {
            try {
                const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00", contrasenya: "00000" });
                throw new Error("Se debería haber avisado de un error aquí (1568123859)");
            } catch (error) {
                console.log(error);
            }
        });

        subtest("Servicio de autorización para «registrarse» exige un correo", async function () {
            try {
                const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00", contrasenya: "000000", correo: "0@00" });
                throw new Error("Se debería haber avisado de un error aquí (156749823198)");
            } catch (error) {
                console.log(error);
            }
        });

        subtest("Servicio de autorización para «registrarse» exige un correo con más de 4 caracteres", async function () {
            try {
                const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00", contrasenya: "000000", correo: "0@0.0" });
                throw new Error("Se debería haber avisado de un error aquí (1567498123879)");
            } catch (error) {
                console.log(error);
            }
        });
        
        await iniciar();
        

    } catch (error) {
        throw error;
    }
}