module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.seleccionar_permiso_de_usuario");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_permiso", "id_usuario"], ["post", "get"]);
        const { id_permiso, id_usuario } = parametros;
        const resultado = await this.autorizacion.utilidades.accion.seleccionar_permiso_de_usuario(id_permiso, id_usuario);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.seleccionar_permiso_de_usuario", error);
        throw error;
    }
};