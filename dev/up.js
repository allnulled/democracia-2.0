const main = async function() {
    try {
        const fs = require("fs");
        const path = require("path");
        const child_process = require("child_process");
        const project_dir = path.resolve(__dirname + "/..");
        const stdio = [process.stdin, process.stdout, process.stderr];
        Instalar_dependencias_npm: {
            if(fs.existsSync(path.resolve(project_dir, "node_modules"))) {
                break Instalar_dependencias_npm;
            }
            console.log("[*] Instalando dependencias npm de «democracia 2.0»");
            try {
                child_process.execSync("npm i -s", { cwd: project_dir, stdio });
                console.log("[✔] OK!");
            } catch(error) {
                console.log("[✘] Error instalando dependencias npm de «democracia 2.0»:", error);
            }
        }
        Instalar_democracia_binario: {
            try {
                child_process.execSync("democracia20", { cwd: project_dir, stdio });
            } catch(error) {
                try {
                    console.log("[*] Instalando «democracia20» como comando de consola global");
                    child_process.execSync("npm link", { cwd: project_dir, stdio });
                } catch(error) {
                    console.log("[✘] Error instalando «democracia20» como comando de consola global:", error);
                }
            }
        }
        Ejecutar_democracia: {
            child_process.execSync("npm start", { cwd: project_dir, stdio });
        }
    } catch(error) {
        console.log("Falló el comando «npm run up»", error);
    }
};

module.exports = main();