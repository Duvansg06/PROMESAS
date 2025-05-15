// Uso de await con una Promesa
// Crea una función asíncrona que utilice await para esperar una promesa que
// resuelve en 3 segundos y luego imprime "Proceso terminado".




function tarea1 (){
    return new Promise((resolve, reject) => {
        function pendiente(){
            resolve(5000);
        }setTimeout(pendiente,4000)
    })
}

async function tarea2() {
console.log("Iniciando tarea...");
const valor = await tarea1();
console.log("Tarea completada despuésde 4 segundos con valor: ", valor);
}

tarea2();