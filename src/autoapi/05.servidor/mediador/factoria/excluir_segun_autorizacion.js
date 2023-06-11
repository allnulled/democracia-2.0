module.exports = function (reglas = {}) {
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.mediador.factoria.excluir_segun_autorizacion");
            await this.servidor.ayudante.excluir_segun_autorizacion(req, reglas);
            return next();
        } catch (error) {
            return next(error);
        }
    };
};