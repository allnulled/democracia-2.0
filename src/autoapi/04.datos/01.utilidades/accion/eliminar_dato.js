module.exports = async function (tabla, id) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.eliminar_dato");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_id, sanitizar_valor } = this.datos.utilidades.funcion;
        const { esquema } = this.datos.esquema.instancia.arquitectura;
        let db = undefined;
        let tabla_sanitizada = undefined;
        let id_sanitizado = undefined;
        let eliminacion = undefined;
        let resultado_1 = undefined;
        Validar_parametros: {
            Comprobar_tipos_iniciales: {
                comprueba.que(tabla, "tabla", "el parámetro «tabla» debe ser un texto al «eliminar_dato»").es_texto();
                comprueba.que(id, "id", "el parámetro «id» debe ser un numero al «eliminar_dato»").es_numero();
            }
            Comprobar_si_existe_tabla: {
                if (!(tabla in esquema)) {
                    throw new Error("el parámetro «tabla» debe existir en el esquema como tabla al «eliminar_dato»");
                }
            }
        }
        Formatear_parametros: {
            tabla_sanitizada = sanitizar_id(tabla);
            id_sanitizado = sanitizar_valor(id);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla(tabla);
        }
        Insertar_usuario_nuevo: {
            let sql = "DELETE FROM ";
            sql += tabla_sanitizada;
            sql += "\n  WHERE id = "
            sql += id_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            eliminacion = true;
        }
        return {
            eliminacion: { id },
            resultado: [resultado_1]
        };

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.eliminar_dato", error);
        throw error;
    }
};