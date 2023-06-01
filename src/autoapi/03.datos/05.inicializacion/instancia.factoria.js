module.exports = async function () {
    this.utilidades.tracear("this.datos.inicializacion.instancia");
    try {
        const db = this.datos.conexion.instancia.segun_tabla("Usuario");
        try {
            const resultados = await db.consultar("SELECT * FROM Usuario;");
            // @OK entonces.
        } catch(error) {
            this.utilidades.log(error);
            try {
                const consulta_para_iniciar_auth = await this.utilidades.datos.consulta.inicializar_sistema_de_autorizacion();
                await db.consultar_multiplemente(consulta_para_iniciar_auth);
            } catch(error) {
                this.utilidades.log("No se pudo inicializar la base de datos de autorizaciones. El arranque de «democracia-2.0» no puede completarse correctamente.");
                this.utilidades.finalizar(db, resultado);
            }
        }
        return {
            estado: "ok"
        };
    } catch (error) {
        this.utilidades.error("this.datos.inicializacion.instancia", error);
    }
};