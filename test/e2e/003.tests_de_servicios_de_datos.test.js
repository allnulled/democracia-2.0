const { expect } = require("chai");
const utilidades_de_test = require(__dirname + "/utilidades_de_test.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Test de servicios de datos", function () {

    this.timeout(1000 * 5);

    before(function () {
        //
    });

    after(function () {
        // 
    });

    it("Servicio de datos para «actualizar_fichero»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «actualizar_fichero».js"); } catch(error) { throw error; }
    });

    it("Servicio de datos para «actualizar_item»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «actualizar_item».js"); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «actualizar»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «actualizar».js"); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «eliminar_fichero»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «eliminar_fichero».js"); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «eliminar_item»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «eliminar_item».js"); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «eliminar»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «eliminar».js"); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «insertar_fichero»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «insertar_fichero».js"); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «insertar_item»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «insertar_item».js"); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «insertar»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «insertar».js"); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «seleccionar_fichero»", async function() {
        try { await require(__dirname + "/servicios_de_datos/Servicio de datos para «seleccionar_fichero».js"); } catch(error) { throw error; }
    });
    
    it("Servicio de datos para «seleccionar»", function(done) {
        done();
    });

});