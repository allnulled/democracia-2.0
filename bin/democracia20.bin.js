#!/usr/bin/env node

const fs = require("fs");
const cli_color = require("cli-color");
const utilidades = require(__dirname + "/utilidades.js");
const { imprimo_traza_de_comando_erroneo, imprimo_ayuda, carpeta_de_comandos, comandos_funcion, comandos, existe_comando, version } = utilidades;

if(!existe_comando) {
    imprimo_traza_de_comando_erroneo();
} else {
    try {
        let modulo_binario = require(comandos.fichero);
        if(typeof modulo_binario === "function") {
            modulo_binario = modulo_binario(utilidades, version);
        }
        if(modulo_binario instanceof Promise) {
            modulo_binario.then(function() {
                console.log(cli_color.greenBright(`[democracia20] [ ✔ ok] Comando (asíncrono) finalizado exitosamente «democracia20 ${ comandos.comando.join(" ") }»`));
                return "OK";
            }).catch(function(error) {
                console.log(cli_color.redBright(`[democracia20] [error] Comando (asíncrono) erróneo «democracia20 ${comandos.comando.join(" ")}». Detalles del error:`));
                console.log(error);
                return imprimo_traza_de_comando_erroneo();
            });
        } else {
            console.log(cli_color.greenBright(`[democracia20] [ ✔ ok] Comando finalizado exitosamente «democracia20 ${comandos.comando.join(" ")}»`));
        }
    } catch(error) {
        console.log(cli_color.redBright(`[democracia20] [error] Comando erróneo «democracia20 ${comandos.comando.join(" ")}». Detalles del error:`));
        console.log(error);
        imprimo_traza_de_comando_erroneo();
    }
}