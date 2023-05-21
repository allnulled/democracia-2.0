module.exports = function(dir) {
    this.utilidades.tracear("this.servidor.controlador.factoria.ficheros_estaticos");
    return this.dependencias.instancia.express.static(dir);
};