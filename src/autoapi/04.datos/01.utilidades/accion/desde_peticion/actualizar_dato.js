module.exports = async function () {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.actualizar_dato");

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.actualizar_dato", error);
        throw error;
    }
};