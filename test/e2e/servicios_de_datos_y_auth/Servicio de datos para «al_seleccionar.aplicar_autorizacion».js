module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de datos para «al_insertar» + ", { debuga: 0 });
        const metadatos = {};

        subtest("Puede entrar como un usuario random", async function () {
            const { nombre, contrasenya } = utilidades_de_test.obtener_dato("usuario_1_para_test_e2e");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/entrar"), {
                nombre: "usuario_1_para_test",
                contrasenya: "admin-admin"
            });
            console.log(respuesta_1.data.respuesta.datos);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            const token_de_sesion = respuesta_1.data.respuesta.datos.autentificacion.sesion.token_de_sesion;
            utilidades_de_test.agregar_dato("token_de_sesion_activa_5", token_de_sesion);
        });

        subtest("Puede seleccionar usuarios si es administrador", async function () {

        });
        
        subtest("Puede seleccionar usuarios pero solo verse a él si no es administrador", async function () {
            try {
                const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_activa_5");
                const respuesta_1 = await axios.post(ruta_de_app("/datos/seleccionar/dato"), {
                    tabla: "Usuario",
                }, { headers: { token_de_sesion } });
                console.log(respuesta_1.data);
                console.log(respuesta_1.data.respuesta.datos.resultado);
                revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
            } catch (error) {
                console.log(error);
                throw error;
            }
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}