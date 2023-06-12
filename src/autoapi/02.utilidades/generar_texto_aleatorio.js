const alfabeto_ingles = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

module.exports = function(caracteres, alfabeto = alfabeto_ingles) {
    this.utilidades.tracear("this.utilidades.generar_texto_aleatorio");
    if (typeof caracteres !== "number") {
        throw new Error("Se requiere parámetro «caracteres» de ser un número para «this.utilidades.generar_texto_aleatorio»");
    }
    if (caracteres <= 0) {
        throw new Error("Se requiere parámetro «caracteres» de ser mayor que 0 para «this.utilidades.generar_texto_aleatorio»");
    }
    if (!Array.isArray(alfabeto)) {
        throw new Error("Se requiere parámetro «alfabeto» de ser una lista para «this.utilidades.generar_texto_aleatorio»");
    }
    let output = "";
    for (let index = 0; index < caracteres; index++) {
        output += alfabeto[Math.floor(Math.random() * alfabeto.length)];
    }
    return output;
};