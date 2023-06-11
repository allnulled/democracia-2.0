module.exports = function (tabla_id = false) {
    this.utilidades.tracear("this.utilidades.datos.funcion.obtener_sql_create_table_de_tabla");
    const { sanitizar_id, sanitizar_valor } = this.utilidades.datos.funcion;
    const { esquema } = this.configuraciones.instancia.arquitectura;
    const es_sintaxis_sqlite = this.configuraciones.instancia.valores.BASE_DE_DATOS_TIPO === 'local';
    if(!(tabla_id in esquema)) {
        throw new Error(`El parámetro «tabla_id» debe existir como tabla en el esquema de datos para «obtener_sql_create_table_de_tabla» pero la tabla «${tabla_id}» no existe`);
    }
    const esquema_de_tabla = esquema[tabla_id];
    let sql = "";
    sql += "CREATE TABLE ";
    sql += sanitizar_id(tabla_id);
    sql += " (\n  ";
    sql += sanitizar_id("id");
    sql += " INTEGER PRIMARY KEY ";
    sql += es_sintaxis_sqlite ? "AUTOINCREMENT" : "AUTO_INCREMENT";
    const columnas = esquema_de_tabla.columnas;
    const columnas_ids = Object.keys(columnas);
    for(let index = 0; index < columnas_ids.length; index++) {
        const columna_id = columnas_ids[index];
        const columna_datos = columnas[columna_id];
        sql += ",\n  ";
        sql += sanitizar_id(columna_datos.nombre);
        Aplicar_esquema_en_columna: {
            if(columna_datos.tiene_sql_al_crearse) {
                sql += columna_datos.tiene_sql_al_crearse;
            } else {
                sql += " VARCHAR(255)";
            }
        }
    }
    sql += "\n);";
    return sql;
}