module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.desde_peticion.registrarse");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["nombre", "contrasenya", "correo", "otros"], ["body", "query"]);
        const { nombre, correo, contrasenya, otros = "{}" } = parametros;
        const resultado = await this.utilidades.autorizacion.accion.registrarse(nombre, correo, contrasenya, otros);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.desde_peticion.registrarse", error);
        throw error;
    }
};