module.exports = async function (utilidades_de_test) {
    try {
        const { chai, axios, ruta_de_app, tester } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «registrarse»", { debuga: 0 });

        subtest("Servicio de autorización para «registrarse» exige un «nombre»", async function() {
            try {
                const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), {});
                throw new Error("Se debería haber avisado de un error aquí (12675612)");
            } catch(error) {}
        });
        
        subtest("Servicio de autorización para «registrarse» exige un nombre con más de 1 caracter", async function () {
            try {
                const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "0" });
                throw new Error("Se debería haber avisado de un error aquí (12374678612)");
            } catch (error) {}
        });

        subtest("Servicio de autorización para «registrarse» acepta un nombre con más de 1 caracter", async function () {
            try {
                const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), { nombre: "00" });
            } catch (error) {
                console.log(error);
                throw new Error("Se debería haber evitado un error aquí (519732695)");
            }
        });
        
        await iniciar();
        

    } catch (error) {
        throw error;
    }
}