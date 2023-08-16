module.exports = function () {
    this.utilidades.tracear("this.servidor.mediador.factoria.traceo_de_peticion_simple");
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.mediador.factoria.traceo_de_peticion_simple (mediador)");
            let parametros = `

  IP        «${ req.headers['x-forwarded-for'] || req.socket.remoteAddress } »
  URL       «${ req.originalUrl } »
  Momento   «${ new Date() }»
  Cabeceras «${ JSON.stringify(req.headers, null, 4) }»
`
            console.log(this.dependencias.instancia.cli_color.black.bgYellowBright(parametros));
        } catch (error) {
            console.log(error);
        }
        return next();
    };
};