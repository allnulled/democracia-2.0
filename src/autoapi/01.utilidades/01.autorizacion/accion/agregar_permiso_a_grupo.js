module.exports = async function (id_permiso = false, id_grupo = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.agregar_permiso_a_grupo");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_permiso_sanitizado = undefined;
        let id_grupo_sanitizado = undefined;
        let nuevo_permiso_de_grupo = false;
        Validar_parametros: {
            comprueba.que(id_permiso, "id_permiso", "el parámetro «id_permiso» debe ser un numero al «agregar_permiso_a_grupo»").es_numero();
            comprueba.que(id_grupo, "id_grupo", "el parámetro «id_grupo» debe ser un numero al «agregar_permiso_a_grupo»").es_numero();
        }
        Formatear_parametros: {
            id_permiso_sanitizado = sanitizar_valor(id_permiso);
            id_grupo_sanitizado = sanitizar_valor(id_grupo);
        }
        Obtener_base_de_datos_para_permiso_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Permisos_por_grupo");
        }
        Insertar_permiso_nuevo: {
            let sql = "INSERT INTO Permisos_por_grupo (id_permiso, id_grupo) VALUES (";
            sql += id_permiso_sanitizado;
            sql += ", ";
            sql += id_grupo_sanitizado;
            sql += ")";
            resultado_1 = await db.consultar(sql);
            nuevo_permiso_de_grupo = true;
        }
        return {
            nuevo_permiso_de_grupo,
            id_permiso,
            id_grupo,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.agregar_permiso_a_grupo", error);
        throw error;
    }
};