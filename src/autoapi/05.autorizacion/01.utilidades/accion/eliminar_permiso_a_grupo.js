module.exports = async function (id_permiso = false, id_grupo = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.eliminar_permiso_a_grupo");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let id_permiso_sanitizado = undefined;
        let id_grupo_sanitizado = undefined;
        let permiso_eliminado = false;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(id_permiso, "id_permiso", "el parámetro «id_permiso» debe ser un texto al «eliminar_permiso_a_grupo»").es_numero();
            comprueba.que(id_grupo, "id_grupo", "el parámetro «id_grupo» debe ser un texto al «eliminar_permiso_a_grupo»").es_numero();
        }
        Formatear_parametros: {
            id_grupo_sanitizado = sanitizar_valor(id_grupo);
            id_permiso_sanitizado = sanitizar_valor(id_permiso);
        }
        Obtener_base_de_datos_para_grupo_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Permisos_por_grupo");
        }
        Actualizar_permiso_en_base_de_datos: {
            let sql = "DELETE FROM Permisos_por_grupo";
            sql += "\n  WHERE id_grupo = "
            sql += id_grupo_sanitizado;
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
        this.utilidades.error("this.utilidades.autorization.accion.eliminar_permiso_a_grupo", error);
        throw error;
    }
};