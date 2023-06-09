module.exports = function(file) {
    this.utilidades.tracear("this.utilidades.existe_fichero");
    return new Promise(ok => {
        this.dependencias.instancia.fs.access(file, (error, data) => {
            if(error) {
                return ok(false);
            }
            return ok(true);
        });
    });
};