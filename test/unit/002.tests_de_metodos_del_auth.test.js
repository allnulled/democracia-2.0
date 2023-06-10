const { expect } = require("chai");
const child_process = require("child_process");
const utilidades_de_test = require(__dirname + "/utilidades_de_test_unitario.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Tests de métodos del auth", function() {

    this.timeout(1000 * 10);
 
    before(function() {
        
    });
 
    after(function() {
        
    });

    it("Tests se inician", function() {
        try {
            const { democracia } = utilidades_de_test;
        } catch (error) {
            throw error;
        }
    });

    it("Tests se terminan", async function () {
        try {
            const { democracia } = utilidades_de_test;
        } catch(error) {
            throw error;
        }
    });
    
});