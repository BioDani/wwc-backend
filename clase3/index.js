const express = require("express");  // importar express
const PORT = 3000; // definición del puerto
const app = express(); // acá definiremos las rutas

app.get("/", () => {
    resizeBy.send(`esta es mi primera app en express`);
});

app.listen(PORT, () => {
    console.log(`Escuchando en el http://localhost:${PORT}`);
});
