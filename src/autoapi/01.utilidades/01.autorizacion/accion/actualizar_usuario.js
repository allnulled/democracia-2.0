module.exports = async function (id_usuario = false, dato = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.actualizar_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_usuario_sanitizado = undefined;
        let dato_parseado = undefined;
        let usuario_actualizado = false;
        let resultado_1;
        Validar_parametros: {
            console.log(id_usuario, dato);
            comprueba.que(id_usuario, "id_usuario", "el parámetro «id_usuario» debe ser un texto al «actualizar_usuario»").es_numero();
            comprueba.que(dato, "dato", "el parámetro «dato» debe ser un objeto al «actualizar_usuario»").es_objeto();
            comprueba.que(Object.keys(dato), "claves_de_dato", "el parámetro «claves_de_dato.length» debe ser mayor que 0 al «actualizar_usuario»").tiene_longitud_mayor_que(0);
        }
        Formatear_parametros: {
            id_usuario_sanitizado = this.utilidades.datos.funcion.sanitizar_valor(id_usuario);
            dato_parseado = dato;
            delete dato_parseado.id;
            delete dato_parseado.nombre;
            delete dato_parseado.activado;
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Usuario");
        }
        Actualizar_usuario_en_base_de_datos: {
            let sql = "UPDATE Usuario";
            sql += "\n  SET ";
            sql += this.utilidades.datos.funcion.obtener_sql_update_de_objeto(dato_parseado);
            sql += "\n  WHERE id = "
            sql += id_usuario_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            usuario_actualizado = true;
        }
        return {
            usuario_actualizado,
            resultado: []
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.actualizar_usuario", error);
        throw error;
    }
};