module.exports = function (utilidades, version) {
    return require("child_process").execSync("npm run test:unit", {
        stdio: [process.stdin, process.stdout, process.stderr]
    });
};