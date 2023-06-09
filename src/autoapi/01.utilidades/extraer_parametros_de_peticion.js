module.exports = function (req, parametros = [], vias = ["body","querystring","httpheaders"]) {
    this.utilidades.tracear("this.utilidades.extraer_parametros");
    const extraccion = {};
    Iterando_parametros:
    for(let index_parametros = 0; index_parametros < parametros.length; index_parametros++) {
        const parametro_id = parametros[index_parametros];
        Iterando_vias:
        for(let index_vias = 0; index_vias < vias.length; index_vias++) {
            const via = vias[index_vias];
            Extraccion_de_parametro: {
                if (["body", "post"].indexOf(via) !== -1) {
                    if (req.body && (parametro_id in req.body)) {
                        const parametro = req.body[parametro_id];
                        extraccion[parametro_id] = parametro;
                        continue Iterando_parametros;
                    }
                }
                if (["querystring", "query", "get"].indexOf(via) !== -1) {
                    if (req.query && (parametro_id in req.query)) {
                        const parametro = req.query[parametro_id];
                        extraccion[parametro_id] = parametro;
                        continue Iterando_parametros;
                    }
                }
                if (["httpheaders", "headers"].indexOf(via) !== -1) {
                    if (req.headers && (parametro_id in req.headers)) {
                        const parametro = req.headers[parametro_id];
                        extraccion[parametro_id] = parametro;
                        continue Iterando_parametros;
                    }
                }
            }
        }
    }
    return extraccion;
}