module.exports = async function (id_permiso = false, id_grupo = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.seleccionar_permiso_de_grupo");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let id_permiso_sanitizado = undefined;
        let id_grupo_sanitizado = undefined;
        Validar_parametros: {
            if ((typeof id_permiso === "undefined") && (typeof id_grupo === "undefined")) {
                throw new Error("El «id_permiso» o el «id_grupo» deben proporcionarse como parámetros al «seleccionar_permiso_de_grupo»")
            }
        }
        Formatear_parametros: {
            id_permiso_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(id_permiso);
            id_grupo_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(id_grupo);
        }
        Obtener_base_de_datos_para_grupo_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Grupos_por_grupo");
        }
        Seleccionar_grupo_no_registrado_segun_token: {
            let sql = "SELECT * FROM Permisos_por_grupo WHERE ";
            if (id_permiso && id_grupo) {
                sql += "id_grupo = " + id_grupo_sanitizado;
                sql += " AND id_permiso = " + id_permiso_sanitizado;
            } else if (id_permiso) {
                sql += "id_permiso = " + id_permiso_sanitizado;
            } else if (id_grupo) {
                sql += "id_grupo = " + id_grupo_sanitizado;
            } else {
                throw new Error("El «id_permiso» o el «id_grupo» deben proporcionarse como parámetros al «seleccionar_permiso_de_grupo» (2)")
            }
            sql += ";";
            resultado_1 = await db.consultar(sql);
        }
        return {
            permisos_de_grupo: resultado_1,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.seleccionar_permiso_de_grupo", error);
        throw error;
    }
};