const { expect } = require("chai");
const utilidades_de_test = require(__dirname + "/utilidades_de_test_e2e.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Test de servicios de datos y auth", function () {

    this.timeout(1000 * 10);

    before(function () {
        //
    });

    after(function () {
        // 
    });

    it("Función ayudante para al seleccionar+aplicar_autorizacion", async function () {
        try { await require(__dirname + "/servicios_de_datos_y_auth/Servicio de datos para «al_seleccionar.aplicar_autorizacion».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Función ayudante para al insertar+aplicar_autorizacion", async function () {
        try { await require(__dirname + "/servicios_de_datos_y_auth/Servicio de datos para «al_insertar.aplicar_autorizacion».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Función ayudante para al actualizar+aplicar_autorizacion", async function () {
        try { await require(__dirname + "/servicios_de_datos_y_auth/Servicio de datos para «al_actualizar.aplicar_autorizacion».js")(utilidades_de_test); } catch (error) { throw error; }
    });

    it("Función ayudante para al eliminar+aplicar_autorizacion", async function () {
        try { await require(__dirname + "/servicios_de_datos_y_auth/Servicio de datos para «al_eliminar.aplicar_autorizacion».js")(utilidades_de_test); } catch (error) { throw error; }
    });
    
});