module.exports = async function (token_de_confirmacion = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.confirmarse");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let token_de_confirmacion_formateado = undefined;
        let usuario_no_confirmado = undefined;
        let usuario_si_confirmado = undefined;
        let resultado_1, resultado_2;
        Validar_parametros: {
            comprueba.que(token_de_confirmacion, "token_de_confirmacion", "el parámetro «token_de_confirmacion» debe ser un texto al «confirmarse»").es_texto();
            comprueba.que(token_de_confirmacion, "token_de_confirmacion", "el parámetro «token_de_confirmacion» debe tener la longitud correspondiente al «confirmarse»").tiene_longitud_mayor_que(99);
        }
        Formatear_parametros: {
            token_de_confirmacion_formateado = this.utilidades.datos.funcion.sanitizar_valor(token_de_confirmacion);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Usuario_no_confirmado");
        }
        Seleccionar_usuario_no_registrado_segun_token: {
            let sql = "SELECT * FROM Usuario_no_confirmado WHERE token_de_confirmacion = ";
            sql += token_de_confirmacion_formateado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            if(typeof resultado_1 === "undefined") {
                throw new Error("El «token_de_confirmacion» proporcionado no está registrado en la base de datos (0)");
            }
            if(resultado_1.length !== 1) {
                throw new Error("El «token_de_confirmacion» proporcionado no está registrado en la base de datos");
            }
            usuario_no_confirmado = resultado_1[0];
        }
        Obtener_base_de_datos_para_usuario: {
            db = this.datos.conexion.instancia.segun_tabla("Usuario");
        }
        Insertar_usuario_nuevo: {
            let sql = "INSERT INTO Usuario (nombre, contrasenya, correo, otros) VALUES (";
            sql += sanitizar_valor(usuario_no_confirmado.nombre);
            sql += ", ";
            sql += sanitizar_valor(usuario_no_confirmado.contrasenya);
            sql += ", ";
            sql += sanitizar_valor(usuario_no_confirmado.correo);
            sql += ", ";
            sql += sanitizar_valor(usuario_no_confirmado.otros);
            sql += ")";
            resultado_2 = await db.consultar(sql);
            usuario_si_confirmado = {
                nombre: usuario_no_confirmado.nombre,
                contrasenya: usuario_no_confirmado.contrasenya,
                correo: usuario_no_confirmado.correo,
                otros: usuario_no_confirmado.otros,
            };
        }
        return {
            usuario_confirmado: true,
            resultado: [resultado_1, resultado_2]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.confirmarse", error);
        throw error;
    }
};