module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.seleccionar_usuario_segun_nombre");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["nombre"], ["post", "get"]);
        const { nombre } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.seleccionar_usuario_segun_nombre(nombre);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.seleccionar_usuario_segun_nombre", error);
        throw error;
    }
};