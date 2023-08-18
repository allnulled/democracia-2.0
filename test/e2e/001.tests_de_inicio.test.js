const { expect } = require("chai");
const child_process = require("child_process");
const utilidades_de_test = require(__dirname + "/utilidades_de_test_e2e.js");
const { axios, configuraciones_de_test } = utilidades_de_test;

describe("✔✔✔ Tests de inicio (end to end)", function() {

    this.timeout(1000 * 10);
 
    before(function() {
        
    });
 
    after(function() {
        
    });

    it("Tests se inician", function() {
        
    });

    it("Tests abren editor de código", async function () {
        const subproceso = child_process.spawn("npm", ["run", "edit"], {
            cwd: __dirname + "/..",
            stdio: [process.stdin, process.stderr, process.stdout]
        });
        setTimeout(() => new Promise((ok, fail) => {
            ok()
        }), 2000);
    });

    it("Tests localizan las dependencias", async function() {
        
    });

    it("Tests levantan el servidor de «democracia 2.0»", async function () {
        try {
            const configuraciones_de_subproceso = {
                cwd: __dirname + "/..",
                stdio: [process.stdin, process.stderr, process.stdout]
            };
            utilidades_de_test.democracia20 = require(__dirname + "/../../src/iniciar.js");
            setTimeout(() => new Promise((ok, fail) => {
                ok()
            }), 2000);
        } catch(error) {
            utilidades_de_test.pid_de_proceso_de_servidor = require(__dirname + "/../src/pid.json");
        }
    });

    it("Tests esperan el despliegue del servidor", function (done) {
        setTimeout(function () {
            done();
        }, 1000 * 2);
    });
    
});