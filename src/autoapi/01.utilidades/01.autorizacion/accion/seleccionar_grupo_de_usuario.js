module.exports = async function (id_grupo = false, id_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.seleccionar_grupo_de_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_grupo_sanitizado = undefined;
        let id_usuario_sanitizado = undefined;
        Validar_parametros: {
            if (typeof id_grupo !== "string" && typeof id_usuario !== "string") {
                throw new Error("El «id_grupo» o el «id_usuario» deben proporcionarse como parámetros al «seleccionar_grupo_de_usuario»")
            }
        }
        Formatear_parametros: {
            id_grupo_sanitizado = this.utilidades.datos.funcion.sanitizar_valor(token_de_confirmacion);
            id_usuario_sanitizado = this.utilidades.datos.funcion.sanitizar_valor(token_de_confirmacion);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Grupos_por_usuario");
        }
        Seleccionar_usuario_no_registrado_segun_token: {
            let sql = "SELECT * FROM Grupos_por_usuario WHERE ";
            if(id_grupo && id_usuario) {
                sql += "id_usuario = " + id_usuario_sanitizado;
                sql += "AND id_grupo = " + id_grupo_sanitizado;
            } else if (id_grupo) {
                sql += "id_grupo = " + id_grupo_sanitizado;
            } else if (id_usuario) {
                sql += "id_usuario = " + id_usuario_sanitizado;
            } else {
                throw new Error("El «id_grupo» o el «id_usuario» deben proporcionarse como parámetros al «seleccionar_grupo_de_usuario» (2)")
            }
            sql += ";";
            resultado_1 = await db.consultar(sql);
        }
        return {
            grupos_de_usuario: resultado_1,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.seleccionar_grupo_de_usuario", error);
        throw error;
    }
};