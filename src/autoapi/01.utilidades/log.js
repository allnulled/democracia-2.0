module.exports = function (id, ...otros_argumentos) {
    console.log(this.dependencias.instancia.cli_color.greenBright("[LOGUEO]" + " " + id), ...otros_argumentos);
}