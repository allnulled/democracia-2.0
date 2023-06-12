module.exports = async function () {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.actualizar_elemento");

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.actualizar_elemento", error);
        throw error;
    }
};