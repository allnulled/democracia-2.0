module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.entrar");
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["nombre", "contrasenya"], ["post"]);
        const { nombre, contrasenya } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.entrar(nombre, contrasenya);
        return resultado;
    } catch(error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.entrar", error);
        throw error;
    }
};