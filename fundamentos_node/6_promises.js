/*
Las promesas 
son una sintaxis mas elegante y legible de realizar callbacks, creando así un código mucho más escalable y entendible para todas las personas.
Una promesa al final no deja de ser un callback, solo que, con la novedad de tener estados, las promesas cuentan con 3 estados: resuelta, en progreso y en fallo.

Para utilizar una promesa solo debemos de instanciar una nueva, una promesa en si es una función que recibe dos parámetros, resolve y reject, que son los dos estados de una promesa.
Utilizamos resolve para retornar el valor deseado cuando una función se ejecute y utilizamos reject para cuando una función retorna un valor no deseado.
*/

function hola(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Hola ${nombre}.`);
            resolve(nombre);
        }, 1000);
    })
};

function hablar(nombre) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log(`${nombre} está diciendobla bla bla bla`);
            resolve(nombre);
            //reject(nombre); // Esto dispararía el error. 
         }, 1000);    
    })
    
};

function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Adios ${nombre}.`);
            resolve(nombre);            
        }, 1000);
    })
       
};


console.log(`Iniciando proceso`);
hola(`Daniel`)
    .then(hablar) // No requiere parámetro,es el mismo que en hola()
    .then(hablar)
    .then(adios)
    .catch((err) => { // cualquier función que falla viene al catch
        console.error('Hubo un error.');
        console.error(err);
    });
