module.exports = async function (id_de_usuario, otros = {}) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.actualizar_usuario");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        return {
            resultado: []
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.actualizar_usuario", error);
        throw error;
    }
};