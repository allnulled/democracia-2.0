module.exports = function (dato, veces = 10) {
    this.utilidades.tracear("this.utilidades.imprimir_veces");
    for(let index = 0; index < veces; index++) {
        const vez = veces[index];
        console.log(dato);
    }
}