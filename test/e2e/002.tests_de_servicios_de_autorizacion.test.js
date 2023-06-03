const { expect } = require("chai");
const utilidades_de_test = require(__dirname + "/utilidades_de_test_e2e.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Tests de servicios de autorización", function() {
    
    this.timeout(1000 * 10);
 
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

    it("Servicio de autorización para «entrar»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «entrar».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «refrescarse»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «refrescarse».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «salir»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «salir».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «eliminarse»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «eliminarse».js")(utilidades_de_test); } catch (error) { throw error; }
    });

});