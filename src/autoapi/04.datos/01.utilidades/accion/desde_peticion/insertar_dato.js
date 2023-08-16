module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.insertar_dato");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["tabla", "dato"], ["post", "get"]);
        const autentificacion = await this.utilidades.autentificar_peticion(req);
        const { tabla, dato } = parametros;
        const resultado = await this.datos.utilidades.accion.insertar_dato(tabla, dato, autentificacion);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.insertar_dato", error);
        throw error;
    }
};
