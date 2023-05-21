const despliegue = async function(democracia) {
    try {
        await democracia.servidor.instancia.iniciar();
        console.log("democracia desplegada", democracia);
        return democracia;
    } catch(error) {
        throw error;
    }
};

const main = async function() {
    try {
        const democracia = await require(__dirname + "/democracia.js");
        return await despliegue(democracia);
    } catch(error) {
        console.log("Error al «src/iniciar.js»", error);
        console.log("El despliegue de la instancia de «Democracia 2.0» fue cancelado»");
    }
};

module.exports = main();