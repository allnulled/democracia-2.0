module.exports = function() {
    this.utilidades.tracear("this.datos.conexion.instancia");
    return new Promise(async (ok, fail) => {
        try {
            const todas_las_conexiones = await this.datos.utilidades.cargar_conexiones();
            return ok(todas_las_conexiones);
        } catch(error) {
            this.utilidades.error("this.datos.conexion.instancia", error);
            return fail(error);
        }
    });
};