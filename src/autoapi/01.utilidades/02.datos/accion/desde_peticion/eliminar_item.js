module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.accion.desde_peticion.eliminar_item");

    } catch (error) {
        this.utilidades.error("this.utilidades.datos.accion.desde_peticion.eliminar_item", error);
        throw error;
    }
};