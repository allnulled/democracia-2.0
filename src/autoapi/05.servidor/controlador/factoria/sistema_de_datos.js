module.exports = function () {
    return (req, res, next) => {
        this.utilidades.tracear("this.servidor.controlador.factoria.sistema_de_datos");
        return res.send("ok data");
    };
};