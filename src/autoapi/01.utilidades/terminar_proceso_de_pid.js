module.exports = function () {
    this.utilidades.tracear("this.utilidades.terminar_proceso_de_pid");
    const pid_anterior = this.dependencias.instancia.fs.readFileSync(this.dependencias.instancia.ruta("src/pid.txt")).toString();
    let signal = 0;
    try {
        process.kill(pid_anterior);
        signal = 1;
    } catch(error) {
        signal = 0;
    }
    return new Promise(ok => {
        setTimeout(() => {
            ok(signal);
        }, 100);
    });
};