//Procesar Datos en Serie con await

/**
 * 
Crear una función que procese una lista de nombres (en un arreglo) uno por uno.
Usa await para simular un retraso de 1 segundo entre cada nombre procesado.
Implementar la función delay y el arreglo de nombres.
 */

async function procesarNombres(nombres) {
    for (const nombre of nombres) {
        await delay(1000);
        console.log(`Procesado: ${nombre}`);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const nombres = ["Duvan", "Diego", "Karol"]
procesarNombres(nombres)
    .then(() => {
        console.log("Todos los nombres han sido procesados.");
    })
    .catch(error => {
        console.error("Error al procesar los nombres:", error);
    });