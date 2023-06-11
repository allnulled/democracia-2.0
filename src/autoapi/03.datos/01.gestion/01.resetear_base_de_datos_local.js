module.exports = async function () {
    this.utilidades.tracear("this.datos.gestion.reseteo_de_registros_de_test");
    const fichero_id = this.configuraciones.instancia.obtener("BASE_DE_DATOS_LOCAL_FICHERO");
    const fichero_path = this.dependencias.instancia.ruta("src/" + fichero_id + ".sqlite3");
    try {
        this.dependencias.instancia.fs.unlinkSync(fichero_path);
        return true;
    } catch (error) {
        return false;
    }
}