module.exports = async function (nombre = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.seleccionar_permiso_segun_nombre");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let nombre_sanitizado = undefined;
        let permiso = undefined;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(nombre, "nombre", "el parámetro «nombre» debe ser un texto al «seleccionar_permiso_segun_nombre»").es_texto();
        }
        Formatear_parametros: {
            nombre_sanitizado = sanitizar_valor(nombre);
        }
        Obtener_base_de_datos_para_sesion: {
            db = this.datos.conexion.instancia.segun_tabla("Permiso");
        }
        Seleccionar_permiso_no_registrado_segun_token: {
            let sql = "SELECT * FROM Permiso WHERE ";
            sql += "nombre = ";
            sql += nombre_sanitizado;
            resultado_1 = await db.consultar(sql);
            if (typeof resultado_1 === "undefined") {
                throw new Error("El «nombre» de «Permiso» referido no está registrado en la base de datos (0) al «seleccionar_permiso_segun_nombre»");
            }
            if (resultado_1.length !== 1) {
                throw new Error("El «nombre» de «Permiso» referido no está registrado en la base de datos al «seleccionar_permiso_segun_nombre»");
            }
            permiso = resultado_1[0];
        }
        return {
            permiso,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.seleccionar_permiso_segun_nombre", error);
        throw error;
    }
};