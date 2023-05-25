module.exports = function (error, req, res, next) {
    this.utilidades.tracear("this.utilidades.responder_como_error");
    const respuesta_de_error = this.utilidades.respuesta_json_universal({
        tipo: error.name,
        error: error.message,
        traza: error.stack.split(/\n  +/g)
    });
    return res.json(respuesta_de_error);
};