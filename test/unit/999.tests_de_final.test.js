const { expect } = require("chai");
const utilidades_de_test = require(__dirname + "/utilidades_de_test_unitario.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Tests de final", function () {

    this.timeout(1000 * 5);

    before(function () {
        //
    });

    after(function () {
        // 
    });

    it("Cancelación de proceso de «democracia-2.0» desde API", async function () {
        try {
            const { democracia } = utilidades_de_test;
            await democracia.utilidades.terminar_procesos_derivados();
        } catch (error) {
            throw error;
        }
    });

});