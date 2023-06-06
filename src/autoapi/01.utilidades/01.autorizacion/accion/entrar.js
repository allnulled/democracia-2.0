module.exports = async function(nombre = false, correo = false, contrasenya = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.entrar");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let nombre_sanitizado = undefined;
        let correo_sanitizado = undefined;
        let contrasenya_sanitizada = undefined;
        let usuario_referido = undefined;
        let token_de_sesion = undefined;
        let resultado_1, resultado_2, resultado_3;
        Validar_parametros: {
            if((typeof nombre !== "string") && (typeof correo !== "string")) {
                throw new Error("Comprueba que «nombre» o «correo» es un texto [error: el parámetro «nombre» o «correo» debe ser un texto al «entrar»]");
            }
            comprueba.que(contrasenya, "contrasenya", "el parámetro «contrasenya» debe ser un texto al «entrar»").es_texto();
        }
        Formatear_parametros: {
            nombre_sanitizado = sanitizar_valor(nombre);
            correo_sanitizado = sanitizar_valor(correo);
            contrasenya_sanitizada = sanitizar_valor(contrasenya);
        }
        Obtener_base_de_datos_para_usuario: {
            db = this.datos.conexion.instancia.segun_tabla("Usuario");
        }
        Seleccionar_usuario_no_registrado_segun_token: {
            let sql = "SELECT * FROM Usuario WHERE ";
            if(typeof nombre === "string") {
                sql += "nombre = ";
                sql += nombre_sanitizado;
            } else if(typeof correo === "string") {
                sql += "correo = ";
                sql += correo_sanitizado;
            }
            sql += " AND contrasenya = ";
            sql += contrasenya_sanitizada;
            resultado_1 = await db.consultar(sql);
            if (typeof resultado_1 === "undefined") {
                throw new Error("El «usuario» referido con la «contrasenya» especificada no está registrado en la base de datos (0) al «entrar»");
            }
            if (resultado_1.length !== 1) {
                throw new Error("El «usuario» referido con la «contrasenya» especificada no está registrado en la base de datos al «entrar»");
            }
            usuario_referido = resultado_1[0];
        }
        Obtener_base_de_datos_para_sesion: {
            db = this.datos.conexion.instancia.segun_tabla("Sesion");
        }
        let sesion_activa = undefined;
        let tiene_sesion_activa = false;
        Seleccionar_sesion_activa: {
            let sql = "SELECT * FROM Sesion WHERE ";
            sql += "id_usuario = ";
            sql += sanitizar_valor(usuario_referido.id);
            resultado_2 = await db.consultar(sql);
            if((typeof resultado_2 === "undefined") || (resultado_2.length !== 1)) {
                tiene_sesion_activa = false;
            } else {
                tiene_sesion_activa = true;
                sesion_activa = resultado_2[0];
            }
        }
        Insertar_nueva_sesion: {
            if(!tiene_sesion_activa) {
                token_de_sesion = this.utilidades.generar_texto_aleatorio(100);
                let sql = "INSERT INTO Sesion (id_usuario, token_de_sesion) VALUES (";
                sql += sanitizar_valor(usuario_referido.id);
                sql += ", ";
                sql += sanitizar_valor(token_de_sesion);
                sql += ");";
                resultado_3 = await db.consultar(sql);
                sesion_activa = {
                    id_usuario: usuario_referido.id,
                    token_de_sesion
                };
            }
        }
        return {
            sesion_activa,
            resultado: [resultado_1, resultado_2, resultado_3]
        };
        
    } catch(error) {
        this.utilidades.error("this.utilidades.autorization.accion.entrar", error);
        throw error;
    }
};