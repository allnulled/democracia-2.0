const fs = require("fs");
const cli_color = require("cli-color");
const version = require(__dirname + "/../package.json").version;
const carpeta_de_comandos = __dirname + "/comandos";
const comandos_funcion = require(__dirname + "/comandos.js");
const comandos = comandos_funcion(carpeta_de_comandos);
const existe_comando = fs.existsSync(comandos.fichero);
const imprimo_traza_de_comando_erroneo = function () {
    console.log(cli_color.redBright(`[democracia20] [Error] Traza del comando erróneo:`));
    console.log(cli_color.redBright(`[democracia20]    - Comando:    `) + comandos.comando.join(" "));
    console.log(cli_color.redBright(`[democracia20]    - Origen:     `) + carpeta_de_comandos);
    console.log(cli_color.redBright(`[democracia20]    - Fichero:    `) + comandos.fichero);
    console.log(cli_color.redBright(`[democracia20]    - Argumentos: `) + JSON.stringify(comandos.parametros));
    console.log(cli_color.redBright(`[democracia20]    - Versión:    `) + version);
    imprimo_ayuda();
};
const imprimo_ayuda = function () {
    console.log(cli_color.cyanBright(`[democracia20] `));
    console.log(cli_color.cyanBright(`[democracia20] [Ayuda] democracia20 [versión ${version}]`));
    console.log(cli_color.cyanBright(`[democracia20] `));
    console.log(cli_color.cyanBright(`[democracia20] Ayuda rápida para democracia20 (línea de comandos).`));
    console.log(cli_color.cyanBright(`[democracia20] `));
    console.log(cli_color.cyanBright(`[democracia20]  ~{ Sintaxis }~`));
    console.log(cli_color.cyanBright(`[democracia20]    `) + "democracia20 { comando } { argumentos }");
    console.log(cli_color.cyanBright(`[democracia20] `));
    console.log(cli_color.cyanBright(`[democracia20]  ~{ Ejemplos }~`));
    console.log(cli_color.cyanBright(`[democracia20] `) + "   democracia20 iniciar");
    console.log(cli_color.cyanBright(`[democracia20] `) + "   democracia20 iniciar tests");
    console.log(cli_color.cyanBright(`[democracia20] `) + "   democracia20 iniciar tests e2e");
    console.log(cli_color.cyanBright(`[democracia20] `) + "   democracia20 iniciar tests unitarios");
    console.log(cli_color.cyanBright(`[democracia20] `));
    console.log(cli_color.cyanBright(`[democracia20]  ~{ Comandos }~`));
    console.log(cli_color.cyanBright(`[democracia20] `));
    console.log(cli_color.cyanBright(`[democracia20]    democracia20 iniciar`) + "");
    console.log(cli_color.cyanBright(`[democracia20] `) + "     Equivalente a «npm run start»");
    console.log(cli_color.cyanBright(`[democracia20] `));
    console.log(cli_color.cyanBright(`[democracia20]    democracia20 iniciar tests`) + "");
    console.log(cli_color.cyanBright(`[democracia20] `) + "     Equivalente a «npm run test»");
    console.log(cli_color.cyanBright(`[democracia20] `));
    console.log(cli_color.cyanBright(`[democracia20]    democracia20 iniciar tests e2e`) + "");
    console.log(cli_color.cyanBright(`[democracia20] `) + "     Equivalente a «npm run test:e2e»");
    console.log(cli_color.cyanBright(`[democracia20] `));
    console.log(cli_color.cyanBright(`[democracia20]    democracia20 iniciar tests unitarios`) + "");
    console.log(cli_color.cyanBright(`[democracia20] `) + "     Equivalente a «npm run test:unit»");
    console.log(cli_color.cyanBright(`[democracia20] `));
};

module.exports = {
    imprimo_traza_de_comando_erroneo,
    imprimo_ayuda,
    carpeta_de_comandos,
    comandos_funcion,
    comandos,
    existe_comando,
    version
};