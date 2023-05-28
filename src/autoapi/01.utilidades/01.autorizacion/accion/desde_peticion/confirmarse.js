module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.confirmarse");
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["token_de_confirmacion"], ["post", "get", "headers"]);
        const { token_de_confirmacion } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.confirmarse(token_de_confirmacion);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.confirmarse", error);
        throw error;
    }
};