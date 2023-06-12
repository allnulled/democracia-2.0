module.exports = async function (token_de_sesion = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.eliminarse");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        Validar_parametros: {
            comprueba.que(token_de_sesion, "token_de_sesion", "el parámetro «token_de_sesion» debe ser un texto al «eliminarse»").es_texto();
        }
        let token_de_sesion_sanitizado = undefined;
        let usuario_por_eliminarse = undefined;
        let resultado_1, resultado_2, resultado_3;
        let db = undefined;
        Formatear_parametros: {
            token_de_sesion_sanitizado = sanitizar_valor(token_de_sesion);
        }
        Obtener_base_de_datos: {
            db = this.datos.conexion.instancia.segun_tabla("Sesion");
        }
        Seleccionar_usuario_por_eliminarse: {
            let sql = "SELECT * FROM Sesion WHERE token_de_sesion = ";
            sql += token_de_sesion_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            if(resultado_1.length !== 1) {
                throw new Error("El «token_de_sesion» referido no está registrado en la base de datos al «eliminarse»");
            }
            usuario_por_eliminarse = resultado_1[0];
        }
        Dar_de_baja_a_usuario: {
            let sql = "UPDATE Usuario SET activado = 0 WHERE id = ";
            sql += sanitizar_valor(usuario_por_eliminarse.id);
            sql += ";";
            resultado_2 = await db.consultar(sql);
        }
        Eliminar_sesion: {
            let sql = "DELETE FROM Sesion WHERE token_de_sesion = ";
            sql += token_de_sesion_sanitizado;
            sql += ";";
            resultado_3 = await db.consultar(sql);
        }
        return {
            resultado: [resultado_1, resultado_2, resultado_3]
        };

    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.eliminarse", error);
        throw error;
    }
};