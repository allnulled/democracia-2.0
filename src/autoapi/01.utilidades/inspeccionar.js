module.exports = function (...otros_argumentos) {
    console.log(this.dependencias.instancia.cli_color.cyanBright("[INSPEC]"), require("util").inspect(...otros_argumentos));
}