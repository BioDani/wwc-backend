/*
Modulos globales

Estos vienen incluidos en nodejs.

global: es el objeto donde están guardados todos lo modulos que vienen por defecto en nodejs
*/

console.log(global);

/* 1. setInterval: Llama a una función cada cierto intervalo de tiempo. 

setInterval(() => {
    console.log('hola');
}, 1000);  // Ejecutará el hola cada 1000 milisegundos 

*/

// 2. clearInterval: Detiene un setInterval
let i = 1;
let intervalo = setInterval(() => {
    console.log(`console ${i}`);
    if (i === 3) {  // Cuando el contador llega a 3 detiene el setInterval
        clearInterval(intervalo); // se le dice cuál es el setInterval que se quiere detener.
    }
    i++;
}, 1000);

