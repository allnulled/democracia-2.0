module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.eliminar_permiso");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_permiso"], ["post", "get"]);
        const { id_permiso } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.eliminar_permiso(id_permiso);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.eliminar_permiso", error);
        throw error;
    }
};