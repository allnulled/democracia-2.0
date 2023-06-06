module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.agregar_usuario");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        // @TOOD: filtrar por autentificación + permiso "administrar autorizaciones"
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["nombre", "contrasenya", "correo"], ["post", "get"]);
        const { nombre, contrasenya, correo } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.agregar_usuario(nombre, contrasenya, correo);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.agregar_usuario", error);
        throw error;
    }
};