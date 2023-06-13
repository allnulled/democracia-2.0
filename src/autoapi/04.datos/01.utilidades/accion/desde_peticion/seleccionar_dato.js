module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.seleccionar_dato");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, "tabla,filtro,orden,pagina,elementos,busqueda".split(","), ["post", "get"]);
        const { tabla = false, filtro = false, orden = false, pagina = false, elementos = false, busqueda = false } = parametros;
        const resultado = await this.datos.utilidades.accion.seleccionar_dato(tabla, filtro, orden, pagina, elementos, busqueda);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.seleccionar_dato", error);
        throw error;
    }
};