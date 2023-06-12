module.exports = async function () {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.insertar_fichero");

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.insertar_fichero", error);
        throw error;
    }
};