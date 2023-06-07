module.exports = async function () {
    this.utilidades.tracear("this.datos.inicializacion.instancia");
    try {
        const db = this.datos.conexion.instancia.segun_tabla("Usuario");
        try {
            // Si falla la consulta a Usuario, se inicializa el sistema de autorización:
            const resultados = await db.consultar("SELECT * FROM Usuario;");
            // Si no falla, se borran los registros de test:
            Borrando_registros_de_tests: {
                await this.datos.inicializacion.reseteo_de_registros_de_test();
            }
        } catch(error) {
            this.utilidades.log(error);
            try {
                Inicializar_sistema_de_autorizacion: {
                    const consulta_para_iniciar_auth = await this.utilidades.autorizacion.consulta.inicializar_sistema_de_autorizacion();
                    await db.consultar_multiplemente(consulta_para_iniciar_auth);
                }
            } catch(error) {
                this.utilidades.error("this.datos.inicializacion.instancia[sistema_de_autorizacion]", error);
                this.utilidades.log("No se pudo inicializar la base de datos con el «sistema de autorizaciones». El arranque de «democracia-2.0» no puede completarse correctamente.");
                this.utilidades.finalizar(db, resultado);
            }
        }
        try {
            // Se itera en todas las tablas del esquema:
            const esquema = this.datos.esquema.instancia.arquitectura.esquema;
            const tablas = Object.keys(esquema);
            for(let index_tabla = 0; index_tabla < tablas_ids.length; index_tabla++) {
                const tabla_id = tablas_ids[index_tabla];
                const tabla_dato = esquema[tabla_id];
                Inicializar_esquema_de_datos: {
                    try {
                        await this.datos.inicializacion.inicializar_esquema_de_datos_para_tabla(tabla_dato, tabla_id, index_tabla, tablas,  esquema);
                    } catch(error) {
                        // @OK.
                    }
                }
            }
        } catch (error) {
            this.utilidades.error("this.datos.inicializacion.instancia[esquema_de_datos]", error);
            this.utilidades.log("No se pudo inicializar la base de datos con el «esquema de datos». El arranque de «democracia-2.0» no puede completarse correctamente.");
        }

        return {
            estado: "ok"
        };
    } catch (error) {
        this.utilidades.error("this.datos.inicializacion.instancia", error);
    }
};