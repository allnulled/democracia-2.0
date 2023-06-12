module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.confirmarse");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["token_de_confirmacion"], ["post", "get", "headers"]);
        const { token_de_confirmacion } = parametros;
        const resultado = await this.autorizacion.utilidades.accion.confirmarse(token_de_confirmacion);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.confirmarse", error);
        throw error;
    }
};