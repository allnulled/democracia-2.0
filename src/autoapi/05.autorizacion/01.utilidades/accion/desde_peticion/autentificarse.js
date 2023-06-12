module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.autentificarse");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["token_de_sesion"], ["post", "get", "headers"]);
        const { token_de_sesion } = parametros;
        const resultado = await this.autorizacion.utilidades.accion.autentificar_token_de_sesion(token_de_sesion);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.autentificarse", error);
        throw error;
    }
};