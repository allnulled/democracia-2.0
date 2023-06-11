const configuracion_por_defecto = {
    obligatorio: false
};

module.exports = function(configuracion_arg = {}) {
    const configuracion = Object.assign({}, configuracion_por_defecto, configuracion_arg);
    return async (req, res, next) => {
        try {
            if(req.autentificacion) {
                return req.autentificacion;
            }
            await this.utilidades.autentificar_peticion(req);
            return next();
        } catch(error) {
            return next(error);
        }
    };
};