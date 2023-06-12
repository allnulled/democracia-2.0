module.exports = function () {
    this.utilidades.tracear("this.servidor.rutas");
    const enrutador = new this.dependencias.instancia.express.Router();
    const {
        plantillas_estaticas,
        ficheros_estaticos,
        controlador_simple,
        gestion_de_error,
        sistema_de_autentificacion,
        sistema_de_datos,
    } = this.servidor.controlador.factoria;
    // @TODO: desplegar todos los servicios
    enrutador.get("^/hi", controlador_simple((rq,rs) => rs.json({ message: "OK" })));
    enrutador.use("^/auth", sistema_de_autentificacion());
    enrutador.use("^/datos", sistema_de_datos());
    enrutador.use("^/", plantillas_estaticas(this.dependencias.instancia.ruta("src/www/ejs")));
    enrutador.use("^/", ficheros_estaticos(this.dependencias.instancia.ruta("src/www/html")));
    enrutador.use(gestion_de_error());
    return enrutador;
}