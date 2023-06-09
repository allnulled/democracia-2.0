module.exports = async function (nombre = false, detalles = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.agregar_permiso");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.datos.utilidades.funcion;
        let db = undefined;
        let nombre_sanitizado = undefined;
        let detalles_sanitizado = undefined;
        let permiso_si_confirmado = undefined;
        Validar_parametros: {
            comprueba.que(nombre, "nombre", "el parámetro «nombre» debe ser un texto al «agregar_permiso»").es_texto();
            comprueba.que(detalles, "detalles", "el parámetro «detalles» debe ser un texto al «agregar_permiso»").es_texto();
        }
        Formatear_parametros: {
            nombre_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(nombre);
            detalles_sanitizado = this.datos.utilidades.funcion.sanitizar_valor(detalles);
        }
        Obtener_base_de_datos_para_permiso_no_confirmado: {
            db = this.datos.conexion.instancia.segun_tabla("Permiso");
        }
        Insertar_permiso_nuevo: {
            let sql = "INSERT INTO Permiso (nombre, detalles) VALUES (";
            sql += nombre_sanitizado;
            sql += ", ";
            sql += detalles_sanitizado;
            sql += ")";
            resultado_1 = await db.consultar(sql);
            permiso_si_confirmado = {
                nombre,
                detalles,
            };
        }
        return {
            nuevo_permiso: permiso_si_confirmado,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.agregar_permiso", error);
        throw error;
    }
};