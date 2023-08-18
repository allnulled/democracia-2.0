module.exports = function(accion, incluir, excluir, evento, operacion) {
    this.autorizacion.utilidades.activos.push({
        accion,
        incluir,
        excluir,
        evento,
        ciclo_de_operacion,
        operacion
    });
}