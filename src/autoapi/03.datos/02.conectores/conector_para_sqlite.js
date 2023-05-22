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
        return {
            conexion,
            consulta: (sql, parameters = []) => {
                return new Promise((ok, fail) => {
                    this.utilidades.tracear("this.datos.conectores.conector_para_sqlite(...).consulta");
                    this.utilidades.log("[sql] " + sql);
                    conexion.run(sql, parameters, (error, data) => {
                        if(error) {
                            this.utilidades.error("this.datos.conectores.conector_para_sqlite(...).consulta", error);
                            return fail(error);
                        }
                        return ok(data);
                    });
                });
            },
            cerrar_conexion: function () {
                return new Promise(ok => {
                    conexion.close();
                    return ok();
                });
            }
        };
    } catch (error) {
        this.utilidades.error("this.datos.conectores.conector_para_sqlite", error);
        throw error;
    }
};