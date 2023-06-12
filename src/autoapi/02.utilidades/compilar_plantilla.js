module.exports = function (texto, configuraciones = {}) {
    this.utilidades.tracear("this.utilidades.compilar_plantilla");
    const plantilla_compilada = this.dependencias.instancia.ejs.compile(texto, configuraciones);
    return (parametros_arg = {}, configuraciones_args = {}) => {
        const parametros = Object.assign({}, parametros_arg, { framework: this });
        const configuraciones = Object.assign({}, configuraciones_arg);
        return plantilla_compilada(parametros, configuraciones);
    };
};