module.exports = function(msg, ...others) {
    console.log(this.dependencias.instancia.cli_color.magentaBright("[TRACEO]" + " " + msg), ...others);
};