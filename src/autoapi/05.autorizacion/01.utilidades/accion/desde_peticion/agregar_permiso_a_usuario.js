module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.agregar_permiso_a_usuario");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_permiso", "id_usuario"], ["post", "get"]);
        await this.servidor.ayudante.incluir_segun_autorizacion(req, { permisos: ["administrar autorizaciones"] });
        const { id_permiso, id_usuario } = parametros;
        const resultado = await this.autorizacion.utilidades.accion.agregar_permiso_a_usuario(id_permiso, id_usuario);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.agregar_permiso_a_usuario", error);
        throw error;
    }
};