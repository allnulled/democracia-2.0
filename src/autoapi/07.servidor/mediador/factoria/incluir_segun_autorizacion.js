module.exports = function (reglas = {}) {
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.mediador.factoria.incluir_segun_autorizacion");
            await this.servidor.ayudante.incluir_segun_autorizacion(req, reglas);
            return next();
        } catch (error) {
            return next(error);
        }
    };
};