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
        const segun_tabla = function(tabla) {
            // @TOCOMPLETE: aquí se debería de devolver la conexión a la base de datos
            // o, según proceda, EL CONECTOR AL SERVICIO (que llevaria una historieta aparte)
            // correspondiente a la «tabla» según el «esquema de datos» activo.
            // Esto sería para tener muchas máquinas al servicio del mismo conjunto lógico.
            // Pero por ahora, devolveremos la conexión única y gou. Porque no, porque somos pobres
            // y esto lo hacemos más como «Proof of Concept», pero enfocados a ser prácticos también.
            return principal;
        }
        return {
            segun_tabla,
            conexion_principal: principal,
        };
    } catch(error) {
        this.utilidades.error("this.datos.utilidades.cargar_conexiones", error);
        throw error;
    }
};