const sqlite3 = require("sqlite3");

let conexion = undefined;


(async () => {
    try {
        await new Promise((ok, fail) => {
            conexion = new sqlite3.Database(__dirname + "/../../src/datos_locales.sqlite3", (error) => {
                if (error) {
                    console.log("errores al conectar", error);
                    return fail(error);
                }
                return ok();
            });
        });
        await conexion.all("SELECT * FROM Usuario_no_confirmado;", function(error, data) {
            if(error) {
                return console.log("ERROR EN SELECT:", error);
            }
            console.log(data);
        });
    } catch(error) {
        console.log(error);
    }
})();
