module.exports = async function (tabla, dato) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.insertar_dato");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_id, sanitizar_valor } = this.datos.utilidades.funcion;
        const { esquema } = this.datos.esquema.instancia.arquitectura;
        let db = undefined;
        let tabla_sanitizada = undefined;
        let insercion = undefined;
        let resultado_1 = undefined;
        let resultado_2 = undefined;
        Validar_parametros: {
            Comprobar_tipos_iniciales: {
                comprueba.que(tabla, "tabla", "el parámetro «tabla» debe ser un texto al «insertar_dato»").es_texto();
                comprueba.que(dato, "dato", "el parámetro «dato» debe ser un objeto al «insertar_dato»").es_objeto();
            }
            Comprobar_si_existe_tabla: {
                if(!(tabla in esquema)) {
                    throw new Error("el parámetro «tabla» debe existir en el esquema como tabla al «insertar_dato»");
                }
            }
            Comprobar_si_existen_columnas: {
                const columnas = esquema[tabla].columnas;
                const columnas_ids = Object.keys(columnas);
                const propiedades_de_dato = Object.keys(dato);
                Iterando_propiedades:
                for(let index = 0; index < propiedades_de_dato.length; index++) {
                    const propiedad_de_dato = propiedades_de_dato[index];
                    if(propiedad_de_dato === "id") {
                        continue Iterando_propiedades;
                    }
                    if (columnas_ids.indexOf(propiedad_de_dato) === -1) {
                        throw new Error("el parámetro «dato» tiene que tener todas las propiedades existentes como columnas en la tabla «" + tabla + "» pero no ocurre así con la propiedad «" + propiedad_de_dato + "» al «insertar_dato»")
                    }
                }
            }
        }
        Formatear_parametros: {
            tabla_sanitizada = sanitizar_id(tabla);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla(tabla);
        }
        Insertar_usuario_nuevo: {
            let sql = "INSERT INTO ";
            sql += tabla_sanitizada;
            sql += " (";
            sql += this.datos.utilidades.funcion.obtener_sql_insert_into_de_objeto(dato);
            sql += "\n) VALUES (";
            sql += this.datos.utilidades.funcion.obtener_sql_insert_values_de_objeto(dato);
            sql += "\n);";
            sql += "\n/* Inicio de nueva query */\n";
            sql += "SELECT LAST_INSERT_ROWID() AS 'ultimo_id';";
            const resultados = await db.consultar_multiplemente(sql);
            console.log(resultados);
            resultado_1 = resultados[0];
            resultado_2 = resultados[1].resultado[0].ultimo_id;
            insercion = true;
        }
        return {
            insercion: { id: resultado_2, ...dato },
            resultado: [resultado_1]
        };

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.insertar_dato", error);
        throw error;
    }
};