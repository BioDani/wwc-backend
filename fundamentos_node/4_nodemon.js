//Demonio: Es un proceso que observa cambios, compila y ejecuta código. Este proceso se  encuentra ejecutandose frecuentemente; por lo que garantiza no tener que ejecutar cada vez el codigo en la linea de comandos.

// Nodemon: se usa en desarrollo; y PM2: se usa en producción. 

// La primera vez requerimos: npm install -g nodemon
/* Puede llegar a ser necesario intalarlo de manera global, así:
sudo npm install -g nodemon
*/
console.log(`Je suis Daniel`);

// Finalmente, solo es necesario usar: nodemon 4_nodemon.js 

// Para ambientes tenemos una opción más avanzada llamada PM2, ojo, es muy complicado para ambientes de desarrollo. Más problemas que soluciones. 

