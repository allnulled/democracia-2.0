module.exports = async function () {
    this.utilidades.tracear("this.datos.inicializacion.inicializar_sistema_de_autorizacion");
    try {
        const db = this.datos.conexion.instancia.segun_tabla("Usuario");
        const consulta_para_iniciar_auth = await this.datos.inicializacion.plantilla_de_sistema_de_autorizacion();
        await db.consultar_multiplemente(consulta_para_iniciar_auth);
        this.utilidades.log(`Inicializado exitosamente sistema de autorización.`);
    } catch (error) {
        throw error;
    }
}