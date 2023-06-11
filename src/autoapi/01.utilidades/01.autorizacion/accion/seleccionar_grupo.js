module.exports = async function (id_grupo = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.seleccionar_grupo");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_grupo_sanitizado = undefined;
        let grupo = undefined;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(id_grupo, "id_grupo", "el parámetro «id_grupo» debe ser un numero al «seleccionar_grupo»").es_numero();
        }
        Formatear_parametros: {
            id_grupo_sanitizado = sanitizar_valor(id_grupo);
        }
        Obtener_base_de_datos_para_sesion: {
            db = this.datos.conexion.instancia.segun_tabla("Grupo");
        }
        Seleccionar_grupo_no_registrado_segun_token: {
            let sql = "SELECT * FROM Grupo WHERE ";
            sql += "id = ";
            sql += id_grupo_sanitizado;
            resultado_1 = await db.consultar(sql);
            if (typeof resultado_1 === "undefined") {
                throw new Error("El «id_grupo» de «Grupo» referido no está registrado en la base de datos (0) al «seleccionar_grupo»");
            }
            if (resultado_1.length !== 1) {
                throw new Error("El «id_grupo» de «Grupo» referido no está registrado en la base de datos al «seleccionar_grupo»");
            }
            grupo = resultado_1[0];
        }
        return {
            grupo,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.seleccionar_grupo", error);
        throw error;
    }
};