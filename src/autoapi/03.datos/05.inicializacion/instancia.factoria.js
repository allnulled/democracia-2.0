module.exports = async function () {
    this.utilidades.tracear("this.datos.inicializacion.instancia");
    try {
        const db = this.datos.conexion.instancia.segun_tabla("Usuario");
        try {
            const resultados = await db.consultar("SELECT * FROM Usuario;");
            Borrando_registros_de_tests: {
                const usuarios_de_tests = resultados.filter(usuario => {
                    return usuario.nombre === "00";
                });
                if (usuarios_de_tests.length === 0) {
                    break Borrando_registros_de_tests;
                }
                await db.consultar(`DELETE FROM Sesion WHERE id_usuario = '${ usuarios_de_tests[0].id }';`);
                await db.consultar("DELETE FROM Usuario_no_confirmado WHERE nombre = '00';");
                await db.consultar("DELETE FROM Usuario WHERE nombre = '00' OR correo = '00@00.00';");
            }
        } catch(error) {
            this.utilidades.log(error);
            try {
                const consulta_para_iniciar_auth = await this.utilidades.autorizacion.consulta.inicializar_sistema_de_autorizacion();
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