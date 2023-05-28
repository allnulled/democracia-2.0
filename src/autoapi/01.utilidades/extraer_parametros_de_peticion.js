module.exports = function (req, parametros = [], vias = ["body","querystring","httpheaders"], valor_por_defecto = undefined) {
    const extraccion = {};
    for(let index_parametros = 0; index_parametros < parametros.length; index_parametros++) {
        const parametro_id = parametros[index_parametros];
        for(let index_vias = 0; index_vias < vias.length; index_vias++) {
            const via = vias[index_vias];
            Extraccion_de_parametro: {
                if (["body", "post"].indexOf(via) !== -1) {
                    if (req.body && (parametro_id in req.body)) {
                        const parametro = req.body[parametro_id];
                        extraccion[parametro_id] = parametro;
                        break Extraccion_de_parametro;
                    }
                }
                if (["querystring", "get"].indexOf(via) !== -1) {
                    if (req.query && (parametro_id in req.query)) {
                        const parametro = req.query[parametro_id];
                        extraccion[parametro_id] = parametro;
                        break Extraccion_de_parametro;
                    }
                }
                if (["httpheaders", "headers"].indexOf(via) !== -1) {
                    if (req.headers && (parametro_id in req.headers)) {
                        const parametro = req.headers[parametro_id];
                        extraccion[parametro_id] = parametro;
                        break Extraccion_de_parametro;
                    }
                }
                extraccion[parametro_id] = valor_por_defecto;
            }
        }
    }
    return extraccion;
}