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

    //////////////////////////////////////////////////////////////////////////

    it("Servicio de autorización para «registrarse»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «registrarse».js")(utilidades_de_test); } catch(error) { throw error; }
    });

    it("Servicio de autorización para «confirmar_usuario»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «confirmar_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «entrar»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «entrar».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «autentificarse»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «autentificarse».js")(utilidades_de_test); } catch (error) { throw error; }
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

    //////////////////////////////////////////////////////////////////////////

    // Método auth para loggearse como administrador:

    it("Servicio de autorización para «entrar_como_administrador»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «entrar_como_administrador».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    // Métodos auth para agregar:

    it("Servicio de autorización para «agregar_usuario»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «agregar_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «agregar_grupo»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «agregar_grupo».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «agregar_permiso»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «agregar_permiso».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    // Métodos auth para seleccionar:

    it("Servicio de autorización para «seleccionar_usuario_segun_nombre»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «seleccionar_usuario_segun_nombre».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «seleccionar_grupo_segun_nombre»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «seleccionar_grupo_segun_nombre».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «seleccionar_permiso_segun_nombre»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «seleccionar_permiso_segun_nombre».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «seleccionar_usuario»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «seleccionar_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «seleccionar_grupo»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «seleccionar_grupo».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «seleccionar_permiso»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «seleccionar_permiso».js")(utilidades_de_test); } catch (error) { throw error; }
    });
    
    // Métodos auth para actualizar:
    
    it("Servicio de autorización para «actualizar_usuario»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «actualizar_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });
    
    it("Servicio de autorización para «actualizar_grupo»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «actualizar_grupo».js")(utilidades_de_test); } catch (error) { throw error; }
    });
    
    it("Servicio de autorización para «actualizar_permiso»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «actualizar_permiso».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    // Métodos auth para eliminar:

    it("Servicio de autorización para «eliminar_usuario»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «eliminar_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });
    
    it("Servicio de autorización para «eliminar_grupo»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «eliminar_grupo».js")(utilidades_de_test); } catch (error) { throw error; }
    });
    
    it("Servicio de autorización para «eliminar_permiso»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «eliminar_permiso».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    
    // Métodos híbridos:

    it("Servicio de autorización para «agregar_permiso_a_grupo»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «agregar_permiso_a_grupo».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «agregar_permiso_a_usuario»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «agregar_permiso_a_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «agregar_grupo_a_usuario»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «agregar_grupo_a_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «seleccionar_permiso_de_grupo»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «seleccionar_permiso_de_grupo».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «seleccionar_permiso_de_usuario»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «seleccionar_permiso_de_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «seleccionar_grupo_de_usuario»", async function () {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «seleccionar_grupo_de_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «eliminar_permiso_a_grupo»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «eliminar_permiso_a_grupo».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «eliminar_permiso_a_usuario»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «eliminar_permiso_a_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Servicio de autorización para «eliminar_grupo_a_usuario»", async function() {
        try { await require(__dirname + "/servicios_de_autorizacion/Servicio de autorización para «eliminar_grupo_a_usuario».js")(utilidades_de_test); } catch (error) { throw error; }
    });


    //////////////////////////////////////////////////////////////////////////

});


    