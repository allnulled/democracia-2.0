module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.agregar_permiso_a_grupo");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_permiso", "id_grupo"], ["post", "get"]);
        await this.servidor.ayudante.incluir_segun_autorizacion(req, { permisos: ["administrar autorizaciones"] });
        const { id_permiso, id_grupo } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.agregar_permiso_a_grupo(id_permiso, id_grupo);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.agregar_permiso_a_grupo", error);
        throw error;
    }
};