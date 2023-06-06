module.exports = async function (id_grupo = false, id_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.agregar_grupo_a_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_grupo_sanitizado = undefined;
        let id_usuario_sanitizado = undefined;
        let grupo_si_confirmado = undefined;
        Validar_parametros: {
            comprueba.que(id_grupo, "id_grupo", "el parámetro «id_grupo» debe ser un texto al «agregar_grupo»").es_texto();
            comprueba.que(id_usuario, "id_usuario", "el parámetro «id_usuario» debe ser un texto al «agregar_grupo»").es_texto();
        }
        Formatear_parametros: {
            id_grupo_sanitizado = this.utilidades.datos.funcion.sanitizar_valor(id_grupo);
            id_usuario_sanitizado = this.utilidades.datos.funcion.sanitizar_valor(id_usuario);
        }
        Obtener_base_de_datos_para_grupo_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Grupo");
        }
        Insertar_grupo_nuevo: {
            let sql = "INSERT INTO Grupos_por_usuario (id_grupo, id_usuario) VALUES (";
            sql += id_grupo_sanitizado;
            sql += ", ";
            sql += id_usuario_sanitizado;
            sql += ")";
            resultado_1 = await db.consultar(sql);
            grupo_si_confirmado = {
                id_grupo,
                id_usuario,
            };
        }
        return {
            nuevo_grupo: grupo_si_confirmado,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.agregar_grupo_a_usuario", error);
        throw error;
    }
};