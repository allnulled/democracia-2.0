module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.eliminar_dato");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["tabla", "id"], ["post", "get"]);
        // Aquí iría el filtro de acceso por datos+auth:
        // await this.servidor.ayudante.incluir_segun_autorizacion(req, { permisos: ["administrar autorizaciones"] });
        const { tabla, id } = parametros;
        const resultado = await this.datos.utilidades.accion.eliminar_dato(tabla, id);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.eliminar_dato", error);
        throw error;
    }
};