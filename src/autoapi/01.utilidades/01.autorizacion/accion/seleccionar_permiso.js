module.exports = async function (id_permiso = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.seleccionar_permiso");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_permiso_sanitizado = undefined;
        let permiso = undefined;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(id_permiso, "id_permiso", "el parámetro «id_permiso» debe ser un numero al «seleccionar_permiso»").es_numero();
        }
        Formatear_parametros: {
            id_permiso_sanitizado = sanitizar_valor(id_permiso);
        }
        Obtener_base_de_datos_para_sesion: {
            db = this.datos.conexion.instancia.segun_tabla("Permiso");
        }
        Seleccionar_permiso_no_registrado_segun_token: {
            let sql = "SELECT * FROM Permiso WHERE ";
            sql += "id = ";
            sql += id_permiso_sanitizado;
            resultado_1 = await db.consultar(sql);
            if (typeof resultado_1 === "undefined") {
                throw new Error("El «id_permiso» de «Permiso» referido no está registrado en la base de datos (0) al «seleccionar_permiso»");
            }
            if (resultado_1.length !== 1) {
                throw new Error("El «id_permiso» de «Permiso» referido no está registrado en la base de datos al «seleccionar_permiso»");
            }
            permiso = resultado_1[0];
        }
        return {
            permiso,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.seleccionar_permiso", error);
        throw error;
    }
};