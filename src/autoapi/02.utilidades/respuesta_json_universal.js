module.exports = function (datos, metadatos = { estado_de_peticion: "completado" }) {
    this.utilidades.tracear("this.utilidades.respuesta_json_universal");
    return Object.assign({
        aplicacion: this.configuraciones.instancia.valores.APLICACION_ID,
        fecha: (new Date()).toString(),
        ...metadatos,
        respuesta: datos
    });
};