//Crear una Función Asíncrona Simple
/*
Escribir una función asíncrona que devuelva un mensaje "Hola, Mundo" y consumirla con .then() o await.
*/

const funcionAsincrona = async () => {
    return "Hola, Mundo";
}

funcionAsincrona()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error("Error:", error);
    });