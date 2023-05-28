module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.autorization.funcion.identificar_por_token_de_sesion");

    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.funcion.identificar_por_token_de_sesion", error);
        throw error;
    }
};