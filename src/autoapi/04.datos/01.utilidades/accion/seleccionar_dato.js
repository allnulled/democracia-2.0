module.exports = async function (tabla_arg = false, filtro_arg = false, orden_arg = false, pagina_arg = false, elementos_arg = false, busqueda_arg = false, autentificacion) {
    try {
        this.utilidades.tracear("this.datos.utilidades.accion.seleccionar_dato");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_id, sanitizar_valor } = this.datos.utilidades.funcion;
        const { esquema } = this.datos.esquema.instancia.arquitectura;
        let tabla = tabla_arg;
        let filtro = filtro_arg;
        let orden = orden_arg;
        let pagina = pagina_arg;
        let elementos = elementos_arg;
        let busqueda = busqueda_arg;
        let tabla_sanitizada = undefined;
        let db = undefined;
        let resultado_1 = undefined;
        Corregir_parametros_iniciales: {
            if (!filtro) {
                filtro = [];
            }
            if (!orden) {
                orden = [["id"]];
            }
            if (!pagina) {
                pagina = 1;
            }
            if (!elementos) {
                elementos = 20;
            }
            if(!busqueda) {
                busqueda = "";
            }
        }
        Validar_parametros: {
            comprueba.que(tabla, "tabla", "el parámetro «tabla» debe ser un texto al «seleccionar_dato»").es_texto();
            comprueba.que(filtro, "filtro", "el parámetro «filtro» debe ser un lista al «seleccionar_dato»").es_lista();
            comprueba.que(orden, "orden", "el parámetro «orden» debe ser un lista al «seleccionar_dato»").es_lista();
            comprueba.que(pagina, "pagina", "el parámetro «pagina» debe ser un numero al «seleccionar_dato»").es_numero();
            comprueba.que(elementos, "elementos", "el parámetro «elementos» debe ser un numero al «seleccionar_dato»").es_numero();
            comprueba.que(busqueda, "busqueda", "el parámetro «busqueda» debe ser un texto al «seleccionar_dato»").es_texto();
        }
        Formatear_parametros: {
            tabla_sanitizada = sanitizar_id(tabla);
        }
        Obtener_base_de_datos_para_tabla: {
            db = this.datos.conexion.instancia.segun_tabla(tabla);
        }
        Aplicar_autorizador_al_pre_aceptar: {
            this.servidor.ayudante.aplicar_autorizacion("seleccionar", "al_pre_aceptar", [], autentificacion, { tabla, filtro, orden, pagina, elementos, busqueda, db, esquema });
        }
        let sql = undefined;
        Seleccionar_permiso_no_registrado_segun_token: {
            sql = "SELECT * FROM ";
            sql += tabla_sanitizada;
            sql += this.datos.utilidades.funcion.obtener_sql_select_where_de_array(filtro, tabla, busqueda, true);
            sql += this.datos.utilidades.funcion.obtener_sql_select_order_by_de_array(orden, tabla, true);
            // sql += this.datos.utilidades.funcion.obtener_sql_select_limit_y_offset_by_de_pagina_y_elementos(pagina, elementos);
            resultado_1 = await db.consultar(sql);
        }
        Aplicar_autorizador_al_post_aceptar: {
            this.servidor.ayudante.aplicar_autorizacion("seleccionar", "al_post_aceptar", [], autentificacion, { tabla, filtro, orden, pagina, elementos, busqueda, db, esquema, sql, resultado: resultado_1 });
        }
        return {
            seleccion: resultado_1,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.datos.utilidades.accion.seleccionar_dato", error);
        throw error;
    }
};