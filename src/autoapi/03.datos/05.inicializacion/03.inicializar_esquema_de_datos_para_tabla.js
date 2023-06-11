module.exports = async function (tabla_nombre) {
    this.utilidades.tracear("this.datos.inicializacion.inicializar_esquema_de_datos_para_tabla");
    try {
        const db = this.datos.conexion.instancia.segun_tabla(tabla_nombre);
        // await db.consultar(`;`);
        this.utilidades.log(`Inicializado exitosamente esquema de datos para tabla ${tabla_nombre}.`);
    } catch(error) {
        throw error;
    }
}