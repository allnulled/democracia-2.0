module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.accion.desde_peticion.actualizar_fichero");

    } catch (error) {
        this.utilidades.error("this.utilidades.datos.accion.desde_peticion.actualizar_fichero", error);
        throw error;
    }
};