const hidratar_arquitectura = function (arquitectura_deshidratada) {
    const tablas_ids = Object.keys(arquitectura_deshidratada.esquema);
    for(let index_tablas = 0; index_tablas < tablas_ids.length; index_tablas++) {
        const tabla_id = tablas_ids[index_tablas];
        const tabla = arquitectura_deshidratada.esquema[tabla_id];
        const tabla_atributos_ids = Object.keys(tabla.atributos_de_tabla);
        for(let index_atributos_de_tabla = 0; index_atributos_de_tabla < tabla_atributos_ids.length; index_atributos_de_tabla++) {
            const tabla_atributo_id = tabla_atributos_ids[index_atributos_de_tabla];
            const tabla_atributo = tabla.atributos_de_tabla[tabla_atributo_id];
            if(tabla_atributo.es_tipo === "js") {
                arquitectura_deshidratada.esquema[tabla_id].atributos_de_tabla[tabla_atributo_id].valor = eval(tabla_atributo.valor);
            } else if (tabla_atributo.es_tipo === "json") {
                arquitectura_deshidratada.esquema[tabla_id].atributos_de_tabla[tabla_atributo_id].valor = JSON.parse(tabla_atributo.valor);
            }
        }
    }
    this.utilidades.morir(arquitectura_deshidratada.esquema.Usuario.atributos_de_tabla);

};

module.exports = function () {
    this.utilidades.tracear("this.configuraciones.instancia");
    const arquitectura = require(__dirname + "/arquitectura.calo-db.json");
    hidratar_arquitectura.call(this, arquitectura);
    return {
        tipo: "configuraciones",
        estado: "cargado",
        valores: require(__dirname + "/configuraciones.json"),
        arquitectura: arquitectura,
        obtener: (id, por_defecto = undefined) => {
            this.utilidades.tracear("this.configuraciones.instancia.obtener");
            if (!(id in this.configuraciones.instancia.valores)) {
                return por_defecto;
            }
            return this.configuraciones.instancia.valores[id];
        },
        establecer: (id, valor) => {
            this.utilidades.tracear("this.configuraciones.instancia.establecer");
            this.configuraciones.instancia.valores[id] = valor;
            return this.configuraciones.instancia.valores[id];
        }
    };
};