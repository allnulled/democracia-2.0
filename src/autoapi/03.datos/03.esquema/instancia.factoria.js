module.exports = function() {
    this.utilidades.tracear("this.datos.esquema.instancia");
    return {
        arquitectura: require(__dirname + "/arquitectura.calo-db.json")
    };
};