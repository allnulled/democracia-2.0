module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.accion.insertar_dato");

    } catch (error) {
        this.utilidades.error("this.utilidades.datos.accion.insertar_dato", error);
        throw error;
    }
};