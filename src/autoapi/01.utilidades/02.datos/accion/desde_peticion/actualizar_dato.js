module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.accion.actualizar_dato");

    } catch (error) {
        this.utilidades.error("this.utilidades.datos.accion.actualizar_dato", error);
        throw error;
    }
};