module.exports = function() {
    return {
        fs: require("fs"),
        path: require("path"),
        ruta: (...args) => {
            return this.dependencias.instancia.path.resolve(__dirname, "..", "..", "..", ...args);
        },
        noop: () => undefined,
        express: require("express"),
        body_parser: require("body-parser"),
        cors: require("cors"),
        multer: require("multer"),
        sqlite3: require("sqlite3").verbose(),
        mysql2original: require("mysql2"),
        mysql2: require("mysql2/promise")
    };
};