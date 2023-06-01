module.exports = function(objeto, ids, valor_esperado) {
    let valor = objeto;
    for(let index = 0; index < ids.length; index++) {
        const id = ids[index];
        if (["object", "function"].indexOf(typeof valor) === -1) {
            throw new Error(`El revisor_de_objeto no pudo acceder al identificador «${id}» (índice: ${index})`);
        }
        valor = valor[id];
    }
    if (typeof valor_esperado === "function") {
        const expectativa = valor_esperado(valor);
        if(!expectativa) {
            throw new Error("El revisor_de_objeto comprobó que el valor esperado no coincide");
        }
    } else {
        if(valor !== valor_esperado) {
            throw new Error("El revisor_de_objeto comprobó que el valor esperado no coincide");
        }
    }
    return true;
}