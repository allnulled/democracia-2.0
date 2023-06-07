module.exports = function () {
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.controlador.factoria.sistema_de_autentificacion");
            const subruta_de_auth_objetivo = req.url;
            let resultado = {};
            if (subruta_de_auth_objetivo.startsWith("/entrar")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.entrar(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/autentificarse")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.autentificarse(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/salir")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.salir(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/refrescarse")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.refrescarse(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/registrarse")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.registrarse(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/eliminarse")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.eliminarse(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/confirmarse")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.confirmarse(req, res, next);
///////////////////////////////////////////////////////////////////////////////////
////////////// Métodos de modificación del sistema de autorizaciones //////////////
                ///////////////////////////////////////////////////////////////////////////////////
            } else if (subruta_de_auth_objetivo.startsWith("/seleccionar_permiso_de_grupo")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.seleccionar_permiso_de_grupo(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/seleccionar_permiso_de_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.seleccionar_permiso_de_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/seleccionar_grupo_de_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.seleccionar_grupo_de_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/seleccionar_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.seleccionar_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/seleccionar_grupo")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.seleccionar_grupo(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/seleccionar_permiso")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.seleccionar_permiso(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/agregar_permiso_a_grupo")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.agregar_permiso_a_grupo(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/agregar_permiso_a_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.agregar_permiso_a_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/agregar_grupo_a_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.agregar_grupo_a_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/eliminar_permiso_a_grupo")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.eliminar_permiso_a_grupo(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/eliminar_permiso_a_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.eliminar_permiso_a_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/eliminar_grupo_a_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.eliminar_grupo_a_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/agregar_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.agregar_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/agregar_grupo")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.agregar_grupo(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/agregar_permiso")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.agregar_permiso(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/eliminar_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.eliminar_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/eliminar_grupo")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.eliminar_grupo(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/eliminar_permiso")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.eliminar_permiso(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/actualizar_usuario")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.actualizar_usuario(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/actualizar_grupo")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.actualizar_grupo(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/actualizar_permiso")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.actualizar_permiso(req, res, next);
///////////////////////////////////////////////////////////////////////////////////
////////////// OK /////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
            } else {
                return this.utilidades.responder_como_error(new Error(`El sistema de autentificación no reconoció la ruta «${subruta_de_auth_objetivo}»`), req, res, next);
            }
            return this.utilidades.responder_como_exito(resultado, req, res, next);
        } catch(error) {
            return this.utilidades.responder_como_error(error, req, res, next);
        }
    };
};