module.exports = async function (id_grupo = false, id_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.agregar_grupo_a_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let id_grupo_sanitizado = undefined;
        let id_usuario_sanitizado = undefined;
        let nuevo_grupo_de_usuario = false;
        Validar_parametros: {
            comprueba.que(id_grupo, "id_grupo", "el parámetro «id_grupo» debe ser un numero al «agregar_grupo_a_usuario»").es_numero();
            comprueba.que(id_usuario, "id_usuario", "el parámetro «id_usuario» debe ser un numero al «agregar_grupo_a_usuario»").es_numero();
        }
        Formatear_parametros: {
            id_grupo_sanitizado = sanitizar_valor(id_grupo);
            id_usuario_sanitizado = sanitizar_valor(id_usuario);
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
            nuevo_grupo_de_usuario = true;
        }
        return {
            nuevo_grupo_de_usuario,
            id_grupo,
            id_usuario,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.agregar_grupo_a_usuario", error);
        throw error;
    }
};