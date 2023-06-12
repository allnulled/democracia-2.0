module.exports = async function () {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.insertar_dato");

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.insertar_dato", error);
        throw error;
    }
};