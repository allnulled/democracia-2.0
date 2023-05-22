module.exports = async function() {
    try {
        this.utilidades.tracear("this.datos.utilidades.cerrar_conexiones");
        const conexiones = this.datos.conexion.instancia;
        const conexiones_ids = Object.keys(conexiones);
        this.utilidades.inspeccionar(conexiones);
        for(let index = 0; index < conexiones_ids.length; index++) {
            const conexion_id = conexiones_ids[index];
            const conexion = conexiones[conexion_id];
            this.utilidades.log(`[*] Cerrando conexión «${conexion_id}»`);
            await conexion.cerrar_conexion();
        }
    } catch(error) {
        this.utilidades.error("this.datos.utilidades.cerrar_conexiones", error);
        throw error;
    }
};