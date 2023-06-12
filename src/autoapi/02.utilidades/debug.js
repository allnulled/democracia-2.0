module.exports = function(id, ...otros_argumentos) {
    console.log(this.dependencias.instancia.cli_color.yellowBright("[DEBUG]" + " " + id), ...otros_argumentos);
}