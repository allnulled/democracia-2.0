module.exports = async function (token_de_confirmacion = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.confirmarse");
        // @TODO...

    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.confirmarse", error);
        throw error;
    }
};