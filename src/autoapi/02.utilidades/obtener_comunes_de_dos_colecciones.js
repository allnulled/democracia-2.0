module.exports = function(lista_o_objeto_1, lista_o_objeto_2) {
    const es_lista = Array.isArray(lista_o_objeto_1); // Se sobreentiende que los 2 son del mismo tipo
    const lista_o_objeto_3 = es_lista ? [] : {};
    const lista_o_objeto_1_keys = Object.keys(lista_o_objeto_1);
    const lista_o_objeto_2_keys = Object.keys(lista_o_objeto_2);
    for(let index1 = 0; index1 < lista_o_objeto_1_keys.length; index1++) {
        const lista_o_objeto_1_key = lista_o_objeto_1_keys[index1];
        const lista_o_objeto_1_item_1 = lista_o_objeto_1[lista_o_objeto_1_key];
        for (let index2 = 0; index2 < lista_o_objeto_2_keys.length; index2++) {
            const lista_o_objeto_2_key = lista_o_objeto_2_keys[index2];
            const lista_o_objeto_2_item_2 = lista_o_objeto_2[lista_o_objeto_2_key];
            if(lista_o_objeto_1_item_1 === lista_o_objeto_2_item_2) {
                if (es_lista) {
                    lista_o_objeto_3.push(lista_o_objeto_1_item_1);
                } else {
                    lista_o_objeto_3[lista_o_objeto_1_key] = lista_o_objeto_1_item_1;
                }
            }
        }
    }
    return lista_o_objeto_3;
}