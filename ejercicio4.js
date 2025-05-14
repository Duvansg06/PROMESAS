//Usar Promise.all()
/*
Crear tres promesas que se resuelvan en diferentes tiempos (por ejemplo, 1s, 2s, 3s).
Usar Promise.all() para esperar a que todas se resuelvan e imprimir los resultados en un arreglo.
*/

const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 1 resuelta");
    }, 1000);
});
const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 2 resuelta");
    }, 2000);
});
const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 3 resuelta");
    }, 3000);
});

Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Todas las promesas se resolvieron:");
        console.log(resultados);
    })
    .catch((error) => {
        console.error("Error en alguna de las promesas:", error);
    });