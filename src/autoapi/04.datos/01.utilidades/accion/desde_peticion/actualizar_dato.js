module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.actualizar_dato");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["tabla", "id", "dato"], ["post", "get"]);
        const { tabla, id, dato } = parametros;
        const autentificacion = await this.utilidades.autentificar_peticion(req);
        const resultado = await this.datos.utilidades.accion.actualizar_dato(tabla, id, dato, autentificacion);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.actualizar_dato", error);
        throw error;
    }
};