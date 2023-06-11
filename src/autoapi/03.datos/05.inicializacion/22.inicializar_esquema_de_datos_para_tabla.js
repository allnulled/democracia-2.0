module.exports = async function (tabla_nombre, tabla_index) {
    this.utilidades.tracear("this.datos.inicializacion.inicializar_esquema_de_datos_para_tabla");
    try {
        const db = this.datos.conexion.instancia.segun_tabla(tabla_nombre);
        const { esquema } = this.datos.esquema.instancia.arquitectura;
        this.utilidades.log(esquema);
        const consulta_de_creacion_de_tabla = this.utilidades.datos.funcion.obtener_sql_create_table_de_tabla(tabla_nombre);
        await db.consultar(consulta_de_creacion_de_tabla);
        this.utilidades.log(`Inicializado exitosamente esquema de datos para tabla «${tabla_nombre}».`);
    } catch(error) {
        throw error;
    }
}