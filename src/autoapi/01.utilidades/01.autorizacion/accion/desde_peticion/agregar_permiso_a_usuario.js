module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.agregar_permiso_a_usuario");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        // @TOOD: filtrar por autentificación + permiso "administrar autorizaciones"
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_permiso", "id_usuario"], ["post", "get"]);
        const { id_permiso, id_usuario, dato } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.agregar_permiso_a_usuario(id_permiso, id_usuario);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.agregar_permiso_a_usuario", error);
        throw error;
    }
};