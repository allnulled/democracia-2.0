module.exports = function () {
    this.utilidades.tracear("this.autorizacion.inicializacion.extensiones");
    this.utilidades.inspeccionar(this.autorizacion);
    const extensiones = Object.keys(this.autorizacion);
    for (let index = 0; index < extensiones.length; index++) {
        const extension_id = extensiones[index];
        const extension_modificador = this.autorization.extensiones[extension_id];
        this.utilidades.trace()
        extension_modificador(this.configuraciones.arquitectura);
    }
}