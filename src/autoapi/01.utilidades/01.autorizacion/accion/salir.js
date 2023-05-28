module.exports = async function (token_de_sesion = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.salir");
        // @TODO...

    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.salir", error);
        throw error;
    }
};