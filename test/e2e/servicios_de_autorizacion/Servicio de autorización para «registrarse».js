module.exports = async function (utilidades_de_test) {
    try {
        it("Falla si no se le pasa nombre y contraseña", async function () {
            const { chai, axios, ruta_de_app } = utilidades_de_test;
            const respuesta_1 = await axios.post(ruta_de_app("/auth/registrarse"), {});
            
        });
        
    } catch (error) {
        throw error;
    }
}