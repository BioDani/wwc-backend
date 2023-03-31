const http = require('http');

// 1. Crear servidor:
// Una petición viene de un cliente hacía un servidor, cliente manda la petición  
http.createServer(function(req, res){ // request y response
    console.log(`Nueva petición`);
    console.log(req.url);
    res.write(`Ya  tengo un nuevo servidor corrriendo.`);

    res.end();// termino la petición (response)
}).listen(3000);

// 2. Necito que escuche en algún puerto: 3000, 3001, 3002... son los más comunes. 

