module.exports = function (datos, metadatos = {estado:"correcto"}) {
    this.utilidades.tracear("this.utilidades.respuesta_json_universal");
    return Object.assign({
        app: this.configuraciones.instancia.valores.APLICACION_ID,
        fecha: (new Date()).toString(),
        ...metadatos,
        respuesta: datos
    });
};