module.exports = function(dato_parseado = {}) {
    this.utilidades.tracear("this.datos.utilidades.funcion.obtener_sql_update_set_de_objeto");
    let sql = "";
    sql += "";
    const claves = Object.keys(dato_parseado);
    for(let index = 0; index < claves.length; index++) {
        const clave = claves[index];
        const valor = dato_parseado[clave];
        if(index !== 0) {
            sql += ",";
        }
        sql += "\n    ";
        sql += this.datos.utilidades.funcion.sanitizar_id(clave);
        sql += ' = ';
        sql += this.datos.utilidades.funcion.sanitizar_valor(valor);
    }
    return sql;
}