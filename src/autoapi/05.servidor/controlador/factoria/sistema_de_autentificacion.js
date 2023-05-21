module.exports = function () {
    return (req, res, next) => {
        this.utilidades.tracear("this.servidor.controlador.factoria.sistema_de_autentificacion");
        return res.send("ok auth");
    };
};