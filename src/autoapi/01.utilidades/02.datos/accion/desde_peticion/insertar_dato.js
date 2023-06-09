module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.accion.desde_peticion.insertar_dato");

    } catch (error) {
        this.utilidades.error("this.utilidades.datos.accion.desde_peticion.insertar_dato", error);
        throw error;
    }
};