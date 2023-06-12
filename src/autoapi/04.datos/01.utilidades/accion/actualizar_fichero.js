module.exports = async function () {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.actualizar_fichero");

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.actualizar_fichero", error);
        throw error;
    }
};