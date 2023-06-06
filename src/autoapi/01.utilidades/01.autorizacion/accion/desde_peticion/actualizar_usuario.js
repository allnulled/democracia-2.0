module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.actualizar_usuario");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["id_usuario", "dato"], ["post", "get"]);
        const { id_usuario, dato } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.actualizar_usuario(id_usuario, dato);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.actualizar_usuario", error);
        throw error;
    }
};