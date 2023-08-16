module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.eliminar_dato");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["tabla", "id"], ["post", "get"]);
        const autentificacion = await this.utilidades.autentificar_peticion(req);
        const { tabla, id } = parametros;
        const resultado = await this.datos.utilidades.accion.eliminar_dato(tabla, id, autentificacion);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.eliminar_dato", error);
        throw error;
    }
};
