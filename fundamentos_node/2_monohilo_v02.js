// Ejemplo 2 de ejecución asincrona
/* 
Event Queue: Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

Event Loop: Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

Thread Pool: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.
 */
console.log(`Inicio`);

let i = 0;
setInterval(() => {
    console.log(i);
    i++;
  }, 500);

console.log(`Siguiente`);

/* Imprime esto: 
Inicio
Siguiente
0
1
2
3
4
5
6
7
8
9
10
11
12
*/
