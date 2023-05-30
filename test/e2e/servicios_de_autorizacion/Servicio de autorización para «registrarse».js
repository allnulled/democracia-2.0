module.exports = async function (utilidades_de_test) {
    try {
        const { chai, axios, ruta_de_app, tester } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «registrarse»", { debuga: 1 });

        subtest("Servicio de autorización para «registrarse» falla si «no se le pasan los parámetros»", function() {
            return new Promise(ok => {
                setTimeout(() => {
                    ok();
                }, 1000);
            });
        });
        
        subtest("Servicio de autorización para «registrarse» funciona si «sí se le pasan los parámetros»", function () {
            return new Promise(ok => {
                setTimeout(() => {
                    ok();
                }, 1000);
            });
        });
        
        await iniciar();
        
        // const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), {});

    } catch (error) {
        throw error;
    }
}