module.exports = async function (id_usuario = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.seleccionar_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_usuario_sanitizado = undefined;
        let usuario = undefined;
        let resultado_1;
        Validar_parametros: {
            comprueba.que(id_usuario, "id_usuario", "el parámetro «id_usuario» debe ser un numero al «seleccionar_usuario»").es_numero();
        }
        Formatear_parametros: {
            id_usuario_sanitizado = sanitizar_valor(id_usuario);
        }
        Obtener_base_de_datos_para_sesion: {
            db = this.datos.conexion.instancia.segun_tabla("Usuario");
        }
        Seleccionar_usuario_no_registrado_segun_token: {
            let sql = "SELECT * FROM Usuario WHERE ";
            sql += "id = ";
            sql += id_usuario_sanitizado;
            resultado_1 = await db.consultar(sql);
            if (typeof resultado_1 === "undefined") {
                throw new Error("El «id_usuario» de «Usuario» referido no está registrado en la base de datos (0) al «seleccionar_usuario»");
            }
            if (resultado_1.length !== 1) {
                throw new Error("El «id_usuario» de «Usuario» referido no está registrado en la base de datos al «seleccionar_usuario»");
            }
            usuario = resultado_1[0];
        }
        return {
            usuario,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.seleccionar_usuario", error);
        throw error;
    }
};