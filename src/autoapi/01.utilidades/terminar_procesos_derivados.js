module.exports = async function() {
    Terminar_servidor: {
        try {
            await this.servidor.instancia.cerrar_puerto();
        } catch(error) {
            this.utilidades.log("No se pudo terminar el proceso derivado relativo al servidor.");
        }
    }
    Terminar_conexiones_a_bases_de_datos: {
        try {
            await this.datos.utilidades.cerrar_conexiones();
        } catch (error) {
            this.utilidades.log("No se pudo terminar el proceso derivado relativo al servidor.");
        }
    }
}