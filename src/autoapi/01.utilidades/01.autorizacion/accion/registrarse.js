module.exports = async function (nombre, correo, contrasenya, otros = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.registrarse");
        // @TODO...

    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.registrarse", error);
        throw error;
    }
};