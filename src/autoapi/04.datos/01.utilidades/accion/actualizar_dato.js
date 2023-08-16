module.exports = async function (tabla, id, dato, autentificacion) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.actualizar_dato");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_id, sanitizar_valor } = this.datos.utilidades.funcion;
        const { esquema } = this.datos.esquema.instancia.arquitectura;
        let db = undefined;
        let tabla_sanitizada = undefined;
        let id_sanitizado = undefined;
        let actualizacion = undefined;
        let resultado_1 = undefined;
        Validar_parametros: {
            Comprobar_tipos_iniciales: {
                comprueba.que(tabla, "tabla", "el parámetro «tabla» debe ser un texto al «actualizar_dato»").es_texto();
                comprueba.que(id, "id", "el parámetro «id» debe ser un numero al «actualizar_dato»").es_numero();
                comprueba.que(dato, "dato", "el parámetro «dato» debe ser un objeto al «actualizar_dato»").es_objeto();
            }
            Comprobar_si_existe_tabla: {
                if (!(tabla in esquema)) {
                    throw new Error("el parámetro «tabla» debe existir en el esquema como tabla al «actualizar_dato»");
                }
            }
            Comprobar_si_existen_columnas: {
                const columnas = esquema[tabla].columnas;
                const columnas_ids = Object.keys(columnas);
                const propiedades_de_dato = Object.keys(dato);
                for (let index = 0; index < propiedades_de_dato.length; index++) {
                    const propiedad_de_dato = propiedades_de_dato[index];
                    if (columnas_ids.indexOf(propiedad_de_dato) === -1) {
                        throw new Error("el parámetro «dato» tiene que tener todas las propiedades existentes como columnas en la tabla «" + tabla + "» pero no ocurre así con la propiedad «" + propiedad_de_dato + "» al «actualizar_dato»")
                    }
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
        Aplicar_autorizador_al_pre_aceptar: {
            this.servidor.ayudante.aplicar_autorizacion("actualizar", "al_pre_aceptar", autentificacion, { tabla, id, dato, db, esquema });
        }
        let sql = undefined;
        Insertar_usuario_nuevo: {
            sql = "UPDATE ";
            sql += tabla_sanitizada;
            sql += " SET ";
            sql += this.datos.utilidades.funcion.obtener_sql_update_set_de_objeto(dato);
            sql += "\n  WHERE id = "
            sql += id_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            actualizacion = true;
        }
        Aplicar_autorizador_al_post_aceptar: {
            this.servidor.ayudante.aplicar_autorizacion("actualizar", "al_post_aceptar", autentificacion, { tabla, id, dato, sql, resultado: resultado_1, db, esquema });
        }
        return {
            actualizacion: { id, ...dato },
            resultado: [resultado_1]
        };

    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.actualizar_dato", error);
        Aplicar_autorizador_al_rechazar: {
            this.servidor.ayudante.aplicar_autorizacion("actualizar", "al_rechazar", autentificacion, { tabla, id, dato, error });
        }
        throw error;
    }
};