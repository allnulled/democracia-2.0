module.exports = async function (utilidades_de_test) {
    try {

        const { chai, axios, ruta_de_app, tester, revisor_de_objeto } = utilidades_de_test;
        const { expect } = chai;
        const { subtest, iniciar } = tester("Conjunto de tests del servicio de datos para «al_insertar» + ", { debuga: 0 });
        const metadatos = {};

        subtest("Subtest contra una url concreta", async function () {
            try {

            } catch (error) {
                console.log(error);
                throw error;
            }
        });

        await iniciar();

    } catch (error) {
        throw error;
    }
}