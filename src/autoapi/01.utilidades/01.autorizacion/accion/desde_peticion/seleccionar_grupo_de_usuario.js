module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.seleccionar_grupo_de_usuario");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_grupo", "id_usuario"], ["post", "get"]);
        const { id_grupo, id_usuario } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.seleccionar_grupo_de_usuario(id_grupo, id_usuario);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.seleccionar_grupo_de_usuario", error);
        throw error;
    }
};