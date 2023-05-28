module.exports = async function () {
    try {
        this.utilidades.tracear("this.utilidades.autorization.funcion.identificar_por_nombre_y_contrasenya");

    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.funcion.identificar_por_nombre_y_contrasenya", error);
        throw error;
    }
};