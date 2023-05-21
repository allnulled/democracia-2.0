module.exports = function () {
    this.utilidades.tracear("this.servidor.instancia");
    return {
        tipo: "servidor",
        estado: "cargado",
        iniciar: async () => {
            try {
                this.utilidades.tracear("this.servidor.instancia.iniciar");
                if(!this.aplicacion.instancia) throw new Error("El servidor necesita de una aplicacion «express» cargada en «this.aplicacion.instancia» para poder iniciarse");
                this.servidor.instancia.montar();
                this.servidor.instancia.abrir_puerto();
            } catch(error) {
                throw error;
            }
        },
        /**
         * Este es el método que se tiene que llamar para refrescar las rutas.
         */
        actualizar_enrutador: () => {
            this.utilidades.tracear("this.servidor.instancia.actualizar_enrutador");
            this.enrutador = this.servidor.instancia.regenerar_enrutador();
        },
        montar: () => {
            this.utilidades.tracear("this.servidor.instancia.montar");
            this.servidor.instancia.actualizar_enrutador();
            if(this.servidor.instancia.estado === "cargado") {
                this.aplicacion.instancia.use(this.enrutador);
                this.servidor.instancia.estado = "enrutado";
            }
        },
        abrir_puerto: () => {
            this.utilidades.tracear("this.servidor.instancia.abrir_puerto");
            try {
                const aplicacion = this.configuraciones.instancia.obtener("APLICACION_ID");
                const protocolo = this.configuraciones.instancia.obtener("APLICACION_PROTOCOLO");
                const puerto = this.configuraciones.instancia.obtener("APLICACION_PUERTO");
                this.servidor.generado = this.aplicacion.instancia.listen(puerto, (direccion) => {
                    this.utilidades.log(`[*] Servidor de «${aplicacion}» iniciado en:`);
                    let dominio = this.servidor.generado.address().address;
                    dominio = dominio === "::" ? "127.0.0.1" : dominio;
                    this.utilidades.log(`  - ${protocolo}://${dominio}:${puerto}`);
                });
            } catch(error) {
                this.utilidades.error("this.servidor.instancia.abrir_puerto", error);
            }
        },
        cerrar_puerto: () => {
            this.utilidades.tracear("this.servidor.instancia.cerrar_puerto");
            try {
                this.servidor.generado.close();
            } catch(error) {
                this.utilidades.error("this.servidor.instancia.cerrar_puerto", error);
            }
        },
        regenerar_enrutador: () => {
            this.utilidades.tracear("this.servidor.instancia.regenerar_enrutador");
            delete require.cache[require.resolve(__dirname + "/rutas.js")];
            this.servidor.rutas = require(__dirname + "/rutas.js").bind(this);
            return this.servidor.rutas();
        },
    };
};