module.exports = function (texto, parametros = {}, configuraciones = {}) {
    this.utilidades.tracear("this.utilidades.renderizar_plantilla_desde_texto");
    Object.assign(parametros, { framework: this });
    return this.dependencias.instancia.ejs.render(texto, parametros, configuraciones);
};