module.exports = function (valor) {
    this.utilidades.tracear("this.utilidades.datos.funcion.sanitizar_valor");
    return this.dependencias.instancia.sqlstring.escape(valor);
}