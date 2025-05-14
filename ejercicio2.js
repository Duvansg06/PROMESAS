//Manejo de Errores en Promesas
/*
Crear una promesa que se rechace si un número es menor a 0.5.
Manejar el error con .catch() e imprimir el mensaje "Promesa rechazada" en ese caso.
*/

//Creamos la funcion que retorna una promesa
const miPromesa = new Promise((resolve, reject) => {
    const valor = 0.3;
    if (valor < 0.5){
        reject("Promesa rechazada");
    }else{
        resolve("Promesa resuelta");
    }
});

// Usando la promesa
miPromesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});
