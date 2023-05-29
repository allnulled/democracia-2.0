module.exports = function (id) {
    this.utilidades.tracear("this.utilidades.datos.funcion.sanitizar_id");
    return this.dependencias.instancia.sqlstring.escapeId(id);
}