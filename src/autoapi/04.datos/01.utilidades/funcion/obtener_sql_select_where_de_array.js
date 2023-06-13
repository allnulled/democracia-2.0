const operadores_validos = {
    "!=": "!=",
    "=": "=",
    "<=": "<=",
    ">=": ">=",
    "<": "<",
    ">": ">",
    "in": "IN",
    "!in": "NOT IN",
    "like": "LIKE",
    "!like": "NOT LIKE",
    "null": "IS NULL",
    "!null": "IS NOT NULL",
};

module.exports = function (reglas_where = [], tabla = false, busqueda = false, prependizar_where = false) {
    this.utilidades.tracear("this.datos.utilidades.funcion.obtener_sql_select_where_de_array");
    const { esquema } = this.configuraciones.instancia.arquitectura;
    Validar_parametros_iniciales: {
        if (!(tabla in esquema)) {
            throw new Error(`El parámetro «tabla» debe existir como tabla en el esquema de datos para «obtener_sql_select_where_de_array» pero la tabla «${tabla}» no existe`);
        }
    }
    let sql = "";
    for (let index = 0; index < reglas_where.length; index++) {
        const regla_where = reglas_where[index];
        Validar_parametros_iniciales_de_regla: {
            if(!Array.isArray(regla_where)) {
                throw new Error(`El parámetro «regla_where» en la regla «${index}» debe ser un array para «obtener_sql_select_where_de_array»`);
            }
        }
        const [sujeto, op_arg, predicado, predicado_tipo = "valor"] = regla_where;
        Validar_parametros_de_regla: {
            if (!(op_arg in operadores_validos)) {
                throw new Error(`El parámetro «operador» debe ser válido para «obtener_sql_select_where_de_array» en el parámetro «reglas_where» en la regla «${index}»`);
            }
            if(sujeto !== "id") {
                if (!(sujeto in esquema[tabla].columnas)) {
                    throw new Error(`El parámetro «sujeto» debe existir como columna de la tabla en el esquema de datos para «obtener_sql_select_where_de_array» pero la columna «${tabla}.${sujeto}» en la regla «${index}» no existe`);
                }
            }
        }
        const op = operadores_validos[op_arg];
        Construir_consulta: {
            if (index === 0) {
                if(prependizar_where) {
                    sql += "\n  WHERE ";
                } else {
                    sql += "\n        ";
                }
            } else {
                sql += "\n    AND ";
            }
            sql += this.datos.utilidades.funcion.sanitizar_id(sujeto);
            let tiene_predicado = true;
            if(op_arg === "nulo") {
                sql += " IS NULL";
                tiene_predicado = false;
            } else if(op_arg === "!nulo") {
                sql += " IS NOT NULL";
                tiene_predicado = false;
            } else if (op_arg === "like") {
                sql += " LIKE ";
            } else if (op_arg === "!like") {
                sql += " NOT LIKE ";
            } else if (op_arg === "in") {
                sql += " IN ";
                tiene_predicado = false;
                if(predicado_tipo !== "valor") {
                    throw new Error(`El parámetro «predicado_tipo» no puede ser otro que «valor» cuando el operador es «in» para «obtener_sql_select_where_de_array» en el parámetro «reglas_where» en la regla «${index}»`);
                }
                sql += "(";
                sql += this.datos.utilidades.funcion.sanitizar_valor(predicado);
                sql += ")";
            } else if (op_arg === "!in") {
                sql += " NOT IN ";
                tiene_predicado = false;
                if (predicado_tipo !== "valor") {
                    throw new Error(`El parámetro «predicado_tipo» no puede ser otro que «valor» cuando el operador es «!in» para «obtener_sql_select_where_de_array» en el parámetro «reglas_where» en la regla «${index}»`);
                }
                sql += "(";
                sql += this.datos.utilidades.funcion.sanitizar_valor(predicado);
                sql += ")";
            }
            if(tiene_predicado) {
                if(predicado_tipo === "valor") {
                    sql += ` ${op} `;
                    sql += this.datos.utilidades.funcion.sanitizar_valor(predicado);
                } else if (predicado_tipo === "columna") {
                    sql += ` ${op} `;
                    sql += this.datos.utilidades.funcion.sanitizar_id(predicado);
                } else {
                    throw new Error(`El parámetro «predicado_tipo» debe ser válido para «obtener_sql_select_where_de_array» en el parámetro «reglas_where» en la regla «${index}»`);
                }
            }
        }
    }
    return sql;
}