module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.eliminar_dato");
        await this.servidor.ayudante.parsear_cuerpo(req, res);
        const parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["tabla", "id"], ["post", "get"]);
        const autentificacion = await this.utilidades.autentificar_peticion(req);
        const { tabla, id } = parametros;
        const resultado = await this.datos.utilidades.accion.eliminar_dato(tabla, id, autentificacion);
        return resultado;
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.eliminar_dato", error);
        throw error;
    }
};

/*
module.exports = async function (req, res, next) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.desde_peticion.eliminar_dato");
        let autentificacion = undefined;
        Autentificacion: {
            autentificacion = await this.utilidades.autentificar_peticion(req);
        }
        let parametros = undefined;
        let tabla = undefined;
        let id = undefined;
        Extraer_parametros: {
            await this.servidor.ayudante.parsear_cuerpo(req, res);
            parametros = await this.utilidades.extraer_parametros_de_peticion(req, ["tabla", "id"], ["post", "get"]);
            tabla = parametros.tabla;
            id = parametros.id;
        }
        let resultado = undefined;
        Aplicar_autorizacion_y_operacion: {
            try {
                await this.servidor.ayudante.aplicar_autorizacion("eliminar", "al_pre_aceptar", autentificacion, [], { this: this, tabla, id, dato, parametros, request: req, response: res });
                resultado = await this.datos.utilidades.accion.eliminar_dato(tabla, id);
                await this.servidor.ayudante.aplicar_autorizacion("eliminar", "al_post_aceptar", autentificacion, [], { resultado, this: this, tabla, id, dato, parametros, request: req, response: res });
            } catch (error) {
                if (error.es_error_de_autorizacion === true) {
                    await this.servidor.ayudante.aplicar_autorizacion("eliminar", "al_rechazar", autentificacion, [], { error, this: this, tabla, id, dato, parametros, request: req, response: res });
                }
                return this.utilidades.responder_como_error(error, req, res, next);
            }
            return resultado;
        }
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.desde_peticion.eliminar_dato", error);
        throw error;
    }
};
*/