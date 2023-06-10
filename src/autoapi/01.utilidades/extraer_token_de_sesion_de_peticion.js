const lanzar_error_de_no_token_de_sesion = function() {
    throw new Error("Se requiere «token_de_sesion» para esta operación");
};

module.exports = function (req, al_fallar = lanzar_error_de_no_token_de_sesion) {
    this.utilidades.tracear("this.utilidades.extraer_token_de_sesion_de_peticion");
    const parametros = this.utilidades.extraer_parametros_de_peticion(req, ["token_de_sesion"], ["post", "headers"]);
    const token_de_sesion = parametros.token_de_sesion;
    if(typeof token_de_sesion === "undefined") {
        return al_fallar();
    }
    return token_de_sesion;
}