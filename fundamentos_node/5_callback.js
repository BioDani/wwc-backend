/* 
Funciones Callback
Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.

La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback. 
*/

function hola(nombre, callback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        callback();    
    }, 1000);
};

function hablar(callbackHablar) {
    setTimeout(() => {
       console.log(`bla bla bla bla`);
       callbackHablar();
    }, 1000);    
};

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback();            
    }, 1000);   
};

console.log(`Iniciando proceso`);
hola(`Daniel`, function() {
    hablar(function() {
        adios(`Daniel`, function(){
            console.log(`Terminando proceso`);
    });
    })

});
// Callback hell: Incapacidad para gestionar el código. 
