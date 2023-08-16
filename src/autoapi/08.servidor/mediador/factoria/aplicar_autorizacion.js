module.exports = function (reglas = []) {
    this.utilidades.tracear("this.servidor.mediador.factoria.aplicar_autorizacion (generador)");
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.mediador.factoria.aplicar_autorizacion");
            let autentificacion = undefined;
            if (!req.autentificacion) {
                await this.utilidades.autentificar_peticion(req);
            }
            autentificacion = req.autentificacion;
            await this.servidor.ayudante.aplicar_autorizacion(reglas, autentificacion);
            return next();
        } catch (error) {
            return next(error);
        }
    };
};