module.exports = function () {
    return async (req, res, next) => {
        try {
            this.utilidades.tracear("this.servidor.controlador.factoria.sistema_de_datos");
            Autentificacion: {
                await this.utilidades.autentificar_peticion(req);
            }
            Accion: {
                const subruta_de_datos_objetivo = req.url;
                let resultado = {};
                if (subruta_de_datos_objetivo.startsWith("/seleccionar/dato")) {
                    resultado = await this.datos.utilidades.accion.desde_peticion.seleccionar_dato(req, res, next);
                } else if (subruta_de_datos_objetivo.startsWith("/insertar/dato")) {
                    resultado = await this.datos.utilidades.accion.desde_peticion.insertar_dato(req, res, next);
                } else if (subruta_de_datos_objetivo.startsWith("/actualizar/dato")) {
                    resultado = await this.datos.utilidades.accion.desde_peticion.actualizar_dato(req, res, next);
                } else if (subruta_de_datos_objetivo.startsWith("/eliminar/dato")) {
                    resultado = await this.datos.utilidades.accion.desde_peticion.eliminar_dato(req, res, next);
                } else {
                    return this.utilidades.responder_como_error(new Error(`El sistema de datos no reconoció la ruta «${subruta_de_datos_objetivo}»`), req, res, next);
                }
                return this.utilidades.responder_como_exito(resultado, req, res, next);
            }
        } catch (error) {
            return this.utilidades.responder_como_error(error, req, res, next);
        }
    };
};