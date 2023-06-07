module.exports = async function (otros = {}) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.seleccionar_permiso_de_grupo");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        return {
            resultado: []
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.seleccionar_permiso_de_grupo", error);
        throw error;
    }
};