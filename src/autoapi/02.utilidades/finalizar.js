module.exports = function (...args) {
    this.utilidades.tracear("this.utilidades.finalizar");
    this.utilidades.debug("Finalizando aplicación", ...args);
    process.exit(0);
};