module.exports = async function (id_permiso = false, id_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.eliminar_permiso_a_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_permiso_sanitizado = undefined;
        let id_usuario_sanitizado = undefined;
        let permiso_eliminado = false;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(id_permiso, "id_permiso", "el parámetro «id_permiso» debe ser un texto al «eliminar_permiso_a_usuario»").es_numero();
            comprueba.que(id_usuario, "id_usuario", "el parámetro «id_usuario» debe ser un texto al «eliminar_permiso_a_usuario»").es_numero();
        }
        Formatear_parametros: {
            id_usuario_sanitizado = sanitizar_valor(id_usuario);
            id_permiso_sanitizado = sanitizar_valor(id_permiso);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Permisos_por_usuario");
        }
        Actualizar_permiso_en_base_de_datos: {
            let sql = "DELETE FROM Permisos_por_usuario";
            sql += "\n  WHERE id_usuario = "
            sql += id_usuario_sanitizado;
            sql += "\n    AND id_permiso = "
            sql += id_permiso_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            permiso_eliminado = true;
        }
        return {
            permiso_eliminado,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.eliminar_permiso_a_usuario", error);
        throw error;
    }
};