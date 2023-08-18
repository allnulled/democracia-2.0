const { expect } = require("chai");
const utilidades_de_test = require(__dirname + "/utilidades_de_test_e2e.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Tests de final", function () {

    this.timeout(1000 * 5);

    before(function () {
        //
    });

    after(function () {
        // 
    });

    it("Cancelación de proceso de «democracia-2.0» desde línea de comandos", async function () {
        try {
            const inicio = await utilidades_de_test.democracia20;
            console.log(inicio)
            inicio.utilidades.terminar_procesos_derivados();
        } catch (error) {
            throw error;
        }
    });

});