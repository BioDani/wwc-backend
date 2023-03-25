// Variables de entorno: Accedemos al proceso (process) y a las variables de entorno(env)
let nombre = process.env.NOMBRE;
// Variables de entorno por defecto suelen ir en mayusculas. 

console.log(`Hola ${nombre}`);

// En consola debo escribir: NOMBRE=Daniel node entorno.js

// También puedo usar usar un valor por defecto usando "or"(||)

let apellido = process.env.APELLIDO || 'Sin apellido';
console.log(`Hola ${nombre} ${apellido}`);
// Muestra en consola así: NOMBRE=Daniel APELLIDO=Tejada node entorno.js 
 

