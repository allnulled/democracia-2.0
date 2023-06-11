module.exports = function() {
    this.utilidades.tracear("this.aplicacion.instancia");
    return this.dependencias.instancia.express();
};