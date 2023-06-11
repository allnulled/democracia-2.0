const operadores_validos = [
    "!=",
    "=",
    "<=",
    ">=",
    "<",
    ">",
    "like",
    "!like",
    "nulo",
    "!nulo",
]

module.exports = function (reglas_where = []) {
    this.utilidades.tracear("this.utilidades.datos.funcion.obtener_sql_select_where_de_array");
    let sql = "";
    sql += "";
    for (let index = 0; index < reglas_where.length; index++) {
        const regla_where = reglas_where[index];
        const [sujeto, op, predicado, predicado_tipo = "valor"] = regla_where;
        if (index === 0) {
            sql += "\n       ";
        } else {
            sql += "\n   AND ";
        }
        sql += this.utilidades.datos.funcion.sanitizar_id(sujeto);
        let tiene_predicado = true;
        if(operadores_validos.indexOf(op) === -1) {
            throw new Error("El parámetro «operador» debe ser válido para «obtener_sql_select_where_de_array» en el parámetro «reglas_where» en la regla «" + index + "»");
        } else if(op === "nulo") {
            sql += " IS NULL";
            tiene_predicado = false;
        } else if(op === "!nulo") {
            sql += " IS NOT NULL";
            tiene_predicado = false;
        } else if (op === "like") {
            sql += " LIKE ";
        } else if (op === "!like") {
            sql += " NOT LIKE ";
        }
        if(tiene_predicado) {
            if(predicado_tipo === "valor") {
                sql += ` ${op} `;
                sql += this.utilidades.datos.funcion.sanitizar_valor(predicado);
            } else if (predicado_tipo === "columna") {
                sql += ` ${op} `;
                sql += this.utilidades.datos.funcion.sanitizar_id(predicado);
            } else {
                throw new Error("El parámetro «predicado_tipo» debe ser válido para «obtener_sql_select_where_de_array» en el parámetro «reglas_where» en la regla «" + index + "»");
            }
        }
    }
    return sql;
}