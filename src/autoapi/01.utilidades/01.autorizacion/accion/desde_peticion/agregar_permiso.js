module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.agregar_permiso");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["nombre", "detalles"], ["post", "get"]);
        await this.servidor.ayudante.incluir_segun_autorizacion(req, { permisos: ["administrar autorizaciones"] });
        const { nombre, detalles } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.agregar_permiso(nombre, detalles);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.agregar_permiso", error);
        throw error;
    }
};