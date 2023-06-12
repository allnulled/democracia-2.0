module.exports = async function (opciones) {
    try {
        this.utilidades.tracear("this.datos.conectores.conector_para_sqlite");
        const { file, options = [] } = opciones;
        let conexion = undefined;
        await new Promise((ok, fail) => {
            conexion = new this.dependencias.instancia.sqlite3.Database(file, (error) => {
                if(error) {
                    this.utilidades.error("this.datos.conectores.conector_para_sqlite", error);
                    return fail(error);
                }
                return ok();
            });
        });
        const conexion_de_alto_nivel = {
            conexion,
            consultar_multiplemente: async (consulta_sql_multiple, parameters = []) => {
                try {
                    this.utilidades.tracear("this.datos.conectores.conector_para_sqlite(...).consultar_multiplemente");
                    const subconsultas = consulta_sql_multiple.split(/\/\* Inicio de nueva query \*\//g).map(sql => sql.trim()).filter(sql => sql.length);
                    const resultados = [];
                    Subconsultas_por_orden:
                    for(let index = 0; index < subconsultas.length; index++) {
                        const subconsulta = subconsultas[index];
                        const resultado = await conexion_de_alto_nivel.consultar(subconsulta);
                        resultados.push({
                            indice_de_consulta: index,
                            subconsulta,
                            resultado,
                        });
                    }
                    return resultados;
                } catch(error) {
                    this.utilidades.error("this.datos.conectores.conector_para_sqlite(...).consultar", error);
                }
            },
            consultar: (consulta_sql_unica, parameters = []) => {
                const that = this;
                return new Promise((ok, fail) => {
                    this.utilidades.tracear("this.datos.conectores.conector_para_sqlite(...).consultar");
                    this.utilidades.log("[sql] " + consulta_sql_unica);
                    conexion.serialize(() => {
                        conexion.all(consulta_sql_unica, parameters, function(error, data) {
                            if(error) {
                                that.utilidades.error("this.datos.conectores.conector_para_sqlite(...).consultar", error);
                                return fail(error);
                            }
                            that.utilidades.log("[sql-out] " + JSON.stringify(data, null, 2));
                            return ok(data);
                        });
                    });
                });
            },
            cerrar_conexion: function () {
                return new Promise(ok => {
                    try {
                        conexion.close();
                    } catch(error) {
                        
                    } finally {
                        return ok();
                    }
                });
            }
        };
        return conexion_de_alto_nivel;
    } catch (error) {
        this.utilidades.error("this.datos.conectores.conector_para_sqlite", error);
        throw error;
    }
};