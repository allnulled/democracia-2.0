module.exports = async function (id_permiso = false, id_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.seleccionar_permiso_de_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_permiso_sanitizado = undefined;
        let id_usuario_sanitizado = undefined;
        Validar_parametros: {
            if ((typeof id_permiso === "undefined") && (typeof id_usuario === "undefined")) {
                throw new Error("El «id_permiso» o el «id_usuario» deben proporcionarse como parámetros al «seleccionar_permiso_de_usuario»")
            }
        }
        Formatear_parametros: {
            id_permiso_sanitizado = this.utilidades.datos.funcion.sanitizar_valor(id_permiso);
            id_usuario_sanitizado = this.utilidades.datos.funcion.sanitizar_valor(id_usuario);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Grupos_por_usuario");
        }
        Seleccionar_usuario_no_registrado_segun_token: {
            let sql = "SELECT * FROM Permisos_por_usuario WHERE ";
            if (id_permiso && id_usuario) {
                sql += "id_usuario = " + id_usuario_sanitizado;
                sql += " AND id_permiso = " + id_permiso_sanitizado;
            } else if (id_permiso) {
                sql += "id_permiso = " + id_permiso_sanitizado;
            } else if (id_usuario) {
                sql += "id_usuario = " + id_usuario_sanitizado;
            } else {
                throw new Error("El «id_permiso» o el «id_usuario» deben proporcionarse como parámetros al «seleccionar_permiso_de_usuario» (2)")
            }
            sql += ";";
            resultado_1 = await db.consultar(sql);
        }
        return {
            permisos_de_usuario: resultado_1,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.seleccionar_permiso_de_usuario", error);
        throw error;
    }
};