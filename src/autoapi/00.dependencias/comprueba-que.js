(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
        typeof define === "function" && define.amd ? define(factory) :
            (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Comprueba = factory());
})(this, (function () {

    class Comprueba {

        static que(...args) {
            return new this(...args);
        }

        constructor(objetivo, identificador = "?", identificador_de_error = "?") {
            this.objetivo = objetivo;
            this.identificador = identificador;
            this.identificador_de_error = identificador_de_error;
            this.y = this;
        }

        es_igual_que(value, valueID = undefined) {
            if (this.objetivo === value) {
                return this;
            }
            throw new Error("Comprueba que «" + this.identificador + "» es igual que «" + (valueID || value) + "» [error: " + this.identificador_de_error + "]");
        }

        es_indefinido() {
            if (typeof this.objetivo === "undefined") {
                return this;
            }
            throw new Error("Comprueba que «" + this.identificador + "» es indefinido [error: " + this.identificador_de_error + "]");
        }

        no_es_indefinido() {
            if (typeof this.objetivo !== "undefined") {
                return this;
            }
            throw new Error("Comprueba que «" + this.identificador + "» no es indefinido [error: " + this.identificador_de_error + "]");
        }

        es_booleano() {
            if (typeof this.objetivo === "boolean") {
                return this;
            }
            throw new Error("Comprueba que «" + this.identificador + "» es un booleano [error: " + this.identificador_de_error + "]");
        }

        es_numero() {
            if (typeof this.objetivo === "number") {
                return this;
            }
            throw new Error("Comprueba que «" + this.identificador + "» es un número [error: " + this.identificador_de_error + "]");
        }

        es_texto() {
            if (typeof this.objetivo === "string") {
                return this;
            }
            throw new Error("Comprueba que «" + this.identificador + "» es un texto [error: " + this.identificador_de_error + "]");
        }

        es_objeto() {
            if (typeof this.objetivo === "object") {
                return this;
            }
            throw new Error("Comprueba que «" + this.identificador + "» es un objeto [error: " + this.identificador_de_error + "]");
        }

        es_funcion() {
            if (typeof this.objetivo === "function") {
                return this;
            }
            throw new Error("Comprueba que «" + this.identificador + "» es una función [error: " + this.identificador_de_error + "]");
        }

        es_lista() {
            if (Array.isArray(this.objetivo)) {
                return this;
            }
            throw new Error("Comprueba que «" + this.identificador + "» es una lista [error: " + this.identificador_de_error + "]");
        }

        es_mayor_que(value, valueID = undefined) {
            try {
                if (this.objetivo > value) {
                    return this;
                }
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» es (comparable y) mayor que «" + (valueID || value) + "» [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» es mayor que «" + (valueID || value) + "» [error: " + this.identificador_de_error + "]");
        }

        es_menor_que(value, valueID = undefined) {
            try {
                if (this.objetivo < value) {
                    return this;
                }
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» es (comparable y) menor que «" + (valueID || value) + "» [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» es menor que «" + (valueID || value) + "» [error: " + this.identificador_de_error + "]");
        }

        es_instancia_de(someClass, someClassID = false) {
            try {
                if (this.objetivo instanceof someClass) {
                    return this;
                }
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» es (comparable e) instancia de «" + (someClassID || someClass) + "» [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» es instancia de «" + (someClassID || someClass) + "» [error: " + this.identificador_de_error + "]");
        }

        es_fecha() {
            try {
                if (this.objetivo instanceof Date) {
                    return this;
                }
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» es una fecha [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» es una fecha [error: " + this.identificador_de_error + "]");
        }

        es_jsonable() {
            try {
                JSON.parse(this.objetivo);
                return this;
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» es jsonable [error: " + this.identificador_de_error + "]");
            }
        }

        tiene_longitud_mayor_que(value, valueID = undefined) {
            try {
                if (this.objetivo.length > value) {
                    return this;
                }
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» tiene longitud (comparable y) mayor que «" + (valueID || value) + "» [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» tiene longitud mayor que «" + (valueID || value) + "» [error: " + this.identificador_de_error + "]");
        }

        tiene_longitud_menor_que(value, valueID = undefined) {
            try {
                if (this.objetivo.length < value) {
                    return this;
                }
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» tiene longitud (comparable y) menor que «" + (valueID || value) + "» [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» tiene longitud menor que «" + (valueID || value) + "» [error: " + this.identificador_de_error + "]");
        }

        puede(filter, filterID = "pasar el filtro") {
            try {
                if (typeof filter === "function") {
                    const result = filter(this.objetivo, this);
                    if (result === true) {
                        return this;
                    }
                }
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» (es llamable y) puede «" + filterID + "» [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» puede «" + filterID + "» [error: " + this.identificador_de_error + "]");
        }

        no_puede(filter, filterID = "pasar el filtro") {
            try {
                if (typeof filter === "function") {
                    const result = filter(this.objetivo, this);
                    if (result === false) {
                        return this;
                    }
                }
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» (es llamable y) no puede «" + filterID + "» [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» no puede «" + filterID + "» [error: " + this.identificador_de_error + "]");
        }

        lanza_error_al(filter, filterID = "usarlo en el filtro") {
            if (typeof filter === "function") {
                try {
                    filter(this.objetivo, this);
                } catch (error) {
                    return this;
                }
                throw new Error("Comprueba que «" + this.identificador + "» (es llamable y) lanza error al «" + filterID + "» [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» lanza error al «" + filterID + "» [error: " + this.identificador_de_error + "]");
        }

        no_lanza_error_al(filter, filterID = "usarlo en el filtro") {
            try {
                if (typeof filter === "function") {
                    filter(this.objetivo, this);
                    return this;
                }
            } catch (error) {
                throw new Error("Comprueba que «" + this.identificador + "» (es llamable y) no lanza error al «" + filterID + "» [error: " + this.identificador_de_error + "]");
            }
            throw new Error("Comprueba que «" + this.identificador + "» no lanza error al «" + filterID + "» [error: " + this.identificador_de_error + "]");
        }

    }

    Comprueba.default = Comprueba;

    return Comprueba;

}));