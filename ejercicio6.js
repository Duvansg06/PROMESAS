//Crear una Función Asíncrona Simple
/*
Escribir una función asíncrona que devuelva un mensaje "Hola, Mundo" y consumirla con .then() o await.
*/

async function saludar() {
    return "Hola, Mundo";
}

saludar().then((mensaje) => {
    console.log(mensaje);
});
