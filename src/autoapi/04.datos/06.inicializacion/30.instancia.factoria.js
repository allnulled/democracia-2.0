module.exports = async function () {
    this.utilidades.tracear("this.datos.inicializacion.instancia");
    try {
        const db = this.datos.conexion.instancia.segun_tabla("Usuario");
        const { sanitizar_valor, sanitizar_id } = this.datos.utilidades.funcion;
        try {
            // Si falla la consulta a Usuario, se inicializa el sistema de autorización:
            const resultados = await db.consultar("SELECT * FROM Usuario;");
            // Si no falla, se borran los registros de test:
            Borrando_registros_de_tests: {
                await this.datos.inicializacion.resetear_registros_de_test();
            }
        } catch (error) {
            this.utilidades.log(error);
            // Si sí falla, se inicializan las tablas de autorizaciones:
            Inicializar_sistema_de_autorizacion: {
            try {
                    await this.datos.inicializacion.inicializar_sistema_de_autorizacion();
                } catch (error) {
                    this.utilidades.error("this.datos.inicializacion.instancia + this.datos.inicializacion.inicializar_sistema_de_autorizacion", error);
                    this.utilidades.log("No se pudo inicializar la base de datos con el «sistema_de_autorizacion». El arranque de «democracia-2.0» no puede completarse correctamente.");
                    this.utilidades.finalizar(db, resultado);
                }
            }
        }
        // Después, se itera en todas las tablas del esquema:
        try {
            Inicializar_sistema_de_datos: {
                const esquema = this.datos.esquema.instancia.arquitectura.esquema;
                const tablas_ids_sin_ordenar = Object.keys(esquema);
                const tablas_ids = tablas_ids_sin_ordenar.sort((t1, t2) => {
                    const o1 = esquema[t1].atributos_de_tabla.tiene_orden;
                    const o2 = esquema[t2].atributos_de_tabla.tiene_orden;
                    if (typeof o2 === "undefined") return -1;
                    if (typeof o1 === "undefined") return 1;
                    const o1_numero = parseInt(o1);
                    const o2_numero = parseInt(o2);
                    if (o2_numero < o1_numero) return 1;
                    return -1;
                });
                Sanear_tablas:
                for (let index_tabla = 0; index_tabla < tablas_ids.length; index_tabla++) {
                    const tabla_id = tablas_ids[index_tabla];
                    Comprobar_si_existe_tabla: {
                        try {
                            const db_para_tabla = await this.datos.conexion.segun(tabla_id);
                            if(["Usuario", "Grupo", "Permiso"].indexOf(tabla_id) !== -1) {
                                continue Sanear_tablas;
                            }
                            let sql = "SELECT * FROM ";
                            sql += sanitizar_id(tabla_id);
                            sql += ";";
                            const resultado1 = await db_para_tabla.consultar(sql);
                            continue Sanear_tablas;
                        } catch(error) {
                            // @OK, significa que hay que crearla.
                        }
                    }
                    Inicializar_tabla_de_datos: {
                        try {
                            await this.datos.inicializacion.inicializar_esquema_de_datos_para_tabla(tabla_id, index_tabla);
                        } catch (error) {
                            this.utilidades.error(`this.datos.inicializacion.instancia + creando tabla «${tabla_id}»`);
                        }
                    }
                }
            }
        } catch (error) {
            this.utilidades.error("this.datos.inicializacion.instancia + esquema_de_datos", error);
            this.utilidades.log("No se pudo inicializar la base de datos con el «esquema de datos». El arranque de «democracia-2.0» no puede completarse correctamente.");
        }

        return {
            estado: "ok"
        };
    } catch (error) {
        this.utilidades.error("this.datos.inicializacion.instancia", error);
    }
};