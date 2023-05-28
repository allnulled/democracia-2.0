module.exports = function () {
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.controlador.factoria.sistema_de_autentificacion");
            const subruta_de_auth_objetivo = req.url;
            let resultado = {};
            if (subruta_de_auth_objetivo.startsWith("/entrar")) {
                resultado = await this.utilidades.autorizacion.accion.desde_peticion.entrar(req, res, next);
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
            } else {
                return this.utilidades.responder_como_error(new Error(`El sistema de autentificación no reconoció la ruta «${subruta_de_auth_objetivo}»`), req, res, next);
            }
            return this.utilidades.responder_como_exito(resultado, req, res, next);
        } catch(error) {
            return this.utilidades.responder_como_error(error, req, res, next);
        }
    };
};