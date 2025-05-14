
// EJERCICIO 1
// Crear una Promesa Simple
// Escribir una promesa que resuelva después de 2 segundos con el mensaje
// "Promesa cumplida". Luego, consumirla usando .then() para imprimir el
// mensaje en consola.

const prueba = (milisegundos) =>{
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve (milisegundos)
            console.log("Promesa cumplida")
            ;
        })
    } );
};
    
prueba (2000).then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});





















