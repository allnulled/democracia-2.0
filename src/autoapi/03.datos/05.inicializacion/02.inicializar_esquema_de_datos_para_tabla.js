module.exports = async function (tabla_nombre) {
    this.utilidades.tracear("this.datos.inicializacion.inicializar_esquema_de_datos_para_tabla");
    
    const db = this.datos.conexion.instancia.segun_tabla("");
    await db.consultar(`;`);
    this.utilidades.log("Borrados exitósamente registros de tests de la BD.");
}