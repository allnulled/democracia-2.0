const validar_regla = function (regla_presunta) {
    this.utilidades.tracear("this.servidor.ayudante.factoria.aplicar_autorizacion (función) validar_regla");
    if (typeof regla_presunta !== "object") throw new Error("Se requiere un objeto para crear una «regla de autorización»");
    if (typeof regla_presunta.al !== "string") throw new Error("Se requiere un objeto con propiedad «al» como «string» para crear una «regla de autorización»");
    if ((typeof regla_presunta.incluir + typeof regla_presunta.excluir) === "undefinedundefined") throw new Error("Se requiere un objeto con propiedad «incluir» o «excluir» para crear una «regla de autorización»");
    if ((typeof al_pre_aceptar + al_post_aceptar + al_rechazar) === "undefinedundefinedundefinedundefined") throw new Error("Se requiere un objeto con función «al_pre_aceptar», «al_post_aceptar», «al_pre_rechazar» o «al_post_rechazar» para crear una «regla de autorización»");
    return true;
};



module.exports = async function (accion, evento, autentificacion = 0, parametros_de_la_accion = {}) {
    this.utilidades.tracear("this.servidor.ayudante.factoria.aplicar_autorizacion");
    try {
        
        return "OK";
    } catch (error) {
        throw error;
    }
};