module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.actualizar_grupo");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_grupo", "dato"], ["post", "get"]);
        const { id_grupo, dato } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.actualizar_grupo(id_grupo, dato);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.actualizar_grupo", error);
        throw error;
    }
};