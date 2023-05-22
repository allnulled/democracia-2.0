module.exports = async function(opciones) {
    try {
        this.utilidades.tracear("this.datos.conectores.conector_para_mysql");
        const { host, port, user, password, database } = opciones;
        const conexion_simple = this.dependencias.instancia.mysql2original.createPool({
            host,
            port,
            user,
            password,
            database
        });
        const conexion = conexion_simple.promise();
        return {
            conexion,
            consulta: (sql, parameters = []) => {
                this.utilidades.tracear("this.datos.conectores.conector_para_mysql(...).consulta");
                this.utilidades.log("[sql] " + sql);
                return conexion.query(sql, parameters);
            },
            cerrar_conexion: function() {
                return new Promise(ok => {
                    conexion.end();
                    return ok();
                });
            }
        };
    } catch(error) {
        this.utilidades.error("this.datos.conectores.conector_para_mysql", error);
        throw error;
    }

};