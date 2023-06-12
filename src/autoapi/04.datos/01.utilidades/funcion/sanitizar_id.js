module.exports = function (id) {
    this.utilidades.tracear("this.datos.utilidades.funcion.sanitizar_id");
    return this.dependencias.instancia.sqlstring.escapeId(id);
}