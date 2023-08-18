module.exports = function (arquitectura) {
    this.utilidades.tracear("this.autorization.extensiones.extender_autorizaciones_para_usuario");
    arquitectura.esquema.Usuario.atributos_de_tabla.autorizacion = [{
        al: "seleccionar",
        al_post_aceptar: function (parametros, autentificacion) {
            const tiene_permiso_supremo = autentificacion.permisos.filter(permiso => permiso.nombre === "administrar autorizaciones").length;
            if (tiene_permiso_supremo) return true;
            parametros.resultado[0] = parametros.resultado[0].filter(usuario => usuario.id === autentificacion.usuario.id);
        }
    }, {
        al: "actualizar",
        al_pre_aceptar: function (parametros, autentificacion) {
            const tiene_permiso_supremo = autentificacion.permisos.filter(permiso => permiso.nombre === "administrar autorizaciones").length;
            if (tiene_permiso_supremo) return true;
            throw new Error("No se puede actualizar un usuario");
        }
    }, {
        al: "insertar",
        al_pre_aceptar: function (parametros, autentificacion) {
            const tiene_permiso_supremo = autentificacion.permisos.filter(permiso => permiso.nombre === "administrar autorizaciones").length;
            if (tiene_permiso_supremo) return true;
            throw new Error("No se puede insertar un usuario");
        }
    }, {
        al: "eliminar",
        al_pre_aceptar: function (parametros, autentificacion) {
            const tiene_permiso_supremo = autentificacion.permisos.filter(permiso => permiso.nombre === "administrar autorizaciones").length;
            if (tiene_permiso_supremo) return true;
            throw new Error("No se puede eliminar un usuario");
        }
    }]
}