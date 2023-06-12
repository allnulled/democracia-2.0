module.exports = async function () {
    this.utilidades.tracear("this.datos.inicializacion.reseteo_de_registros_de_test");
    Resetear_datos_relativos_a_usuario: {
        const db = this.datos.conexion.instancia.segun_tabla("Usuario");
        await db.consultar("DELETE FROM Usuario_no_confirmado WHERE nombre LIKE '%_para_test';");
        await db.consultar("DELETE FROM Usuario WHERE nombre LIKE '%_para_test';");
    }
    Resetear_datos_relativos_a_permiso: {
        const db = this.datos.conexion.instancia.segun_tabla("Permiso");
        await db.consultar("DELETE FROM Permiso WHERE nombre LIKE '%_para_test';");
    }
    Resetear_datos_relativos_a_grupo: {
        const db = this.datos.conexion.instancia.segun_tabla("Grupo");
        await db.consultar("DELETE FROM Grupo WHERE nombre LIKE '%_para_test';");
    }
    this.utilidades.log("Borrados exitosamente registros de tests de la BD.");
}