const { expect } = require("chai");
const child_process = require("child_process");
const utilidades_de_test = require(__dirname + "/utilidades_de_test_unitario.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Tests de inicio (unitarios)", function() {

    this.timeout(1000 * 10);
 
    before(function() {
        
    });
 
    after(function() {
        
    });

    it("Tests se inician", function() {
        
    });

    it("Tests localizan las dependencias", async function() {
        
    });

    it("Tests levantan el servidor de «democracia 2.0»", async function () {
        try {
            const democracia = await require(__dirname + "/../../src/iniciar.js");
            utilidades_de_test.democracia = democracia;
        } catch(error) {
            throw error;
        }
    });
    
});