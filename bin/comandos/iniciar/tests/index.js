module.exports = function (utilidades, version) {
    return require("child_process").execSync("npm run test", {
        stdio: [process.stdin, process.stdout, process.stderr]
    });
};