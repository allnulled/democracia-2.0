module.exports = async function (id_permiso = false, id_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.agregar_permiso_a_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_permiso_sanitizado = undefined;
        let id_usuario_sanitizado = undefined;
        let nuevo_permiso_de_usuario = false;
        Validar_parametros: {
            comprueba.que(id_permiso, "id_permiso", "el parámetro «id_permiso» debe ser un numero al «agregar_permiso_a_usuario»").es_numero();
            comprueba.que(id_usuario, "id_usuario", "el parámetro «id_usuario» debe ser un numero al «agregar_permiso_a_usuario»").es_numero();
        }
        Formatear_parametros: {
            id_permiso_sanitizado = sanitizar_valor(id_permiso);
            id_usuario_sanitizado = sanitizar_valor(id_usuario);
        }
        Obtener_base_de_datos_para_permiso_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Permiso");
        }
        Insertar_permiso_nuevo: {
            let sql = "INSERT INTO Permisos_por_usuario (id_permiso, id_usuario) VALUES (";
            sql += id_permiso_sanitizado;
            sql += ", ";
            sql += id_usuario_sanitizado;
            sql += ")";
            resultado_1 = await db.consultar(sql);
            nuevo_permiso_de_usuario = true;
        }
        return {
            nuevo_permiso_de_usuario,
            id_permiso,
            id_usuario,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.agregar_permiso_a_usuario", error);
        throw error;
    }
};