module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.agregar_grupo");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        // @TOOD: filtrar por autentificación + permiso "administrar autorizaciones"
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["nombre", "detalles"], ["post", "get"]);
        const { nombre, detalles } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.agregar_grupo(nombre, detalles);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.agregar_grupo", error);
        throw error;
    }
};