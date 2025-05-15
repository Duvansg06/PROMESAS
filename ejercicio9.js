// Promise.all en una Función Asíncrona
// Escribir una función asíncrona que use Promise.all para esperar varias
// promesas. Por ejemplo, realizar tres búsquedas simuladas (con un retraso
// aleatorio) y mostrar los resultados juntos.

const pro1 = Promise.resolve(25);
const pro2 = new Promise
((resolve)=> setTimeout(resolve, 2000, 20));
const pro3 = Promise.resolve(80);

Promise.all([pro1, pro2,
pro3]).then((resultados) => {console.log(resultados);
});

