module.exports = async function (id_permiso = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.eliminar_permiso");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let id_permiso_sanitizado = undefined;
        let permiso_eliminado = false;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(id_permiso, "id_permiso", "el parámetro «id_permiso» debe ser un texto al «eliminar_permiso»").es_numero();
        }
        Formatear_parametros: {
            id_permiso_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(id_permiso);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Permiso");
        }
        Actualizar_permiso_en_base_de_datos: {
            let sql = "DELETE FROM Permiso";
            sql += "\n  WHERE id = "
            sql += id_permiso_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            permiso_eliminado = true;
        }
        return {
            permiso_eliminado,
            resultado: []
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.eliminar_permiso", error);
        throw error;
    }
};