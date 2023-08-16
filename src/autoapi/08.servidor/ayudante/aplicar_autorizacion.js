const validar_regla = function (regla_presunta) {
    this.utilidades.tracear("this.servidor.ayudante.factoria.aplicar_autorizacion (función) validar_regla");
    if (typeof regla_presunta !== "object") throw new Error("Se requiere un objeto para crear una «regla de autorización»");
    if (typeof regla_presunta.al !== "string") throw new Error("Se requiere un objeto con propiedad «al» como «string» para crear una «regla de autorización»");
    if ((typeof regla_presunta.incluir + typeof regla_presunta.excluir) === "undefinedundefined") throw new Error("Se requiere un objeto con propiedad «incluir» o «excluir» para crear una «regla de autorización»");
    if ((typeof al_pre_aceptar + al_post_aceptar + al_rechazar) === "undefinedundefinedundefinedundefined") throw new Error("Se requiere un objeto con función «al_pre_aceptar», «al_post_aceptar», «al_pre_rechazar» o «al_post_rechazar» para crear una «regla de autorización»");
    return true;
};



module.exports = function (accion, evento, autentificacion = 0, parametros_de_la_accion = {}) {
    this.utilidades.tracear("this.servidor.ayudante.factoria.aplicar_autorizacion");
    try {
        Validar_parametros: {
            const es_operacion_valida = "seleccionar,insertar,actualizar,eliminar".split(/,/g).indexOf(accion) !== -1;
            const es_evento_valido = "al_pre_aceptar,al_post_aceptar,al_rechazar".split(/,/g).indexOf(evento) !== -1;
            if (!es_operacion_valida) throw new Error("Se requiere una operación válida como «seleccionar», «insertar», «actualizar» o «eliminar» para «this.servidor.ayudante.aplicar_autorizacion»");
            if (!es_evento_valido) throw new Error("Se requiere una evento válido como «al_pre_aceptar», «al_post_aceptar» o «al_rechazar» para «this.servidor.ayudante.aplicar_autorizacion»");
            ddd("TODOS...", parametros_de_la_accion, autentificacion, es_operacion_valida, es_evento_valido);
        }
        Bypaseamos_autorizacion_si_escaece: {
            if (autentificacion === 0) {
                return console.log("Autorización bypaseada con un 0: " + accion + ":" + evento);
            }
        }
        const { tabla, esquema } = parametros_de_la_accion;
        Validar_esquema_con_parametros: {
            if (!(tabla in esquema)) {
                throw new Error("Se requiere de tabla «" + tabla + "» existir en el esquema como tal para «aplicar_autorizacion»");
            }
            if (typeof esquema[tabla] !== "object") {
                throw new Error("Se requiere de tabla «" + tabla + "» ser un objeto en el esquema para «aplicar_autorizacion»");
            }
            if (!("atributos_de_tabla" in esquema[tabla])) {
                throw new Error("Se requiere de tabla «" + tabla + "» tener «atributos_de_tabla» en el esquema para «aplicar_autorizacion»");
            }
            if (!("atributos_de_tabla" in esquema[tabla])) {
                throw new Error("Se requiere de tabla «" + tabla + "» tener «atributos_de_tabla» en el esquema para «aplicar_autorizacion»");
            }
            if (typeof esquema[tabla].atributos_de_tabla !== "object") {
                throw new Error("Se requiere de tabla «" + tabla + "» contener «atributos_de_tabla» como objeto en el esquema para «aplicar_autorizacion»");
            }
        }
        Aplicar_autorizacion_por_cada_regla: {
            if (esquema[tabla].atributos_de_tabla.autorizacion) {
                Si_la_tabla_tiene_autorizacion: {
                    const { autorizacion } = esquema[tabla].atributos_de_tabla;
                    ddd("autorizacion", autorizacion);
                    Iteramos_las_reglas_de_autorizacion: {
                        for (let index_autorizacion = 0; index_autorizacion < autorizacion.length; index_autorizacion++) {
                            const regla_de_autorizacion = autorizacion[index_autorizacion];
                            validar_regla(regla);
                            const { al, incluir = false, excluir = false, al_pre_aceptar = false, al_post_aceptar = false, al_rechazar = false } = regla_de_autorizacion;
                            if (accion === al) {
                                let aceptado = false;
                                ddd("regla", regla);
                                ddd("al", al);
                                ddd("incluir", incluir);
                                ddd("excluir", excluir);
                                ddd("al_pre_aceptar", al_pre_aceptar);
                                ddd("al_post_aceptar", al_post_aceptar);
                                ddd("al_rechazar", al_rechazar);
                                this.utilidades.morir("OK")
                                if (!aceptado) {
                                    return [false, regla];
                                }
                            }
                        }
                    }
                }
            }
        }
        return "OK";
    } catch (error) {
        throw error;
    }
};