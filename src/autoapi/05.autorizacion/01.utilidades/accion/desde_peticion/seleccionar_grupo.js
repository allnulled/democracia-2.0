module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.seleccionar_grupo");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_grupo"], ["post", "get"]);
        const { id_grupo } = parametros;
        const resultado = await this.autorizacion.utilidades.accion.seleccionar_grupo(id_grupo);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.seleccionar_grupo", error);
        throw error;
    }
};