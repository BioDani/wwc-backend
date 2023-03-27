/* 
Para evitar que todo se vea asíncrono, y que la sintáxis sea más legible las operaciones secuenciales como hacer un archivo que se procese, subirlo para tener una URL y de ahí mandarla a una base de datos.

Async y Await nos permite definir una función de forma explícita como asíncrona y esperar a que la función termine. No estará bloqueando el hilo principal, pues estará esperando a que se resuelva con el event loop

La sintaxis asyc-await permite definir una función explicitamente como asíncrona. 

No bloquean el hilo principal, permite seguir escuchando otras funciones. 

Await: Solo es valido dentro de una función asíncrona
*/

async function hola(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Hola ${nombre}.`);
            resolve(nombre);
        }, 1000);
    })
};

async function hablar(nombre) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log(`${nombre} está diciendobla bla bla bla`);
            resolve(nombre);
            //reject(nombre); // Esto dispararía el error. 
         }, 1000);    
    })
    
};

async function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Adios ${nombre}.`);
            resolve(nombre);            
        }, 1000);
    })
       
};

async function main() { // El await solo podía ser ejecutado al interior de asíncrona
    let nombre = await hola(`Daniel`);
    await hablar(nombre); // await le dice que hay que esperar a que se ejecute hola() antes de seguir con algo más
    await hablar(nombre);
    await adios(nombre);
}

//¿Cómo saber que esta función síncrona se está ejecutando de manera asíncrona?
console.log(`Empieza el proceso.`);
main();
console.log(`Termina el proceso.`); // Va a ser la segunda intrucción que se ejecute en el proceso

/*
Está mostrando:
    Empieza el proceso.
    Termina el proceso.
    Hola Daniel.
    Daniel está diciendobla bla bla bla
    Daniel está diciendobla bla bla bla
    Adios Daniel.

Esta es la prueba de que funciones que se ven síncronas están siendo ejecutadas de manera asíncrona
*/