module.exports = function (id, ...otros_argumentos) {
    console.log(this.dependencias.instancia.cli_color.redBright("[ERROR]" + " " + id), ...otros_argumentos);
};