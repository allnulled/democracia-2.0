module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.accion.insertar_item");

    } catch (error) {
        this.utilidades.error("this.utilidades.datos.accion.insertar_item", error);
        throw error;
    }
};