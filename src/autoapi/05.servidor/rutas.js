module.exports = function () {
    const enrutador = new this.dependencias.instancia.express.Router();
    const {
        ficheros_estaticos,
        controlador_simple,
        gestion_de_error,
        sistema_de_autentificacion,
        sistema_de_datos,
    } = this.servidor.controlador.factoria;
    // @TODO: desplegar todos los servicios
    enrutador.use("*", ficheros_estaticos(this.dependencias.instancia.ruta("src/www")));
    enrutador.get("/hi", controlador_simple((rq, rs) => rs.json("OK")));
    enrutador.use("/auth", sistema_de_autentificacion());
    enrutador.use("/data", sistema_de_datos());
    enrutador.use("*", gestion_de_error());
    return enrutador;
}