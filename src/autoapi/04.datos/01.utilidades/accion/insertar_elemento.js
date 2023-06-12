module.exports = async function () {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.insertar_elemento");

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.insertar_elemento", error);
        throw error;
    }
};