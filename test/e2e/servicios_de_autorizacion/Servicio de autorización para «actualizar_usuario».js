module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de autorización para «actualizar_usuario»", { debuga: 0 });
        const metadatos = {};

        subtest("Servicio de autorización para «actualizar_usuario» puede recuperar «id» a partir de «nombre»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/seleccionar_usuario_segun_nombre"), { nombre: "usuario_0_para_test", token_de_sesion });
            metadatos.id_usuario = respuesta_1.data.respuesta.datos.usuario.id;
        });

        subtest("Servicio de autorización para «actualizar_usuario» exige «id_usuario»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/actualizar_usuario"), { token_de_sesion });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «actualizar_usuario» exige «dato»", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/actualizar_usuario"), { id_usuario: metadatos.id_usuario, token_de_sesion });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => ("error" in respuesta));
        });

        subtest("Servicio de autorización para «actualizar_usuario» al final acepta los parámetros correctos", async function () {
            const token_de_sesion = utilidades_de_test.obtener_dato("token_de_sesion_de_administrador");
            const respuesta_1 = await axios.post(ruta_de_app("/auth/actualizar_usuario"), {
                id_usuario: metadatos.id_usuario,
                dato: {
                    contrasenya: "otra.contrasenya.xxx"
                },
                token_de_sesion
            });
            console.log(respuesta_1.data);
            revisor_de_objeto(respuesta_1, ["data", "respuesta"], respuesta => !("error" in respuesta));
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}