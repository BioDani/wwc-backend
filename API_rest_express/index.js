const express = require("express"); // importo express
const routerApi = require('./routes');


const app = express(); // creo aplicacion
const PORT = 3000; //puerto donde quiero que corra

app.use(express.json()); // Uso de un middleware para recibir datos json

app.get('/', async(req, res) =>{ // request & response
  await res.send("Server is running");
});

routerApi(app);

app.listen(PORT, () =>{
  console.log(`Server corriendo en el puerto ${PORT}`);
}); // Le indico a la app en que puerto debe escuchar.
