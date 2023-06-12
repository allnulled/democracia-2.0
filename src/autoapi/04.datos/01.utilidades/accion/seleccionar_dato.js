module.exports = async function (tabla = false, filtro = false, orden = false, pagina = false, elementos = false, busqueda = false, ) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.seleccionar_dato");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_id, sanitizar_valor } = this.datos.utilidades.funcion;
        let tabla_sanitizada = undefined;
        let pagina_sanitizada = undefined;
        let elementos_sanitizados = undefined;
        let busqueda_sanitizada = undefined;
        let db = undefined;
        let resultado_1 = undefined;
        Validar_parametros: {
            comprueba.que(tabla, "tabla", "el parámetro «tabla» debe ser un texto al «seleccionar_dato»").es_texto();
            comprueba.que(filtro, "filtro", "el parámetro «filtro» debe ser un array al «seleccionar_dato»").es_array();
            comprueba.que(orden, "orden", "el parámetro «orden» debe ser un array al «seleccionar_dato»").es_array();
            comprueba.que(pagina, "pagina", "el parámetro «pagina» debe ser un numero al «seleccionar_dato»").es_numero();
            comprueba.que(elementos, "elementos", "el parámetro «elementos» debe ser un numero al «seleccionar_dato»").es_numero();
            comprueba.que(busqueda, "busqueda", "el parámetro «busqueda» debe ser un texto al «seleccionar_dato»").es_texto();
        }
        Formatear_parametros: {
            tabla_sanitizada = sanitizar_id(tabla);
            pagina_sanitizada = sanitizar_valor(pagina);
            elementos_sanitizados = sanitizar_valor(elementos);
            busqueda_sanitizada = sanitizar_valor(busqueda);
        }
        Obtener_base_de_datos_para_sesion: {
            db = this.datos.conexion.instancia.segun_tabla(tabña);
        }
        Seleccionar_permiso_no_registrado_segun_token: {
            let sql = "SELECT * FROM ";
            sql += tabla_sanitizada;
            sql += this.datos.utilidades.funcion.obtener_sql_select_where_de_array(filtro)
            resultado_1 = await db.consultar(sql);
        }
        return {
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.seleccionar_dato", error);
        throw error;
    }
};