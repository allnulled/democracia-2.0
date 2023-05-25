module.exports = function (datos, req, res, next) {
    this.utilidades.tracear("this.utilidades.responder_como_exito");
    const respuesta_de_exito = this.utilidades.respuesta_json_universal({
        datos
    });
    return res.json(respuesta_de_exito);
};