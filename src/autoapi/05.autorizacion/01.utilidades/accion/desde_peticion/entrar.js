module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.entrar");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["nombre", "correo", "contrasenya"], ["post", "get", "headers"]);
        const { nombre, correo, contrasenya } = parametros;
        const resultado = await this.autorizacion.utilidades.accion.entrar(nombre, correo, contrasenya);
        return resultado;
    } catch(error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.entrar", error);
        throw error;
    }
};