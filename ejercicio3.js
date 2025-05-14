// Encadenamiento de Promesas
// Simular un flujo de pasos donde cada paso tarda 1 segundo en completarse.
// Usar tres promesas y encadenarlas con .then() para que se ejecuten en
// orden.

function promesa1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (1000)
            console.log("Promesa 1 completada");
            
        })
    })
}

function promesa2 (){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(1000)
            console.log("Promesa 2 completada");
        })
    })
}


function promesa3 (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1000)
            console.log("Promesa 3 completada");
        })
    })
}

promesa1()
  .then(() => promesa2())
  .then(() => promesa3())
  .then(() => console.log("Todos los pasos completados"));