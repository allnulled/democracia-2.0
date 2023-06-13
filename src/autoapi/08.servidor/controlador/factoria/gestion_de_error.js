module.exports = function (gestor_personalizado = false) {
    return (error, req, res, next) => {
        this.utilidades.tracear("this.servidor.controlador.factoria.gestion_de_error");
        if (res.headersSent) {
            return next(err);
        }
        if(typeof gestor_personalizado === "function") {
            return gestor_personalizado.call(this, error, req, res, next);
        }
        return res.json({
            error: error.message,
            stack: error.stack.split(/\n   +/g)
        });
    };
};