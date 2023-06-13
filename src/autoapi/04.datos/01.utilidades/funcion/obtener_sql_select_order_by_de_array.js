module.exports = function (reglas_order = [], tabla = false, prependizar_order_by = false) {
    this.utilidades.tracear("this.datos.utilidades.funcion.obtener_sql_select_order_by_de_array");
    const { sanitizar_id, sanitizar_valor } = this.datos.utilidades.funcion;
    const { esquema } = this.configuraciones.instancia.arquitectura;
    let sql = "";
    sql += "";
    for (let index = 0; index < reglas_order.length; index++) {
        const regla_order = reglas_order[index];
        Validar_parametros_de_regla_iniciales: {
            if(!Array.isArray(regla_order)) {
                console.log(regla_order);
                throw new Error(`El parámetro «regla_order» en la regla «${index}» debe ser un array para «obtener_sql_select_order_by_de_array»`);
            }
            if(regla_order.length < 1) {
                throw new Error(`El parámetro «regla_order» en la regla «${index}» debe ser un array con 1 o más elementos para «obtener_sql_select_order_by_de_array»`)
            }
        }
        const [columna, sentido = "ASC"] = regla_order;
        let columna_sanitizada = undefined;
        let sentido_sanitizado = undefined;
        Validar_parametros_de_regla: {
            if (!(tabla in esquema)) {
                throw new Error(`El parámetro «tabla» debe existir como tabla en el esquema de datos para «obtener_sql_select_order_by_de_array» pero la tabla «${tabla}» de la regla «${index}» no existe`);
            }
            if(columna !== "id") {
                if (!(columna in esquema[tabla].columnas)) {
                    throw new Error(`El parámetro «columna» debe existir como columna de la tabla en el esquema de datos para «obtener_sql_select_order_by_de_array» pero la columna «${tabla}.${columna}» de la regla «${index}» no existe`);
                }
            }
            if(["ASC","DESC"].indexOf(sentido.toUpperCase()) === -1) {
                throw new Error(`El parámetro «sentido» debe ser válido ('asc' o 'desc') para «obtener_sql_select_order_by_de_array» pero la columna «${tabla}.${columna}» de la regla «${index}» no existe`);
            }
        }
        Formatear_parametros: {
            columna_sanitizada = this.datos.utilidades.funcion.sanitizar_id(columna);
            sentido_sanitizado = sentido.toUpperCase();
        }
        Construir_la_consulta: {
            if(index === 0) {
                if(prependizar_order_by) {
                    sql += "\n  ORDER BY ";
                }
            } else {
                sql += ", ";
            }
            sql += columna_sanitizada;
            sql += " ";
            sql += sentido_sanitizado;
        }
    }
    return sql;
}