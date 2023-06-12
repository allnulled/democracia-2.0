module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.insertar_dato");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["tabla", "dato"], ["post", "get"]);
        // Aquí iría el filtro de acceso por datos+auth:
        // await this.servidor.ayudante.incluir_segun_autorizacion(req, { permisos: ["administrar autorizaciones"] });
        const { tabla, dato } = parametros;
        const resultado = await this.datos.utilidades.accion.insertar_dato(tabla, dato);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.insertar_dato", error);
        throw error;
    }
};