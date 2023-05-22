module.exports = async function() {
    try {
        this.utilidades.tracear("this.datos.utilidades.cargar_conexiones");
        const maquinas = this.datos.esquema.instancia.arquitectura.infraestructura;
        this.utilidades.log(`[*] Cargando conexiones para una infraestructura de ${maquinas.length} bases de datos (modalidad: '${this.configuraciones.instancia.valores.BASE_DE_DATOS_TIPO}')`);
        let principal = undefined;
        if(this.configuraciones.instancia.valores.BASE_DE_DATOS_TIPO === "local") {
            const fichero_id = this.configuraciones.instancia.obtener("BASE_DE_DATOS_LOCAL_FICHERO");
            const fichero_path = this.dependencias.instancia.ruta("src/" + fichero_id + ".txt");
            this.utilidades.log(`[*] Cargando conexión «principal» vía SQLite`);
            principal = await this.datos.conectores.conector_para_sqlite({
                file: fichero_path,
                options: []
            });
        } else if (this.configuraciones.instancia.valores.BASE_DE_DATOS_TIPO === "remota") {
            this.utilidades.log(`[*] Cargando conexión «principal» vía MySQL`);
            principal = await this.datos.conectores.conector_para_mysql({
                host: this.configuraciones.instancia.valores.BASE_DE_DATOS_HOST,
                port: this.configuraciones.instancia.valores.BASE_DE_DATOS_PORT,
                user: this.configuraciones.instancia.valores.BASE_DE_DATOS_USER,
                password: this.configuraciones.instancia.valores.BASE_DE_DATOS_PASSWORD,
                database: this.configuraciones.instancia.valores.BASE_DE_DATOS_NAME,
            });
        } else {
            throw new Error("El método «this.datos.utilidades.cargar_conexiones» requiere de una configuración de «this.configuraciones.instancia.BADE_DE_DATOS_TIPO» válida como 'local' o 'remota'")
        }
        return {
            principal,
        };
    } catch(error) {
        this.utilidades.error("this.datos.utilidades.cargar_conexiones", error);
        throw error;
    }
};