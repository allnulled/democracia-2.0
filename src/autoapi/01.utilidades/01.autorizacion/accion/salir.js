module.exports = async function (token_de_sesion = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.salir");

        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let token_de_sesion_sanitizado = undefined;
        let resultado_1, resultado_2;
        Validar_parametros: {
            comprueba.que(token_de_sesion, "token_de_sesion", "el parámetro «token_de_sesion» debe ser un texto al «salir»").es_texto();
        }
        Formatear_parametros: {
            token_de_sesion_sanitizado = sanitizar_valor(token_de_sesion);
        }
        Obtener_base_de_datos_para_sesion: {
            db = this.datos.conexion.instancia.segun_tabla("Sesion");
        }
        Seleccionar_usuario_no_registrado_segun_token: {
            let sql = "SELECT * FROM Sesion WHERE ";
            sql += "token_de_sesion = ";
            sql += token_de_sesion_sanitizado;
            resultado_1 = await db.consultar(sql);
            if (typeof resultado_1 === "undefined") {
                throw new Error("El «token_de_sesion» referido no está registrado en la base de datos (0) al «salir»");
            }
            if (resultado_1.length !== 1) {
                throw new Error("El «token_de_sesion» referido no está registrado en la base de datos al «salir»");
            }
        }
        Eliminar_sesion_activa: {
            let sql = "DELETE FROM Sesion WHERE ";
            sql += "token_de_sesion = ";
            sql += token_de_sesion_sanitizado;
            sql += ";";
            resultado_2 = await db.consultar(sql);
        }
        return {
            sesion_desactivada: true,
            resultado: [resultado_1, resultado_2]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.salir", error);
        throw error;
    }
};