module.exports = function() {
    return {
        fs: require("fs"),
        url: require("url"),
        path: require("path"),
        ruta: (...args) => {
            return this.dependencias.instancia.path.resolve(__dirname, "..", "..", "..", ...args);
        },
        noop: () => undefined,
        comprueba: require(__dirname + "/comprueba-que.js"),
        cli_color: require("cli-color"),
        ejs: require("ejs"),
        express: require("express"),
        body_parser: require("body-parser"),
        cors: require("cors"),
        multer: require("multer"),
        sqlite3: require("sqlite3").verbose(),
        mysql2original: require("mysql2"),
        mysql2: require("mysql2/promise"),
        sqlstring: require("sqlstring"),
        mime_types: require("mime-types"),
    };
};
global.ddd = function(...args) {
    for (let index = 0; index < args.length; index++) {
        const arg = args[index];
        console.log("[ DDD  ]", arg);
    }
}