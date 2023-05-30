module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, subtest } = utilidades_de_test;
        const { expect } = chai;
        const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), {});
        

    } catch (error) {
        throw error;
    }
}