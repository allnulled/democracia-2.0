module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.refrescarse");
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["token_de_sesion"], ["post","headers"]);
        const { token_de_sesion } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.refrescarse(token_de_sesion);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.refrescarse", error);
        throw error;
    }
};