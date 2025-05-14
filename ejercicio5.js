// Usar Promise.race()
// Crear dos promesas: una se resuelve en 2 segundos y otra en 5 segundos.
// Usar Promise.race() para determinar cuál se resuelve primero y mostrar
// el resultado.

function promesa1 (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2000)
            console.log("Esta corriendo 1");
        })
    })
}

function promesa2 (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5000)
            console.log("Esta corriendo 2");
        })
    })
}

Promise.race([promesa1, promesa2])
  .then((resultado) => {
    console.log("Resultado de Promise.race():", resultado);
  })
  .catch((error) => {
    console.error("Error en Promise.race():", error);
  });

