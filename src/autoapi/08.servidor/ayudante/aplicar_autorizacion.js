const validar_regla = function (regla_presunta) {
    this.utilidades.tracear("this.servidor.ayudante.factoria.aplicar_autorizacion (función) validar_regla");
    if (typeof regla_presunta !== "object") throw new Error("Se requiere un objeto para crear una «regla de autorización»");
    if (typeof regla_presunta.al !== "string") throw new Error("Se requiere un objeto con propiedad «al» como «string» para crear una «regla de autorización»");
    if ((typeof regla_presunta.incluir + typeof regla_presunta.excluir) === "undefinedundefined") throw new Error("Se requiere un objeto con propiedad «incluir» o «excluir» para crear una «regla de autorización»");
    if ((typeof al_pre_aceptar + al_post_aceptar + al_rechazar) === "undefinedundefinedundefinedundefined") throw new Error("Se requiere un objeto con función «al_pre_aceptar», «al_post_aceptar», «al_pre_rechazar» o «al_post_rechazar» para crear una «regla de autorización»");
    return true;
}

module.exports = function (accion, evento, reglas = [], autentificacion = 0, parametros_de_la_accion = {}) {
    this.utilidades.tracear("this.servidor.ayudante.factoria.aplicar_autorizacion");
    try {
        const es_operacion_valida = "seleccionar,insertar,actualizar,eliminar".split(/,/g).indexOf(accion) !== -1;
        const es_evento_valido = "al_pre_aceptar,al_post_aceptar,al_rechazar".split(/,/g).indexOf(evento) !== -1;
        if (!es_operacion_valida) throw new Error("Se requiere una operación válida como «seleccionar», «insertar», «actualizar» o «eliminar» para «this.servidor.ayudante.aplicar_autorizacion»");
        if (!es_evento_valido) throw new Error("Se requiere una evento válido como «al_pre_aceptar», «al_post_aceptar» o «al_rechazar» para «this.servidor.ayudante.aplicar_autorizacion»");
        ddd(parametros_de_la_accion, reglas, autentificacion, es_operacion_valida, es_evento_valido);
        if(autentificacion === 0) {
            return "OK";
        }
        for(let index_reglas = 0; index_reglas < reglas.length; index_reglas++) {
            const regla = reglas[index_reglas];
            validar_regla(regla);
            const { al, incluir, excluir, al_pre_aceptar, al_post_aceptar, al_rechazar } = regla;
            
        }
        return "OK";
    } catch (error) {
        throw error;
    }
};