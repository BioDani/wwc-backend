/* NodeJs 

Es un ambiente de ejecución para javascript fuera del navegador creado desde el 2009. 
Esta fuera del navegador: no necesita un navegador para ejecutarlo. 

Concurrente: Monohilo, aunque todas sus entradas y salidas  son asincronas. De esta manera podemos tener un unico proceso corriendo en cada nucleo del procesador, lo que permite que no se quede bloqueado. 

Corre sobre el motor V8: convierte codigo jv en codigo maquina. 
-Más rapido
-Errores aparecen inmediatamente, no durante la ejecución. 

Event loop: Un proceso con un bucle que gestiona de forma asincrona, todas los eventos de la aplicación.
Siempre va poder recibir peticiones. 


 */

//monohilo
console.log(`Hola mundo`);

setInterval(function () {
  console.log(`Sigo acá`);
}, 1000);


