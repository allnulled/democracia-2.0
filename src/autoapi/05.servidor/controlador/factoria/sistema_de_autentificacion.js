module.exports = function () {
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.controlador.factoria.sistema_de_autentificacion");
            const subruta_de_auth_objetivo = req.url;
            if (subruta_de_auth_objetivo.startsWith("/entrar")) {
                await this.utilidades.autorizacion.accion.entrar(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/salir")) {
                await this.utilidades.autorizacion.accion.salir(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/refrescarse")) {
                await this.utilidades.autorizacion.accion.refrescarse(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/registrarse")) {
                await this.utilidades.autorizacion.accion.registrarse(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/eliminarse")) {
                await this.utilidades.autorizacion.accion.eliminarse(req, res, next);
            } else if (subruta_de_auth_objetivo.startsWith("/confirmarse")) {
                await this.utilidades.autorizacion.accion.confirmarse(req, res, next);
            } else {
                return this.utilidades.responder_como_error(new Error(`El sistema de autentificación no reconoció la ruta «${subruta_de_auth_objetivo}»`), req, res, next);
            }
        } catch(error) {
            return this.utilidades.responder_como_error(error, req, res, next);
        }
    };
};