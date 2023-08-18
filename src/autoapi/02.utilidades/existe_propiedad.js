module.exports = function(funcion_interna) {
    try {
        const propiedad = funcion_interna();
        return typeof propiedad !== "undefined" ? true : false;
    } catch(error) {
        return false;
    }
}