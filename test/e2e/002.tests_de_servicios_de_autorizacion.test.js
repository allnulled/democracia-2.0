const { expect } = require("chai");
const utilidades_de_test = require(__dirname + "/utilidades_de_test.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Tests de servicios de autorización", function() {
    
    this.timeout(1000 * 5);
 
    before(async function() {
        try {
            
        } catch(error) {
            console.log(error);
        }
    });
 
    after(function() {
        // 
    });

    it("Servicio de autorización para «registrarse»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «registrarse».js")(utilidades_de_test); } catch(error) { throw error; }
    });

    it("Servicio de autorización para «confirmar_usuario»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «confirmar_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «identificarse»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «identificarse».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «refrescarse»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «refrescarse».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «desidentificarse»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «desidentificarse».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «desregistrarse»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «desregistrarse».js")(utilidades_de_test); } catch (error) { throw error; }
    });

});