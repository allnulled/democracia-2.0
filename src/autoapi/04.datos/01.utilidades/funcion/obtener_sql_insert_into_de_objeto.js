module.exports = function (dato_parseado = {}) {
    this.utilidades.tracear("this.datos.utilidades.funcion.obtener_sql_insert_into_de_objeto");
    const { sanitizar_id, sanitizar_valor } = this.datos.utilidades.funcion;
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
        sql += sanitizar_id(clave);
    }
    return sql;
}