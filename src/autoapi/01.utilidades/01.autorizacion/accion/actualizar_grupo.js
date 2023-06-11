module.exports = async function (id_grupo = false, dato = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.actualizar_grupo");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        let db = undefined;
        let id_grupo_sanitizado = undefined;
        let dato_parseado = undefined;
        let grupo_actualizado = false;
        let resultado_1;
        Validar_parametros: {
            console.log(id_grupo, dato);
            comprueba.que(id_grupo, "id_grupo", "el parámetro «id_grupo» debe ser un texto al «actualizar_grupo»").es_numero();
            comprueba.que(dato, "dato", "el parámetro «dato» debe ser un objeto al «actualizar_grupo»").es_objeto();
            comprueba.que(Object.keys(dato), "claves_de_dato", "el parámetro «claves_de_dato.length» debe ser mayor que 0 al «actualizar_grupo»").tiene_longitud_mayor_que(0);
        }
        Formatear_parametros: {
            id_grupo_sanitizado = this.utilidades.datos.funcion.sanitizar_valor(id_grupo);
            dato_parseado = dato;
            delete dato_parseado.id;
            delete dato_parseado.nombre;
        }
        Obtener_base_de_datos_para_usuario_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Grupo");
        }
        Actualizar_grupo_en_base_de_datos: {
            let sql = "UPDATE Grupo";
            sql += "\n  SET ";
            sql += this.utilidades.datos.funcion.obtener_sql_update_set_de_objeto(dato_parseado);
            sql += "\n  WHERE id = "
            sql += id_grupo_sanitizado;
            sql += ";";
            resultado_1 = await db.consultar(sql);
            grupo_actualizado = true;
        }
        return {
            grupo_actualizado,
            resultado: []
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.actualizar_grupo", error);
        throw error;
    }
};