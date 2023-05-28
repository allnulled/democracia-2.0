const { expect } = require("chai");
const utilidades_de_test = require(__dirname + "/utilidades_de_test.js");
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
            utilidades_de_test.subproceso_de_democracia.kill();
        } catch (error) {
            throw error;
        }
    });

});