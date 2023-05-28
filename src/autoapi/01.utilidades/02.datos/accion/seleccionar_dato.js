module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.accion.seleccionar_dato");

    } catch (error) {
        this.utilidades.error("this.utilidades.datos.accion.seleccionar_dato", error);
        throw error;
    }
};