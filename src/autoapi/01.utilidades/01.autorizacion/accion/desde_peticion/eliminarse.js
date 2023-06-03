module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.eliminarse");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["token_de_sesion"], ["post","headers"]);
        const { token_de_sesion } = parametros;
        console.log(token_de_sesion);
        console.log(token_de_sesion);
        console.log(token_de_sesion);
        console.log(token_de_sesion);
        console.log(token_de_sesion);
        const resultado = await this.utilidades.autorizacion.accion.eliminarse(token_de_sesion);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.eliminarse", error);
        throw error;
    }
};