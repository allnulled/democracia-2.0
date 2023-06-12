module.exports = async function (nombre = false, contrasenya = false, correo = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.agregar_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let nombre_sanitizado = undefined;
        let contrasenya_sanitizada = undefined;
        let correo_sanitizado = undefined;
        let usuario_si_confirmado = undefined;
        Validar_parametros: {
            comprueba.que(nombre, "nombre", "el parámetro «nombre» debe ser un texto al «agregar_usuario»").es_texto();
            comprueba.que(contrasenya, "contrasenya", "el parámetro «contrasenya» debe ser un texto al «agregar_usuario»").es_texto();
            comprueba.que(correo, "correo", "el parámetro «correo» debe ser un texto al «agregar_usuario»").es_texto();
        }
        Formatear_parametros: {
            nombre_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(nombre);
            contrasenya_sanitizada = this.datos.utilidades.funcion.sanitizar_valor(contrasenya);
            correo_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(correo);
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Usuario");
        }
        Insertar_usuario_nuevo: {
            let sql = "INSERT INTO Usuario (nombre, contrasenya, correo) VALUES (";
            sql += nombre_sanitizado;
            sql += ", ";
            sql += contrasenya_sanitizada;
            sql += ", ";
            sql += correo_sanitizado;
            sql += ")";
            resultado_1 = await db.consultar(sql);
            usuario_si_confirmado = {
                nombre,
                contrasenya,
                correo,
            };
        }
        return {
            nuevo_usuario: usuario_si_confirmado,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.agregar_usuario", error);
        throw error;
    }
};