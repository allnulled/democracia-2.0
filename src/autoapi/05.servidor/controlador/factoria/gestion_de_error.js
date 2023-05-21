module.exports = function () {
    return (error, req, res, next) => {
        this.utilidades.tracear("this.servidor.controlador.factoria.gestion_de_error");
        if (res.headersSent) {
            return next(err);
        }
        return res.json({
            error: error.message,
            stack: error.stack.split(/\n   +/g)
        });
    };
};