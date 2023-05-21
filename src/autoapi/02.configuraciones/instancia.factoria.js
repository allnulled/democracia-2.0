module.exports = function () {
    this.utilidades.tracear("this.configuraciones.instancia");
    return {
        tipo: "configuraciones",
        estado: "cargado",
        valores: require(__dirname + "/configuraciones.json"),
        obtener: (id, por_defecto = undefined) => {
            this.utilidades.tracear("this.configuraciones.instancia.obtener");
            if (!(id in this.configuraciones.instancia.valores)) {
                return por_defecto;
            }
            return this.configuraciones.instancia.valores[id];
        },
        establecer: (id, valor) => {
            this.utilidades.tracear("this.configuraciones.instancia.establecer");
            this.configuraciones.instancia.valores[id] = valor;
            return this.configuraciones.instancia.valores[id];
        }
    };
};