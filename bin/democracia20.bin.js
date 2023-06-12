#!/usr/bin/env node

const version = require(__dirname + "/../package.json").version;
const fs = require("fs");
const carpeta_de_comandos = __dirname + "/comandos";
const comandos_funcion = require(__dirname + "/comandos.js");
const comandos = comandos_funcion(carpeta_de_comandos);
const existe_comando = fs.existsSync(comandos.fichero);
const utilidades = require(__dirname + "/utilidades.js");
const { imprimo_traza_de_comando_erroneo, imprimo_ayuda } = utilidades;

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
                console.log(`[democracia20] [ ✔ ok] Comando finalizado exitosamente «democracia20 ${ comandos.comando.join(" ") }»`);
            }).catch(function(error) {
                console.log(`[democracia20] [error] Comando (asíncrono) erróneo «democracia20 ${comandos.comando.join(" ")}». Detalles del error:`);
                console.log(error);
                imprimo_traza_de_comando_erroneo();
            });
        } else {
            console.log(`[democracia20] [ ✔ ok] Comando finalizado exitosamente «democracia20 ${comandos.comando.join(" ")}»`);
        }
    } catch(error) {
        console.log(`[democracia20] [error] Comando erróneo «democracia20 ${comandos.comando.join(" ")}». Detalles del error:`);
        console.log(error);
        imprimo_traza_de_comando_erroneo();
    }
}