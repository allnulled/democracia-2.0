module.exports = function (dir) {
    this.utilidades.tracear("this.servidor.controlador.factoria.plantillas_estaticas");
    let subfichero_global = undefined;
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.controlador.factoria.plantillas_estaticas (controlador)");
            subfichero_global = undefined;
            const { mime_types, path } = this.dependencias.instancia;
            const subruta = req.url.replace(/^\//g, "").split("?").shift();
            const subfichero = path.resolve(dir, subruta);
            subfichero_global = subfichero;
            const subcarpeta_origen = path.resolve(dir);
            if (!subfichero.startsWith(subcarpeta_origen)) {
                throw new Error("Fichero con ruta malintencionada: «" + subfichero + "»");
            }
            const existe_plantilla = await this.utilidades.existe_fichero(subfichero);
            if (!existe_plantilla) {
                return next();
            }
            await this.servidor.ayudante.parsear_cuerpo(req);
            const contenido_de_plantilla = await this.utilidades.leer_fichero(subfichero);
            const parametros_de_plantilla = Object.assign({}, {
                framework: this,
                request: req,
                response: res,
                __filename: subfichero,
                __dirname: __dirname,
                process: process,
                require: require,
                global: global,
            });
            try {
                const resultado_de_plantilla = await this.dependencias.instancia.ejs.render(contenido_de_plantilla, parametros_de_plantilla, {
                    async: true
                });
                const mimetype_de_plantilla = this.utilidades.extraer_mimetype_de_fichero(subfichero);
                res.set("Content-Type", mimetype_de_plantilla);
                return res.send(resultado_de_plantilla);
            } catch(error) {
                this.utilidades.error("Error compilando plantilla estática de «" + subfichero + "»", error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            return next();
        }
    };
};