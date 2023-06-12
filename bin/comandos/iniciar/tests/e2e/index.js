module.exports = function (utilidades, version) {
    return require("child_process").execSync("npm run test:e2e", {
        stdio: [process.stdin, process.stdout, process.stderr]
    });
};