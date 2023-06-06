module.exports = async function () {
    this.utilidades.log("Borrando registros de tests de la BD.");
    const db = this.datos.conexion.instancia.segun_tabla("Usuario");
    await db.consultar(`DELETE FROM Usuario WHERE nombre = '00';`);
    await db.consultar("DELETE FROM Usuario_no_confirmado WHERE nombre = '00';");
    await db.consultar("DELETE FROM Usuario WHERE nombre = '00' OR correo = '00@00.00';");
    await db.consultar("DELETE FROM Usuario WHERE nombre LIKE '%_para_test';");
    await db.consultar("DELETE FROM Permiso WHERE nombre LIKE '%_para_test';");
    await db.consultar("DELETE FROM Usuario WHERE nombre LIKE '%_para_test';");
    await db.consultar("DELETE FROM Grupo WHERE nombre LIKE '%_para_test';");
    this.utilidades.log("Borrados exitósamente registros de tests de la BD.");
}