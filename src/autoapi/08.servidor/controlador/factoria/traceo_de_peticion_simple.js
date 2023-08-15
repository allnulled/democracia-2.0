module.exports = function () {
    this.utilidades.tracear("this.servidor.controlador.factoria.traceo_de_peticion_simple");
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.controlador.factoria.traceo_de_peticion_simple (controlador)");
            console.log(this.dependencias.instancia.cli_color.black.bgYellowBright("\n\n[ HTTP ] Petición a: «" + req.originalUrl + "»\n"));
        } catch (error) {
            console.log(error);
        }
        return next();
    };
};