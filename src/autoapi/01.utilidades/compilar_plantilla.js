module.exports = function (texto, configuraciones = {}) {
    this.utilidades.tracear("this.utilidades.renderizar_plantilla_desde_texto");
    return this.dependencias.instancia.ejs.compile(texto, configuraciones);
};