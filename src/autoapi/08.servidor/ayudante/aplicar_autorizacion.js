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
    let tiene_autorizaciones = undefined;
    try {
        const { existe_propiedad } = this.utilidades;
        const { tabla, esquema } = parametros_de_la_accion;
        tiene_autorizaciones = (() => {
            try {
                return esquema[tabla].atributos_de_tabla.autorizacion.valor;
            } catch (error) {
                return false;
            }
        })();
        if (autentificacion === 0) {
            return "Sin restricciones por falta de autentificación";
        }
        const nombre_de_usuario = autentificacion.usuario.nombre;
        const nombres_de_permisos = autentificacion.permisos.map(permiso => permiso.nombre);
        const nombres_de_grupos = autentificacion.grupos.map(grupo => grupo.nombre);
        let esta_autorizado = false;
        for (let index_autorizacion = 0; index_autorizacion < tiene_autorizaciones.length; index_autorizacion++) {
            const autorizacion = tiene_autorizaciones[index_autorizacion];
            const comun = {};
            if (existe_propiedad(() => autorizacion.incluir.usuarios)) {
                comun.usuarios_incluidos = this.utilidades.obtener_comunes_de_dos_colecciones([nombre_de_usuario], autorizacion.incluir.usuarios || []);
            }
            if (existe_propiedad(() => autorizacion.incluir.usuarios)) {
                comun.permisos_incluidos = this.utilidades.obtener_comunes_de_dos_colecciones(nombres_de_permisos, autorizacion.incluir.permisos || []);
            }
            if (existe_propiedad(() => autorizacion.incluir.usuarios)) {
                comun.grupos_incluidos = this.utilidades.obtener_comunes_de_dos_colecciones(nombres_de_grupos, autorizacion.incluir.grupos || []);
            }
            if (existe_propiedad(() => autorizacion.incluir.usuarios)) {
                comun.usuarios_excluidos = this.utilidades.obtener_comunes_de_dos_colecciones([nombre_de_usuario], autorizacion.excluir.usuarios || []);
            }
            if (existe_propiedad(() => autorizacion.incluir.usuarios)) {
                comun.permisos_excluidos = this.utilidades.obtener_comunes_de_dos_colecciones(nombres_de_permisos, autorizacion.excluir.permisos || []);
            }
            if (existe_propiedad(() => autorizacion.incluir.usuarios)) {
                comun.grupos_excluidos = this.utilidades.obtener_comunes_de_dos_colecciones(nombres_de_grupos, autorizacion.excluir.grupos || []);
            }
            const es_operacion_sin_restricciones = (!comun.usuarios_incluidos) &&
                (!comun.permisos_incluidos) &&
                (!comun.grupos_incluidos) &&
                (!comun.usuarios_excluidos) &&
                (!comun.permisos_excluidos) &&
                (!comun.grupos_excluidos);
            if(es_operacion_sin_restricciones) {
                esta_autorizado = "Autorizado sin restricciones";
            }
            if (!autentificacion.permisos) {
                throw new Error("No se encontraron permisos en la autentificacion");
            }
            const permite_administrar_autorizaciones = autentificacion.permisos.filter(permiso => permiso.nombre === "administrar autorizaciones").length;
            if (permite_administrar_autorizaciones) {
                esta_autorizado = "Autorizado por permiso para administrar autorizaciones";
            } else {
                if (Array.isArray(comun.usuarios_incluidos) && comun.usuarios_incluidos.length) {
                    esta_autorizado = "Autorizado por usuario incluido";
                }
                if (Array.isArray(comun.permisos_incluidos) && comun.permisos_incluidos.length) {
                    esta_autorizado = "Autorizado por permiso incluido";
                }
                if (Array.isArray(comun.grupos_incluidos) && comun.grupos_incluidos.length) {
                    esta_autorizado = "Autorizado por grupo incluido";
                }
                if (Array.isArray(comun.usuarios_excluidos) && comun.usuarios_excluidos.length) {
                    esta_autorizado = "Restringido por usuario excluido";
                }
                if (Array.isArray(comun.permisos_excluidos) && comun.permisos_excluidos.length) {
                    esta_autorizado = "Restringido por permiso excluido";
                }
                if (Array.isArray(comun.grupos_excluidos) && comun.grupos_excluidos.length) {
                    esta_autorizado = "Restringido por grupo excluido";
                }
            }
            if(esta_autorizado.startsWith("Autorizado")) {
                if(evento === "al_pre_aceptar") {
                    const operacion = autorizacion.al_pre_aceptar;
                    if(typeof operacion === "function") {
                        await operacion.call(this, parametros_de_la_accion, autentificacion, evento, accion);
                    }
                } else if(evento === "al_post_aceptar") {
                    const operacion = autorizacion.al_post_aceptar;
                    if (typeof operacion === "function") {
                        await operacion.call(this, parametros_de_la_accion, autentificacion, evento, accion);
                    }
                }
            } else if(esta_autorizado.startsWith("Restringido")) {
                if (evento === "al_rechazar") {
                    const operacion = autorizacion.al_rechazar;
                    if (typeof operacion === "function") {
                        await operacion.call(this, parametros_de_la_accion, autentificacion, evento, accion);
                    }
                }
            } else {
                throw new Error("Operación interrumpida por autorizacion indeterminada. Contactar con el programador.");
            }
        }

    } catch (error) {
        this.utilidades.error(error);
        throw error;
    }
};