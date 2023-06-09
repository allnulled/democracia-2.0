module.exports = function(file) {
    this.utilidades.tracear("this.utilidades.leer_fichero");
    return new Promise((ok, fail) => {
        this.dependencias.instancia.fs.readFile(file, "utf8", (error, data) => {
            if(error) {
                return fail(error);
            }
            return ok(data);
        });
    });
};