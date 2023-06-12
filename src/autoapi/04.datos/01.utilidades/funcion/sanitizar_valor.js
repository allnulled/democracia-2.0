module.exports = function (valor) {
    this.utilidades.tracear("this.datos.utilidades.funcion.sanitizar_valor");
    return this.dependencias.instancia.sqlstring.escape(valor);
}