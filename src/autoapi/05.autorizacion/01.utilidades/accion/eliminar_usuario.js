module.exports = async function (id_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.eliminar_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let id_usuario_sanitizado = undefined;
        let usuario_eliminado = false;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(id_usuario, "id_usuario", "el parámetro «id_usuario» debe ser un texto al «eliminar_usuario»").es_numero();
        }
        Formatear_parametros: {
            id_usuario_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(id_usuario);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Usuario");
        }
        Actualizar_usuario_en_base_de_datos: {
            let sql = "DELETE FROM Usuario";
            sql += "\n  WHERE id = "
            sql += id_usuario_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            usuario_eliminado = true;
        }
        return {
            usuario_eliminado,
            resultado: []
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.eliminar_usuario", error);
        throw error;
    }
};