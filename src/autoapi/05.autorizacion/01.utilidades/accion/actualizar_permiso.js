module.exports = async function (id_permiso = false, dato = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.actualizar_permiso");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let id_permiso_sanitizado = undefined;
        let dato_parseado = undefined;
        let permiso_actualizado = false;
        let resultado_1;
        Validar_parametros: {
            console.log(id_permiso, dato);
            comprueba.que(id_permiso, "id_permiso", "el parámetro «id_permiso» debe ser un texto al «actualizar_permiso»").es_numero();
            comprueba.que(dato, "dato", "el parámetro «dato» debe ser un objeto al «actualizar_permiso»").es_objeto();
            comprueba.que(Object.keys(dato), "claves_de_dato", "el parámetro «claves_de_dato.length» debe ser mayor que 0 al «actualizar_permiso»").tiene_longitud_mayor_que(0);
        }
        Formatear_parametros: {
            id_permiso_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(id_permiso);
            dato_parseado = dato;
            delete dato_parseado.id;
            delete dato_parseado.nombre;
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Permiso");
        }
        Actualizar_permiso_en_base_de_datos: {
            let sql = "UPDATE Permiso";
            sql += "\n  SET ";
            sql += this.datos.utilidades.funcion.obtener_sql_update_set_de_objeto(dato_parseado);
            sql += "\n  WHERE id = "
            sql += id_permiso_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            permiso_actualizado = true;
        }
        return {
            permiso_actualizado,
            resultado: []
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.actualizar_permiso", error);
        throw error;
    }
};