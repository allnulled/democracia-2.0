module.exports = function (tabla_id = false) {
    this.utilidades.tracear("this.datos.utilidades.funcion.obtener_sql_create_table_de_tabla");
    const { sanitizar_id, sanitizar_valor } = this.datos.utilidades.funcion;
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
    Crear_columnas:
    for(let index = 0; index < columnas_ids.length; index++) {
        const columna_id = columnas_ids[index];
        const columna_datos = columnas[columna_id];
        const { tiene_sql_al_crearse } = columna_datos.atributos_de_columna;
        sql += ",\n  ";
        sql += sanitizar_id(columna_datos.nombre);
        Aplicar_esquema_en_columna: {
            if (tiene_sql_al_crearse) {
                sql += tiene_sql_al_crearse;
            } else {
                sql += " VARCHAR(255)";
            }
        }
    }
    Crear_claves_foraneas: 
    for (let index = 0; index < columnas_ids.length; index++) {
        const columna_id = columnas_ids[index];
        const columna_datos = columnas[columna_id];
        const { tiene_clave_foranea } = columna_datos.atributos_de_columna;
        if (typeof tiene_clave_foranea !== "string") {
            continue Crear_claves_foraneas;
        }
        const referencia_foranea = tiene_clave_foranea.split(":");
        if(referencia_foranea.length !== 2) {
            throw new Error(`La configuración de esquema «tiene_clave_foranea» de columna «${columna_id}» tiene un formato incorrecto. El formato correcto es 'tabla_foranea:columna_foranea' pero no se sigue en «${referencia_foranea}».`);
        }
        const [tabla_foranea, columna_foranea] = referencia_foranea;
        sql += ",\n  ";
        sql += "FOREIGN KEY (";
        sql += sanitizar_id(columna_datos.nombre);
        sql += ") REFERENCES ";
        sql += sanitizar_id(tabla_foranea);
        sql += " (";
        sql += sanitizar_id(columna_foranea);
        sql += ")";
    }
    sql += "\n);";
    return sql;
}