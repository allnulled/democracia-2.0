module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.datos.funcion.inicializar_base_de_datos");

    } catch(error) {
        this.utilidades.error("this.utilidades.datos.funcion.inicializar_base_de_datos", error);
        throw error;
    }
}