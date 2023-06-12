module.exports = function() {
    this.utilidades.tracear("this.utilidades.actualizar_fichero_de_pid");
    this.dependencias.instancia.fs.writeFileSync(this.dependencias.instancia.ruta("src/pid.txt"), "" + process.pid, "utf8");
};