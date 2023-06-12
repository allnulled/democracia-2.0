module.exports = async function () {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.eliminar_dato");

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.eliminar_dato", error);
        throw error;
    }
};