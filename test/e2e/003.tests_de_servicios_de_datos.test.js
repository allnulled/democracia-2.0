const { expect } = require("chai");
const utilidades_de_test = require(__dirname + "/utilidades_de_test_e2e.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Test de servicios de datos", function () {

    this.timeout(1000 * 10);

    before(function () {
        //
    });

    after(function () {
        // 
    });

    // @Seccion: crud básicas
    
    it("Servicio de datos para «insertar_dato»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «insertar_dato».js")(utilidades_de_test); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «actualizar_dato»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «actualizar_dato».js")(utilidades_de_test); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «eliminar_dato»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «eliminar_dato».js")(utilidades_de_test); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «seleccionar_dato»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «seleccionar_dato».js")(utilidades_de_test); } catch (error) { throw error; }
    });
    
    // @Seccion: elementos de lista
    
    it("Servicio de datos para «actualizar_elemento»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «actualizar_elemento».js")(utilidades_de_test); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «eliminar_elemento»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «eliminar_elemento».js")(utilidades_de_test); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «insertar_elemento»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «insertar_elemento».js")(utilidades_de_test); } catch(error) { throw error; }
    });
    
    // @Seccion: ficheros

    it("Servicio de datos para «seleccionar_fichero»", async function () {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «seleccionar_fichero».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de datos para «actualizar_fichero»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «actualizar_fichero».js")(utilidades_de_test); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «eliminar_fichero»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «eliminar_fichero».js")(utilidades_de_test); } catch(error) { throw error; }
    });

    it("Servicio de datos para «insertar_fichero»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «insertar_fichero».js")(utilidades_de_test); } catch(error) { throw error; }
    });
    
});