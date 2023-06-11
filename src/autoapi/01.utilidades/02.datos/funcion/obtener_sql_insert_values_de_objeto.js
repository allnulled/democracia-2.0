module.exports = function (dato_parseado = {}) {
    this.utilidades.tracear("this.utilidades.datos.funcion.obtener_sql_insert_values_de_objeto");
    let sql = "";
    sql += "";
    const claves = Object.keys(dato_parseado);
    for (let index = 0; index < claves.length; index++) {
        const clave = claves[index];
        const valor = dato_parseado[clave];
        if (index !== 0) {
            sql += ",";
        }
        sql += "\n    ";
        sql += this.utilidades.datos.funcion.sanitizar_id(clave);
        sql += ' = ';
        sql += this.utilidades.datos.funcion.sanitizar_valor(valor);
    }
    return sql;
}