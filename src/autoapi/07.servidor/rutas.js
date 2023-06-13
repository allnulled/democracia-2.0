module.exports = function () {
    this.utilidades.tracear("this.servidor.rutas");
    const enrutador = new this.dependencias.instancia.express.Router();
    const {
        controlador_simple,
        gestion_de_error,
        sistema_de_autentificacion,
        sistema_de_datos,
        sistema_de_plantillas_estaticas,
        sistema_de_ficheros_estaticos,
    } = this.servidor.controlador.factoria;
    // @TODO: desplegar todos los servicios
    enrutador.get("^/es-democracia-directa", controlador_simple((rq,rs) => rs.json({ mensaje: "Es Democracia Directa 2.0" })));
    enrutador.use("^/auth", sistema_de_autentificacion());
    enrutador.use("^/datos", sistema_de_datos());
    enrutador.use("^/", sistema_de_plantillas_estaticas(this.dependencias.instancia.ruta("src/www/ejs")));
    enrutador.use("^/", sistema_de_ficheros_estaticos(this.dependencias.instancia.ruta("src/www/html")));
    enrutador.use(gestion_de_error());
    return enrutador;
}