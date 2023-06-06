module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.eliminar_grupo_a_usuario");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_grupo", "id_usuario"], ["post", "get"]);
        const { id_grupo, id_usuario } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.eliminar_grupo_a_usuario(id_grupo, id_usuario);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.eliminar_grupo_a_usuario", error);
        throw error;
    }
};