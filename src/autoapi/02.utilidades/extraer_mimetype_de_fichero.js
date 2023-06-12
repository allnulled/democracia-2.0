module.exports = function (subfichero, mimetype_por_defecto = "text/html") {
    try {
        const mimetype_resultado = mime_types.lookup(subfichero);
        if (typeof mimetype_resultado !== "string") {
            throw new Error("Mimetype no encontrado");
        }
        return mimetype_resultado;
    } catch (error) {
        return mimetype_por_defecto;
    }
};