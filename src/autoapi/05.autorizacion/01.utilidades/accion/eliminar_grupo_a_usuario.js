module.exports = async function (id_grupo = false, id_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.eliminar_grupo_a_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let id_grupo_sanitizado = undefined;
        let id_usuario_sanitizado = undefined;
        let grupo_eliminado = false;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(id_grupo, "id_grupo", "el parámetro «id_grupo» debe ser un texto al «eliminar_grupo_a_usuario»").es_numero();
            comprueba.que(id_usuario, "id_usuario", "el parámetro «id_usuario» debe ser un texto al «eliminar_grupo_a_usuario»").es_numero();
        }
        Formatear_parametros: {
            id_usuario_sanitizado = sanitizar_valor(id_usuario);
            id_grupo_sanitizado = sanitizar_valor(id_grupo);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Grupos_por_usuario");
        }
        Actualizar_grupo_en_base_de_datos: {
            let sql = "DELETE FROM Grupos_por_usuario";
            sql += "\n  WHERE id_usuario = "
            sql += id_usuario_sanitizado;
            sql += "\n    AND id_grupo = "
            sql += id_grupo_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            grupo_eliminado = true;
        }
        return {
            grupo_eliminado,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.eliminar_grupo_a_usuario", error);
        throw error;
    }
};