module.exports = async function () {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.seleccionar_fichero");

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.seleccionar_fichero", error);
        throw error;
    }
};