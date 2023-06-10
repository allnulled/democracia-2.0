const lanzar_error_de_peticion_no_autentificada = function (error = new Error("La petición no pudo ser autentificada")) {
    throw error;
};

module.exports = async function (req, al_fallar = lanzar_error_de_peticion_no_autentificada) {
    this.utilidades.tracear("this.utilidades.autentificar_peticion");
    try {
        const parametros = this.utilidades.extraer_parametros_de_peticion(req, ["token_de_sesion"], ["post", "headers"]);
        const token_de_sesion = parametros.token_de_sesion;
        if (typeof token_de_sesion === "undefined") {
            return al_fallar("Se requiere «token_de_sesion» para «autentificar_peticion»");
        }
        const autentificacion = await this.utilidades.autorizacion.accion.autentificar_token_de_sesion(token_de_sesion);
        req.autentificacion = autentificacion;
        return autentificacion;
    } catch(error) {
        console.log(error);
        return al_fallar(error);
    }
}