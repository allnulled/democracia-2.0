module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.accion.eliminar_dato");

    } catch (error) {
        this.utilidades.error("this.utilidades.datos.accion.eliminar_dato", error);
        throw error;
    }
};