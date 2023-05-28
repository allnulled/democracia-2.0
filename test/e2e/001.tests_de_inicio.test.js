const { expect } = require("chai");
const child_process = require("child_process");
const utilidades_de_test = require(__dirname + "/utilidades_de_test.js");
const { axios } = utilidades_de_test;

describe("✔✔✔ Tests de inicio", function() {

    this.timeout(1000 * 5);
 
    before(function() {
        
    });
 
    after(function() {
        
    });

    it("Tests se inician", function(done) {
        done();
    });

    it("Tests abren editor de código", async function () {
        const subproceso = child_process.spawn("npm", ["run", "edit"], {
            cwd: __dirname + "/.."
        });
    });

    it("Tests localizan las dependencias", async function() {
        
    });

    it("Tests levantan el servidor de «democracia 2.0»", async function () {
        try {
            const subproceso = child_process.spawn("npm", ["start"], {
                cwd: __dirname + "/..",
                stdio: [process.stdin, process.stdout, process.stderr]
            });
            utilidades_de_test.pid_de_proceso_de_servidor = subproceso.pid;
            utilidades_de_test.subproceso_de_democracia = subproceso;
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