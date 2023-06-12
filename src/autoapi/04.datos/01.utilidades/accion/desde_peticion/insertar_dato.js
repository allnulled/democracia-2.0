module.exports = async function () {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.insertar_dato");

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.insertar_dato", error);
        throw error;
    }
};