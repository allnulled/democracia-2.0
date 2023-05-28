module.exports = async function(nombre_o_correo_de_usuario = false, contrasenya_de_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.entrar");
        // @TODO...
    } catch(error) {
        this.utilidades.error("this.utilidades.autorization.accion.entrar", error);
        throw error;
    }
};