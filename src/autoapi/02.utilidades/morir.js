module.exports = function(...args) {
    console.log("[MORIR]", ...args);
    process.exit(0);
};