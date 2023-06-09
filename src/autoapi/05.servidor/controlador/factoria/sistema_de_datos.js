module.exports = function () {
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.controlador.factoria.sistema_de_datos");
            const subruta_de_datos_objetivo = req.url;
            if (subruta_de_datos_objetivo.startsWith("/seleccionar/dato")) {
                await this.utilidades.datos.accion.seleccionar_dato(req, res, next);
            } else if (subruta_de_datos_objetivo.startsWith("/insertar/dato")) {
                await this.utilidades.datos.accion.insertar_dato(req, res, next);
            } else if (subruta_de_datos_objetivo.startsWith("/actualizar/dato")) {
                await this.utilidades.datos.accion.actualizar_dato(req, res, next);
            } else if (subruta_de_datos_objetivo.startsWith("/eliminar/dato")) {
                await this.utilidades.datos.accion.eliminar_dato(req, res, next);
            } else {
                return this.utilidades.responder_como_error(new Error(`El sistema de datos no reconoció la ruta «${subruta_de_datos_objetivo}»`), req, res, next);
            }
        } catch (error) {
            return this.utilidades.responder_como_error(error, req, res, next);
        }
    };
};