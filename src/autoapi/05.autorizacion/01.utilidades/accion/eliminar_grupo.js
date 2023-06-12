module.exports = async function (id_grupo = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.eliminar_grupo");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let id_grupo_sanitizado = undefined;
        let grupo_eliminado = false;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(id_grupo, "id_grupo", "el parámetro «id_grupo» debe ser un texto al «eliminar_grupo»").es_numero();
        }
        Formatear_parametros: {
            id_grupo_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(id_grupo);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Grupo");
        }
        Actualizar_grupo_en_base_de_datos: {
            let sql = "DELETE FROM Grupo";
            sql += "\n  WHERE id = "
            sql += id_grupo_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            grupo_eliminado = true;
        }
        return {
            grupo_eliminado,
            resultado: []
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.eliminar_grupo", error);
        throw error;
    }
};