module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.accion.insertar_fichero");

    } catch (error) {
        this.utilidades.error("this.utilidades.datos.accion.insertar_fichero", error);
        throw error;
    }
};