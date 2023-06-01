module.exports = async function(req, res) {
    await new Promise(ok => {
        this.dependencias.instancia.body_parser.json()(req, res, () => ok());
    });
    await new Promise(ok => {
        this.dependencias.instancia.body_parser.urlencoded({ extended: true })(req, res, () => ok());
    });
}